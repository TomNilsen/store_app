import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext, ProductsContext } from "../App";
import { Col, Container, Form, Row } from "react-bootstrap";

function Product() {
  const { id } = useParams();
  const products = useContext(ProductsContext);
  const [cart, setCart] = useContext(CartContext);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  function addToCart(e) {
    e.preventDefault();
    let counter = 0;
    const newItem = {
      id: sizeId,
      img: image,
      title: title,
      size: size,
      price: price,
      quantity: 1,
      total: price,
    };

    cart.map((item) => {
      if (item.id === newItem.id) {
        counter = counter + 1;
      }
    });

    if (counter === 0) {
      setCart([...cart, newItem]);
    }
  }

  return (
    <Container className="p-5" style={{ minHeight: "40rem" }}>
      {products.map((product) => {
        if (product.id == id) {
          return (
            <div key={product.id}>
              <Row>
                <Col lg={12}>
                  <h2>{product.title}</h2>
                </Col>
              </Row>
              <Row className="pt-5">
                <Col lg={6}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ objectFit: "contain", width: "70%" }}
                  />
                </Col>

                <Col lg={6}>
                  <Form onSubmit={addToCart}>
                    <h3 className="mt-5">{`${product.price} $`}</h3>
                    <p className="mt-5">Select size:</p>
                    <select
                      name="size"
                      onChange={(e) => {
                        setSizeId(`${product.id}${e.target.value}`);
                        setImage(product.image);
                        setTitle(product.title);
                        setSize(e.target.value);
                        setPrice(product.price);
                      }}
                      required
                    >
                      <option value="">Size</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                    <br />
                    <button type="submit" className="btn btn-dark mt-3">
                      Add to cart
                    </button>
                    <h3 className="mt-5">Description</h3>
                    <p>{product.description}</p>
                  </Form>
                </Col>
              </Row>
            </div>
          );
        }
      })}
    </Container>
  );
}

export default Product;
