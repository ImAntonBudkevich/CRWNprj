import React from 'react';
import { connect } from 'react-redux';

import PreviewItems from '../../components/preview-items/preview-items';

import { selectCollection } from '../../redux/shop/shop.selecrors';

import './collection.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => {
          return <PreviewItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
