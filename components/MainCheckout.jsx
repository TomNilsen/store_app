import React, { useContext } from "react";
import { CartContext } from "../App";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

function MainCheckout() {
  const [cart, setCart] = useContext(CartContext);

  function increase(id, quantity, price) {
    const update = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity + 1,
          total: price * (quantity + 1),
        };
      } else {
        return item;
      }
    });
    setCart(update);
  }

  function decrease(id, quantity, price) {
    if (quantity !== 1) {
      const update = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity - 1,
            total: price * (quantity - 1),
          };
        } else {
          return item;
        }
      });
      setCart(update);
    }
  }

  function deleteItem(id) {
    const uppdate = cart.filter((item) => item.id !== id);
    console.log(uppdate);
    setCart(uppdate);
  }

  if (cart.length === 0) {
    return <p className="mt-5">Cart is empty</p>;
  } else {
    return (
      <Col lg={12}>
        {cart.map((product) => {
          return (
            <Card className="p-3 mt-4 mb-4" key={product.id}>
              <Container>
                <Row>
                  <Col lg={4}>
                    <Card.Img
                      src={product.img}
                      style={{
                        objectFit: "contain",
                        height: "15rem",
                        marginTop: "1.5rem",
                      }}
                    />
                  </Col>
                  <Col lg={8}>
                    <Card.Body style={{ height: "5rem" }}>
                      <Card.Title
                        className="m-2"
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {product.title}
                      </Card.Title>
                      <Card.Text className="m-2">{`Price: ${product.price} $`}</Card.Text>
                      <Card.Text className="m-2">{`Size: ${product.size}`}</Card.Text>
                      <div className="d-flex align-items-center">
                        <Button
                          className="m-2"
                          onClick={() => {
                            decrease(
                              product.id,
                              product.quantity,
                              product.price
                            );
                          }}
                          variant="dark"
                        >
                          -
                        </Button>
                        <Card.Text className="m-2">
                          {product.quantity}
                        </Card.Text>
                        <Button
                          className="m-2"
                          onClick={() => {
                            increase(
                              product.id,
                              product.quantity,
                              product.price
                            );
                          }}
                          variant="dark"
                        >
                          +
                        </Button>
                      </div>
                      <div className="d-flex justify-content-between mt-5">
                        <Card.Text className="m-2">{`Total: ${product.total} $`}</Card.Text>
                        <Button
                          className="m-2"
                          variant="danger"
                          onClick={() => {
                            deleteItem(product.id);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Container>
            </Card>
          );
        })}
      </Col>
    );
  }
}

export default MainCheckout;
