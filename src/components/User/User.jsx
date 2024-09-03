import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useFavorites } from '../../components/FavoritesContext/FavoritesContext';
import "./user.css";

function User({ cartItemCount }) {
  const { favorites } = useFavorites();

  return (
    <ul className="user__container">
      <li className="user__item">
        <Link to="#">
          <AiOutlineUser />
        </Link>
      </li>
      <li className="user__item">
        <Link to="/favorites">
          <GrFavorite className="favorite-icon" />
          {favorites.length > 0 && (
            <span className="favorite-counter">{favorites.length}</span>
          )}
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
