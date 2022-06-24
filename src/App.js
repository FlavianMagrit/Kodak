import { createContext, useState } from 'react';
import { AuthenticationPage } from './pages/AuthenticationPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Logout } from './containers/Logout/Logout';
import './App.css';

export const UserContext = createContext({
  user: null,
  setUser: (user) => {},
});

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </Router>
);

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <UserContext.Provider value={{ user, setUser }} className="App">
      {user ? <AppRouter /> : <AuthenticationPage />}
    </UserContext.Provider>
  );
};

export default App;
