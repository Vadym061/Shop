import React, { useState, useEffect } from "react";
import useProducts from "../UseProducts/UseProducts";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import "./product.css";
import "../Discounted/discounted.css";

function Product() {
  const { products, error } = useProducts();
  const [favorites, setFavorites] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="section__product">
      <h3 className="section__title">Всі товари</h3>

      <ul className="product-list">
        {products.slice(0, visibleCount).map((product, index) => (
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
                    ((product.price_old - product.price) / product.price_old) *
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
  );
}

export default Product;
