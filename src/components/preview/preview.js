import React from 'react';
import PreviewItems from '../preview-items/preview-items';

import './preview.scss';

export const Preview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, ind) => ind < 4)
          .map((item) => {
            return <PreviewItems key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};
