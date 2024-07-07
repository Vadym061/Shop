import React from "react";
import useProducts from "../../components/UseProducts/UseProducts";
import ProductList from "../../components/ProductList/ProductList";

function Accessories() {
  const { products, error } = useProducts();

  if (error) {
    return <div>{error}</div>;
  }

  return <ProductList products={products} typeId={4} />;
}

export default Accessories;
