import React from "react";
import useProducts from "../../components/UseProducts/UseProducts";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useFavorites } from '../../components/FavoritesContext/FavoritesContext';

function Sale() {
  const { products, error } = useProducts();
  const { favorites, toggleFavorite } = useFavorites();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="discounted">
      <h2 className="section__title">Знижки</h2>
      <ul className="discounted__list">
        {products.map(
          (product, index) =>
            product.price_old > 0 && (
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
                    backgroundColor: favorites.includes(product.id) ? "gray" : "",
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

export default Sale;