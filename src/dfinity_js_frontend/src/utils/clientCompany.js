import { Principal } from "@dfinity/principal";
import { transferICP } from "./ledger";

export async function createClientCompany(clientCompany) {
  return window.canister.chainflow.createClientCompany(clientCompany);
}

export async function getAllClientCompanies() {
  try {
    return await window.canister.chainflow.getAllClientCompanies();
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function getClientCompany(id) {
  try {
    return await window.canister.chainflow.getClientCompany(id);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

export async function updateClientCompany(id, clientCompany) {
  try {
    return await window.canister.chainflow.updateClientCompany(
      id,
      clientCompany
    );
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

export async function searchClientCompany(query) {
  try {
    return await window.canister.chainflow.searchClientCompany(query);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function addAffiliatedCompany(clientId, companyName) {
  try {
    return await window.canister.chainflow.addAffiliatedCompany(
      clientId,
      companyName
    );
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

// getClientCompanyByOwner
export async function getClientCompanyByOwner() {
  try {
    return await window.canister.chainflow.getClientCompanyByOwner();
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

// getClientCompanyActiveOrders
export async function getClientCompanyActiveOrders(clientId) {
  try {
    return await window.canister.chainflow.getClientCompanyActiveOrders(
      clientId
    );
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

// getClientCompanyCompletedOrders
export async function getClientCompanyCompletedOrders(clientId) {
  try {
    return await window.canister.chainflow.getClientCompanyCompletedOrders(
      clientId
    );
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

// getClientCompanyNewOrders
export async function getClientCompanyNewOrders(clientId) {
  try {
    return await window.canister.chainflow.getClientCompanyNewOrders(clientId);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function addProduct(clientId, productName) {
  try {
    return await window.canister.chainflow.addProduct(clientId, productName);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

// export async function buyProduct(product) {
//   const chainflowCanister = window.canister.chainflow;
//   const orderResponse = await chainflowCanister.createOrder(product.id);
//   const sellerPrincipal = Principal.from(orderResponse.Ok.seller);
//   const sellerAddress = await chainflowCanister.getAddressFromPrincipal(sellerPrincipal);
//   const block = await transferICP(sellerAddress, orderResponse.Ok.price, orderResponse.Ok.memo);
//   await chainflowCanister.completePurchase(sellerPrincipal, product.id, orderResponse.Ok.price, block, orderResponse.Ok.memo);
// }
