import { Container } from "reactstrap";
import ServicesList from "../features/services/ServicesList";
import SubHeader from "../components/SubHeader";

const ServicesDirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Services" curHead="Professional Cleaning Services" />
      <ServicesList />
    </Container>
  );
};

export default ServicesDirectoryPage;
