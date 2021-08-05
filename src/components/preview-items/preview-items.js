import React from 'react';

import './preview-items.scss';

export const PreviewItems = ({ name, imageUrl, price }) => {
  return (
    <div className='preview-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='preview-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};
