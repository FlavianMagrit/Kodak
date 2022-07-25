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
      <div className="mobile-square flex">
        <div className="small-picture">
          <img src={Camera} alt="Camera" />
          <b className="tac">Appareils photos</b>
          <p className="tac m-1">Découvrez notre catalogue de produits</p>
        </div>

        <div className="small-picture">
          <img src={Cartouches} alt="Cartouches" />
          <b className="tac">Cartouches & Impression</b>
          <p className="tac m-1">Imprimez vos plus belles photos</p>
        </div>
      </div>

      <div className="mobile-square flex">
        <div className="big-picture">
          <img src={Book} alt="Book1" />
          <b className="tac">Accessoires</b>
          <p className="tac m-1">
            Téléchargez notre application et accédez à votre cloud
          </p>
        </div>

        <div className="small-picture">
          <img src={Book} alt="Book2" />
          <b className="tac">Reconditionnés</b>
          <p className="tac m-1">
            Retrouvez toutes nos offres d'abonnement et profitez de vos photos
          </p>
        </div>
      </div>

      <div className="filter-div absolute r-0" />
    </div>
  </>
);
