import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext, ProductsContext } from "../App";

function Product() {
  const { id } = useParams();
  const products = useContext(ProductsContext);
  const [cart, setCart] = useContext(CartContext);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [modalClass, setModalClass] = useState("addedClose");
  const [errorModal, setErrorModal] = useState("errorClose");

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
      modalOpen();
    } else {
      errorMopen();
    }
  }

  function modalOpen() {
    setModalClass("addedClose");
    setErrorModal("errorClose");
    setModalClass("added");
    setTimeout(modalClose, 2000);
  }

  function modalClose() {
    setModalClass("addedClose");
  }

  function errorMopen() {
    setModalClass("addedClose");
    setErrorModal("errorClose");
    setErrorModal("errorOpen");
    setTimeout(errorMclose, 2000);
  }

  function errorMclose() {
    setErrorModal("errorClose");
  }

  return (
    <section className="product">
      {products.map((product) => {
        if (product.id == id) {
          return (
            <article key={product.id}>
              <div className={modalClass}>
                <p>{product.title}</p>
                <img src={product.image} alt={product.title} />
                <p>Added to cart!</p>
              </div>

              <div className={errorModal}>
                <p>Product of this size already added to shopping cart.</p>
              </div>

              <h2>{product.title}</h2>

              <div>
                <img src={product.image} alt={product.title} />

                <form onSubmit={addToCart}>
                  <h3>{`${product.price.toFixed(2)} $`}</h3>
                  <div>
                    <p>Select size:</p>
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
                  </div>

                  <button type="submit">Add to cart</button>

                  <div>
                    <h3>Description</h3>
                    <p>{product.description}</p>
                  </div>
                </form>
              </div>
            </article>
          );
        }
      })}
    </section>
  );
}

export default Product;
