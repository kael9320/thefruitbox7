import logo from "../logo.png";
import CartWidget from "./CartWidget";
import React from 'react';
import { Button, Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <header id="header">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand><Link to={"/"}><img src={logo} className="img-fluid" alt="logo" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <div className="me-auto my-2 my-lg-0 navbar-nav navbar-nav-scroll">
                  <Link to={"/category/promociones"} className="nav-link">Promociones</Link>
                  <Link to={"/category/verduras"} className="nav-link">Verduras</Link>
                  <Link to={"/category/bebidas"} className="nav-link">Bebidas</Link>
                  <Link to={"/"} className="nav-link">Tienda</Link>
                  <Link to={"/"} className="nav-link">Nosotros</Link>
                </div>
              </Nav>
              <Form className="d-flex">
                <Button variant="outline-success"> <CartWidget/></Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
}
 
export default NavBar;