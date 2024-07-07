import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./user.css";

function User({ cartItemCount }) {
  return (
    <ul className="user__container">
      <li className="user__item">
        <Link to="#">
          <AiOutlineUser />
        </Link>
      </li>
      <li className="user__item">
        <Link to="/favorite">
          <GrFavorite className="favorite-icon" />
        </Link>
      </li>
      <li className="user__item">
        <Link to="/cart">
          <HiOutlineShoppingCart />
          {cartItemCount > 0 && (
            <span className="cart-counter">{cartItemCount}</span>
          )}
        </Link>
      </li>
    </ul>
  );
}

export default User;
