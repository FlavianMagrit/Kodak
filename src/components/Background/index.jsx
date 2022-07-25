import PictureBackground from '../../assets/background.jpeg';
import './Background.scss';

export const Background = ({ title, pointColor }) => (
  <div className="background-container flex jcc aic">
    <img src={PictureBackground} alt="Background" className="background-image" />
    <div className="title-container absolute flex">
      <h1 className="white tac">
        {title} <span className={`${pointColor} rounded-point`}>.</span>
      </h1>
    </div>
  </div>
);
