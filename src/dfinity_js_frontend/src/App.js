import React from "react";
import "./App.css";
import HomeLandingpagePage from "./pages/HomeLandingpage";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Driver from "./pages/Driver";
import Login from "./pages/Driver/Login";
import Clients from "./pages/Client";

const App = function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLandingpagePage />} />
        <Route path="/drivers" element={<Driver />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>
  );
};

export default App;
