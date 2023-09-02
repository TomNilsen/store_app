import React, { useContext } from "react";
import { CartContext } from "../App";

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
      <>
        {cart.map((product) => {
          return (
            <article key={product.id}>
              <h3>{product.title}</h3>
              <div>
                <img src={product.img} />
                <div className="checkoutInfo">
                  <p id="price">{`Price: ${product.price} $`}</p>
                  <p>{`Size: ${product.size}`}</p>

                  <div className="checkoutBtns">
                    <button
                      onClick={() => {
                        decrease(product.id, product.quantity, product.price);
                      }}
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      onClick={() => {
                        increase(product.id, product.quantity, product.price);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <div className="infoBottom">
                    <p>{`Total: ${product.total.toFixed(2)} $`}</p>
                    <button
                      className="m-2"
                      variant="danger"
                      onClick={() => {
                        deleteItem(product.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </>
    );
  }
}

export default MainCheckout;
