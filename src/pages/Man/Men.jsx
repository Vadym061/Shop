import React from 'react';
import useProducts from '../../components/UseProducts/UseProducts';
import ProductPage from '../../components/ProductPage/ProductPage';
import baner from '../../image/menpageshero.jpeg';
import { menProductSection } from '../../components/ProductPage/ProductPage';
function Men() {
  const { products, error } = useProducts();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ProductPage 
    products={products} 
    categoryId={1} 
    bannerImage={baner} 
    productSection={menProductSection} 
  />
  );
}

export default Men;