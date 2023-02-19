import React from "react";
import { Col, Row, Card, CardImg, Button } from "reactstrap";
import coupon2 from "../app/assets/img/carpet-cleaning-coupon.jpg";

const TextBox = () => {
  return (
    <Row className="homeTextTwo">
      <Col sm="6">
        <h1 className="text-primary bold headLine">
          Carpet Cleaning & Stain Removal Services
        </h1>
        <h5 className="mb-4">
          Cleaning in Phoenix, AZ, and most surrounding cities in the Valley of
          the Sun!
        </h5>
        <ul className="mb-4">
          <span className="listStyle text-primary">
            <li>Powerful Truck-Mounted Steam Cleaning</li>
            <li>Accredited & Insured</li>
            <li>Affordable & Reliable</li>
            <li>Hundreds of 5-Star Reviews</li>
            <li>Satisfaction Guaranteed</li>
          </span>
        </ul>
        <h5 className="mb-4 bold">
          You can't have a beautiful and healthy home without clean carpet!
        </h5>
      </Col>
      <Col sm="6">
        <Card>
          <CardImg
            top
            width="100%"
            src={coupon2}
            alt="Carpet Cleaning Coupon Discount Phoenix, AZ"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default TextBox;
