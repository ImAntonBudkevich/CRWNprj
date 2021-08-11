import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/CartItem';
import { withRouter } from 'react-router';

import { CustomButton } from '../custom-button/customButton';

import './CardDrop.scss';
import { toggleCartHidden as toggleCartHiddenAC } from '../../redux/cart/cart.actions';

const Cart = ({ cartedItems, history, toggleCartHidden }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartedItems.length ? (
          cartedItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartedItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAC()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
