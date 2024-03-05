import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { initializeContract } from "./utils/icp";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);

window.renderICPromise = initializeContract()
  .then(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(console.error);
