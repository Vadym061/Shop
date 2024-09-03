import React from "react";
import useProducts from "../../components/UseProducts/UseProducts";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useFavorites } from "../../components/FavoritesContext/FavoritesContext";

function NewProduct() {
  const { products, error } = useProducts();
  const { favorites, toggleFavorite } = useFavorites();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="new-products">
      <h2 className="section__title">Новинки</h2>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="new-product__item">
            <Link to={`/product/${product.id}`}>
              <img
                width={275}
                height={340}
                src={product.image_url}
                alt={product.name}
              />
              <h3 className="titel__card">{product.name}</h3>
              <p className="price__card">
                Ціна: <span>{product.price}грн</span>
              </p>
            </Link>
            <button
              className="new-product__favorite"
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
    </div>
  );
}

export default NewProduct;