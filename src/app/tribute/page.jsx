"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SendMessageForm from "../components/SendMessageForm";
import NavRest from "../components/NavRest";
import UserCommentCard from "../components/UserCommentCard";
import { UserCommentsProfile } from "../../../lib/data";

const TributePage = () => {
  return (
    <main className="mt-10">
      <NavRest />
      <Container>
        <Row className="pt-40 g-5">
          {UserCommentsProfile.map(({ name, src }, index) => (
            <Col sm={4} key={index}>
              <UserCommentCard src={src} name={name} />
            </Col>
          ))}
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
