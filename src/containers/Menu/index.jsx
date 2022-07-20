import { Link } from 'react-router-dom';
import { BiLogOutCircle, FaUserCircle } from 'react-icons/all';
import Logo from '../../assets/logo-kodak-blanc.svg';
import ShopPage from '../../pages/ShopPage';
import CollabPage from '../../pages/CollabPage';
import RepackagedPage from '../../pages/RepackagedPage';
import StoreLocatorPage from '../../pages/StoreLocatorPage';
import BlogPage from '../../pages/BlogPage';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { logout } from '../../utils/authentication/authentication';
import { PopupLogout } from '../PopupLogout';
import './Menu.scss';

export const Menu = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <div className="menu-container flex jcc w100 bg-yellow">
      <Link to={'/'}>
        <img src={Logo} alt="logo" className="mr-2" height="50px" />
      </Link>
      <nav className="w50 flex jcsb wrap aic">
        {MENU_ITEMS.map((item) => (
          <li className="flex jcc aic" key={item.route}>
            <Link to={item.route} className="no-style black bold pointer">
              {item.tab}
              <span> {item.icon}</span>
            </Link>
          </li>
        ))}
        <LoginOrLogout user={user} setShowPopup={() => setShowPopup(true)} />
      </nav>
      {showPopup && <PopupLogout setShowPopup={setShowPopup} logout={logout} />}
    </div>
  );
};

const LoginOrLogout = ({ user, setShowPopup }) => (
  <div className="dropdown-container">
    <li className="flex jcc aic pointer" key="dropdown">
      <FaUserCircle color="black" size="2em" />
    </li>

    <div className="dropdown-content">
      {user ? <a onClick={setShowPopup}>Déconnexion</a> : <a href="/login">Connexion</a>}
      <a href="/profile">Mon espace</a>
    </div>
  </div>
);

const MENU_ITEMS = [
  {
    tab: 'Shop',
    route: '/shop',
    component: ShopPage,
  },
  {
    tab: 'Collab',
    route: '/collab',
    component: CollabPage,
  },
  {
    tab: 'Reconditionnés',
    route: '/repackaged',
    component: RepackagedPage,
  },
  {
    tab: 'Store Locator',
    route: '/store-locator',
    component: StoreLocatorPage,
  },
  {
    tab: 'Guides & Conseils',
    route: '/guides-and-advices',
    component: BlogPage,
  },
  // {
  //   tab: '',
  //   route: '/logout',
  //   icon: <BiLogOut className="menu-icon" />,
  //   component: Logout,
  // },
  // {
  //   tab: '',
  //   route: '/cart',
  //   icon: <MdShoppingBag className="menu-icon" />,
  //   component: CartPage,
  // },
];
