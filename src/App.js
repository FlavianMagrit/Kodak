import './App.css';
import { AuthenticationPage } from './pages/AuthenticationPage';
import { Menu } from './containers/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <AuthenticationPage />
    </div>
  );
}

export default App;
