import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../image/logo-white.svg";
import "./navigation.css";
import User from "../User/User";

const promotion = [
  { id: 1, name: "Знижки", path: "/sale", color: "rot" },
  { id: 2, name: "Новинки", path: "/new-product", color: "green" },
];

function Navigation({ cartItemCount }) {
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Помилка при отриманні категорій:", error);
      }
    };

    const fetchTypes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/types");
        setTypes(response.data);
      } catch (error) {
        console.error("Помилка при отриманні типів:", error);
      }
    };

    fetchCategories();
    fetchTypes();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="nav__container">
      <div className="nav__wraper">
        <Link className="nav__logo" to="/">
          <img src={logo} alt="LOGO" />
        </Link>
        <div className="nav__block">
          <ul className="nav__category">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`nav__category--item ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <Link to={`${category.name}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
          <div className="nav__menu">
            <ul className="nav__types">
              {promotion.map((item) => (
                <li className="nav__types--item" key={item.id}>
                  <Link className={item.color} to={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="nav__types">
              {types.map((type) => (
                <li key={type.id} className="nav__types--item menu__item">
                  <Link to={`${type.name}`}>{type.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <User cartItemCount={cartItemCount} />
      </div>
    </div>
  );
}

export default Navigation;
