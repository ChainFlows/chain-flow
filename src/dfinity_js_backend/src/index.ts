import {
  query,
  update,
  text,
  StableBTreeMap,
  Variant,
  Vec,
  None,
  Some,
  Ok,
  Err,
  ic,
  Principal,
  nat64,
  Duration,
  Result,
  bool,
  Canister,
} from "azle";
import {
  Ledger,
  binaryAddressFromAddress,
  binaryAddressFromPrincipal,
  hexAddressFromPrincipal,
} from "azle/canisters/ledger";
//@ts-ignore
import { hashCode } from "hashcode";
import { v4 as uuidv4 } from "uuid";
import * as Types from "./types";

/**
 * `productsStorage` - it's a key-value datastructure that is used to store products by sellers.
 * {@link StableBTreeMap} is a self-balancing tree that acts as a durable data storage that keeps data across canister upgrades.
 * For the sake of this contract we've chosen {@link StableBTreeMap} as a storage for the next reasons:
 * - `insert`, `get` and `remove` operations have a constant time complexity - O(1)
 * - data stored in the map survives canister upgrades unlike using HashMap where data is stored in the heap and it's lost after the canister is upgraded
 *
 * Brakedown of the `StableBTreeMap(text, Product)` datastructure:
 * - the key of map is a `productId`
 * - the value in this map is a product itself `Product` that is related to a given key (`productId`)
 *
 * Constructor values:
 * 1) 0 - memory id where to initialize a map
 * 2) 16 - it's a max size of the key in bytes.
 * 3) 1024 - it's a max size of the value in bytes.
 * 2 and 3 are not being used directly in the constructor but the Azle compiler utilizes these values during compile time
 */
const clientsCompanyStorage = StableBTreeMap(0, text, Types.ClientCompany);
const supplyCompanyStorage = StableBTreeMap(1, text, Types.SupplyCompany);
const orderDetailsStorage = StableBTreeMap(2, text, Types.OrderDetails);
const quotationStorage = StableBTreeMap(3, text, Types.Quotation);
const maintainanceRecordStorage = StableBTreeMap(
  4,
  text,
  Types.MaintainanceRecord
);
const driverStorage = StableBTreeMap(5, text, Types.Driver);
const pendingReserves = StableBTreeMap(6, nat64, Types.ReservePayment);
const persistedReserves = StableBTreeMap(7, Principal, Types.ReservePayment);
const pendingDriverReserves = StableBTreeMap(
  8,
  nat64,
  Types.ReserveDriverPayment
);
const persistedDriverReserves = StableBTreeMap(
  9,
  Principal,
  Types.ReserveDriverPayment
);

const PAYMENT_RESERVATION_PERIOD = 120n; // reservation period in seconds

