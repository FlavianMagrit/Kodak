import React from 'react';
import { Background } from '../../components/Background';
import './shop.scss';
import { Menu } from '../../containers/Menu';
import PictureBackground from '../../assets/background.jpeg';
import { FavoriteProductCard } from '../../containers/FavoriteProducts';
import { Footer } from '../../containers/Footer';

const ShopPage = () => {
  return (
    <main>
      <Menu />
      <Background
        image={PictureBackground}
        title="Redécouvrez le plaisir de la photo"
        pointColor="red-point"
      />
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
      <Footer />
    </main>
  );
};

export default ShopPage;
