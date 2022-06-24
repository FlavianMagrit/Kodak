import { createContext, useState } from 'react';
import { AuthenticationPage } from './pages/AuthenticationPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Logout } from './containers/Logout/Logout';
import {Menu, MENU_ITEMS} from "./containers/Menu/Menu";
import './App.css';

export const UserContext = createContext({
  user: null,
  setUser: (user) => {},
});

const AppRouter = () => (
  <Router>
    <div>
      <Menu />

      <Switch>
        {MENU_ITEMS.map((item) => (
          <Route path={item.route} component={item.component} key={item.route}/>
        ))}
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </Router>
);

const App = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
console.log(user)
  return (
    <UserContext.Provider value={{ user, setUser }} className="App">
      {user ? <AppRouter /> : <AuthenticationPage />}
    </UserContext.Provider>
  );
};

export default App;
