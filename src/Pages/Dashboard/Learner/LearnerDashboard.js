import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LearnerDashboard = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <h1>Driving Lesson Learner Available Package</h1>
          <Col className="mt-5 text center" lg={6} md={6} sm={12}>
            <Card style={{ width: "28rem" }}>
              <Card.Body>
                <Card.Title>Driving Lesson</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Driving Lesson Learning Package
                </Card.Subtitle>
                <Card.Text>
                  In Bangladesh where public transport is in the most depressive
                  condition ever, motorbikes are the real escape to treat your
                  journey a better way. Motorbikes wheel through our landscape
                  from ancient times.
                </Card.Text>
                <Link to="/payment/1">
                  <Button className="me-2 btn-submit">Price - 200$</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-5 text center" lg={6} md={6} sm={12}>
            <Card style={{ width: "28rem" }}>
              <Card.Body>
                <Card.Title>Bike Riding Lesson</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Best Bike Learning Package
                </Card.Subtitle>
                <Card.Text>
                  In Bangladesh where public transport is in the most depressive
                  condition ever, motorbikes are the real escape to treat your
                  journey a better way. Motorbikes wheel through our landscape
                  from ancient times.
                </Card.Text>
                <Link to="/payment/2">
                  <Button className="me-2 btn-submit">Price - 100$ </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LearnerDashboard;
