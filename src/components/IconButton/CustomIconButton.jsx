import './CustomIconButton.scss';

export const CustomIconButton = ({ type, color, icon,  ...props }) => (
    <button className={"custom-icon-button " + type + " " + color} {...props}>{icon}</button>
);
