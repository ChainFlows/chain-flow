export async function createQuatation(quatationPayload) {
    try {
      return await window.canister.chainflow.createQuatation(quatationPayload);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return {};
    }
  }
  
  export async function getQuatation(id) {
    try {
      return await window.canister.chainflow.getQuatation(id);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return {};
    }
  }
  
  export async function getAllQuatations() {
    try {
      return await window.canister.chainflow.getAllQuatations();
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return [];
    }
  }
  
  export async function sortQuatationsByCompanyName(companyId) {
    try {
      return await window.canister.chainflow.sortQuatationsByCompanyName(companyId);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return [];
    }
  }
  
  export async function updateQuatationStatus(quatationId, status) {
    try {
      return await window.canister.chainflow.updateQuatationStatus(quatationId, status);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
    }
  }
  
  