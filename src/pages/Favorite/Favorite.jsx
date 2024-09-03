import React from "react";
import { useFavorites } from '../../components/FavoritesContext/FavoritesContext'; 
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import useProducts from '../../components/UseProducts/UseProducts';
import "./Favorite.css";

function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const { products, error } = useProducts(); // Отримуємо продукти з хука

  if (error) {
    return <div>{error}</div>;
  }

  // Список улюблених товарів
  const favoriteProducts = favorites.map((productId) => {
    const product = products.find((p) => p.id === productId);
    return product;
  }).filter(Boolean); // Фільтруємо undefined значення

  return (
    <div className="favorites-page">
      <h2 className="section__title">Улюблені товари</h2>
      {favoriteProducts.length === 0 ? (
        <p>У вас немає улюблених товарів.</p>
      ) : (
        <ul className="favorites-list">
          {favoriteProducts.map((product) => (
            <li key={product.id} className="favorite-item">
              <Link to={`/product/${product.id}`}>
                <img
                  width={275}
                  height={340}
                  src={product.image_url}
                  alt={product.name}
                />
                <h3 className="titel__card">{product.name}</h3>
                <p className="price__card">{product.price}грн</p>
              </Link>
              <button
                className="favorite__remove"
                onClick={() => toggleFavorite(product.id)}
              >
                <GrFavorite />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;