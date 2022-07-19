import React from 'react';
import { MdStarRate } from 'react-icons/all';
import './productcard.scss';

const ProductCard = ({ name, description, rating, photoUrl, ...props }) => {
  return (
    <article className="product-card" {...props}>
      <img src={photoUrl} alt={`${name}`} width="200" />

      <h3>{name}</h3>
      <p>{description}</p>

      <div className="footer">
        <div>
          <p>{rating}</p>
          <MdStarRate className="menu-icon" />
        </div>
        <div>
          <input type="checkbox" id="compare" name="compare" />
          <label htmlFor="compare">Comparer</label>
        </div>
      </div>

      <button>Ajouter au panier</button>
    </article>
  );
};

export default ProductCard;
