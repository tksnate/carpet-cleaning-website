import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import OnlineBooking from "../features/booking/OnlineBooking";
import ScheduleService from "../features/booking/ScheduleServices";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs="12" sm="4" className="text-center mb-5 text-warning">
            <h4 className="text-white">Valley's Best Carpet Cleaning</h4>
            <small>
              Professional Cleaning Services in Phoenix, AZ and most surrounding
              cities of in the Valley of the Sun!
            </small>
            <br />
            <br />
            <small className="text-white">
              Valley's Best Home Services Network Service Provider.
            </small>
            <br />
            <small>
              Copyright 2023. All Rights Reserved.
              <Link to="/" className="text-white">
                {"  "}
                Privacy Policy
              </Link>
            </small>
          </Col>
          <Col
            className="text-white text-center"
            xs={{ size: 8, offset: 2 }}
            sm={{ size: 3, offset: 1 }}
          >
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-warning">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/directory" className="text-warning">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-warning">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-warning">
                  Contact
                </Link>
              </li>
            </ul>
            <a
              role="button"
              className="btn btn-link text-warning"
              href="tel:+6026994822"
            >
              <i className="fa fa-phone" /> 602-699-4822
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link text-warning"
              href="mailto:info@valleysbestcleaners.com"
            >
              <i className="fa fa-envelope-o" /> Email Us
            </a>
          </Col>
          <Col sm={{ size: 3, offset: 1 }} className="text-center">
            <ScheduleService />
            <br />
            <br />
            <small className="text-white">
              <span className="bold" id="cities">
                Cleaning Service Area:
              </span>{" "}
              Glendale, AZ, Peoria, AZ, Surprise, AZ, Sun City, AZ, Litchfield,
              AZ, Goodyear, AZ, Tempe, AZ, Scottsdale, AZ, Mesa, AZ, and most
              surrounding cities of Phoenix, AZ.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
