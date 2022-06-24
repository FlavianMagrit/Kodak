import {Link} from "react-router-dom";
import {BiLogOut, MdShoppingBag} from 'react-icons/all';
import Logo from '../../assets/logo-kodak-blanc.svg';
import ShopPage from "../../pages/ShopPage";
import CollabPage from "../../pages/CollabPage";
import RepackagedPage from "../../pages/RepackagedPage";
import StoreLocatorPage from "../../pages/StoreLocatorPage";
import BlogPage from "../../pages/BlogPage";
import CartPage from "../../pages/CartPage";
import {Logout} from "../Logout/Logout";
import './menu.scss';

export const Menu = () => (
  <div className="menu-container flex jcc w100">
    <Link to={'/'}>
      <img src={Logo} alt="logo" className="mr-2" height="50px"/>
    </Link>
    <nav className="w50 flex jcsb wrap">
      {MENU_ITEMS.map((item) => (
        <li className="flex jcc aic" key={item.route}>
          <Link to={item.route} className="no-style black bold pointer">
            {item.tab}
            <span> {item.icon}</span>
          </Link>
        </li>
      ))}
    </nav>
  </div>
);

export const MENU_ITEMS = [
  {
    tab: 'Shop',
    route: '/shop',
    component: ShopPage
  },
  {
    tab: 'Collab',
    route: '/collab',
    component: CollabPage
  },
  {
    tab: 'Reconditionnés',
    route: '/repackaged',
    component: RepackagedPage
  },
  {
    tab: 'Store Locator',
    route: '/store-locator',
    component: StoreLocatorPage
  },
  {
    tab: 'Guides & Conseils',
    route: '/guides-and-advices',
    component: BlogPage
  },
  {
    tab: '',
    route: '/logout',
    icon: <BiLogOut className="menu-icon" />,
    component: Logout
  },
{
    tab: '',
    route: '/cart',
    icon: <MdShoppingBag className="menu-icon" />,
    component: CartPage
  },
];
