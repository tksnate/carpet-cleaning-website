import React from "react";
import Bootstrap from "bootstrap";
import {
  Col,
  Row,
  Card,
  CardImg,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  CardText,
  Button,
} from "reactstrap";
import googleReview from "../app/assets/img/google5.png";

const TextBoxTwo = () => {
  return (
    <Row className="homeTextTwo">
      <Col sm="4">
        <Card>
          <CardImg
            max-width="20%"
            src={googleReview}
            alt="5-Star Customer Review of Cleaning Company"
          />
        </Card>
      </Col>
      <Col sm="8">
        <Card>
          {/* <CardHeader className="bold">
            Customer Testimonial - 5-Star Google Review
          </CardHeader> */}
          <CardBody>
            <CardText>
              <span className="gillFont">
                "We use{" "}
                <span className="text-primary bold">
                  Valley's Best Carpet & Tile Cleaning
                </span>{" "}
                yesterday. The tech arrived on time and was knowledgeable. The
                quote I got on the phone was the price I paid. No hidden fees!!
                <span className="bold">
                  {" "}
                  Carpet and tile look amazing. Would definitely recommend.
                </span>{" "}
                We wil be using them again!!"
              </span>
            </CardText>
            <Button color="primary" href="contact">
              Contact Us Today
            </Button>
          </CardBody>
          <CardFooter className="bold">
            Customer Testimonial - 5-Star Google Review
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default TextBoxTwo;
