import PictureBackground from '../../assets/background.png';
import './Background.scss';

export const Background = ({ title, pointColor }) => (
  <div className="background-container flex jcc aic">
    <img src={PictureBackground} alt="Background" className="background-image" />
    <div className="title-container absolute w75">
      <h1 className="white">
        {title} <span className={pointColor}>.</span>
      </h1>
    </div>
  </div>
);
