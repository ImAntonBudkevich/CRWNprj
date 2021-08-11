import React from 'react';
import { connect } from 'react-redux';

import { CustomButton } from '../custom-button/customButton';
import { addItemToCart as addItemToCartAC } from '../../redux/cart/cart.actions';

import './preview-items.scss';

const PreviewItems = ({ item, addItemToCart }) => {
  return (
    <div className='preview-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className='preview-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
      </div>
      <CustomButton onClick={() => addItemToCart(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCartAC(item)),
});

export default connect(null, mapDispatchToProps)(PreviewItems);
