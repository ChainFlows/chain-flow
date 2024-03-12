export async function createOrderDetails(orderDetails) {
    return window.canister.chainflow.createOrderDetails(orderDetails);
  }
  
  export async function getAllOrderDetails() {
    try {
      return await window.canister.chainflow.getAllOrderDetails();
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return [];
    }
  }
  
  export async function getOrderDetails(id) {
    try {
      return await window.canister.chainflow.getOrderDetails(id);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return {};
    }
  }
  
  export async function updateOrderDetails(id,orderDetails) {
    try {
      return await window.canister.chainflow.updateOrderDetails(id,orderDetails);
    }  catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return {};
    }
  }

// updateOrderStatus
export async function updateOrderStatus(id, status) {
    try {
      return await window.canister.chainflow.updateOrderStatus(id, status);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return {};
    }
  }
  
  export async function addItem(orderId, Item) {
    try {
      return await window.canister.chainflow.addItem(orderId, Item);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return {};
    }
  
  
  }
  
  export async function assignDriver(orderId, driverId) {
    try {
      return await window.canister.chainflow.assignDriver(orderId, driverId);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return {};
    }
  
  }

// assignSupplier
export async function assignSupplier(orderId, supplierId) {
    try {
      return await window.canister.chainflow.assignSupplier(orderId, supplierId);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return {};
    }
  
  }
  
  export async function markOrderAsCompleted(completionPayload) {
    try {
      return await window.canister.chainflow.markOrderAsCompleted(completionPayload);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return {};
    }
  
  }
  
  export async function searchOrderByCategory(query) {
    try {
      return await window.canister.chainflow.searchOrderByCategory(query);
    } catch (err) {
      if (err.name === "AgentHTTPResponseError") {
        const authClient = window.auth.client;
        await authClient.logout();
      }
      return [];
    }
  }
  