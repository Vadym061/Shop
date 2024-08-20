import React from "react";
import { Link } from "react-router-dom";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <ul className="header__pages">
          <li className="header__item">
            <Link className="header__link" to="/news">
              Новини і відгуки
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/shop">
              Магазини
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/about">
              Про нас
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/delivery">
              Доставка, оплата, повернення
            </Link>
          </li>
        </ul>
        <ul className="header__contact">
          <BsTelephoneForwardFill className="header__nummer" />
          <li className="header__item">
            <Link className="header__contact--link" to="tel:+380630000000">
              0630000000
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__contact--link" to="tel:+380630000111">
              0630000111
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__contact--link" to="tel:+380630000222">
              0630000222
            </Link>
          </li>
          <MdAlternateEmail className="header__mail" />
          <li className="header__item">
            <Link
              className="header__contact--link"
              to="mailto:shop.online@gg.com"
            >
              shop.online@gg.com
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
