"use client";
import { Container, Row, Col } from "react-bootstrap";

const Biosection = () => {
  return (
    <div className="bg-white h-1/2 mt-20 primary_font">
      <Container>
        <Row>
          <Col sm={6}>
            <p>About</p>
            <p>Text contents goes here</p>
          </Col>
          <Col sm={6}>
            {/* Image goes here */}
            Image goes Here
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Biosection;