/* 
    initialization of the Ledger canister. The principal text value is hardcoded because 
    we set it in the `dfx.json`
*/
const icpCanister = Ledger(Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"));

export default Canister({
  // function to create client company using ClientCompanyPayload
  createClientCompany: update(
    [Types.ClientCompanyPayload],
    Result(Types.ClientCompany, Types.Message),
    (payload) => {
      // Check if the payload is a valid object
      if (typeof payload !== "object" || Object.keys(payload).length === 0) {
        return Err({ NotFound: "invalid payload" });
      }
      // Create an event with a unique id generated using UUID v4
      const clientCompany = {
        id: uuidv4(),
        owner: ic.caller(),
        affiliatedCompanies: [],
        products: [],
        ...payload,
      };
      // Insert the event into the eventsStorage
      clientsCompanyStorage.insert(clientCompany.id, clientCompany);
      return Ok(clientCompany);
    }
  ),

  // function to add affiliated company to client company
  addAffiliatedCompany: update(
    [text, text],
    Result(Types.ClientCompany, Types.Message),
    (clientId, companyName) => {
      const clientCompanyOpt = clientsCompanyStorage.get(clientId);
      if ("None" in clientCompanyOpt) {
        return Err({
          NotFound: `client company with id=${clientId} not found`,
        });
      }
      const clientCompany = clientCompanyOpt.Some;
      clientCompany.affiliatedCompanies.push(companyName);
      clientsCompanyStorage.insert(clientCompany.id, clientCompany);
      return Ok(clientCompany);
    }
  ),

  // function to add product to client company
  addProduct: update(
    [text, text],
    Result(Types.ClientCompany, Types.Message),
    (clientId, productName) => {
      const clientCompanyOpt = clientsCompanyStorage.get(clientId);
      if ("None" in clientCompanyOpt) {
        return Err({
          NotFound: `client company with id=${clientId} not found`,
        });
      }
      const clientCompany = clientCompanyOpt.Some;
      clientCompany.products.push(productName);
      clientsCompanyStorage.insert(clientCompany.id, clientCompany);
      return Ok(clientCompany);
    }
  ),

  //   get all client companies
  getAllClientCompanies: query([], Vec(Types.ClientCompany), () => {
    return clientsCompanyStorage.values();
  }),

  // function to get client company by id
  getClientCompany: query(
    [text],
    Result(Types.ClientCompany, Types.Message),
    (id) => {
      const clientCompanyOpt = clientsCompanyStorage.get(id);
      if ("None" in clientCompanyOpt) {
        return Err({ NotFound: `client company with id=${id} not found` });
      }
      return Ok(clientCompanyOpt.Some);
    }
  ),

  // get client company by owner using filter
  getClientCompanyByOwner: query(
    [],
    Result(Types.ClientCompany, Types.Message),
    () => {
      const clientCompanyOpt = clientsCompanyStorage
        .values()
        .filter((clientCompany) => {
          return clientCompany.owner.toText() === ic.caller().toText();
        });
      if (clientCompanyOpt.length === 0) {
        return Err({
          NotFound: `client company with owner=${ic.caller()} not found`,
        });
      }
      return Ok(clientCompanyOpt[0]);
    }
  ),

  // get client company orders. they have status of  not "completed"
  getClientCompanyActiveOrders: query(
    [text],
    Vec(Types.OrderDetails),
    (companyId) => {
      const orders = orderDetailsStorage.values();
      const orderslist = orders.filter(
        (order) =>
          order.companyId === companyId &&
          order.supplierId.Some &&
          order.orderStatus !== "completed"
      );

      return orderslist;
    }
  ),

  // get client company completed orders
  getClientCompanyCompletedOrders: query(
    [text],
    Vec(Types.OrderDetails),
    (companyId) => {
      const orders = orderDetailsStorage.values();
      return orders.filter(
        (order) =>
          order.companyId === companyId && order.orderStatus === "completed"
      );
    }
  ),

  //   search for client company new orders where supplier is not assigned
  getClientCompanyNewOrders: query(
    [text],
    Vec(Types.OrderDetails),
    (companyId) => {
      const orders = orderDetailsStorage.values();
      return orders.filter(
        (order) =>
          order.companyId === companyId && order.supplierId.None === null
      );
    }
  ),

  // search for client company by name or business type
  searchClientCompany: query([text], Vec(Types.ClientCompany), (search) => {
    const clientCompanies = clientsCompanyStorage.values();
    return clientCompanies.filter(
      (clientCompany) =>
        clientCompany.name.toLowerCase() === search.toLowerCase() ||
        clientCompany.bussinessType.toLowerCase() === search.toLowerCase()
    );
  }),

  //   update client company
  updateClientCompany: update(
    [text, Types.ClientCompanyPayload],
    Result(Types.ClientCompany, Types.Message),
    (id, payload) => {
      const clientCompanyOpt = clientsCompanyStorage.get(id);
      if ("None" in clientCompanyOpt) {
        return Err({ NotFound: `client company with id=${id} not found` });
      }
      const clientCompany = clientCompanyOpt.Some;
      const updatedClientCompany = {
        ...clientCompany,
        ...payload,
      };
      clientsCompanyStorage.insert(clientCompany.id, updatedClientCompany);
      return Ok(updatedClientCompany);
    }
  ),

  // function to create supply company using SupplyCompanyPayload
  createSupplyCompany: update(
    [Types.SupplyCompanyPayload],
    Result(Types.SupplyCompany, Types.Message),
    (payload) => {
      // Check if the payload is a valid object
      if (typeof payload !== "object" || Object.keys(payload).length === 0) {
        return Err({ NotFound: "invalid payload" });
      }
      // Create an event with a unique id generated using UUID v4
      const supplyCompany = {
        id: uuidv4(),
        owner: ic.caller(),
        drivers: [],
        reviews: [],
        ...payload,
      };
      // Insert the event into the eventsStorage
      supplyCompanyStorage.insert(supplyCompany.id, supplyCompany);
      return Ok(supplyCompany);
    }
  ),

  //   get all supply companies
  getAllSupplyCompanies: query([], Vec(Types.SupplyCompany), () => {
    return supplyCompanyStorage.values();
  }),

  // function to get supply company by id
  getSupplyCompany: query(
    [text],
    Result(Types.SupplyCompany, Types.Message),
    (id) => {
      const supplyCompanyOpt = supplyCompanyStorage.get(id);
      if ("None" in supplyCompanyOpt) {
        return Err({ NotFound: `supply company with id=${id} not found` });
      }
      return Ok(supplyCompanyOpt.Some);
    }
  ),

  // get supply company by owner using filter
  getSupplyCompanyByOwner: query(
    [],
    Result(Types.SupplyCompany, Types.Message),
    () => {
      const supplyCompanyOpt = supplyCompanyStorage
        .values()
        .filter((supplyCompany) => {
          return supplyCompany.owner.toText() === ic.caller().toText();
        });
      if (supplyCompanyOpt.length === 0) {
        return Err({
          NotFound: `supply company with owner=${ic.caller()} not found`,
        });
      }
      return Ok(supplyCompanyOpt[0]);
    }
  ),

  // get completed orders by supply company
  getSupplyCompanyCompletedOrders: query(
    [text],
    Vec(Types.OrderDetails),
    (companyId) => {
      const orders = orderDetailsStorage.values();
      return orders.filter(
        (order) =>
          order.supplierId.Some === companyId &&
          order.orderStatus === "completed"
      );
    }
  ),

  // get supply company orders. they have status of  not "completed"
  getSupplyCompanyActiveOrders: query(
    [text],
    Vec(Types.OrderDetails),
    (companyId) => {
      const orders = orderDetailsStorage.values();
      const orderslist = orders.filter(
        (order) =>
          order.supplierId.Some === companyId &&
          order.driverId.Some &&
          order.orderStatus !== "completed"
      );

      return orderslist;
    }
  ),

  // function to get supply company orders that have not assigned driver
  getSupplyCompanyNewOrders: query(
    [text],
    Vec(Types.OrderDetails),
    (companyId) => {
      const orders = orderDetailsStorage.values();
      return orders.filter(
        (order) =>
          order.supplierId.Some === companyId && order.driverId.None === null
      );
    }
  ),
  // function to get new order listings
  getNewOrders: query([], Vec(Types.OrderDetails), () => {
    const orders = orderDetailsStorage.values();
    return orders.filter((order) => order.supplierId.None === null);
  }),

  //   search for supply company by name or business type
  searchSupplyCompany: query([text], Vec(Types.SupplyCompany), (search) => {
    const supplyCompanies = supplyCompanyStorage.values();
    return supplyCompanies.filter(
      (supplyCompany) =>
        supplyCompany.name.toLowerCase() === search.toLowerCase() ||
        supplyCompany.bussinessType.toLowerCase() === search.toLowerCase()
    );
  }),

  // update supply company
  updateSupplyCompany: update(
    [text, Types.SupplyCompanyPayload],
    Result(Types.SupplyCompany, Types.Message),
    (id, payload) => {
      const supplyCompanyOpt = supplyCompanyStorage.get(id);
      if ("None" in supplyCompanyOpt) {
        return Err({ NotFound: `supply company with id=${id} not found` });
      }
      const supplyCompany = supplyCompanyOpt.Some;
      const updatedSupplyCompany = {
        ...supplyCompany,
        ...payload,
      };
      supplyCompanyStorage.insert(supplyCompany.id, updatedSupplyCompany);
      return Ok(updatedSupplyCompany);
    }
  ),

  // function to add driver to supply company
  addDriver: update(
    [text, text],
    Result(Types.SupplyCompany, Types.Message),
    (companyId, driverId) => {
      const supplyCompanyOpt = supplyCompanyStorage.get(companyId);
      if ("None" in supplyCompanyOpt) {
        return Err({
          NotFound: `supply company with id=${companyId} not found`,
        });
      }
      const supplyCompany = supplyCompanyOpt.Some;
      supplyCompany.drivers.push(driverId);
      supplyCompanyStorage.insert(supplyCompany.id, supplyCompany);
      return Ok(supplyCompany);
    }
  ),

  // function to create order details using OrderDetailsPayload
  createOrderDetails: update(
    [Types.OrderDetailsPayload],
    Result(Types.OrderDetails, Types.Message),
    (payload) => {
      // get client
      const clientCompanyOpt = clientsCompanyStorage.get(payload.companyId);
      const client = clientCompanyOpt.Some;
      // Check if the payload is a valid object
      if (typeof payload !== "object" || Object.keys(payload).length === 0) {
        return Err({ NotFound: "invalid payload" });
      }
      // Create an event with a unique id generated using UUID v4
      const orderDetails = {
        id: uuidv4(),
        delivery: None,
        driverId: None,
        supplierId: None,
        orderStatus: "pending",
        companyName: client.name,
        items: [],
        ...payload,
      };
      // Insert the event into the eventsStorage
      orderDetailsStorage.insert(orderDetails.id, orderDetails);
      return Ok(orderDetails);
    }
  ),

  // function to add item to order details
  addItem: update(
    [text, text],
    Result(Types.OrderDetails, Types.Message),
    (orderId, item) => {
      const orderDetailsOpt = orderDetailsStorage.get(orderId);
      if ("None" in orderDetailsOpt) {
        return Err({ NotFound: `order details with id=${orderId} not found` });
      }
      const orderDetails = orderDetailsOpt.Some;
      orderDetails.items.push(item);
      orderDetailsStorage.insert(orderDetails.id, orderDetails);
      return Ok(orderDetails);
    }
  ),

  // assign supplier
  assignSupplier: update(
    [text, text],
    Result(Types.OrderDetails, Types.Message),
    (orderId, supplierId) => {
      const orderDetailsOpt = orderDetailsStorage.get(orderId);
      if ("None" in orderDetailsOpt) {
        return Err({ NotFound: `order details with id=${orderId} not found` });
      }
      const orderDetails = orderDetailsOpt.Some;
      orderDetails.supplierId = Some(supplierId);
      // change Quataion status
      const quotations = quotationStorage.values();
      const quotation = quotations.find(
        (quotation) =>
          quotation.orderId === orderId && quotation.supplierId === supplierId
      );
      if (quotation) {
        quotation.quotationStatus = "approved";
        quotationStorage.insert(quotation.id, quotation);
      }

      orderDetailsStorage.insert(orderDetails.id, orderDetails);
      return Ok(orderDetails);
    }
  ),

  //   assign driver to order
  assignDriver: update(
    [text, text],
    Result(Types.OrderDetails, Types.Message),
    (orderId, driverId) => {
      const orderDetailsOpt = orderDetailsStorage.get(orderId);
      if ("None" in orderDetailsOpt) {
        return Err({ NotFound: `order details with id=${orderId} not found` });
      }
      const orderDetails = orderDetailsOpt.Some;
      orderDetails.driverId = Some(driverId);
      orderDetails.orderStatus = "assigned";
      // change driver status
      const driverOpt = driverStorage.get(driverId);
      if ("None" in driverOpt) {
        return Err({ NotFound: `driver with id=${driverId} not found` });
      }
      const driver = driverOpt.Some;
      driver.driverStatus = "busy";
      driverStorage.insert(driver.id, driver);
      orderDetailsStorage.insert(orderDetails.id, orderDetails);
      return Ok(orderDetails);
    }
  ),

  //   get all order details
  getAllOrderDetails: query([], Vec(Types.OrderDetails), () => {
    return orderDetailsStorage.values();
  }),

  // function to get order details by id
  getOrderDetails: query(
    [text],
    Result(Types.OrderDetails, Types.Message),
    (id) => {
      const orderDetailsOpt = orderDetailsStorage.get(id);
      if ("None" in orderDetailsOpt) {
        return Err({ NotFound: `order details with id=${id} not found` });
      }
      return Ok(orderDetailsOpt.Some);
    }
  ),

  // update order status
  updateOrderStatus: update(
    [text, text],
    Result(Types.OrderDetails, Types.Message),
    (orderId, status) => {
      console.log(orderId, status);
      const orderDetailsOpt = orderDetailsStorage.get(orderId);
      console.log(orderDetailsOpt, "det opt");
      if ("None" in orderDetailsOpt) {
        return Err({ NotFound: `order details with id=${orderId} not found` });
      }
      const orderDetails = orderDetailsOpt.Some;
      orderDetails.orderStatus = status;
      status === "completed" &&
        (orderDetails.delivery = new Date().toISOString());
      console.log(orderDetails);
      orderDetailsStorage.insert(orderDetails.id, orderDetails);
      return Ok(orderDetails);
    }
  ),

  // mark order as Completed and develop driver ratings
  markOrderAsCompleted: update(
    [Types.CompletionPayload],
    Result(Types.OrderDetails, Types.Message),
    (payload) => {
      const orderDetailsOpt = orderDetailsStorage.get(payload.id);
      if ("None" in orderDetailsOpt) {
        return Err({
          NotFound: `order details with id=${payload.id} not found`,
        });
      }
      const orderDetails = orderDetailsOpt.Some;
      const supplierOpt = supplyCompanyStorage.get(orderDetails.supplierId);

      // update driver ratings
      generateDriverRating(
        orderDetails.driverId,
        orderDetails.expectedDelivery,
        payload.condition
      );

      // add review to supplier
      if ("Some" in supplierOpt) {
        const supplier = supplierOpt.Some;
        supplier.reviews.push(payload.review);
        supplyCompanyStorage.insert(supplier.id, supplier);
      }

      orderDetails.orderStatus = "completed";
      orderDetails.delivery = new Date().toISOString();
      orderDetailsStorage.insert(orderDetails.id, orderDetails);
      return Ok(orderDetails);
    }
  ),

  //   search for order by catergory
  searchOrderByCategory: query([text], Vec(Types.OrderDetails), (category) => {
    const search = category.toLowerCase();
    const orderDetails = orderDetailsStorage.values();

    return orderDetails.filter(
      (order) => order.category.toLowerCase() === search
    );
  }),

  // function to create quotation using QuotationPayload getting supplier details of supplier company and order details
  createQuotation: update(
    [Types.QuotationPayload],
    Result(Types.Quotation, Types.Message),
    (payload) => {
      // Check if the payload is a valid object
      if (typeof payload !== "object" || Object.keys(payload).length === 0) {
        return Err({ NotFound: "invalid payload" });
      }

      // get the supplier details of supplier company
      const supplierOpt = supplyCompanyStorage.get(payload.supplierId);
      if ("None" in supplierOpt) {
        return Err({
          NotFound: `supplier with id=${payload.supplierId} not found`,
        });
      }
      const supplier = supplierOpt.Some;

      // Create an event with a unique id generated using UUID v4
      const quotation = {
        id: uuidv4(),
        supplierName: supplier.name,
        supplierAddress: supplier.address,
        supplierEmail: supplier.email,
        quotationStatus: "pending",
        ...payload,
      };

      // Insert the event into the eventsStorage
      quotationStorage.insert(quotation.id, quotation);
      return Ok(quotation);
    }
  ),

  //   get all quotations
  getAllQuotations: query([], Vec(Types.Quotation), () => {
    return quotationStorage.values();
  }),

  // function to get quotation by id
  getQuotation: query([text], Result(Types.Quotation, Types.Message), (id) => {
    const quotationOpt = quotationStorage.get(id);
    if ("None" in quotationOpt) {
      return Err({ NotFound: `quotation with id=${id} not found` });
    }
    return Ok(quotationOpt.Some);
  }),

  // sort quotations by company Name in order details  using company Id
  sortQuotationsByCompanyName: query(
    [text],
    Vec(Types.Quotation),
    (companyId) => {
      const quotations = quotationStorage.values();
      return quotations.filter(
        (quotation) => quotation.companyId === companyId
      );
    }
  ),

  // get all order quotations using order id
  getOrderQuotations: query([text], Vec(Types.Quotation), (orderId) => {
    const quotations = quotationStorage.values();
    return quotations.filter((quotation) => quotation.orderId === orderId);
  }),

  //  update quotation status
  updateQuotationStatus: update(
    [text, text],
    Result(Types.Quotation, Types.Message),
    (quotationId, status) => {
      const quotationOpt = quotationStorage.get(quotationId);
      if ("None" in quotationOpt) {
        return Err({ NotFound: `quotation with id=${quotationId} not found` });
      }
      const quotation = quotationOpt.Some;
      quotation.quotationStatus = status;
      quotationStorage.insert(quotation.id, quotation);
      return Ok(quotation);
    }
  ),

  // function to create driver using DriverPayload
  createDriver: update(
    [Types.DriverPayload],
    Result(Types.Driver, Types.Message),
    (payload) => {
      // Check if the payload is a valid object
      // if (typeof payload !== "object" || Object.keys(payload).length === 0) {
      //   return Err({ NotFound: "invalid payload" });
      // }
      // Create an event with a unique id generated using UUID v4
      const driver = {
        id: uuidv4(),
        owner: ic.caller(),
        maintainanceRecords: [],
        trainings: [],
        driverRating: 0n,
        driverStatus: "active",
        ...payload,
      };
      // Insert the event into the eventsStorage
      driverStorage.insert(driver.id, driver);
      return Ok(driver);
    }
  ),

  // function to get driver with the same owner as ic.caller()
  getDriverByOwner: query([], Result(Types.Driver, Types.Message), () => {
    const driverOpt = driverStorage
      .values()
      .find((driver) => driver.owner.toText() === ic.caller().toText());
    if (!driverOpt) {
      return Err({ NotFound: `driver with owner=${ic.caller()} not found` });
    }
    return Ok(driverOpt);
  }),

  // function to get driver with the same owner as ic.caller() using filter
  getDriverByOwnerFilter: query([], Result(Types.Driver, Types.Message), () => {
    const driverOpt = driverStorage.values().filter((driver) => {
      return driver.owner.toText() === ic.caller().toText();
    });
    if (driverOpt.length === 0) {
      return Err({ NotFound: `driver with owner=${ic.caller()} not found` });
    }
    return Ok(driverOpt[0]);
  }),

  getAddressFromPrincipal: query([Principal], text, (principal) => {
    return hexAddressFromPrincipal(principal, 0);
  }),

  // function to add trainings to driver
  addTraining: update(
    [text, text],
    Result(Types.Driver, Types.Message),
    (driverId, training) => {
      const driverOpt = driverStorage.get(driverId);
      if ("None" in driverOpt) {
        return Err({ NotFound: `driver with id=${driverId} not found` });
      }
      const driver = driverOpt.Some;
      driver.trainings.push(training);
      driverStorage.insert(driver.id, driver);
      return Ok(driver);
    }
  ),

  //   update driver status
  updateDriverStatus: update(
    [text, text],
    Result(Types.Driver, Types.Message),
    (driverId, status) => {
      const driverOpt = driverStorage.get(driverId);
      if ("None" in driverOpt) {
        return Err({ NotFound: `driver with id=${driverId} not found` });
      }
      const driver = driverOpt.Some;
      driver.driverStatus = status;
      driverStorage.insert(driver.id, driver);
      return Ok(driver);
    }
  ),

  //   get all drivers
  getAllDrivers: query([], Vec(Types.Driver), () => {
    return driverStorage.values();
  }),

  // function to get driver by id
  getDriver: query([text], Result(Types.Driver, Types.Message), (id) => {
    const driverOpt = driverStorage.get(id);
    if ("None" in driverOpt) {
      return Err({ NotFound: `driver with id=${id} not found` });
    }
    return Ok(driverOpt.Some);
  }),

  // search for driver by name
  searchDriverByName: query([text], Vec(Types.Driver), (name) => {
    const search = name.toLowerCase();
    const drivers = driverStorage.values();

    return drivers.filter((driver) => driver.fullName.toLowerCase() === search);
  }),

  // sort drives by rating
  sortDriversByRating: query([], Vec(Types.Driver), () => {
    const drivers = driverStorage.values();
    return drivers.sort((a, b) => b.driverRating - a.driverRating);
  }),

  //  update driver
  updateDriver: update(
    [Types.UpdateDriverPayload],
    Result(Types.Driver, Types.Message),
    (payload) => {
      const driverOpt = driverStorage.get(payload.id);
      if ("None" in driverOpt) {
        return Err({ NotFound: `driver with id=${payload.id} not found` });
      }
      const driver = driverOpt.Some;
      const updatedDriver = {
        ...driver,
        ...payload,
      };
      driverStorage.insert(driver.id, updatedDriver);
      return Ok(updatedDriver);
    }
  ),

  // function to create maintainance record using MaintainanceRecordPayload
  createMaintainanceRecord: update(
    [text, Types.MaintainanceRecordPayload],
    Result(Types.MaintainanceRecord, Types.Message),
    (driverId, payload) => {
      // Check if the payload is a valid object
      if (typeof payload !== "object" || Object.keys(payload).length === 0) {
        return Err({ NotFound: "invalid payload" });
      }
      //   create maintenance record with a unique id generated using UUID v4
      const maintainanceRecord = {
        id: uuidv4(),
        ...payload,
      };
      // Insert the event into the eventsStorage
      maintainanceRecordStorage.insert(
        maintainanceRecord.id,
        maintainanceRecord
      );

      // get the driver details
      const driverOpt = driverStorage.get(driverId);
      if ("None" in driverOpt) {
        Vec(Types.OrderDetails);
        return Err({ NotFound: `driver with id=${driverId} not found` });
      }
      const driver = driverOpt.Some;
      driver.maintainanceRecords.push(maintainanceRecord);
      driverStorage.insert(driver.id, driver);
      return Ok(maintainanceRecord);
    }
  ),

  //   get all maintainance records
  getAllMaintainanceRecords: query([], Vec(Types.MaintainanceRecord), () => {
    return maintainanceRecordStorage.values();
  }),

  // function to get maintainance record by id
  getMaintainanceRecord: query(
    [text],
    Result(Types.MaintainanceRecord, Types.Message),
    (id) => {
      const maintainanceRecordOpt = maintainanceRecordStorage.get(id);
      if ("None" in maintainanceRecordOpt) {
        return Err({ NotFound: `maintainance record with id=${id} not found` });
      }
      return Ok(maintainanceRecordOpt.Some);
    }
  ),

  // get driver orders. they have status of  not "completed"
  getDriverActiveOrder: query(
    [text],
    Result(Types.OrderDetails, Types.Message),
    (driverId) => {
      const orders = orderDetailsStorage.values();
      const orderslist = orders.filter(
        (order) =>
          order.driverId.Some === driverId && order.orderStatus !== "completed"
      );

      if (orderslist.length === 0) {
        return Err({
          NotFound: `driver with id=${driverId} has no active orders`,
        });
      }

      return Ok(orderslist[0]);
    }
  ),

  // get driver completed orders. they have status of "completed"
  getDriverCompletedOrders: query(
    [text],
    Vec(Types.OrderDetails),
    (driverId) => {
      const orders = orderDetailsStorage.values();
      return orders.filter(
        (order) =>
          order.driverId.Some === driverId && order.orderStatus === "completed"
      );
    }
  ),

  // get driver maintenance records
  getDriverMaintainanceRecords: query(
    [text],
    Vec(Types.MaintainanceRecord),
    (driverId) => {
      const driverOpt = driverStorage.get(driverId);
      if ("None" in driverOpt) {
        return Err({ NotFound: `driver with id=${driverId} not found` });
      }

      // get records with id in driver.maintainanceRecords
      const driver = driverOpt.Some;
      const records = driver.maintainanceRecords;
      return records;
    }
  ),

  // If i have order Id i can access the Supplier Id and then get quatation on it
  // create a Reserve Payment
  createReservePay: update(
    [text],
    Result(Types.ReservePayment, Types.Message),
    (orderId) => {
      const orderOpt = orderDetailsStorage.get(orderId);
      if ("None" in orderOpt) {
        return Err({
          NotFound: `cannot reserve Payment: Order  with id=${orderId} not available`,
        });
      }
      const order = orderOpt.Some;
      const supplierId = order.supplierId.Some;
      console.log("supplierId", supplierId);

      // Get quatation using supplierId and orderId
      const approvedQuatation = quotationStorage.values().find((quotation) => {
        return (
          quotation.supplierId === supplierId &&
          quotation.orderId === orderId &&
          quotation.quotationStatus === "approved"
        );
      });
      console.log("approvedQuatation", approvedQuatation);

      const cost = approvedQuatation.shippingCost;

      // Get the supplier details
      const clientOpt = clientsCompanyStorage.get(order.companyId);
      if ("None" in clientOpt) {
        return Err({
          NotFound: `client company with id=${order.companyId} not found`,
        });
      }
      const client = clientOpt.Some;
      const owner = client.owner;

      const supplierOpt = supplyCompanyStorage.get(supplierId);
      if ("None" in supplierOpt) {
        return Err({ NotFound: `supplier with id=${supplierId} not found` });
      }
      const supplier = supplierOpt.Some;
      const supplierOwner = supplier.owner;

      console.log("cor Id", orderId);
      const reservePayment = {
        SupplierId: order.supplierId.Some,
        price: cost,
        status: "pending",
        clientPayer: owner,
        supplierReceiver: supplierOwner,
        paid_at_block: None,
        memo: generateCorrelationId(orderId),
      };

      console.log("reservePayment", reservePayment);
      pendingReserves.insert(reservePayment.memo, reservePayment);
      discardByTimeout(reservePayment.memo, PAYMENT_RESERVATION_PERIOD);
      return Ok(reservePayment);
    }
  ),

  completePayment: update(
    [Principal, text, nat64, nat64, nat64],
    Result(Types.ReservePayment, Types.Message),
    async (reservor, orderId, reservePrice, block, memo) => {
      const paymentVerified = await verifyPaymentInternal(
        reservor,
        reservePrice,
        block,
        memo
      );
      if (!paymentVerified) {
        return Err({
          NotFound: `cannot complete the reserve: cannot verify the payment, memo=${memo}`,
        });
      }
      const pendingReservePayOpt = pendingReserves.remove(memo);
      if ("None" in pendingReservePayOpt) {
        return Err({
          NotFound: `cannot complete the reserve: there is no pending reserve with id=${orderId}`,
        });
      }
      const reservedPay = pendingReservePayOpt.Some;
      const updatedReservePayment = {
        ...reservedPay,
        status: "completed",
        paid_at_block: Some(block),
      };
      const orderOpt = orderDetailsStorage.get(orderId);
      if ("None" in orderOpt) {
        throw Error(`Book with id=${orderId} not found`);
      }
      const order = orderOpt.Some;
      orderDetailsStorage.insert(order.id, order);
      persistedReserves.insert(ic.caller(), updatedReservePayment);
      return Ok(updatedReservePayment);
    }
  ),

  // create a Driver Reserve Payment
  createReserveDriverPay: update(
    [text, nat64],
    Result(Types.ReserveDriverPayment, Types.Message),
    (orderId, amount) => {
      const orderOpt = orderDetailsStorage.get(orderId);
      if ("None" in orderOpt) {
        return Err({
          NotFound: `cannot reserve Payment: Order  with id=${orderId} not available`,
        });
      }
      const order = orderOpt.Some;
      const supplierId = order.supplierId.Some;
      const driverId = order.driverId.Some;
      console.log("supplierId", supplierId);

      const driverOpt = driverStorage.get(driverId);
      if ("None" in driverOpt) {
        return Err({
          NotFound: `Driver  with id=${driverId} not found`,
        });
      }

      const driver = driverOpt.Some;
      const driverOwner = driver.owner;

      console.log("driverId", driverId);

      const cost = amount;

      const supplierOpt = supplyCompanyStorage.get(supplierId);
      if ("None" in supplierOpt) {
        return Err({ NotFound: `supplier with id=${supplierId} not found` });
      }
      const supplier = supplierOpt.Some;
      const supplierOwner = supplier.owner;

      console.log("cor Id", orderId);
      const reserveDriverPayment = {
        SupplierId: order.supplierId.Some,
        price: cost,
        status: "pending",
        supplierPayer: supplierOwner,
        driverReciever: driverOwner,
        paid_at_block: None,
        memo: generateCorrelationId(orderId),
      };

      console.log("reserveDriverPayment", reserveDriverPayment);
      pendingDriverReserves.insert(
        reserveDriverPayment.memo,
        reserveDriverPayment
      );
      discardByTimeout(reserveDriverPayment.memo, PAYMENT_RESERVATION_PERIOD);
      return Ok(reserveDriverPayment);
    }
  ),

  completeDriverPayment: update(
    [Principal, text, nat64, nat64, nat64],
    Result(Types.ReserveDriverPayment, Types.Message),
    async (reservor, orderId, reservePrice, block, memo) => {
      const paymentVerified = await verifyPaymentInternal(
        reservor,
        reservePrice,
        block,
        memo
      );
      if (!paymentVerified) {
        return Err({
          NotFound: `cannot complete the reserve: cannot verify the payment, memo=${memo}`,
        });
      }
      const pendingReservePayOpt = pendingDriverReserves.remove(memo);
      if ("None" in pendingReservePayOpt) {
        return Err({
          NotFound: `cannot complete the reserve: there is no pending reserve with id=${orderId}`,
        });
      }
      const reservedPay = pendingReservePayOpt.Some;
      const updatedReservePayment = {
        ...reservedPay,
        status: "completed",
        paid_at_block: Some(block),
      };
      const orderOpt = orderDetailsStorage.get(orderId);
      if ("None" in orderOpt) {
        throw Error(`Book with id=${orderId} not found`);
      }
      const order = orderOpt.Some;
      orderDetailsStorage.insert(order.id, order);
      persistedDriverReserves.insert(ic.caller(), updatedReservePayment);
      return Ok(updatedReservePayment);
    }
  ),

  verifyPayment: query(
    [Principal, nat64, nat64, nat64],
    bool,
    async (receiver, amount, block, memo) => {
      return await verifyPaymentInternal(receiver, amount, block, memo);
    }
  ),
});

function generateDriverRating(
  driverId: text,
  expectedDelivery: text,
  conditionTxt: text
) {
  const driverOpt = driverStorage.get(driverId);
  if ("None" in driverOpt) {
    return Err({ NotFound: `driver with id=${driverId} not found` });
  }

  const condition = conditionTxt.toLowerCase();
  const driver = driverOpt.Some;
  let rating = driver.trainings.length;
  let conditionPoints = 0;
  // assing points to the driver based on the condition of the vehicle, the points will be used to calculate the rating
  if (condition === "perfect") {
    conditionPoints = 10;
  } else if (condition === "good") {
    conditionPoints = 6;
  } else if (condition === "average") {
    conditionPoints = 3;
  } else if (condition === "bad") {
    conditionPoints = 1;
  }

  const dateRatingPoints = dateRating(
    expectedDelivery,
    new Date().toISOString()
  );

  driver.driverRating = rating + conditionPoints + dateRatingPoints;
  driverStorage.insert(driver.id, driver);
  return Ok(driver);
}

function dateRating(expected: text, deliveryDate: text) {
  const expectedObj = expected.slice(0, 10);
  const deliveryDateObj = deliveryDate.slice(0, 10);
  if (expectedObj < deliveryDateObj) {
    return 10;
  } else {
    return -10;
  }
}

/*
    a hash function that is used to generate correlation ids for orders.
    also, we use that in the verifyPayment function where we check if the used has actually paid the order
*/
function hash(input: any): nat64 {
  return BigInt(Math.abs(hashCode().value(input)));
}

// a workaround to make uuid package work with Azle
globalThis.crypto = {
  // @ts-ignore
  getRandomValues: () => {
    let array = new Uint8Array(32);

    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }

    return array;
  },
};

