import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, increment, decrement } from '../store/cartSlice';
import { fetchProducts } from '../store/productsSlice';
import { STATUS } from '../store/productsSlice';

const Products = () => { 
  const dispatch = useDispatch();     
  const { data: products, status } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const handleIncrement = (cartItemId) => {
    dispatch(increment(cartItemId));
  };

  const handleDecrement = (cartItemId) => {
    dispatch(decrement(cartItemId));
  };

  const getCartItem = (productId) => {
    return cartItems.find(item => item.productId === productId);
  };

  if (status === STATUS.LOADING) return <h2>Loading...</h2>;
  if (status === STATUS.ERROR) return <h2>Error loading products.</h2>;

  return (
    <div className='productsWrapper'>
      {products.map(product => {
        const cartItem = getCartItem(product.id);

        return (
          <div className='card' key={product.id}>
            <img src={product.image} alt={product.title}/>
            <h4>{product.title}</h4>
            <div className='quantityControl'>
              {cartItem ? (
                <>
                  <button onClick={() => handleDecrement(cartItem.cartItemId)} className='btn'>-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => handleIncrement(cartItem.cartItemId)} className='btn'>+</button>
                </>
              ) : (
                <button onClick={() => handleAdd(product)} className='btn'>Add to cart</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
