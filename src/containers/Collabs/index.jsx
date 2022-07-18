import './Collabs.scss';
import { SectionTitle } from '../../components/SectionTitle';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton';
import Joma from '../../assets/joma.jpeg';
import Knickerbocker from '../../assets/knickerbocker.jpeg';
import Collab from '../../assets/collab-background.jpeg';

export const Collabs = () => (
  <div className="collabs-container">
    <div className="filter-background absolute r-0" />
    <div className="absolute z-200 w100">
      <SectionTitle title="Les collabs" pointColor="orange-point" className="white" />
      <div className="flex-column aic">
        <div className="flex jcsb w90 mt-2">
          <CollabCard title="KNICKERBOCKER" image={Knickerbocker} />
          <CollabCard title="JOMA" image={Joma} />
          <CollabCard title="LATIV" image={Collab} />
        </div>
        <Link to="/collab">
          <CustomButton placeholder="VOIR TOUTES" color="yellow" className="bold mt-5" />
        </Link>
      </div>
    </div>
  </div>
);

const CollabCard = ({ title, image }) => (
  <div className="collab-card" style={{ backgroundImage: `url(${image})` }}>
    <div className="collab-description flex aic jcc">
      <div className="flex-column aic mt-05">
        <b className="white">{title}</b>
        <p className="white yellow pointer"> Vers la collab'</p>
      </div>
    </div>
  </div>
);
