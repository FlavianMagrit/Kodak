export const CustomButton = ({ color, placeholder, onClick }) => (
  <button onClick={onClick} className={`custom-button ${color}-button`}>
    {placeholder}
  </button>
);
