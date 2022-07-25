import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { CustomButton } from '../../components/CustomButton';
import { Login } from '../Login';
import { Popup } from '../../components/Popup';
import { Register } from '../Register';
import './SignInOrSignUp.scss';
import { useHistory } from 'react-router-dom';

export const SignInOrSignUp = ({ setShowPopup }) => {
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  return (
    <div className="login-container flex w90 jcsa aic h100">
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
          onClick={() => history.push('/')}
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
