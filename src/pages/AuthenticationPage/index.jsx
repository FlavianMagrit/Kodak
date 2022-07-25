import { useState } from 'react';
import { SignInOrSignUp } from '../../containers/SignInOrSignUp';
import { PopUpForgotPassword } from '../../containers/Login';
import './AuthenticationPage.scss';

export const AuthenticationPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="authent-container flex-column jcc aic tac">
      <h2>Connectez-vous pour régler vos achats plus rapidement !</h2>
      <SignInOrSignUp setShowPopup={() => setShowPopup(true)} />
      {showPopup && <PopUpForgotPassword setShowPopup={() => setShowPopup(false)} />}
    </div>
  );
};
