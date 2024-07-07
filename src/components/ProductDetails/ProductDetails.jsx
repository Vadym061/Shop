import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./productDetails.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Помилка при завантаженні продукту:", error);
        setError("Помилка при завантаженні продукту");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-details">
      {product ? (
        <>
          <div className="product-details__wrapper">
            <img
              width={505}
              height={738}
              src={product.image_url}
              alt={product.name}
            />
            <div className="product-details__characteristics">
              <h2 className="product-details__title">{product.name}</h2>
              <p className="product-details__price">
                Ціна:
                <span
                  className={`product-details__price ${
                    product.price_old ? "product-details__sale" : ""
                  }`}
                >
                  {product.price}грн
                </span>
                {product.price_old > 0 && (
                  <span className="product-details__old-price">
                    {" "}
                    {product.price_old}грн
                  </span>
                )}
              </p>
              <p className="product-details__description">
                Характеристики:
                <br /> <hr />{" "}
                <span className="product-details__description-span">
                  {product.description}
                </span>
              </p>
              <button
                className="add-cart__btn"
                onClick={() => addToCart(product)}
              >
                Додати в кошик
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Продукт не знайдено</p>
      )}
    </div>
  );
};

export default ProductDetails;
