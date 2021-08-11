import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart as clearItemFromCartAC,
  addItem as addItemToCartAC,
  removeItem as removeItemFromCartAC,
} from '../../redux/cart/cart.actions';

import './CheckOutItem.scss';

const CheckOutItem = ({
  cartItem,
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
}) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCartAC(item)),
  addItemToCart: (item) => dispatch(addItemToCartAC(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCartAC(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
