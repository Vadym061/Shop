import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import Tshirt from "../../image/t-shirt.png";
import Shorts from "../../image/shorts.png";
import Novelty from "../../image/novelty.png";
import Pants from "../../image/pants.png";
import TshirtGirl from "../../image/t-shirt-girl.jpeg";
import ShortGirl from "../../image/shorts-women.jpeg";
import SommerGirl from "../../image/sommer-women.jpeg";
import SectionGirl from "../../image/women-secton.jpeg";
import "swiper/css";
import "../Discounted/discounted.css";
import "../Product/product.css";
import "../../pages/Home/home.css";

// menProductSection.js
export const menProductSection = [
  {
    id: 1,
    name: "Футболки",
    description: "Секція футболок",
    image: `${Tshirt}`,
  },
  { id: 2, name: "Шорти", description: "Секція шорти", image: `${Shorts}` },
  {
    id: 3,
    name: "Комплекти",
    description: "Секція комплект",
    image: `${Novelty}`,
  },
  { id: 4, name: "Штани", description: "Секція штани", image: `${Pants}` },
];

// womenProductSection.js
export const womenProductSection = [
  {
    id: 1,
    name: "Футболки",
    description: "Секція футболок",
    image: `${TshirtGirl}`,
  },
  { id: 2, name: "Шорти", description: "Секція шорти", image: `${ShortGirl}` },
  {
    id: 3,
    name: "Комплекти",
    description: "Секція комплект",
    image: `${SommerGirl}`,
  },
  {
    id: 4,
    name: "Штани",
    description: "Секція штани",
    image: `${SectionGirl}`,
  },
];

const ProductPage = ({ products, categoryId, bannerImage, productSection }) => {
  const [favorites, setFavorites] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const filteredProducts = products
    .filter((product) => product.category_id === categoryId)
    .map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      price_old: product.price_old,
      image_url: product.image_url,
    }));

  return (
    <div>
      <div className="section__hero">
        <img
          className="header__hero"
          src={bannerImage}
          alt="Банер сезоного товару"
        />
        <Link className="section__link btn__home" to="/sale">
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
      <ul className="discounted">
        <h2 className="section__title">Знижки</h2>
        <Swiper spaceBetween={40} slidesPerView={4}>
          {filteredProducts.map(
            (product, index) =>
              product.price_old > 0 && (
                <SwiperSlide key={index}>
                  <li className="discounted__item">
                    <Link to={`/product/${product.id}`}>
                      <img
                        width={275}
                        height={340}
                        className="product__image"
                        src={product.image_url}
                        alt={product.name}
                      />
                      <h3 className="titel__card">{product.name}</h3>
                      <p className="price__card">
                        Ціна:{" "}
                        <span className="price__card--sale">
                          {product.price}грн
                        </span>{" "}
                        <span className="price__card--old">
                          {product.price_old}грн
                        </span>
                      </p>
                      <p className="discounted__procent">
                        {Math.round(
                          ((product.price_old - product.price) /
                            product.price_old) *
                            100
                        )}
                        %
                      </p>
                    </Link>
                    <button
                      className="discounted__favorite"
                      onClick={() => toggleFavorite(product.id)}
                      style={{
                        backgroundColor: favorites.includes(product.id)
                          ? "gray"
                          : "",
                      }}
                    >
                      <GrFavorite />
                    </button>
                  </li>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </ul>
      <div className="section__product">
        <h3 className="section__title">Жіночі товари</h3>
        <ul className="product-list">
          {filteredProducts.slice(0, visibleCount).map((product, index) => (
            <li key={index} className="discounted__item">
              <Link to={`/product/${product.id}`}>
                <img
                  width={275}
                  height={340}
                  src={product.image_url}
                  alt={product.name}
                />
                <h3 className="titel__card">{product.name}</h3>
                <p className="price__card">
                  Ціна:
                  <span
                    className={`price__card ${
                      product.price_old ? "price__card--sale" : ""
                    }`}
                  >
                    {product.price}грн
                  </span>
                  {product.price_old > 0 && (
                    <span className="price__card--old">
                      {" "}
                      {product.price_old}грн
                    </span>
                  )}
                </p>
                {product.price_old > 0 && (
                  <p className="discounted__procent">
                    {Math.round(
                      ((product.price_old - product.price) /
                        product.price_old) *
                        100
                    )}
                    %
                  </p>
                )}
              </Link>
              <button
                className="discounted__favorite"
                onClick={() => toggleFavorite(product.id)}
                style={{
                  backgroundColor: favorites.includes(product.id) ? "gray" : "",
                }}
              >
                <GrFavorite />
              </button>
            </li>
          ))}
        </ul>
        {visibleCount < products.length && (
          <button onClick={loadMore} className="load-more">
            Показати більше
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
