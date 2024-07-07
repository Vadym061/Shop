import React, { useState } from "react";
import useProducts from "../../components/UseProducts/UseProducts";
import { GrFavorite } from "react-icons/gr";
import "../../components/Discounted/discounted.css";
import "../Sale/sale.css";
import { Link } from "react-router-dom";

function NewProduct() {
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
    <div className="discounted">
      <h2 className="section__title">Новинки</h2>
      <ul className="discounted__list">
        {products.map(
          (product, index) =>
            product.price_old === 0 && (
              <li key={index} className="discounted__item">
                <Link to={`/product/${product.id}`}>
                  <img
                    width={275}
                    height={340}
                    className="product__image"
                    src={product.image_url}
                    alt={product.name}
                  />
                  <h3 className="titel__card">{product.name}</h3>
                  <p className="price__card">Ціна: {product.price}грн</p>
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
            )
        )}
      </ul>
    </div>
  );
}

export default NewProduct;
