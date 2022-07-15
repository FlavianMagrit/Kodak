export const SectionTitle = ({ title, pointColor }) => (
  <h1 className="ml-2">
    {title}
    <span className={`${pointColor} rounded-point`}>.</span>
  </h1>
);
