import React, { useState } from "react";
import useProducts from "../UseProducts/UseProducts";
import { GrFavorite } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./discounted.css";
import { Link } from "react-router-dom";

function Discounted() {
  const { products, error } = useProducts();
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className="discounted">
      <h2 className="section__title">Знижки</h2>
      <Swiper spaceBetween={40} slidesPerView={4}>
        {products.map(
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
  );
}

export default Discounted;
