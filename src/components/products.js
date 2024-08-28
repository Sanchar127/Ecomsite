import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productsSlice';
import { STATUS } from '../store/productsSlice';

const Products = () => { 
  const dispatch = useDispatch();     
  const { data: products, status } = useSelector((state) => state.products);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); 

  if (status === STATUS.LOADING) return <h2>Loading...</h2>;
  if (status === STATUS.ERROR) return <h2>Error loading products.</h2>;

  return (
    <div className='productsWrapper'>
      {
        products.map(product => (
          <div className='card' key={product.id}>
            <img src={product.image} alt={product.title}/>
            <h4>{product.title}</h4>
            <button onClick={() => handleAdd(product)} className='btn'>Add to cart</button>
          </div>
        ))
      }
    </div>
  );
};

export default Products;
