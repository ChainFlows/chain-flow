export async function createDriver(driver) {
  return window.canister.chainflow.createDriver(driver);
}

export async function getDriverByOwner() {
  return window.canister.chainflow.getDriverByOwner();
}

export async function getDriverByOwnerFilter() {
  return window.canister.chainflow.getDriverByOwnerFilter();
}

export async function getAllDrivers() {
  try {
    return await window.canister.chainflow.getAllDrivers();
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function getDriver(id) {
  try {
    return await window.canister.chainflow.getDriver(id);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

export async function addTraining(driverId, training) {
  try {
    return await window.canister.chainflow.addTraining(driverId, training);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

export async function updateDriverStatus(driverId, status) {
  try {
    return await window.canister.chainflow.updateDriverStatus(driverId, status);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

export async function searchDriverByName(query) {
  try {
    return await window.canister.chainflow.searchDriverByName(query);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function sortDriversByRating() {
  try {
    return await window.canister.chainflow.sortDriversByRating();
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function updateDriver(payload) {
  try {
    return await window.canister.chainflow.updateDriver(payload);
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function createMaintainanceRecord(driverId, maintainanceRecord) {
  try {
    return await window.canister.chainflow.createMaintainanceRecord(
      driverId,
      maintainanceRecord
    );
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function getMaintainanceRecord(driverId) {
  try {
    return await window.canister.chainflow.getMaintainanceRecord(driverId);
  } catch (err) {
    console.log(err);
    return {};
  }
}

// getDriverMaintainanceRecords
export async function getDriverMaintainanceRecords(driverId) {
  try {
    return await window.canister.chainflow.getDriverMaintainanceRecords(
      driverId
    );
  } catch (err) {
    console.log(err);
    return [];
  }
}

// getDriverCompletedOrders
export async function getDriverCompletedOrders(driverId) {
  try {
    return await window.canister.chainflow.getDriverCompletedOrders(driverId);
  } catch (err) {
    console.log(err);
    return [];
  }
}

// getDriverActiveOrder;
export async function getDriverActiveOrder(driverId) {
  try {
    return await window.canister.chainflow.getDriverActiveOrder(driverId);
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function getAllMaintainanceRecords() {
  try {
    return await window.canister.chainflow.getAllMaintainanceRecords();
  } catch (err) {
    console.log(err);
    return [];
  }
}
