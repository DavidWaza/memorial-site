"use client";
import { Container, Row, Col } from "react-bootstrap";
import Button from "./Button";

const SearchParams = () => {
  const zetaText = "Search Person";
  const secondaryText = "Register person";
  return (
    <Container>
      <Row className="bg-white rounded-[24px] px-9 py-12 h-full text-center">
        <Col sm={6}>
          <Button intent="zeta" className=" text-sm primary_font">
            {zetaText}
          </Button>
        </Col>
        <Col sm={6}>
          <Button intent="secondary" className=" text-sm primary_font">
            {secondaryText}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default SearchParams;
