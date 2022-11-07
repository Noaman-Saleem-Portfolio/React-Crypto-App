import React from "react";
import { Link } from "react-router-dom";

const FakeMenu = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/coins"}>Coins</Link>
      <Link to={"/exchanges"}>Exchanges</Link>
    </>
  );
};

export default FakeMenu;
