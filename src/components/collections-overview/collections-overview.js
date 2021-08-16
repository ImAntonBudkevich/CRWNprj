import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Preview } from '../preview/preview';
import { selectCollectionForPreview } from '../../redux/shop/shop.selecrors';

import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...collectionLast }) => {
        return <Preview key={id} {...collectionLast} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
