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
  Container,
} from "reactstrap";
import googleReview from "../app/assets/img/google5.png";
import reviewPic from "../app/assets/img/gog5.png";
import reviewPic2 from "../app/assets/img/gog500.png";

const TextBoxThree = () => {
  return (
    <Row className="homeTextTwo">
      {/* <div className="d-flex"> */}
      <Col sm="3">
        <img
          src={reviewPic}
          alt="5-Star Customer Review of Cleaning Company"
          style={{ width: "200px" }}
        />
      </Col>
      <Col sm="9">
        <Card className="mr-5">
          <CardBody className="mr-3">
            {" "}
            <CardText>
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
      {/* </div> */}
    </Row>
  );
};

export default TextBoxThree;
