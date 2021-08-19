import React from 'react';
import { connect } from 'react-redux';

import { addItem as addItemToCartAC } from '../../redux/cart/cart.actions';

import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PreviewItemContainer,
  PriceContainer,
} from './preview-item.styles';

const PreviewItems = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <PreviewItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemToCart(item)} inverted>
        ADD TO CART
      </AddButton>
    </PreviewItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCartAC(item)),
});

export default connect(null, mapDispatchToProps)(PreviewItems);
