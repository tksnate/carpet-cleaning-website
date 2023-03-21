import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";
import satisfaction from "../app/assets/img/satisfaction-guarantee.png";
import ratedBiz from "../app/assets/img/ratedBiz.png";

const AboutPage = () => {
  return (
    <Container>
      <SubHeader
        current="About"
        curHead="Why Choose Valley's Best Carpet Cleaning?"
      />
      <Row className="row-content justify-content-center">
        <Col lg="7" xs="12">
          <Card>
            <CardHeader className="bg-primary text-white">
              <h3>We are the Affordable Cleaning Experts!</h3>
            </CardHeader>
            <CardBody>
              <span className="checkMark text-primary">
                <ul className="row">
                  <li>Residential & Commercial Cleaning Teams</li>
                  <li>BBB Accredited and Insured</li>
                  <li>Experienced Professionals</li>
                  <li>Easy Scheduling</li>
                  <li>Hundreds of 5-Star Reviews</li>
                  <li>Satisfaction Guaranteed</li>
                  <li>Flexible Offers For Every Situation</li>
                </ul>
              </span>
            </CardBody>
            <CardBody>
              <h6 className="listTwo">
                We honor your business by using only experienced and dedicated
                professionals to serve your cleaning needs.{" "}
                <span className="bold">
                  These superstars are the real reason you should choose
                  Valley's Best Carpet Cleaning!
                </span>
              </h6>
            </CardBody>
          </Card>
        </Col>
        <Col className="align-self-center">
          <img
            src={satisfaction}
            alt="cleaning service satisfaction guarantee"
            style={{
              width: "300px",
              display: "block",
              margin: "auto",
            }}
          />
        </Col>
      </Row>
      <Row className="row-content mt-3">
        <Col>
          <Card color="warning" outline>
            <CardHeader className="text-primary bold fs-3 text-center">
              5-Star Google Customer Review
            </CardHeader>
            <CardBody className="bg-warning">
              <CardTitle tag="h5">
                {" "}
                "These guys are amazing! We had them do house cleaning AND
                carpet cleaning and now everything looks great!
                <span className="bold">
                  {" "}
                  Very professional and affordable.
                </span>{" "}
                Highly recommend."
              </CardTitle>
              <CardText className="text-light">
                Maggie S. 5-Star Review - House Cleaning & Carpet Cleaning
                Services
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content mt-5">
        {/* <Col sm="5" className="justify-content-md-center">
          <Card className="border-0">
            <CardImg
              alt="cleaning service satisfaction guarantee"
              src={ratedBiz}
              // width="100%"
              className="aboutPic"
            />
          </Card>
        </Col> */}
        <Col lg="4" xs="12" className="align-self-center">
          <img
            src={ratedBiz}
            alt="BBB Accredited Business"
            style={{
              width: "300px",
              display: "block",
              margin: "auto",
            }}
          />
        </Col>
        <Col className="align-self-center">
          <Card>
            <CardHeader className="bg-primary text-white">
              <h3>Our Promises</h3>
            </CardHeader>
            <CardBody>
              <ul className="row">
                <span className="listStyle text-primary">
                  <li>We treat our customers as we want to be treated</li>
                  <li>We will always operate with Honesty and Integrity</li>
                  <li>We are committed to complete customer satisfaction!</li>
                </span>
              </ul>
              <h6 className="listTwo">
                We honor your business by using only experienced and dedicated
                professionals to serve your cleaning needs.{" "}
                <span className="bold">
                  These superstars are the real reason you should choose
                  Valley's Best Carpet Cleaning!
                </span>
              </h6>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
