import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/services/servicesSlice";
import ServiceDetail from "../features/services/ServiceDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const ServiceDetailPage = () => {
  const { campsiteId } = useParams();
  const campsite = selectCampsiteById(campsiteId);

  return (
    <Container>
      <SubHeader current={campsite.name} detail={true} />
      <Row>
        <ServiceDetail campsite={campsite} />
        {/* <CommentsList campsiteId={campsiteId} /> */}
      </Row>
    </Container>
  );
};

export default ServiceDetailPage;
