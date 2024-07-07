import React from "react";
import useProducts from "../../components/UseProducts/UseProducts";
import ProductList from "../../components/ProductList/ProductList";

function Backpack() {
  const { products, error } = useProducts();

  if (error) {
    return <div>{error}</div>;
  }

  return <ProductList products={products} typeId={3} />;
}

export default Backpack;
