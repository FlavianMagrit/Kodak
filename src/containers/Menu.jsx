import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/all';
import Logo from '../assets/logo-kodak-blanc.svg';
import ShopPage from '../pages/ShopPage';
import CollabPage from '../pages/CollabPage';
import RepackagedPage from '../pages/RepackagedPage';
import StoreLocatorPage from '../pages/StoreLocatorPage';
import BlogPage from '../pages/BlogPage';
import { useContext, useState } from 'react';
import { UserContext } from '../App';
import { Popup } from '../components/Popup';
import { logout } from '../utils/authentication/authentication';

export const Menu = () => {
  const { user } = useContext(UserContext);

  const [showPopup, setShowPopup] = useState(false);

  console.log({ showPopup });

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
        {/*<LoginOrLogout user={user} />*/}
        <BiLogOut onClick={() => setShowPopup(true)} />
        {user ? user.email : 'pas log'}
      </nav>
      {showPopup && <Popup setShowPopup={setShowPopup} logout={logout} />}
    </div>
  );
};

const LoginOrLogout = ({ user }) =>
  user ? (
    <li className="flex jcc aic" key="logout">
      <Link to="/logout" className="no-style black bold pointer">
        <span>
          <BiLogOut className="menu-icon" />
        </span>
      </Link>
    </li>
  ) : (
    <li className="flex jcc aic" key="logout">
      <Link to="/login" className="no-style black bold pointer">
        <span>
          <BiLogOut className="menu-icon" />
        </span>
      </Link>
    </li>
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
