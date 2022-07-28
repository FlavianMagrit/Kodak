import { useContext } from 'react';
import { UserContext } from '../App';
import { Background } from '../components/Background';
import { Products } from '../containers/Products';
import { GuidesAndAdvices } from '../containers/GuidesAndAdvices';
import { Collabs } from '../containers/Collabs';
import { FAQ } from '../containers/FAQ';
import { Newsletter } from '../containers/Newsletter';
import { FavoriteProducts } from '../containers/FavoriteProducts';
import PictureBackground from '../assets/background.jpeg';
import './Homepage.scss';

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Background
        image={PictureBackground}
        title="Redécouvrez le plaisir de la photo"
        pointColor="red-point"
      />
      <Products />
      <GuidesAndAdvices />
      <FavoriteProducts />
      <Collabs />
      <FAQ />
      <Newsletter />
    </>
  );
};
