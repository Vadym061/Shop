import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BiLogoInstagram,
  BiLogoFacebookCircle,
  BiLogoYoutube,
  BiLogoTelegram,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import "./footer.css";

const promotion = [
  { id: 1, name: "Знижки", path: "/sale" },
  { id: 2, name: "Новинки", path: "/new-product" },
];

function Footer() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/types");
        setTypes(response.data);
      } catch (error) {
        console.error("Помилка при отриманні типів:", error);
      }
    };
    
    fetchTypes();
  }, []);

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list">
          <h3 className="footer__title">Каталог</h3>
          {promotion.map((item) => (
            <li className="footer__promo" key={item.id}>
              <Link className={item.color} to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
          {types.map((type) => (
            <li key={type.id} className="footer__type">
              <Link to={`${type.name}`}>{type.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__info">
          <h3 className="footer__title">Інформація</h3>
          <li className="footer__info-item">
            <Link className="" to="/news">
              Новини і відгуки
            </Link>
          </li>
          <li className="footer__info-item">
            <Link className="" to="/shop">
              Магазини
            </Link>
          </li>
          <li className="footer__info-item">
            <Link className="" to="/about">
              Про нас
            </Link>
          </li>
          <li className="footer__info-item">
            <Link className="" to="/delivery">
              Доставка, оплата, повернення
            </Link>
          </li>
        </ul>
        <ul className="footer__networks">
          <h3 className="footer__title">Соціальні мережі</h3>
          <li>
            <Link to={"https://www.youtube.com/"} target="_blank">
              <BiLogoYoutube />
            </Link>
          </li>
          <li>
            <Link to={"https://web.telegram.org/"} target="_blank">
              <BiLogoTelegram />
            </Link>
          </li>
          <li>
            <Link to={"https://www.instagram.com/"} target="_blank">
              <BiLogoInstagram />
            </Link>
          </li>
          <li>
            <Link to={"https://www.facebook.com/"} target="_blank">
              <BiLogoFacebookCircle />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;