import {  text, Record, Variant, Vec, Principal, Opt, nat64, bool} from "azle";


/**
 * This type represents a product that can be listed on a marketplace.
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
    category : text, // This will be categorized default as Client
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
    category : text, // This will be categorized default as Supplier
    drivers: Vec(Driver), // This will be a list of drivers id    
});


export const OrderDetails = Record({
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

export const Quatation = Record({
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

export const ClientCompanyPayload = Record({
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
    driverRating: nat64, // This will be the average rating of the drivers
    driverStatus: text, // This will be the status of the driver eg(Active, Inactive, etc)
});

export const SupplyCompanyPayload = Record({
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

export const OrderDetailsPayload = Record({
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

export const QuatationPayload = Record({
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


export const Message = Variant({
    NotFound: text,
    InvalidPayload: text,
    PaymentFailed: text,
    PaymentCompleted: text
});