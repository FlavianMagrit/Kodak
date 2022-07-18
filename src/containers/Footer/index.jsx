import './Footer.scss';
import { useState } from 'react';
import Logo from '../../assets/logo-kodak-blanc.svg';

export const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className="footer-container">
      <div className="flex jcsa ml-3 pt-2">
        <div className="flex-column">
          {FOOTER_ELEMENTS.map((el) => (
            <a href={el.link}>{el.title}</a>
          ))}
        </div>
        <div className="flex-column w40">
          <b>Abonnez-vous à la newsletter</b>
          <p className="white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button onClick={() => setEmail('')}>TOUS NOS GUIDES</button>
          </div>
        </div>
      </div>
      <div className="flex-column aic">
        <div className="flex jcsa w35">
          <a href="/CGV">CGV</a>
          <a href="/legal-notices">Mentions légales</a>
          <a href="/site-map">Plan du site</a>
        </div>
        <img src={Logo} alt="logo" />
      </div>
    </footer>
  );
};

const FOOTER_ELEMENTS = [
  {
    title: 'Menu du site',
    link: '/',
  },

  {
    title: 'Shop',
    link: '/',
  },

  {
    title: 'Collab',
    link: '/collab',
  },

  {
    title: 'Reconditionnés',
    link: '/repackaged',
  },

  {
    title: 'Store Locator',
    link: '/store-locator',
  },

  {
    title: 'Guides & conseils',
    link: '/guides-and-advices',
  },

  {
    title: 'Mon compte',
    link: '/',
  },

  {
    title: 'Panier',
    link: '/',
  },
];
