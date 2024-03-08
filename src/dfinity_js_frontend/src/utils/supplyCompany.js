export async function createSupplyCompany(supplyCompany) {
  return window.canister.chainflow.createSupplyCompany(supplyCompany);
}

export async function getAllSupplyCompanies() {
  try {
    return await window.canister.chainflow.getAllSupplyCompanies();
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function getSupplyCompany(id) {
  try {
    return await window.canister.chainflow.getSupplyCompany(id);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

// getSupplyCompanyByOwner
export async function getSupplyCompanyByOwner() {
  try {
    return await window.canister.chainflow.getSupplyCompanyByOwner();
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

export async function getSupplyCompanyActiveOrders(supplyCompanyId) {
  try {
    return await window.canister.chainflow.getSupplyCompanyActiveOrders(
      supplyCompanyId
    );
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function getSupplyCompanyCompletedOrders(supplyCompanyId) {
  try {
    return await window.canister.chainflow.getSupplyCompanyCompletedOrders(
      supplyCompanyId
    );
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function getSupplyCompanyNewOrders(supplyCompanyId) {
  try {
    return await window.canister.chainflow.getSupplyCompanyNewOrders(
      supplyCompanyId
    );
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function updateSupplyCompany(id, supplyCompany) {
  try {
    return await window.canister.chainflow.updateSupplyCompany(
      id,
      supplyCompany
    );
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

export async function searchSupplyCompany(query) {
  try {
    return await window.canister.chainflow.searchSupplyCompany(query);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function addDriver(companyId, driverId) {
  try {
    return await window.canister.chainflow.addDriver(companyId, driverId);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}
