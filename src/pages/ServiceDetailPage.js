import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectServiceById } from "../features/services/servicesSlice";
import ServiceDetail from "../features/services/ServiceDetail";
import SubHeader from "../components/SubHeader";

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = selectServiceById(serviceId);

  return (
    <Container>
      <SubHeader current={service.name} detail={true} />
      <Row>
        <ServiceDetail service={service} />
      </Row>
    </Container>
  );
};

export default ServiceDetailPage;
