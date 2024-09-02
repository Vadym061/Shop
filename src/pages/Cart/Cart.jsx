import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cart.css";

const Cart = ({ cartItems, updateCartItemQuantity, removeCartItem, clearCart }) => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("НОВА ПОШТА");
  const [paymentMethod, setPaymentMethod] = useState("При отриманні");
  const [cardNumber, setCardNumber] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const validateForm = () => {
    const errors = {};
    if (!customerName) errors.name = "Please enter your name.";
    if (!customerEmail) errors.email = "Please enter your email.";
    if (paymentMethod === "Карткою" && !cardNumber) errors.cardNumber = "Please enter your card number.";
    if (!customerEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = "Please enter a valid email.";
    return errors;
  };

  const handlePayment = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const generatedOrderNumber = Math.floor(Math.random() * 1000000);
    setOrderNumber(generatedOrderNumber);
    console.log(`Sending email to ${customerEmail} with order number ${generatedOrderNumber}`);
    clearCart();
    setShowConfirmationModal(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
    setShowPaymentForm(false);
    setCustomerName("");
    setCustomerEmail("");
    setCardNumber("");
  };

  return (
    <div className="wrapper">
      <main>
        <div className={`cart ${showPaymentForm ? "cart--shifted" : ""}`}>
          <h2 className="cart__title">Кошик</h2>
          {cartItems.length === 0 ? (
            <p>Кошик порожній</p>
          ) : (
            <>
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
              <h3>Загальна ціна: {totalPrice} грн</h3>
              {!showPaymentForm && (
                <button
                  className="cart__pay-btn"
                  onClick={() => setShowPaymentForm(true)}
                >
                  Оплатити
                </button>
              )}
            </>
          )}
        </div>
        <div className={`payment-form ${showPaymentForm ? "payment-form--visible" : ""}`}>
          <button className="payment-form__close-btn" onClick={() => setShowPaymentForm(false)}>Закрити</button>
          <h3>Введіть дані для оплати</h3>
          <input
            type="text"
            placeholder="Ваше ім'я"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
          <input
            type="email"
            placeholder="Ваша пошта"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
          <select
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
          >
            <option value="НОВА ПОШТА">НОВА ПОШТА</option>
            <option value="УКР ПОШТА">УКР ПОШТА</option>
          </select>
          <div>
            <label className="label__checked">
            Оплата при отриманні
              <input
                type="radio"
                value="При отриманні"
                checked={paymentMethod === "При отриманні"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              
            </label>
            <label className="label__checked">
            Оплата карткою
              <input
                type="radio"
                value="Карткою"
                checked={paymentMethod === "Карткою"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              
            </label>
          </div>
          {paymentMethod === "Карткою" && (
            <>
              <input
                type="text"
                placeholder="Номер картки"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              {formErrors.cardNumber && <p className="error">{formErrors.cardNumber}</p>}
            </>
          )}
          <button onClick={handlePayment}>Підтвердити оплату</button>
        </div>
        {showConfirmationModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Дякую за покупку, {customerName}!</h3>
              <p>Ваше замовлення № {orderNumber}</p>
              <p>Лист з підтвердженням відправлено на {customerEmail}</p>
              <button onClick={closeConfirmationModal}>OK</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;