export const SectionTitle = ({ title, pointColor, className }) => (
  <h1 className={`ml-2 ${className}`}>
    {title}
    <span className={`${pointColor} rounded-point`}>.</span>
  </h1>
);
