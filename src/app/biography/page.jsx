"use client";
import GalTributeSection from "../components/GalTributeSection";
import styles from "./bio.module.css";
import { Container, Col, Row } from "react-bootstrap";
import NavRest from "../components/NavRest";

export default function Biography() {
  return (
    <main className="mt-10">
      <NavRest />
      <div className={styles.hero}></div>
      <Container>
        <Row>
          <Col>
            <div className="mt-16">
              <p className="primary_font secondary_font-size">Early life</p>
            </div>
          </Col>
        </Row>
        <Row>
          <GalTributeSection />
        </Row>
      </Container>
    </main>
  );
}
