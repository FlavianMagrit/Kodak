import './Popup.scss';

export const Popup = ({ children, closePopup }) => {
  return (
    <>
      <div className="popup-container" />
      <div className="popup-content">
        <h3 className="ml-1 pointer" onClick={closePopup}>
          x
        </h3>
        <div className="aic flex-column">{children}</div>
      </div>
    </>
  );
};
