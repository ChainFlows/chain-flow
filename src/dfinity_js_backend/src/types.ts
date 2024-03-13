import { text, Record, Variant, Vec, Principal, Opt, nat64, bool } from "azle";

/**
 * This type represents a product that can be listed on a chainflow.
 * It contains basic properties that are needed to define a product.
 */
export const ClientCompany = Record({
  id: text,
  name: text,
  bussinessType: text,
  industry: text,
  address: text,
  email: text,
  phone: text,
  website: text,
  owner: Principal,
  ownerName: text,
  regNo: text,
  logo: text,
  affiliatedCompanies: Vec(text),
  products: Vec(text),
});

export const MaintainanceRecord = Record({
  id: text,
  vehicleRegNo: text,
  date: text,
  description: text,
  cost: text,
  mechanic: text,
  mechanicContact: text,
  mechanicAddress: text,
  mechanicEmail: text,
  mechanicPhone: text,
});

export const Driver = Record({
  id: text,
  owner: Principal,
  fullName: text,
  contactInfo: text,
  trainings: Vec(text), // This will be a list of trainings eg(Carrying Hazardous Materials, Defensive Driving, etc)
  experience: text, // This is the Year of Experience as Driver
  licenseNo: text,
  licenseExpiry: text,
  vehicleMake: text, // This is the make of the vehicle the driver drives eg(Toyota, Benz, etc)
  vehicleModel: text, // This is the model of the vehicle the driver drives eg(Camry, Corolla, etc)
  vehicleType: text, // This is the type of the vehicle the driver drives eg(SUV, Sedan, etc)
  vehicleRegNo: text,
  maintainanceRecords: Vec(MaintainanceRecord), // This will be a list of maintainance records
  company: text, // This is the company the driver works for
  driverRating: nat64, // This will be the average rating of the drivers
  driverStatus: text, // This will be the status of the driver eg(Active, Inactive, etc)
});

export const SupplyCompany = Record({
  id: text,
  name: text,
  bussinessType: text,
  address: text,
  email: text,
  phone: text,
  website: text,
  owner: Principal,
  ownerName: text,
  supplyChainype: text, // This will be categorized default as Decentralized
  regNo: text,
  logo: text,
  drivers: Vec(Driver), // This will be a list of drivers id
  reviews: Vec(text), // This will be a list of reviews
});

export const OrderDetails = Record({
  id: text,
  companyId: text, // This is the id of the company that is placing the order
  companyName: text, // This is the name of the company that is placing the order
  orderName: text,
  expectedDelivery: text, // This is the client expected Date and Time
  delivery: Opt(text), // This is the supplier delivery Date and Time
  driverId: Opt(text), // This is the id of the driver that is assigned to the order
  supplierId: Opt(text), // This is the id of the supplier that is assigned to the order
  pickupAddress: text,
  deliveryAddress: text,
  orderStatus: text, // This is the status of the order
  orderType: text, // This is the type of the order eg(Standard, Express, etc)
  orderWeight: text, // This is the weight of the order
  priority: text, // This is the priority of the order eg(Low, Medium, High)
  vehicleType: text, // This is the type of the vehicle the order requires eg(SUV, Sedan, etc)
  category: text, // This will be categorized in base of eg(Metal, Food, etc)
  items: Vec(text), // This will be a list of items
});

export const Quotation = Record({
  id: text,
  quotationTitle: text,
  supplierId: text,
  orderId: text, // referenced to order details
  supplierName: text,
  supplierAddress: text,
  supplierEmail: text,
  serviceDescription: text, // This is the description of how the order is fulfilled
  shippingCost: nat64, // This is the total price of the order
  quotationStatus: text, // This is the status of the quotation eg(Accepted, Rejected, etc)
});

export const ClientCompanyPayload = Record({
  name: text,
  bussinessType: text,
  industry: text,
  address: text,
  email: text,
  phone: text,
  website: text,
  ownerName: text,
  regNo: text,
  logo: text,
});

export const MaintainanceRecordPayload = Record({
  vehicleRegNo: text,
  date: text,
  description: text,
  cost: text,
  mechanic: text,
  mechanicContact: text,
  mechanicAddress: text,
  mechanicEmail: text,
  mechanicPhone: text,
});

export const DriverPayload = Record({
  fullName: text,
  contactInfo: text,
  experience: text, // This is the Year of Experience as Driver
  licenseNo: text,
  licenseExpiry: text,
  vehicleMake: text, // This is the make of the vehicle the driver drives eg(Toyota, Benz, etc)
  vehicleModel: text, // This is the model of the vehicle the driver drives eg(Camry, Corolla, etc)
  vehicleType: text, // This is the type of the vehicle the driver drives eg(SUV, Sedan, etc)
  vehicleRegNo: text,
  company: text, // This is the company the driver works for
});

export const SupplyCompanyPayload = Record({
  name: text,
  bussinessType: text,
  address: text,
  email: text,
  phone: text,
  website: text,
  ownerName: text,
  supplyChainype: text, // This will be categorized default as Decentralized
  regNo: text,
  logo: text,
});

export const OrderDetailsPayload = Record({
  companyId: text, // This is the id of the company that is placing the order
  orderName: text,
  expectedDelivery: text, // This is the client expected Date and Time
  pickupAddress: text,
  deliveryAddress: text,
  orderType: text, // This is the type of the order eg(Standard, Fragile, etc)
  orderWeight: text, // This is the weight of the order
  priority: text, // This is the priority of the order eg(Low, Medium, High)
  vehicleType: text, // This is the type of the vehicle the order requires eg(SUV, Sedan, etc)
  category: text, // This will be categorized in base of eg(Metal, Food, etc)
});

export const QuotationPayload = Record({
  quotationTitle: text,
  supplierId: text,
  orderId: text, // referenced to order details
  serviceDescription: text, // This is the description of how the order is fulfilled
  shippingCost: nat64, // This is the total price of the order
});

// UpdateDriverPayload
export const UpdateDriverPayload = Record({
  id: text,
  contactInfo: text,
  experience: text, // This is the Year of Experience as Driver
  licenseExpiry: text,
  vehicleMake: text, // This is the make of the vehicle the driver drives eg(Toyota, Benz, etc)
  vehicleModel: text, // This is the model of the vehicle the driver drives eg(Camry, Corolla, etc)
  vehicleType: text, // This is the type of the vehicle the driver drives eg(SUV, Sedan, etc)
  vehicleRegNo: text,
  company: text, // This is the company the driver works for
});

// CompletionPayload
export const CompletionPayload = Record({
  id: text,
  condition: text,
  review: text,
});

export const Message = Variant({
  NotFound: text,
  InvalidPayload: text,
  PaymentFailed: text,
  PaymentCompleted: text,
});

export const PaymentStatus = Variant({
  PaymentPending: text,
  Completed: text,
});

export const ReservePayment = Record({
  SupplierId: text,
  price: nat64,
  status: text,
  clientPayer: Principal,
  supplierReceiver: Principal,
  paid_at_block: Opt(nat64),
  memo: nat64,
});

export const ReserveDriverPayment = Record({
  SupplierId: text,
  price: nat64,
  status: text,
  supplierPayer: Principal,
  driverReciever: Principal,
  paid_at_block: Opt(nat64),
  memo: nat64,
});
