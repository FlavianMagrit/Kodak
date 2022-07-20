import './GuidesAndAdvices.scss';
import { SectionTitle } from '../../components/SectionTitle';
import { CustomButton } from '../../components/CustomButton';
import { Link } from 'react-router-dom';

export const GuidesAndAdvices = () => (
  <div className="guides-advices-container">
    <div className="filter-background absolute r-0" />
    <div className="head absolute z-200">
      <SectionTitle title="Guides et conseils" pointColor="red-point" className="white" />
      <p className="white">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <div className="flex-column aic">
        <div className="articles flex jcsa mt-5">
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
        <b className="white">{title}</b>
        <p className="white">{desc}</p>
      </div>
      <p className="white end-align ml-5 yellow pointer"> En savoir plus {'>'}</p>
    </div>
  </div>
);
