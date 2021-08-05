import React, { Component } from 'react';
import { Preview } from '../../components/preview/preview';
import { SHOP_DATA } from './shop-data';

export default class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...collectionLast }) => {
          return <Preview key={id} {...collectionLast} />;
        })}
      </div>
    );
  }
}
