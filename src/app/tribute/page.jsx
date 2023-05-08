"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SendMessageForm from "../components/SendMessageForm";
import NavRest from "../components/NavRest";

const TributePage = () => {
  return (
    <main className="mt-10">
      <NavRest />
      <Container>
        <Row className="pt-40">
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <SendMessageForm />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default TributePage;
