import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../App";

function Home() {
  const products = useContext(ProductsContext);

  return (
    <section className="home">
      {products.map((product) => {
        return (
          <article>
            <img src={product.image} />

            <h3>{product.title}</h3>
            <p>{`${product.price.toFixed(2)} $`}</p>
            <Link to={`product/${product.id}`} className="cardLink">
              Product info
            </Link>
          </article>
        );
      })}
    </section>
  );
}

export default Home;
