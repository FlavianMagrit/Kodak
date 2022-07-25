import React from 'react';
import { Background } from '../../components/Background';
import { Categories } from '../../containers/Categories';
import { FavoriteProductCard } from '../../containers/FavoriteProducts';
import PictureBackground from '../../assets/background.jpeg';
import './shop.scss';

const ShopPage = () => (
  <main>
    {/*<Categories />*/}
    <Background image={PictureBackground} title="Shop" pointColor="red-point" />

    <div className="shop-container">
      <div className="filters">
        <h2>Filtrer</h2>
      </div>
      <div className="products flex-column">
        <div className="flex">
          <FavoriteProductCard />
          <FavoriteProductCard />
        </div>
        <div className="flex">
          <FavoriteProductCard />
          <FavoriteProductCard />
        </div>
        <div className="flex">
          <FavoriteProductCard />
          <FavoriteProductCard />
        </div>
      </div>
    </div>
  </main>
);

export default ShopPage;
