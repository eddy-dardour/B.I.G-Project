import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home.js";
import Header from "./components/Header";
import { Global } from "./globalStyle";
import Widgets from "./components/Widgets.js";
import WidgetsAlt from "./components/WidgetsAlt.js";
import Weather from "./components/Weather.js";
import Color from "./components/Color.js";
import UnitConverter from "./components/UnitConverter.js";
import Calculator from "./components/Calculator.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <Global />
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Color' element={<Color />} />
      <Route path='/Widgets' element={<Widgets />} />
      <Route path='/Weather' element={<Weather />} />
      <Route path='/WidgetsAlt' element={<WidgetsAlt />} />
      <Route path='/Calculator' element={<Calculator />} />
      <Route path='/UnitConverter' element={<UnitConverter />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
