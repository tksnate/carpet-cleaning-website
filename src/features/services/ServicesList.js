import { Col, Row } from "reactstrap";
import ServiceCard from "./ServiceCard";
import { selectAllCampsites } from "./servicesSlice";

const ServicesList = () => {
  const campsites = selectAllCampsites();

  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => {
        return (
          <Col md="5" className="m-4" key={campsite.id}>
            <ServiceCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ServicesList;
