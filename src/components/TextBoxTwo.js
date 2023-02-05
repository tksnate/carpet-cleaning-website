import React from "react";
import { Col, Row, Card, CardImg } from "reactstrap";
import coupon2 from "../app/assets/img/carpet-cleaning-coupon.jpg";

const TextBoxTwo = () => {
  return (
    <Row className="homeTextTwo">
      <Col sm="6">
        <h2>
          You can't have a beautiful and healthy home without clean carpet!
        </h2>
        <ul>
          <li>Experienced Professionals</li>
          <li>Accredited & Insured</li>
          <li>Affordable Prices</li>
          <li>Reliable Service</li>
          <li>No Hidden Fees</li>
          <li>Hundreds of 5-Star Reviews</li>
        </ul>
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

export default TextBoxTwo;
