import { query, update, text, Record, StableBTreeMap, Variant, Vec, None, Some, Ok, Err, ic, Principal, Opt, nat64, Duration, Result, bool, Canister } from "azle";
import {
    Ledger, binaryAddressFromAddress, binaryAddressFromPrincipal, hexAddressFromPrincipal
} from "azle/canisters/ledger";
import { id } from "azle/src/lib/ic/id";
//@ts-ignore
import { hashCode } from "hashcode";
import { v4 as uuidv4 } from "uuid";

/**
 * This type represents a product that can be listed on a marketplace.
 * It contains basic properties that are needed to define a product.
 */
const ClientCompany = Record({
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
    category : text, // This will be categorized default as Client
    affiliatedCompanies: Vec(text),
    products: Vec(text),  
});

const MaintainanceRecord = Record({
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

const Driver = Record({
    id: text,
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
const SupplyCompany = Record({
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
    category : text, // This will be categorized default as Supplier
    drivers: Vec(Driver), // This will be a list of drivers id    
});


const OrderDetails = Record({
    id: text,
    companyId: text, // This is the id of the company that is placing the order
    orderName: text,
    pickup: text, // This is the pickup Date and Time
    delivery: text, // This is the delivery Date and Time
    pickupAddress: text,
    deliveryAddress: text,
    orderStatus: text, // This is the status of the order
    orderType: text, // This is the type of the order eg(Standard, Express, etc)
    orderWeight: text, // This is the weight of the order
    priority: text, // This is the priority of the order eg(Low, Medium, High)
    vehicleType: text, // This is the type of the vehicle the order requires eg(SUV, Sedan, etc)
    serviceDescription: text, // This is the description of the service
    category : text, // This will be categorized in base of eg(Metal, Food, etc)
    items:Vec(text), // This will be a list of items
});

const Quatation = Record({
    id: text,
    quatationTitle: text,
    quatationNo: text,
    supplierName: text,
    supplierAddress: text,
    supplierEmail: text,
    serviceDescription: text,
    quantity: text, // This is the quantity of the order
    shippingCost: nat64, // This is the total price of the order
    quatationStatus: text, // This is the status of the quatation eg(Accepted, Rejected, etc)
});

const ClientCompanyPayload = Record({
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
    category : text, // This will be categorized default as Client
});

const MaintainanceRecordPayload = Record({
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

const DriverPayload = Record({
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
    driverRating: nat64, // This will be the average rating of the drivers
    driverStatus: text, // This will be the status of the driver eg(Active, Inactive, etc)
});

const SupplyCompanyPayload = Record({
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
    category : text, // This will be categorized default as Supplier
});

const OrderDetailsPayload = Record({
    companyId: text, // This is the id of the company that is placing the order
    orderName: text,
    pickup: text, // This is the pickup Date and Time
    delivery: text, // This is the delivery Date and Time
    pickupAddress: text,
    deliveryAddress: text,
    orderStatus: text, // This is the status of the order
    orderType: text, // This is the type of the order eg(Standard, Express, etc)
    orderWeight: text, // This is the weight of the order
    priority: text, // This is the priority of the order eg(Low, Medium, High)
    vehicleType: text, // This is the type of the vehicle the order requires eg(SUV, Sedan, etc)
    serviceDescription: text, // This is the description of the service
    category : text, // This will be categorized in base of eg(Metal, Food, etc)
});

const QuatationPayload = Record({
    quatationTitle: text,
    quatationNo: text,
    supplierName: text,
    supplierAddress: text,
    supplierEmail: text,
    serviceDescription: text,
    quantity: text, // This is the quantity of the order
    shippingCost: nat64, // This is the total price of the order
    quatationStatus: text, // This is the status of the quatation eg(Accepted, Rejected, etc)
});


const Message = Variant({
    NotFound: text,
    InvalidPayload: text,
    PaymentFailed: text,
    PaymentCompleted: text
});

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
const clientsCompanyStorage = StableBTreeMap(0, text, ClientCompany);
const supplyCompanyStorage = StableBTreeMap(1, text, SupplyCompany);
const orderDetailsStorage = StableBTreeMap(2, text, OrderDetails);
const quatationStorage = StableBTreeMap(3, text, Quatation);
const maintainanceRecordStorage = StableBTreeMap(4, text, MaintainanceRecord);
const driverStorage = StableBTreeMap(5, text, Driver);


const ORDER_RESERVATION_PERIOD = 120n; // reservation period in seconds

/* 
    initialization of the Ledger canister. The principal text value is hardcoded because 
    we set it in the `dfx.json`
*/
const icpCanister = Ledger(Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"));

export default Canister({
   


});


// a workaround to make uuid package work with Azle
globalThis.crypto = {
    // @ts-ignore
    getRandomValues: () => {
        let array = new Uint8Array(32);

        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256);
        }

        return array;
    }
};


