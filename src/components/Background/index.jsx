import './Background.scss';

export const Background = ({ image, title, pointColor }) => (
  <div className="background-container flex jcc aic">
    <img src={image} alt="Background" className="background-image" />
    <div className="title-container absolute w75">
      <h1 className="white tac">
        {title} <span className={`${pointColor} rounded-point`}>.</span>
      </h1>
    </div>
  </div>
);
