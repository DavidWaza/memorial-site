"use client";
import { Container, Row, Col } from "react-bootstrap";
import { Photos } from "../../../lib/data";
import Image from "next/image";
import NavRest from "../components/NavRest";

const GalleryPage = () => {
  return (
    <>
    <NavRest />
      <Container>
        <Row className="mt-52 g-0">
          {Photos.map(({ id, src}) => (
            <Col sm={4} key={id}>
              <img src={src} alt="photo" className="img-size" />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default GalleryPage;
