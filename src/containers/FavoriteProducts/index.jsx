import './FavoriteProducts.scss';
import { SectionTitle } from '../../components/SectionTitle';
import { AiFillStar } from 'react-icons/ai';
import { CustomButton } from '../../components/CustomButton';
import { Link } from 'react-router-dom';
import React from 'react';
import { useCart } from 'react-use-cart';

const PRODUCTS = [
  {
    checked: false,
    color: 'bleu',
    note: '3',
    price: 99.99,
    name: 'Printomatic bleu',
    id: 'WGsNznfLttTpxgDcHVJA',
  },
  {
    price: 99.99,
    name: 'Printomatic jaune',
    color: 'jaune',
    note: '2',
    checked: false,
    id: 'KW3CTEu0F0XcXFEfQO3B',
  },
  {
    name: 'Printomatic rose',
    price: 149.99,
    checked: false,
    color: 'rose',
    note: '5',
    id: 'dCaUx0W7x1c6X7RiDO8R',
  },
];

export const FavoriteProducts = () => {
  const { addItem } = useCart();

  return (
    <div>
      <SectionTitle title="Nos préférés" pointColor="orange-point" />
      <div className="flex-column aic">
        <div className="fav-products flex aic w90 jcsa pb-2">
          {PRODUCTS.map((product) => (
            <FavoriteProductCard
              key={product.id}
              {...product}
              count={0}
              addToCart={() => addItem(product)}
            />
          ))}
        </div>
        <Link to="/shop">
          <CustomButton placeholder="VOIR TOUS" color="red" className="bold mt-5 mb-5" />
        </Link>
      </div>
    </div>
  );
};

export const FavoriteProductCard = ({
  name,
  price,
  color,
  note,
  checked,
  count,
  addToCart,
}) => {
  if (color === undefined) {
    color = 'gris';
  }

  return (
    <div
      className={
        count === 0
          ? 'favorite-product-container'
          : checked
          ? 'favorite-product-container'
          : 'favorite-product-container hide'
      }
    >
      <img
        src={require(`../../assets/printomatic/Printomatic-${color}.png`).default}
        alt={`../../assets/printomatic/Printomatic-${color}.png`}
      />
      <div className="flex-column ml-1 mr-1">
        <div className="flex jcsb mt-05 white">
          <b>{name}</b>
          <b className="red">{price}€</b>
        </div>
        <div className="flex w50 jcsb ">
          <p className="labels">Débutant</p>
          <p className="labels">Impression</p>
        </div>
        <p className="white w90">
          L'appareil photo PRINTOMATIC imprime instantanément et automatiquement des
          photos couleur de haute qualité en toute simplicité. Il utilise du papier photo
          KODAK ZINK, donc aucune cartouche d'encre ou toner n'est nécessaire.
        </p>
        <div className="flex aic">
          <p className="white">{note}</p>
          <AiFillStar color="#ffb700" />
        </div>
        <CustomButton
          color="red"
          placeholder="AJOUTER AU PANIER"
          className="bold w100 mb-1"
          onClick={addToCart}
        />
      </div>
    </div>
  );
};
