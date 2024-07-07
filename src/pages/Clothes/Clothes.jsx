import React from "react";
import useProducts from "../../components/UseProducts/UseProducts";
import ProductList from "../../components/ProductList/ProductList";

function Clothes() {
  const { products, error } = useProducts();

  if (error) {
    return <div>{error}</div>;
  }

  return <ProductList products={products} typeId={1} />;
}

export default Clothes;
