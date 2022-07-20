import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { CustomInput } from '../components/CustomInput/CustomInput';
import { login } from '../utils/authentication/authentication';
import { UserContext } from '../App';
import { CustomButton } from '../components/CustomButton';
import './SignInOrSignUp/SignInOrSignUp.scss';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../utils/firebase-config';
import { Popup } from '../components/Popup';

export const Login = ({ setShowPopup }) => {
  const [error, setIsError] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const history = useHistory();

  const { user, setUser } = useContext(UserContext);

  const handleConnexion = () => {
    setIsError(false);

    login(loginEmail, loginPassword)
      .then((userAuthInfo) => {
        setUser(userAuthInfo.user);
        sessionStorage.setItem('user', JSON.stringify(userAuthInfo.user));
        history.push('/');
      })
      .catch(() => setIsError(true));
    setLoginPassword('');
  };

  return (
    <div className="authentication-container flex-column aic mb-2">
      <p className="mb-2">Connexion</p>
      <div className="flex-column aic relative">
        <CustomInput
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={(e) => setLoginEmail(e.target.value)}
          value={loginEmail}
        />
        <CustomInput
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setLoginPassword(e.target.value)}
          value={loginPassword}
        />
        <CustomButton
          placeholder="Se connecter"
          onClick={() => handleConnexion()}
          color="red"
          className="bold"
        />
        {error && <p className="error-auth">E-mail ou Mot de passe incorrect</p>}
        <div className="horizontal-separation" />
        <span onClick={setShowPopup} className="pointer">
          Mot de passe oublié ?
        </span>
      </div>
    </div>
  );
};

export const PopUpForgotPassword = ({ setShowPopup }) => {
  const [forgotEmail, setForgotEmail] = useState('');

  const forgotPassword = (email) => {
    console.log('reset email sent to ' + email);
    sendPasswordResetEmail(auth, email, null)
      .then(() => {
        alert('reset email sent to ' + email);
      })
      .catch(function (e) {
        console.log(e);
      });
    setShowPopup(false);
  };

  return (
    <Popup closePopup={() => setShowPopup(false)}>
      <div className="flex-column aic tac">
        <h3>
          Un e-mail vous sera envoyé. Vous pourrez procéder au changement de mot de passe
        </h3>
        <CustomInput
          type="email"
          placeholder="E-mail"
          onChange={(e) => setForgotEmail(e.target.value)}
        />
        <CustomButton
          placeholder="Envoyer"
          color="red"
          className="bold"
          onClick={() => forgotPassword(forgotEmail)}
        />
      </div>
    </Popup>
  );
};
