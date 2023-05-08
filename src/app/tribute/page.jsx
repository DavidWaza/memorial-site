'use client'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'

const page = () => {
  return (
    <div>
      <Container>
      <Row className="pt-40">
          <Col>
            <div className="text-center">
              <Header title="Tribute Hall" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default page