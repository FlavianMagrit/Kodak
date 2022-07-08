import React, { useContext, useState } from 'react';
import { register } from '../../utils/authentication/authentication';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { UserContext } from '../../App';
import { CustomButton } from '../../components/CustomButton';
import '../SignInOrSignUp/Login.scss';

export const CreateAccount = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const ERROR_PASSWORD = 'weak-password';
  const ERROR_ACCOUNT = 'internal-error';

  const { setUser } = useContext(UserContext);

  const handleRegister = () => {
    register(registerEmail, registerPassword)
      .then((userAuthInfo) => setUser(userAuthInfo.user))
      .catch((e) => {
        let errorCode = e.code.split('auth/')[1];
        setErrorMessage(errorCode);
      });
  };

  return (
    <div className="login-container">
      <h3 className="mb-2">Inscription</h3>
      <div className="inputs-container">
        <CustomInput
          required
          placeholder="E-mail"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <CustomInput
          required
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
    </div>
  );
};

const WeakPassword = () => <p>Mot de passe trop court</p>;
const ExistingAccount = () => <p>Compte existant</p>;
