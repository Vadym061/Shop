import { useState, useEffect } from "react";
import axios from "axios";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        setError("Error fetching products");
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
}

export default useProducts;
