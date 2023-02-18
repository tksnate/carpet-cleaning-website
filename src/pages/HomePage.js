import { Container, Col, Row, Card, CardImg } from "reactstrap";
import ImageParallax from "../features/display/heroParallax";
import ImageParallaxTwo from "../features/display/heroParallaxTwo";
import ImageParallaxThree from "../features/display/heroParallaxThree";
import TextBox from "../components/TextBox";
import TextBoxTwo from "../components/TextBoxTwo";

const HomePage = () => {
  return (
    <Container className="homePage">
      <ImageParallax />
      <TextBox />
      <ImageParallaxThree />
      <TextBoxTwo />
      <ImageParallaxTwo />
      {/* <Row className="row-content paralHead">
        <Col>
          <h1>
            Professional Carpet Cleaning Services in Glendale, AZ and all
            surrounding cities of Phoenix, AZ
          </h1>
        </Col>
      </Row>
      <Row className="row-content">
        <Col sm="6">
          <h2>
            You can't have a beautiful and healthy home without clean carpet!
          </h2>
          <ul>
            <li>Experienced Professionals</li>
            <li>Accredited & Insured</li>
            <li>Affordable Prices</li>
            <li>Reliable Service</li>
            <li>No Hidden Fees</li>
            <li>Hundreds of 5-Star Reviews</li>
          </ul>
        </Col>
        <Col sm="6">
          <Card>
            <CardImg
              top
              width="100%"
              src={coupon2}
              alt="Carpet Cleaning Coupon Discount Phoenix, AZ"
            />
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col sm="6">
          <h2>Carpet Stain Removal & Odor Removal Expert Services</h2>
        </Col>
        <Col sm="6">
          <h3>Our Standard Carpet Fiber Cleaning Process Includes:</h3>
          <ul>
            <li>Pre-Treatment for Stains</li>
            <li>Rinse Deodorizer for Odors</li>
            <li>Powerful Truck-Mounted Machine</li>
            <li>No Left Over Residue</li>
            <li>Hight-Temperature / High-Pressure</li>
          </ul>
        </Col>
      </Row>
      <DisplayList /> */}
    </Container>
  );
};

export default HomePage;
