import './GuidesAndAdvices.scss';
import { SectionTitle } from '../../components/SectionTitle';
import { CustomButton } from '../../components/CustomButton';
import { Link } from 'react-router-dom';

export const GuidesAndAdvices = () => (
  <div className="guides-advices-container">
    <div className="filter-background absolute r-0" />
    <div className="absolute z-200">
      <SectionTitle title="Guides et conseils" pointColor="red-point" className="white" />
      <p className="white w50 ml-13">
        Vous avez besoin d’un peu d’aide pour utiliser nos produits ? Retrouvez tous nos
        guides et conseils pour tous les appareils photos Kodak. Suivez aussi nos
        actualités pour ne rien manquer des nouveautés Kodak !
      </p>
      <div className="flex-column aic">
        <div className="flex jcsa w90 mt-5">
          <ArticleCard title="Article blog" desc="Article description" />
          <ArticleCard title="Article blog" desc="Article description" />
          <ArticleCard title="Article blog" desc="Article description" />
        </div>
        <Link to="/guides-and-advices">
          <CustomButton placeholder="TOUS NOS GUIDES" color="red" className="bold mt-5" />
        </Link>
      </div>
    </div>
  </div>
);

const ArticleCard = ({ title, desc }) => (
  <div className="article-card">
    <div className="article-description flex">
      <div className="flex-column ml-1 mt-05">
        <b className="white ">{title}</b>
        <p className="white ">{desc}</p>
      </div>
      <p className="white end-align ml-5 yellow pointer"> En savoir plus {'>'}</p>
    </div>
  </div>
);
