"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SendMessageForm from "../components/SendMessageForm";

const TributePage = () => {
  return (
    <Container>
      <Row className="pt-40">
        <Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <SendMessageForm />
        </Col>
      </Row>
    </Container>
  );
};

export default TributePage;
