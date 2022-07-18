export const CustomButton = ({ color, placeholder, onClick, className }) => (
  <button onClick={onClick} className={`custom-button ${color}-button ${className}`}>
    {placeholder}
  </button>
);
