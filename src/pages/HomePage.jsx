import { useContext } from 'react';
import { Menu } from '../containers/Menu/Menu';
import { UserContext } from '../App';
import { Categories } from '../containers/Categories/Categories';

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Menu />
      <Categories />
      <h1>Bonjour {user.displayName ?? user.email}</h1>
    </>
  );
};
