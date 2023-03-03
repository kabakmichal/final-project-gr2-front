import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
// import Home from "./Pages/Home/Home";
// import { PrivateRoute } from "./Components/PrivateRoute";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    // <Routes>
    //   <Route index path="/" element={<Home />} />
    //   <Route
    //     path="/dashboard"
    //     element={<PrivateRoute redirectTo="/" component={<Dashboard />} />}
    //   />
    //   <Route path="*" element={<h1>There's nothing here: 404!</h1>} />
    // </Routes>
    // </Router>
    <Dashboard />
  );
}

export default App;
