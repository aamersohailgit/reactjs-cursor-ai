import React, { useState, useCallback } from "react";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faShoppingCart,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "../types";
import Search from "./common/Search";

const NavigationBar: React.FC = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "TeeSpace", path: "/teespace" },
    { label: "Shop", path: "/shop" },
    { label: "Blog", path: "/blog" },
    { label: "Pages", path: "/pages" },
  ];

  const handleSearch = useCallback((query: string) => {
    console.log("Searching for:", query);
    // Implement search functionality
  }, []);

  const toggleSearch = useCallback(() => {
    setShowSearch((prev) => !prev);
  }, []);

  const toggleOffcanvas = useCallback(() => {
    setShowOffcanvas((prev) => !prev);
  }, []);

  return (
    <>
      <Navbar bg="white" expand="lg" className="py-3 fixed-top">
        <Container>
          <Button
            variant="link"
            className="d-lg-none text-dark p-0 me-3"
            onClick={toggleOffcanvas}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </Button>

          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center me-0"
          >
            <img
              src="/logo.png"
              alt="TeeSpace"
              height="40"
              className="me-2"
              loading="lazy"
            />
            <span className="d-none d-sm-inline">TeeSpace</span>
          </Navbar.Brand>

          <div className="d-none d-lg-block flex-grow-1 mx-4">
            <Search onSearch={handleSearch} />
          </div>

          <Button
            variant="link"
            className="d-lg-none text-dark p-0 ms-auto me-3"
            onClick={toggleSearch}
            aria-label="Toggle search"
          >
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </Button>

          <div className="d-flex align-items-center">
            <div className="d-none d-lg-block me-4 text-end">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <div>
                  <div className="fw-bold">Hotline: 19008188</div>
                  <small className="text-muted">
                    Pickup your order for free
                  </small>
                </div>
              </div>
            </div>

            <Nav className="align-items-center">
              <Nav.Link
                as={Link}
                to="/account"
                className="p-2"
                aria-label="User account"
              >
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/cart"
                className="p-2 position-relative"
                aria-label="Shopping cart"
              >
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  0
                </span>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>

      <div
        className={`mobile-search bg-white w-100 py-3 shadow-sm ${
          showSearch ? "show" : ""
        }`}
        style={{
          position: "fixed",
          top: "72px",
          left: 0,
          zIndex: 1020,
          transform: `translateY(${showSearch ? "0" : "-100%"})`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Container>
          <Search onSearch={handleSearch} />
        </Container>
      </div>

      <Offcanvas
        show={showOffcanvas}
        onHide={toggleOffcanvas}
        aria-label="Navigation menu"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {navItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={`py-2 ${
                  location.pathname === item.path ? "text-success" : ""
                }`}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          <div className="mt-4 p-3 bg-light rounded">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPhone} className="me-2 text-success" />
              <div>
                <div className="fw-bold">Hotline: 19008188</div>
                <small className="text-muted">Pickup your order for free</small>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Navbar
        bg="white"
        expand="lg"
        className="py-2 border-top border-bottom d-none d-lg-block"
        style={{ marginTop: "85px" }}
      >
        <Container>
          <Nav className="me-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={
                  location.pathname === item.path ? "text-success" : ""
                }
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link className="text-warning">🔥 Extra Sale 30% off</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
