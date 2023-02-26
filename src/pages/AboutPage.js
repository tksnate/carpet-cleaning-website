import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";
import satisfaction from "../app/assets/img/satisfaction-guarantee.png";

const AboutPage = () => {
  return (
    <Container>
      <SubHeader
        current="About"
        curHead="Why Choose Valley's Best Carpet Cleaning?"
      />
      <Row className="row-content">
        <Col sm="7">
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
        <Col sm="5" className="justify-content-md-center">
          <Card className="border-0">
            <CardImg
              alt="cleaning service satisfaction guarantee"
              src={satisfaction}
              // width="100%"
              className="aboutPic"
            />
            {/* <CardHeader className="bg-primary text-white">
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
            </CardBody> */}
          </Card>
        </Col>
        <Col>
          <Card className="bg-warning mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p>
                  "These guys are amazing! We had them do house cleaning AND
                  carpet cleaning and now everything looks great! Very
                  professional and affordable. Highly recommend."
                </p>
                <footer className="blockquote-footer text-primary">
                  Maggie S,{"   "}
                  <cite title="Source Title">
                    5-Star Google Customer Review
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col sm="6">
          <h3>We are the Affordable Cleaning Experts!</h3>
          <span className="checkMark">
            <ul className="row">
              <li>Residential & Commercial Cleaning</li>
              <li>Experienced Professionals</li>
              <li>Easy Scheduling</li>
              <li>BBB Accredited and Insured</li>
              <li>Hundreds of 5-Star Reviews</li>
              <li>Satisfaction Guaranteed</li>
              <li>Flexible Offers For Every Situation</li>
            </ul>
          </span>
        </Col>
        <Col sm="6">
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
        <Col>
          <Card className="bg-warning mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p>
                  "These guys are amazing! We had them do house cleaning AND
                  carpet cleaning and now everything looks great! Very
                  professional and affordable. Highly recommend."
                </p>
                <footer className="blockquote-footer text-primary">
                  Maggie S,{"   "}
                  <cite title="Source Title">
                    5-Star Google Customer Review
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h3>Community Partners</h3>
        </Col>
        <PartnersList />
      </Row>
    </Container>
  );
};

export default AboutPage;
