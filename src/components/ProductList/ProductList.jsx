import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import "../../components/Product/product.css";
import "../../components/Discounted/discounted.css";

const ProductList = ({ products, typeId }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const filteredProducts = products
    .filter((product) => product.type_id === typeId)
    .map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      price_old: product.price_old,
      image_url: product.image_url,
    }));

  return (
    <div className="discounted">
      <ul className="product-list">
        {filteredProducts.map((prod, index) => (
          <li key={index} className="discounted__item">
            <Link to={`/product/${prod.id}`}>
              <img
                width={275}
                height={340}
                src={prod.image_url}
                alt={prod.name}
              />
              <h3 className="titel__card">{prod.name}</h3>

              <p className="price__card">
                Ціна:
                <span
                  className={`price__card ${
                    prod.price_old ? "price__card--sale" : ""
                  }`}
                >
                  {prod.price}грн
                </span>
                {prod.price_old > 0 && (
                  <span className="price__card--old"> {prod.price_old}грн</span>
                )}
              </p>
              {prod.price_old > 0 && (
                <p className="discounted__procent">
                  {Math.round(
                    ((prod.price_old - prod.price) / prod.price_old) * 100
                  )}
                  %
                </p>
              )}
            </Link>
            <button
              className="discounted__favorite"
              onClick={() => toggleFavorite(prod.id)}
              style={{
                backgroundColor: favorites.includes(prod.id) ? "gray" : "",
              }}
            >
              <GrFavorite />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
