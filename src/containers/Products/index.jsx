import { SectionTitle } from '../../components/SectionTitle';
import ThreePictures from '../../assets/3pictures.png';
import Camera from '../../assets/camera.jpeg';
import Cartouches from '../../assets/cartouches.jpeg';
import Book from '../../assets/book.jpeg';
import './Products.scss';

export const Products = () => (
  <div className="products-container flex-column">
    <div className="flex">
      <SectionTitle title="Nos produits" pointColor="red-point" />
      <img src={ThreePictures} alt="3pictures" className="w25 absolute three-pictures" />
    </div>
    <ProductsImages />
  </div>
);

const ProductsImages = () => (
  <>
    <div className="pictures-container flex asc mb-2 relative">

      <div className="small-pictures">
        <img src={Camera} alt="Camera" />
        <b className="tac">Appareils photos & Polaroids</b>
        <p className="tac">
          Découvrez notre <br />
          catalogue
          <br /> de produits
        </p>
      </div>

      <div className="small-pictures">
        <img src={Cartouches} alt="Cartouches" />
        <b className="tac">Cartouches & Impression</b>
        <p className="tac">Imprimez vos plus belles photos</p>
      </div>

      <div className="big-picture">
        <img src={Book} alt="Book1" />
        <b className="tac">Accessoires</b>
        <p className="tac">
          Téléchargez notre application et accédez <br /> à votre cloud
        </p>
      </div>

      <div className="small-pictures">
        <img src={Book} alt="Book2" />
        <b className="tac">Reconditionnés</b>
        <p className="tac">
          Retrouvez toutes nos offres d'abonnement <br /> et profitez de vos photos
        </p>
      </div>

      <div className="filter-div absolute r-0" />
    </div>
  </>
);
