import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import Product from "./pages/Product";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { House, Envelope, Telephone } from "react-bootstrap-icons";

export const ProductsContext = React.createContext();
export const CartContext = React.createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <MyNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>

        <footer className="bg-dark text-light p-5">
          <Container>
            <Row>
              <Col>
                <h2 className="mb-3">Contact</h2>

                <p>
                  <House /> Mariatorget 3, Stockholm 118 48, Sweden
                </p>

                <p>
                  <Envelope /> info@example.com
                </p>
                <p>
                  <Telephone /> 08-545 789 00
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
