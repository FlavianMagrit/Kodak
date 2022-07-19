import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { CustomButton } from '../../components/CustomButton';
import { Login } from '../Login';
import { Popup } from '../../components/Popup';
import { Register } from '../Register';
import './SignInOrSignUp.scss';

export const SignInOrSignUp = ({ setShowPopup }) => {
  const [accountCreation, setIsAccountCreation] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const { setUser } = useContext(UserContext);

  return (
    <div className="flex w90 jcsa aic h100">
      <Login setShowPopup={setShowPopup} />
      <div className="vertical-separation" />

      <div className="flex-column aic">
        <CustomButton
          placeholder="Inscrivez-vous"
          onClick={() => setShowRegisterPopup(true)}
          color="yellow"
        />
        <div className="horizontal-separation" />
        <CustomButton
          placeholder="Continuer comme invité"
          color="yellow"
          onClick={() => setUser({ email: 'anonyme@anonyme.fr', displayName: 'anonyme' })}
        />
      </div>
      {showRegisterPopup && <RegisterPopup setShowRegisterPopup={setShowRegisterPopup} />}
    </div>
  );
};

const RegisterPopup = ({ setShowRegisterPopup }) => (
  <Popup closePopup={() => setShowRegisterPopup(false)}>
    <Register />
  </Popup>
);
