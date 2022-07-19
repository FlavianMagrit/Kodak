import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import './Popup.scss';

export const Popup = ({ setShowPopup, logout }) => {
  const [error, setError] = useState('');
  const history = useHistory();

  const closePopup = () => {
    setShowPopup(false);
  };

  async function handleLogout() {
    setError('');

    try {
      await logout();
      sessionStorage.clear();
      window.location.reload();
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <div className="popup-container" />
      <div className="popup-content">
        <h3 className="ml-1 pointer" onClick={closePopup}>
          x
        </h3>
        <div className=" aic flex-column">
          <h1>Voulez-vous vraiment nous quitter ?</h1>
          <div className="flex w60 jcsa mt-3">
            <CustomButton
              placeholder="NOUS QUITTER"
              className="bold secondary-button"
              onClick={handleLogout}
            />
            <CustomButton
              color="yellow"
              placeholder="RESTER"
              className="bold"
              onClick={closePopup}
            />
          </div>
        </div>
      </div>
    </>
  );
};
