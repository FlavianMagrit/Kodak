import React, { createContext, useState } from 'react';
import { AuthenticationPage } from './pages/AuthenticationPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Logout } from './containers/Logout';
import './App.css';
import { ShopPage } from './pages/ShopPage';
import CollabPage from './pages/CollabPage';
import RepackagedPage from './pages/RepackagedPage';
import StoreLocatorPage from './pages/StoreLocatorPage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import { Menu } from './containers/Menu';
import { Footer } from './containers/Footer';
import { CartProvider } from 'react-use-cart';
import { PaymentPage } from './pages/PaiementPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserContext = createContext({
  user: null,
  setUser: (user) => {},
});

export const notify = (text) =>
  toast.success(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const AppRouter = () => (
  <Router>
    <div>
      <Menu />
      <ToastContainer />
      <Switch>
        {ROOTER.map((item) => (
          <Route path={item.route} component={item.component} key={item.route} />
        ))}
        <Route path="/" component={HomePage} />
      </Switch>
      {/*<button onClick={notify('bonjour')} />*/}
      <Footer />
    </div>
  </Router>
);

const App = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  return (
    <UserContext.Provider value={{ user, setUser }} className="App">
      <Elements stripe={stripePromise}>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </Elements>
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
  {
    route: '/payment',
    component: PaymentPage,
  },
];
