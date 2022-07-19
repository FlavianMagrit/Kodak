import { useState } from 'react';
import { SignInOrSignUp } from '../../containers/SignInOrSignUp';
import { PopUpForgotPassword } from '../../containers/Login';

export const AuthenticationPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex-column jcc aic pt-2">
      <h2 className="mt-2 mb-2">
        Connectez-vous pour régler vos achats plus rapidement !
      </h2>
      <SignInOrSignUp setShowPopup={() => setShowPopup(true)} />
      {showPopup && <PopUpForgotPassword setShowPopup={() => setShowPopup(false)} />}
    </div>
  );
};
