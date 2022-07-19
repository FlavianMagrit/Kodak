import React from 'react';
import { Background } from '../../components/Background';
import { ADVICES, CATEGORIES, FAVS_PRODUCTS } from './shop.service';
import Card from '../../components/Card';
import './shop.scss';
import ProductCard from '../../components/ProductCard';

const ShopPage = () => {
  return (
    <main>
      <Background title="Shop" />

      <div className="shop">
        <section className="categories">
          <h2>Catégories</h2>
          <ul>
            {CATEGORIES.map((category) => (
              <li>{category}</li>
            ))}
          </ul>
        </section>

        <section className="advices">
          <h2>Conseils</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>

          <ul className="advices-list">
            {ADVICES.map((advice) => (
              <Card title={advice.title} description={advice.description} />
            ))}
          </ul>
        </section>

        <section className="favs">
          <h2>Nos préférés</h2>

          <ul className="favs-list">
            {FAVS_PRODUCTS.map((product) => (
              <ProductCard
                name={product.name}
                description={product.description}
                rating={product.rating}
                photoUrl={product.photoUrl}
              />
            ))}
          </ul>
        </section>

        <section className="collabs">
          <h2>Les collabs</h2>

          <img
            src="https://www.carteperformance.fr/wp-content/uploads/2018/09/meilleur-appareils-photo-pas-cher.jpg"
            width="100%"
            alt="cart"
          />

          <button>Acheter</button>
        </section>
      </div>
    </main>
  );
};

export default ShopPage;
