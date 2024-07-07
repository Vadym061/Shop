import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cart.css";

const Cart = ({ cartItems, updateCartItemQuantity, removeCartItem }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="wrapper">
      <main>
        <div className="cart">
          <h2 className="cart__title">Кошик</h2>
          {cartItems.length === 0 ? (
            <p>Кошик порожній</p>
          ) : (
            <ul className="cart__list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart__item">
                  <img
                    width={100}
                    height={130}
                    src={item.image_url}
                    alt={item.name}
                  />
                  <div className="cart__item-details">
                    <h3>{item.name}</h3>
                    <div className="cart-item-quantity">
                      <button
                        className="cart__quantity-btn"
                        onClick={() =>
                          updateCartItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="cart__quantity-btn"
                        onClick={() =>
                          updateCartItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </div>
                    <p>Ціна: {item.price} грн</p>

                    <button
                      className="cart__delete-btn"
                      onClick={() => removeCartItem(item.id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <h3>Загальна ціна: {totalPrice} грн</h3>
        </div>
      </main>
    </div>
  );
};

export default Cart;
