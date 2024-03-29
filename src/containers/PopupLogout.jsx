import { useState } from 'react';

import { Popup } from '../components/Popup';
import { CustomButton } from '../components/CustomButton';
import { useHistory } from 'react-router-dom';

export const PopupLogout = ({ setShowPopup, logout }) => {
  const [_, setError] = useState('');
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
      history.push('/');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <Popup closePopup={closePopup}>
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
    </Popup>
  );
};
