"use client";
import { Container, Col, Row } from "react-bootstrap";
import Button from "./Button";
import Link from "next/link";

export default function BioSection() {
  const bioContents = {
    title: "biography",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Praesent vehicula sapien eu nisi fringilla, 
       in mollis nisl vulputate. Nullam efficitur, sem sit am
       et tempus dapibus, eros velit aliquet mauris, quis facili
       sis tellus mauris eget urna. Duis sed justo vestibulum, efficitur massa eget.`,
  };
  return (
    <Container >
      <Row className="py-20 px-3 md:px-0 g-5 ">
        <Col sm={6}>
          <div className="pt-20 pb-6 relative space-adjustment">
            <p className="primary_font secondary_font-size font-adjustment">
              {bioContents.title.toUpperCase()}
            </p>
            <hr className="hr" />
            <p className="primary_font leading-[25px] tracking-normal font-adjustment">
              {bioContents.content}
            </p>
          </div>
          <Link href="/biography">
            <div className="primary_font secondary_font-size tracking-[0.16rem] button-group">
              <Button
                intent="secondary"
                size="medium"
                className="text-md font-normal"
              >
                View Biography
              </Button>
            </div>
          </Link>
        </Col>
        <Col sm={6}>
          <div className="bio-bg-image"></div>
        </Col>
      </Row>
    </Container>
  );
}
