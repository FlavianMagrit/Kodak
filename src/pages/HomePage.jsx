import { useContext } from 'react';
import { UserContext } from '../App';
import { Categories } from '../containers/Categories/Categories';
import { Background } from '../components/Background';
import { Products } from '../containers/Products';
import './Homepage.scss';
import { GuidesAndAdvices } from '../containers/GuidesAndAdvices';
import { Collabs } from '../containers/Collabs';
import { FAQ } from '../containers/FAQ';
import { Newsletter } from '../containers/Newsletter';

export const HomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Categories />
      <Background title="Redécouvrez le plaisir de la photo" pointColor="red-point" />
      {/*<h1>Bonjour {user.displayName ?? user.email}</h1>*/}
      <Products />
      <GuidesAndAdvices />
      <Collabs />
      <FAQ />
      <Newsletter />
    </>
  );
};
