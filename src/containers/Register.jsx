import React, { useContext, useState } from 'react';
import { register } from '../utils/authentication/authentication';
import { CustomInput } from '../components/CustomInput/CustomInput';
import { UserContext } from '../App';
import { CustomButton } from '../components/CustomButton';
import { useHistory } from 'react-router-dom';
import './SignInOrSignUp/SignInOrSignUp.scss';

export const Register = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const ERROR_PASSWORD = 'weak-password';
  const ERROR_ACCOUNT = 'email-already-in-use';

  const { setUser } = useContext(UserContext);

  const handleRegister = () => {
    register(registerEmail, registerPassword)
      .then((userAuthInfo) => {
        setUser(userAuthInfo.user);
        sessionStorage.setItem('user', JSON.stringify(userAuthInfo.user));
        history.push('/');
      })
      .catch((e) => {
        let errorCode = e.code.split('auth/')[1];
        setErrorMessage(errorCode);
      });
  };

  return (
    <div className="flex-column aic relative">
      <CustomInput
        required
        type="email"
        value={registerEmail}
        placeholder="E-mail"
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
      />
      <CustomInput
        required
        type="password"
        value={registerPassword}
        placeholder="Mot de passe"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />
      {errorMessage === ERROR_PASSWORD ? (
        <WeakPassword />
      ) : errorMessage === ERROR_ACCOUNT ? (
        <ExistingAccount />
      ) : null}
      <CustomButton
        placeholder="Inscription"
        color="red"
        onClick={() => handleRegister()}
      />
    </div>
  );
};

const WeakPassword = () => <p className="error-auth">Mot de passe trop court</p>;
const ExistingAccount = () => <p className="error-auth">Compte existant</p>;
