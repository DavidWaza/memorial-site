"use client";
import { images } from "../../../lib/data";
import { Masonry } from "react-masonry";
import { Container, Col, Row } from "react-bootstrap";
import NavRest from "../components/NavRest";

const Biography = () => {
  return (
    <main className="mt-10">
     <NavRest />
      <Container>
        <Row>
          <Col>
            <Masonry>
              {images.map(({ id, src }) => (
                <Col sm={4} key={id}>
                  <div className="grid-item grid-item--width2">
                    <img src={src} alt="atani" />
                  </div>
                </Col>
              ))}
            </Masonry>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default Biography;
