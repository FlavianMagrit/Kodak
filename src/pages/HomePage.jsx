import { useContext } from 'react';
import { UserContext } from '../App';
import { Background } from '../components/Background';
import { Products } from '../containers/Products';
import './Homepage.scss';
import { GuidesAndAdvices } from '../containers/GuidesAndAdvices';
import { Collabs } from '../containers/Collabs';
import { FAQ } from '../containers/FAQ';
import { Newsletter } from '../containers/Newsletter';
import { FavoriteProducts } from '../containers/FavoriteProducts';
import { Menu } from '../containers/Menu';
import { Footer } from '../containers/Footer';

export const HomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Menu />
      <Background title="Redécouvrez le plaisir de la photo" pointColor="red-point" />
      {/*<h1>Bonjour {user.displayName ?? user.email}</h1>*/}
      <Products />
      <GuidesAndAdvices />
      <FavoriteProducts />
      <Collabs />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
};
