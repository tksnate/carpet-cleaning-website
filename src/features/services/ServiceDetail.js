import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import ContactForm from "../../components/ContactForm";
import ReviewCarousel from "../../components/ReviewCarousel";
import reviewCarousel from "../../app/assets/img/reviewCarousel.jpg";

const ServiceDetail = ({ service }) => {
  const { image, name, description, description2 } = service;

  return (
    <Container>
      <Row>
        <Col className="m-1">
          <Card className="mb-5 pb-2">
            <CardImg top src={image} alt={name} />
            <CardTitle>
              <h1 class="display-2 text-center">{name}</h1>
            </CardTitle>
            <CardBody>
              <CardText className="lead lh-lg text-primary">
                {description}
              </CardText>
              <CardText className="lead lh-lg text-primary">
                {description2}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <ReviewCarousel />
        <img
          src={reviewCarousel}
          alt="5-star customer review statisfied customer"
          id="reviewCar"
          style={{
            width: "500px",
            display: "none",
            margin: "auto",
          }}
        />
      </Row>
      <Row className="row-content">
        <Col xs="12" className="mt-4">
          <h2>Get A Service Quote Today!</h2>
          <hr />
        </Col>
        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetail;
