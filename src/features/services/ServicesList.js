import { Col, Row } from "reactstrap";
import ServiceCard from "./ServiceCard";
import { selectAllServices } from "./servicesSlice";

const ServicesList = () => {
  const services = selectAllServices();

  return (
    <Row className="ms-auto">
      {services.map((service) => {
        return (
          <Col md="5" className="m-4" key={service.id}>
            <ServiceCard service={service} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ServicesList;
