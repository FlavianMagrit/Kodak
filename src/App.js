import {createContext, useState} from "react";
import { AuthenticationPage } from './pages/AuthenticationPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import './App.css';

export const UserContext = createContext({
  user: null,
  setUser: (user) => {}
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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </Router>
)

const App = () => {
  const [user, setUser] = useState(null);

  return (
      <UserContext.Provider value={{user, setUser}} className="App">
        { user
          ? <AppRouter />
          : <AuthenticationPage />
        }
      </UserContext.Provider>
  );
};

export default App;
