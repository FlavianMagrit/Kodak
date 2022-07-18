import { useContext } from 'react';
import { UserContext } from '../App';
import { Background } from '../components/Background';
import { Products } from '../containers/Products';
import './Homepage.scss';
import { GuidesAndAdvices } from '../containers/GuidesAndAdvices';

export const HomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Background title="Redécouvrez le plaisir de la photo" pointColor="red-point" />
      {/*<h1>Bonjour {user.displayName ?? user.email}</h1>*/}
      <Products />
      <GuidesAndAdvices />
    </>
  );
};
