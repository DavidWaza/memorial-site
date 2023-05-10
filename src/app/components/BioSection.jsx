"use client";
import { Container, Col, Row } from "react-bootstrap";
import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <Container>
      <Row className="py-20 px-3 md:px-0 g-5 ">
        <Col sm={6}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className="pt-20 pb-6 relative space-adjustment"
          >
            <p className="primary_font secondary_font-size font-adjustment">
              {bioContents.title.toUpperCase()}
            </p>
            <hr className="hr" />
            <p className="primary_font leading-[25px] tracking-normal font-adjustment">
              {bioContents.content}
            </p>
          </motion.div>
          <Link href="/biography">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.7,
                ease: [0.9, 0.71, 0.7, 1.01],
              }}
              className="primary_font secondary_font-size tracking-[0.16rem] button-group"
            >
              <Button
                intent="secondary"
                size="medium"
                className="text-md font-normal"
              >
                View Biography
              </Button>
            </motion.div>
          </Link>
        </Col>
        <Col sm={6}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className="bio-bg-image"
          ></motion.div>
        </Col>
      </Row>
    </Container>
  );
}
