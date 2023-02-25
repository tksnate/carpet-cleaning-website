import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About Us" />
      <Row className="row-content">
        <Col sm="6">
          <h3>Why Choose Valley's Best Carpet Cleaning</h3>
          <p>
            Affordable Residential & Commercial Cleaning Services in Phoenix,
            AZ, and most surrounding cities. We are dedicated to customer
            satisfaction and service offers for every situation!
          </p>
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
                  <li>
                    We honor your business by using only the best people to
                    serve your cleaning needs. Our expert cleaning technicians
                    are insured, dedicated, and experienced professionals. These
                    superstars are the real reason you should choose Valley's
                    Best Carpet Cleaning!
                  </li>
                </span>
              </ul>
              {/* <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">February 3, 2016</dd>
                <dt className="col-6">No. of Campsites in 2019</dt>
                <dd className="col-6">563</dd>
                <dt className="col-6">No. of Reviews in 2019</dt>
                <dd className="col-6">4388</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">42</dd>
              </dl> */}
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p>
                  These guys are amazing! We had them do house cleaning AND
                  carpet cleaning and now everything looks great! Very
                  professional and affordable. Highly recommend.
                </p>
                <footer className="blockquote-footer">
                  Maggie S,{" "}
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
