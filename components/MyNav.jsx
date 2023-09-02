import React from "react";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <header>
      <h1>Real fake store</h1>
      <nav>
        <Link to="/" className="navStart">Home</Link>
        <Link to="/checkout" className="navEnd">Checkout</Link>
      </nav>
    </header>
  );
}

export default MyNav;
