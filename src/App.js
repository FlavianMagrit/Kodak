import { createContext, useState } from 'react';
import { AuthenticationPage } from './pages/AuthenticationPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Logout } from './containers/Logout';
import './App.css';
import ShopPage from './pages/ShopPage';
import CollabPage from './pages/CollabPage';
import RepackagedPage from './pages/RepackagedPage';
import StoreLocatorPage from './pages/StoreLocatorPage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import {Menu} from "./containers/Menu";

export const UserContext = createContext({
  user: null,
  setUser: (user) => {},
});

const AppRouter = () => (
  <Router>
    <div>
      <Menu />
      <Switch>
        {ROOTER.map((item) => (
          <Route path={item.route} component={item.component} key={item.route} />
        ))}
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </Router>
);

const App = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  return (
    <UserContext.Provider value={{ user, setUser }} className="App">
      <AppRouter />
    </UserContext.Provider>
  );
};

export default App;

const ROOTER = [
  {
    route: '/shop',
    component: ShopPage,
  },
  {
    route: '/collab',
    component: CollabPage,
  },
  {
    route: '/repackaged',
    component: RepackagedPage,
  },
  {
    route: '/store-locator',
    component: StoreLocatorPage,
  },
  {
    route: '/guides-and-advices',
    component: BlogPage,
  },
  {
    route: '/logout',
    component: Logout,
  },
  {
    route: '/login',
    component: AuthenticationPage,
  },
  {
    route: '/cart',
    component: CartPage,
  },
  {
    route: '/profile',
    component: ProfilePage,
  },
];
