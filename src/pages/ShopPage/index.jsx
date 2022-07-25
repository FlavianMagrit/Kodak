import React, { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { Categories } from '../../containers/Categories';
import { FavoriteProductCard } from '../../containers/FavoriteProducts';
import PictureBackground from '../../assets/background.jpeg';
import './shop.scss';
import { db } from '../../utils/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import Bandeau from '../../assets/shop-bandeau.png';

export const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, 'products');

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);

  return (
    <main>
      <Background
        image={PictureBackground}
        title="Redécouvrez le plaisir de la photo"
        pointColor="red-point"
      />

      <div className="shop-container flex-column w75">
        <img src={Bandeau} alt="shop-bandeau" />
        <div className="flex">
          <div className="flex w25">
            <Filter />
          </div>
          <div className="products flex-column w100">
            <div className="flex wrap jcsb">
              {products.map((product) => (
                <FavoriteProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Filter = () => {
  return (
    <div className="flex-column w100">
      <div className="filter-title-container">
        <h2>Filtrer</h2>
      </div>
      <p>Par avis</p>
    </div>
  );
};
