import React from "react";
import { Link } from "react-router-dom";
import baner from "../../image/baner.png";
import tshirt from "../../image/t-shirt.png";
import shorts from "../../image/shorts.png";
import novelty from "../../image/novelty.png";
import pants from "../../image/pants.png";
import "./home.css";
import Discounted from "../../components/Discounted/Discounted";
import Product from "../../components/Product/Product";

const productSection = [
  { id: 1, name: "Футболки", description: "Секція футболок", image: tshirt },
  { id: 2, name: "Шорти", description: "Секція шорти", image: shorts },
  { id: 3, name: "Комплекти", description: "Секція комплект", image: novelty },
  { id: 4, name: "Штани", description: "Секція штани", image: pants },
];

function Home() {
  return (
    <main>
      <div className="section__hero">
        <img className="header__hero" src={baner} alt="Банер сезоного товару" />
        <Link className="section__link btn__home" to="/new-product">
          Перейти
        </Link>
      </div>
      <ul className="product__section">
        {productSection.map((prod) => (
          <li className="product__section--item" key={prod.id}>
            <Link to="#" className="product__section--link">
              <img src={prod.image} alt={prod.description} />
              <span className="product__btn btn__home">Перейти</span>
            </Link>
          </li>
        ))}
      </ul>
      <Discounted />
      <Product />
    </main>
  );
}

export default Home;
