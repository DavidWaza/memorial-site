"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import SendMessageForm from "../components/SendMessageForm";

const page = () => {
  return (
      <Container>
        <Row className="pt-40">
          <Col>
            <div className="text-center">
              <Header title="Tribute Hall" />
            </div>
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

export default page;
