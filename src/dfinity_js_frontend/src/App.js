import React from "react";
import "./App.css";
import HomeLandingpagePage from "./pages/HomeLandingpage";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = function AppWrapper() {

  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomeLandingpagePage />} />
        </Routes>
    </Router>
  );
};

export default App;
