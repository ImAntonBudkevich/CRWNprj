import React from 'react';

import './CheckOutItem.scss';

const CheckOutItem = ({ cartItem: { name, price, imageUrl, quantity } }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button'>&#10005;</div>
    </div>
  );
};

export default CheckOutItem;
