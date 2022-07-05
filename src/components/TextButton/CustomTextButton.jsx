import './CustomTextButton.scss';

export const CustomTextButton = ({ type, color, value, ...props }) => (
    <button className={"custom-text-button " + type + " " + color} {...props}>{value}</button>
);
