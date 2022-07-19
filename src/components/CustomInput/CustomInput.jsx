export const CustomInput = ({ placeholder, onChange, type, value }) => (
  <input
    className="custom-input mb-2"
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);
