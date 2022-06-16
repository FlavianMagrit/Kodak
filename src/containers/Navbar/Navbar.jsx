import './Navbar.scss';
import { categories, navbarElements } from './categories';

export const Navbar = () => {
  return (
    <>
      {/*<ul className="top-navbar">*/}
      {/*  <li>*/}
      {/*    <img src="" alt="Kodak" />*/}
      {/*  </li>*/}
      {/*  <li>Shop</li>*/}
      {/*  <li>Collab</li>*/}
      {/*  <li>App</li>*/}
      {/*  <li>Abonnements</li>*/}
      {/*  <li>Guides & conseils</li>*/}
      {/*  <li>*/}
      {/*    <i>...</i>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <i>Panier</i>*/}
      {/*  </li>*/}
      {/*</ul>*/}
      {/*<ul className="bottom-navbar">*/}
      {/*  {categories.map((el) => (*/}
      {/*    <li>{el.category}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}

      <div className="test">
        <div className="test2">
          <a>Shop</a>
          <a>Collab</a>
          <a>App</a>
          <a>Abonnement</a>
          <a>Guide et conseil</a>
        </div>
      </div>
    </>
  );
};
