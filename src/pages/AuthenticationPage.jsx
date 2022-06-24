import { Login } from '../containers/Login/Login';
import { Menu } from '../containers/Menu/Menu';

export const AuthenticationPage = () => {
  return (
    <>
      <Menu />
      <h1>Connectez-vous pour régler vos achats plus rapidement !</h1>
      <Login />
    </>
  );
};
