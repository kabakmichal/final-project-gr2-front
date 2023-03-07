import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
<<<<<<< HEAD
 import Home from "./Pages/Home/Home";
 import { Provider } from "react-redux";
 import { store } from "./redux/quest/store";
 import { PrivateRoute } from "./Components/PrivateRoute";
import { useEffect } from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======

import Home from "./Pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "./redux/quest/store";
import { PrivateRoute } from "./Components/PrivateRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> 794c11f45b6cd2f8b9d87ceca91b8ba83a555a17

function App() {

  return (
    // <Router>
    <Provider store={store}>
      <Routes>
        {/* <Route index path="/final-project-gr2-front/" element={<Home />} /> */}
        <Route index path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute redirectTo="/" component={<Dashboard />} />}
        />
        <Route path="*" element={<h1>There's nothing here: 404!</h1>} />
      </Routes>
    </Provider>
    // { <Dashboard /> }
  );
}


export default App;
