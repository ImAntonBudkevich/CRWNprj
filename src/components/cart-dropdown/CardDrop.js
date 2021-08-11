import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/CartItem';

import { CustomButton } from '../custom-button/customButton';

import './CardDrop.scss';

const Cart = ({ cartedItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartedItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartedItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);
