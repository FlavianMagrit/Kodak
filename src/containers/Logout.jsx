import { useContext, useEffect } from 'react';
import { logout } from '../utils/authentication/authentication';
import { UserContext } from '../App';

export const Logout = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    console.log('deco');
    logout().then(() => {
      sessionStorage.clear();
      setUser(null);
      window.location.pathname = '';
    });
  }, [setUser]);

  return <p>Vous allez être déconnecté...</p>;
};
