"use client";
// import { images } from "../../../lib/data";
import { Container, Col, Row } from "react-bootstrap";
import NavRest from "../components/NavRest";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Photos from "../components/photo";

const Biography = () => {
  const [index, setIndex] = useState(-1);
  // const photos = Photos()

  return (
    <main className="mt-10">
      <NavRest />
      <Container>
        <Row>
          <Col>
            <PhotoAlbum
              photos={Photos()}
              layout="rows"
              targetRowHeight={150}
              onClick={({ index }) => setIndex(index)}
            />
            <Lightbox
              slides={Photos()}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              // enable optional lightbox plugins
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default Biography;
