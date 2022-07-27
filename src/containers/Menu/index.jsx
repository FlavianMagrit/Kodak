import { Link } from 'react-router-dom';
import { FaUserCircle, GiHamburgerMenu, IoCloseSharp } from 'react-icons/all';
import Logo from '../../assets/logo-kodak-blanc.svg';
import { ShopPage } from '../../pages/ShopPage';
import CollabPage from '../../pages/CollabPage';
import RepackagedPage from '../../pages/RepackagedPage';
import StoreLocatorPage from '../../pages/StoreLocatorPage';
import BlogPage from '../../pages/BlogPage';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { logout } from '../../utils/authentication/authentication';
import { PopupLogout } from '../PopupLogout';
import { useWindowWidth } from '@react-hook/window-size';
import './Menu.scss';

export const Menu = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useContext(UserContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const width = useWindowWidth();

  return (
    <div className="menu-container flex jcc w100">
      <div className="mobile-menu flex">
        <span className="mobile-burger-button">
          {showMobileMenu ? (
            <IoCloseSharp
              size="2em"
              color="white"
              onClick={() => setShowMobileMenu(false)}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setShowMobileMenu(true)}
              size="2em"
              color="white"
            />
          )}
        </span>
        <div className="mobile-logo">
          <Link to={'/'}>
            <img src={Logo} alt="logo" className="mr-2" height="50px" />
          </Link>
        </div>
      </div>
      <Link to={'/'}>
        <img src={Logo} alt="logo" className="logo mr-2" height="50px" />
      </Link>
      {(width < 768 && showMobileMenu) || width >= 768 ? (
        <nav className="jcsb wrap aic">
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
      ) : null}
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
      {user ? <a href="/profile/my-account">Mon espace</a> : null}
      {user ? <a onClick={setShowPopup}>Déconnexion</a> : <a href="/login">Connexion</a>}
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
