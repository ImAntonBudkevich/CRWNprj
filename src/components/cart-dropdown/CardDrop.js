import React from 'react';

import { CustomButton } from '../custom-button/customButton';

import './CardDrop.scss';

const Cart = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default Cart;
