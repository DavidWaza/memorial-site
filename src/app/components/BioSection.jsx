"use client";
import { Container, Col, Row } from "react-bootstrap";
import Button from './Button'

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
    <Container className="my-10">
      <Row>
        <Col sm={6}>
          <div className="pt-20 pb-6 relative">
            <p className="primary_font secondary_font-size">{bioContents.title.toUpperCase()}</p>
            <hr className="hr"/>
            <p className="primary_font leading-[25px] tracking-normal">{bioContents.content}</p>
          </div>
          <div className="primary_font secondary_font-size tracking-[0.16rem]">
            <Button intent="secondary" size="medium" className="text-md font-normal">
                View Biography
            </Button>
          </div>
        </Col>
        <Col sm={6}>
            <div className="bio-bg-image"></div>
        </Col>
      </Row>
    </Container>
  );
}
