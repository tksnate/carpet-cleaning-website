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
      <div class="row">
        <Col sm="3" lg="3">
          <img
            src={reviewPic}
            alt="5-Star Customer Review of Cleaning Company"
            style={{
              width: "200px",
              display: "block",
              margin: "auto",
              paddingRight: "20px",
            }}
          />
        </Col>
        <Col>
          <div class="customerTestomial">
            <Card className="ms-5 ps-1">
              <CardBody class="customerTest">
                <CardText>
                  "We use{" "}
                  <span className="text-primary bold">
                    Valley's Best Carpet & Tile Cleaning
                  </span>{" "}
                  yesterday. The tech arrived on time and was knowledgeable. The
                  quote I got on the phone was the price I paid. No hidden
                  fees!!
                  <span className="bold">
                    {" "}
                    Carpet and tile look amazing. Would definitely recommend.
                  </span>{" "}
                  We will be using them again!!"
                </CardText>
                <Button color="primary" href="contact">
                  Contact Us Today
                </Button>
              </CardBody>
              <CardFooter className="bold">
                Customer Testimonial - 5-Star Google Review
              </CardFooter>
            </Card>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default TextBoxThree;
