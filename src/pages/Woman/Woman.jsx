import React from 'react';
import useProducts from '../../components/UseProducts/UseProducts';
import ProductPage from '../../components/ProductPage/ProductPage';
import baner from '../../image/womenpagehero.jpeg';
import { womenProductSection } from '../../components/ProductPage/ProductPage';

function Women() {
  const { products, error } = useProducts();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ProductPage 
      products={products} 
      categoryId={2} 
      bannerImage={baner} 
      productSection={womenProductSection} 
    />
  );
}

export default Women;