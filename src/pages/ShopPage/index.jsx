import React, { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { Categories } from '../../containers/Categories';
import { FavoriteProductCard } from '../../containers/FavoriteProducts';
import PictureBackground from '../../assets/background.jpeg';
import './shop.scss';
import { db } from '../../utils/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

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

  console.log(products[0]?.picture);

  return (
    <main>
      <Background image={PictureBackground} title="Shop" pointColor="red-point" />
      <div className="shop-container">
        <div className="filters">
          <h2>Filtrer</h2>
        </div>
        <div className="products flex-column">
          <div className="flex wrap">
            {products.map((product) => (
              <FavoriteProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
