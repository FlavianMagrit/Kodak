import './SectionTitle.scss';

export const SectionTitle = ({ title, pointColor, className }) => (
  <h1 className={`${className}`}>
    {title}
    <span className={`${pointColor} rounded-point`}>.</span>
  </h1>
);
