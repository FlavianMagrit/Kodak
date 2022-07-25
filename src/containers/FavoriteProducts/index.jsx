import './FavoriteProducts.scss';
import { SectionTitle } from '../../components/SectionTitle';
import { AiFillStar } from 'react-icons/ai';
import { CustomButton } from '../../components/CustomButton';
import { Link } from 'react-router-dom';

export const FavoriteProducts = () => (
  <div>
    <SectionTitle title="Nos préférés" pointColor="orange-point" />
    <div className="flex-column aic">
      <div className="fav-products flex aic w90 jcsa pb-2">
        <FavoriteProductCard />
        <FavoriteProductCard />
        <FavoriteProductCard />
      </div>
      <Link to="/guides-and-advices">
        <CustomButton placeholder="VOIR TOUS" color="red" className="bold mt-5 mb-5" />
      </Link>
    </div>
  </div>
);

export const FavoriteProductCard = ({ name, price, color }) => (
  <div className="favorite-product-container">
    <img
      src={require(`../../assets/printomatic/Printomatic-${color}.png`).default}
      alt={`../../assets/printomatic/Printomatic-${color}.png`}
    />
    <div className="flex-column ml-1 mr-1">
      <div className="flex jcsb mt-05 white">
        <b>{name}</b>
        <b className="red">{price}</b>
      </div>
      <div className="flex w50 jcsb ">
        <p className="labels">Débutant</p>
        <p className="labels">Impression</p>
      </div>
      <p className="white w90">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took
      </p>
      <div className="flex aic">
        <p className="white pr-0_5">4,4</p>
        <AiFillStar color="#ffb700" />
      </div>
      <CustomButton
        color="red"
        placeholder="AJOUTER AU PANIER"
        className="bold w100 mb-1"
      />
    </div>
  </div>
);
