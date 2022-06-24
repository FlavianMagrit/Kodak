import React, { useContext, useState } from 'react';
import { register } from '../../utils/authentication/authentication';
import { CustomInput } from '../../components/Input/CustomInput';
import '../SignInOrSignUp/Login.scss';
export const CreateAccount = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const ERROR_PASSWORD = 'weak-password';
  const ERROR_ACCOUNT = 'internal-error';

  const handleRegister = () => {
    register(registerEmail, registerPassword).catch((e) => {
      let errorCode = e.code.split('auth/')[1];
      setErrorMessage(errorCode);
    });
  };

  console.log(errorMessage);

  return (
    <div className="column">
      <h3> Register User </h3>
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
      <button onClick={() => handleRegister()}>Create User</button>
    </div>
  );
};

const WeakPassword = () => <p>Mot de passe trop court</p>;
const ExistingAccount = () => <p>Compte existant</p>;
