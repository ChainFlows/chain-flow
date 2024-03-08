export async function createQuotation(quotationPayload) {
  try {
    console.log("utils", quotationPayload);
    return await window.canister.chainflow.createQuotation(quotationPayload);
  } catch (err) {
    console.log(err);
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

export async function getQuotation(id) {
  try {
    return await window.canister.chainflow.getQuotation(id);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return {};
  }
}

export async function getAllQuotations() {
  try {
    return await window.canister.chainflow.getAllQuotations();
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function sortQuotationsByCompanyName(companyId) {
  try {
    return await window.canister.chainflow.sortQuotationsByCompanyName(
      companyId
    );
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

// getOrderQuotations
export async function getOrderQuotations(orderId) {
  try {
    return await window.canister.chainflow.getOrderQuotations(orderId);
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
    return [];
  }
}

export async function updateQuotationStatus(quotationId, status) {
  try {
    return await window.canister.chainflow.updateQuotationStatus(
      quotationId,
      status
    );
  } catch (err) {
    if (err.name === "AgentHTTPResponseError") {
      const authClient = window.auth.client;
      await authClient.logout();
    }
  }
}
