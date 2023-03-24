import { Col, Row, Container } from "reactstrap";
import gog500 from "../app/assets/img/gog500.png";
import bbb500 from "../app/assets/img/bbb500.jpg";
import bestRated from "../app/assets/img/bestRated500.png";

const AwardRow = () => {
  return (
    <Container>
      <Row className="row-content awardRow">
        <Col xs="4" className="align-self-center">
          <img
            src={gog500}
            alt="cleaning service satisfaction guarantee"
            style={{
              //   width: "300px",
              display: "block",
              margin: "auto",
            }}
          />
        </Col>
        <Col xs="4" className="align-self-center">
          <img
            src={bbb500}
            alt="cleaning service satisfaction guarantee"
            style={{
              //   width: "300px",
              display: "block",
              margin: "auto",
            }}
          />
        </Col>
        <Col xs="4" className="align-self-center">
          <img
            src={bestRated}
            alt="cleaning service satisfaction guarantee"
            style={{
              //   width: "300px",
              display: "block",
              margin: "auto",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AwardRow;
