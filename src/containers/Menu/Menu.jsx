import { MdAccountCircle, MdShoppingBag } from 'react-icons/all';
import Logo from '../../assets/logo-kodak-blanc.svg';
import './menu.scss';

export const Menu = () => {
  return (
    <div className="menu-container flex jcc w100 mt-1">
      <img src={Logo} alt="logo" className="w10 mr-2" />
      <div className="w50 flex jcsb wrap">
        {MENU_ITEMS.map((item) => (
          <div className="flex jcc aic">
            <a href={item.route} className="no-style black bold pointer">
              {item.tab}
            </a>
            <span> {item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const MENU_ITEMS = [
  {
    tab: 'Shop',
    route: '/shop',
  },
  {
    tab: 'Collab',
    route: '/collab',
  },
  {
    tab: 'Reconditionnés',
    route: '/repackaged',
  },
  {
    tab: 'Store Locator',
    route: '/store-locator',
  },
  {
    tab: 'Guides & Conseils',
    route: '/guides-and-advices',
  },
  {
    tab: '',
    route: '/profile',
    icon: <MdAccountCircle className="menu-icon" />,
  },
  {
    tab: '',
    route: '/cart',
    icon: <MdShoppingBag className="menu-icon" />,
  },
];
