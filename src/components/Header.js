import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import vbcLogo from "../app/assets/img/vbcLogo.png";
import OnlineBooking from "../features/booking/OnlineBooking";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar dark color="primary" sticky="top" expand="md">
        <NavbarBrand href="/">
          <img
            src={vbcLogo}
            alt="valleys best carpet cleaning logo"
            className="float-start mx-1"
          />
          <h5 className="mt-3">VALLEY'S BEST CARPET CLEANING</h5>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto pe-3" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/directory">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <OnlineBooking />
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
