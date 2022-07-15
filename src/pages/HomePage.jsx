import { useContext } from 'react';
import { UserContext } from '../App';
import { Categories } from '../containers/Categories/Categories';
import { Background } from '../components/Background';
import { Products } from '../containers/Products';
import './Homepage.scss';

export const HomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Categories />
      <Background title="Redécouvrez le plaisir de la photo" pointColor="red-point" />
      {/*<h1>Bonjour {user.displayName ?? user.email}</h1>*/}
      <Products />
    </>
  );
};
