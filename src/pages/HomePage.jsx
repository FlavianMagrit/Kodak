import {useContext} from 'react';
import {UserContext} from '../App';
import {Categories} from '../containers/Categories';
import {Background} from '../components/Background';
import {Products} from '../containers/Products';
import {GuidesAndAdvices} from '../containers/GuidesAndAdvices';
import {Collabs} from '../containers/Collabs';
import {FAQ} from '../containers/FAQ';
import {Newsletter} from '../containers/Newsletter';
import {FavoriteProducts} from '../containers/FavoriteProducts';
import {Footer} from '../containers/Footer';
import './Homepage.scss';

export const HomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Categories />
      <Background title="Redécouvrez le plaisir de la photo" pointColor="red-point" />
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
