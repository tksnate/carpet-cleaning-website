import React from "react";
import { Col, Row, Card, CardImg, Button } from "reactstrap";
import coupon2 from "../app/assets/img/carpet-cleaning-coupon.jpg";

const TextBox = () => {
  return (
    <Row className="homeTextTwo">
      <Col xs="12" className="text-center mb-4">
        <h1 className="text-primary bold headLine fs-1">
          Carpet Cleaning & Stain Removal Services
        </h1>
      </Col>
      <Col sm="6">
        <ul className="mb-4">
          <span className="listStyle">
            <li>Powerful Truck-Mounted Steam Cleaning</li>
            <li>Accredited & Insured</li>
            <li>Affordable & Reliable</li>
            <li>Hundreds of 5-Star Reviews</li>
            <li>Satisfaction Guaranteed</li>
          </span>
        </ul>
        {/* <h5 className="mb-4 bold">
          You can't have a beautiful and healthy home without clean carpet!
        </h5> */}
      </Col>
      <Col sm="6">
        <img
          src={coupon2}
          alt="Carpet Cleaning Coupon Discount Phoenix, AZ"
          style={{
            width: "400px",
            display: "block",
            margin: "auto",
          }}
        />
      </Col>
      <Col xs="12" className="text-center text-primary mt-4">
        <h5 className="mx-2 mb-4">
          Professional Cleaning Services in Phoenix, AZ, and most surrounding
          cities in the Valley of the Sun!
        </h5>
      </Col>
    </Row>
  );
};

export default TextBox;
