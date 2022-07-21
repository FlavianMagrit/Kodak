import React from "react";

export const CustomInput = React.forwardRef(({ placeholder, onChange, type, value, ...props }, ref) => (
  <input
    ref={ref}
    className="custom-input mb-2"
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    {...props}
  />
));
