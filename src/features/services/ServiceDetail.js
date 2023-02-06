import { Card, CardImg, CardText, CardBody, Col, Button } from "reactstrap";

const ServiceDetail = ({ campsite }) => {
  const { image, name, description } = campsite;

  return (
    <Col className="m-1">
      <Card>
        <CardImg top src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
          <Button size="lg" color="primary">
            {" "}
            <a
              role="button"
              className="btn btn-link text-warning text-xl bold"
              href="mailto:info@valleysbestcleaners.com"
            >
              {" "}
              Contact us for a free quote today!
            </a>
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ServiceDetail;
