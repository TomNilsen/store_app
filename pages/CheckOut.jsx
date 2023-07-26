import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainCheckout from "../components/MainCheckout";

function CheckOut() {
  return (
    <Container className="p-5" style={{minHeight: '40rem'}}>
      <Row>
        <Col>
          <h2>Checkout</h2>
        </Col>
      </Row>
      <Row>
        <MainCheckout />
      </Row>
    </Container>
  );
}

export default CheckOut;
