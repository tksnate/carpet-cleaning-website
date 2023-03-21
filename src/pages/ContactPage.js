import { Card, Container, Col, Row, CardBody } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact" curHead="Contact Us" />
      <Row className="row-content">
        <Col sm="7" xs="12" className="justify-content-center me-3">
          <h3>
            Valley's Best Cleaners provides professional commercial and
            residential cleaning services in Phoenix, AZ, and most surrounding
            areas.
          </h3>
          <br />
          <p>
            Our cleaning service area includes Peoria, Sun City, Litchfield,
            Buckeye, Goodyear, Avondale, Glendale, Tempe, Scottsdale, Mesa,
            Chandler, and more.
            <br />
            <br />
            Please contact us by phone, email, or text if you have any questions
            or want to check if we offer service in your area!
          </p>
        </Col>
        <Col className="align-self-center">
          <Card className="bg-primary">
            <CardBody className="text-light">
              <h5>
                <span className="text-warning bold">CALL:</span> 602-699-4822
              </h5>
              <br />
              <h5>
                <span className="text-warning bold">TEXT:</span> 623-277-6461
              </h5>
              <br />

              <a
                role="button"
                className="btn-link text-light"
                href="mailto:info@valleysbestcleaners.com"
              >
                <h5>
                  <span className="text-warning bold">EMAIL:</span>{" "}
                  info@valleysbestcleaners.com{" "}
                </h5>
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h2>How Can We Serve Your Cleaning Needs?</h2>
          <hr />
        </Col>
        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
