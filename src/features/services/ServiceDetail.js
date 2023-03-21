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

const ServiceDetail = ({ campsite }) => {
  const { image, name, description, description2 } = campsite;

  return (
    <Container>
      <Row>
        <Col className="m-1">
          <Card>
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

export default ServiceDetail;
