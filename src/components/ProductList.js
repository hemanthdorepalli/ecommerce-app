import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const { data: products, loading, error } = useFetch(`https://fakestoreapi.com/products?limit=${page * 10}`);

  const loadMore = () => setPage(prevPage => prevPage + 1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products!</div>;

  return (
    <div>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className="load-more" onClick={loadMore}>More...</button>
    </div>
  );
};

export default ProductList;
