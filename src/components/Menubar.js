import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menubar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* <Link className={"navbar-brand"} to={"/"}>
            React-Bootstrap
          </Link> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className={"nav-link"} to={"/"}>
                Home
              </Link>
              <Link className={"nav-link"} to={"/coins"}>
                Coins
              </Link>
              <Link className={"nav-link"} to={"/exchanges"}>
                Exchanges
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menubar;
