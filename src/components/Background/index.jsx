import './Background.scss';

export const Background = ({ title, pointColor }) => (
  <div className="background-container flex jcc aic">
    <div className="title-container">
      <h1 className="white tac">
        {title} <span className={`${pointColor} rounded-point`}>.</span>
      </h1>
    </div>
  </div>
);
