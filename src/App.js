import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/Home";
import Menubar from "./components/Menubar";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
// import FakeMenu from "./components/FakeMenu";
// import FakeMenu from "./components/FakeMenu";
// import FakeMenu from "./components/FakeMenu";

import "./App.css";

function App() {
  return (
    <Router>
      <Menubar></Menubar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/exchanges" element={<Exchanges></Exchanges>}></Route>
        <Route path="/coin/:id" element={<CoinDetails></CoinDetails>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