// HELPER FUNCTIONS
function generateCorrelationId(orderId: text): nat64 {
  const correlationId = `${orderId}_${ic.caller().toText()}_${ic.time()}`;
  return hash(correlationId);
}

function discardByTimeout(memo: nat64, delay: Duration) {
  ic.setTimer(delay, () => {
    const order = pendingReserves.remove(memo);
    console.log(`Reserve discarded ${order}`);
  });
}
async function verifyPaymentInternal(
  receiver: Principal,
  amount: nat64,
  block: nat64,
  memo: nat64
): Promise<bool> {
  const blockData = await ic.call(icpCanister.query_blocks, {
    args: [{ start: block, length: 1n }],
  });
  const tx = blockData.blocks.find((block) => {
    if ("None" in block.transaction.operation) {
      return false;
    }
    const operation = block.transaction.operation.Some;
    const senderAddress = binaryAddressFromPrincipal(ic.caller(), 0);
    const receiverAddress = binaryAddressFromPrincipal(receiver, 0);
    return (
      block.transaction.memo === memo &&
      hash(senderAddress) === hash(operation.Transfer?.from) &&
      hash(receiverAddress) === hash(operation.Transfer?.to) &&
      amount === operation.Transfer?.amount.e8s
    );
  });
  return tx ? true : false;
}
