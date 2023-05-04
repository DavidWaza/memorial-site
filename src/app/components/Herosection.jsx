"use client";
import { Container, Row, Col } from "react-bootstrap";
import CardWrapper from "./CardWrapper";
import AuthForms from './AuthForms'

export default function Herosection() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="bg-[#332C3D] mt-28 rounded-[24px] p-8 primary_font">
            <Container>
              <Row>
                <Col sm={6}>
                  {/* Image */}
                  <h1>Let put some images here</h1>
                </Col>
                <Col sm={6}>
                  <CardWrapper>
                    <AuthForms />
                  </CardWrapper>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
