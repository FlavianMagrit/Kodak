import React, { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { FavoriteProductCard } from '../../containers/FavoriteProducts';
import PictureBackground from '../../assets/shop-background.jpeg';
import './shop.scss';
import { db } from '../../utils/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import Bandeau from '../../assets/shop-bandeau.png';
import { useCart } from 'react-use-cart';
import { AiFillStar } from 'react-icons/ai';

export const ShopPage = () => {
  const { addItem } = useCart();

  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, 'products');

  const [count, setCount] = useState(0);
  console.log(products);
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  const handleChange = (note) => {
    const copyProducts = [...products];
    const modifiedProducts = copyProducts.map((product) => {
      if (note === product.note) {
        product.checked = !product.checked;

        if (product.checked) {
          setCount(count + 1);
        } else {
          setCount(count - 1);
        }
      }

      return product;
    });

    setProducts(modifiedProducts);
  };

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
          <div className="filters flex">
            <Filter />
            <div className="notes flex">
              {products &&
                products.map((product, id) => (
                  <ProductItem key={id} product={product} handleChange={handleChange} />
                ))}
            </div>
          </div>
          <div className="products flex-column w100">
            <div className="flex wrap jcsb">
              {products.map((product) => (
                <FavoriteProductCard
                  key={product.id}
                  {...product}
                  count={count}
                  addToCart={() => addItem(product)}
                />
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

const ProductItem = ({ product, handleChange }) => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        id={`customCheck1-${product.id}`}
        checked={product.checked}
        onClick={() => handleChange(product.note)}
      />
      <label htmlFor={`customCheck1-${product.note}`}>
        {product.note}
        <AiFillStar color="#ffb700" />
      </label>
    </div>
  );
};
