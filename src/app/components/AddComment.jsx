import { Container, Col, Row } from "react-bootstrap";

const AddComment = ({ isSubmitted, firstName, lastName, message }) => {
  return (
    <Container>
      <Row className="card">
        <Col>
          <div className="flex">
            <p className="primary_font font-black antialiased text-md">
              {isSubmitted && firstName + " " + " " + lastName}
            </p>
          </div>
          <div>
            <p className="primary_font antialiased secondary_font-size tracking-normal">
              {isSubmitted && message}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default AddComment;
