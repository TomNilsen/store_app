import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../App";
import { Card, Col, Container, Row } from "react-bootstrap";

function Home() {
  const products = useContext(ProductsContext);

  return (
    <Container className="p-5" style={{minHeight: '40rem'}}>
      <Row className="gy-5">
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
              <Card style={{ height: "25rem" }}>
                <Container>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{
                      objectFit: "contain",
                      height: "15rem",
                      marginTop: "1.5rem",
                    }}
                  />

                  <Card.Body style={{ height: "5rem" }}>
                    <Card.Title
                      style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {product.title}
                    </Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Link to={`product/${product.id}`} className="btn btn-dark">Info</Link>
                  </Card.Body>
                </Container>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Home;
