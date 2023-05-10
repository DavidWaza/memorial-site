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
        <Row className="mt-52">
          {Photos.map(({ id, src, width, height }) => (
            <Col sm={4} key={id}>
              <img src={src} alt="photo"  />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default GalleryPage;
