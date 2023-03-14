import React from "react";
import { Col, Row, Card, CardImg, Button } from "reactstrap";
import coupon2 from "../app/assets/img/carpet-cleaning-coupon.jpg";

const TextBox = () => {
  return (
    <Row className="homeTextTwo">
      <Col xs="12" className="text-center">
        <h1 className="text-primary bold headLine">
          Carpet Cleaning & Stain Removal Services
        </h1>
      </Col>
      <Col sm="6">
        <ul className="mb-4">
          <span className="listStyle text-primary">
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
        {/* <Card>
          <CardImg
            width={200}
            style={{ height: "auto" }}
            src={coupon2}
            alt="Carpet Cleaning Coupon Discount Phoenix, AZ"
          />
        </Card> */}
      </Col>
      <Col xs="12" className="text-center">
        <h5 className="mb-4">
          Cleaning in Phoenix, AZ,{" "}
          <a href="#cities" className="cityLink">
            and most surrounding cities in the Valley of the Sun!
          </a>
        </h5>
      </Col>
    </Row>
  );
};

export default TextBox;
