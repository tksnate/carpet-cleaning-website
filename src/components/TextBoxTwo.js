import React from "react";
import Bootstrap from "bootstrap";
import {
  Col,
  Row,
  Card,
  CardImg,
  CardHeader,
  CardTitle,
  CardFooter,
} from "reactstrap";
import googleReview from "../app/assets/img/google5.png";

const TextBoxTwo = () => {
  return (
    <Row className="homeTextTwo">
      <Col sm="4">
        <Card>
          <CardImg
            max-width="25%"
            src={googleReview}
            alt="5-Star Customer Review of Cleaning Company"
          />
        </Card>
      </Col>
      <Col sm="8">
        <Card>
          <CardHeader>5-Star Review</CardHeader>
          <CardTitle>
            "I highly recommend Valley's Best Carpet Cleaning!"
          </CardTitle>
          <CardFooter>- Matt R. 5-Star Customer Review on Google</CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default TextBoxTwo;
