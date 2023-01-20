import { useState } from "react";
import {
  Navbar,
  NavbarText,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import ValleysBestLogo from "../app/assets/img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand className="ms-3" href="/">
        <h1 className="mt-1">Valley's Best Carpet Cleaning</h1>
        <small className="ms-2 navContact">
          <strong className="text-dark">CALL:</strong> 602-699-4822
          <strong className="navColor"> TEXT:</strong> 623-277-6461
        </small>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto pe-3" navbar>
          <NavItem>
            <NavLink className="nav-link text-dark" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link text-dark" to="/directory">
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link text-dark" to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link text-dark" to="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
