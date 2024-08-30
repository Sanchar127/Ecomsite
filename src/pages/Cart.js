import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, increment, decrement } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);

  const handleRemove = (cartItemId) => {
    dispatch(remove(cartItemId));
  };

  const handleIncrement = (cartItemId) => {
    dispatch(increment(cartItemId));
  };

  const handleDecrement = (cartItemId) => {
    dispatch(decrement(cartItemId));
  };

  const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);
  const tprice = totalPrice.toFixed(2);

  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {products.map(product => (
          <div className='cartCard' key={product.cartItemId}>
            <img src={product.image} alt='' />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <div className='quantityControl'>
              <button className="btn" onClick={() => handleDecrement(product.cartItemId)}>-</button>
              <span>{product.quantity}</span>
              <button className="btn" onClick={() => handleIncrement(product.cartItemId)}>+</button>
            </div>
            <button className="btn" onClick={() => handleRemove(product.cartItemId)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <h4 className='text-red-500 boder'>Total Price: ${tprice}</h4>
      </div>
    </div>
  );
};

export default Cart;
