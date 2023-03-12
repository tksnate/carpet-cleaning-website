import { Container } from "reactstrap";
import HeroParallax from "../features/display/heroParallax";
import ImageParallaxTwo from "../features/display/heroParallaxTwo";
import ImageParallaxThree from "../features/display/heroParallaxThree";
import TextBox from "../components/TextBox";
import TextBoxTwo from "../components/TextBoxTwo";
import TextBoxThree from "../components/TextBoxThree";

const HomePage = () => {
  return (
    <Container className="homePage">
      <HeroParallax />
      <TextBox />
      <ImageParallaxThree />
      <TextBoxThree />
      <ImageParallaxTwo />
    </Container>
  );
};

export default HomePage;
