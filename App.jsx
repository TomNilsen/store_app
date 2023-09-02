import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import Product from "./pages/Product";
import MyNav from "./components/MyNav";
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

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </main>

        <footer>
          <h2>Contact</h2>

          <ul>
            <li>
              <House />
              <p>Mariatorget 3, Stockholm 118 48, Sweden</p>
            </li>
            <li>
              <Envelope />
              <p>info@example.com</p>
            </li>
            <li>
              <Telephone />
              <p>08-545 789 00</p>
            </li>
          </ul>
        </footer>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
