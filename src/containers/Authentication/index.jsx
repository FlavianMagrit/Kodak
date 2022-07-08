import React, { useContext, useRef, useState } from 'react';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { login } from '../../utils/authentication/authentication';
import { UserContext } from '../../App';
import { CustomButton } from '../../components/CustomButton';

export const Authentication = () => {
  const [error, setIsError] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const hasToBeSaveRef = useRef();

  const { setUser } = useContext(UserContext);

  const handleConnexion = () => {
    setIsError(false);

    login(loginEmail, loginPassword)
      .then((userAuthInfo) => {
        console.log('current ? ', hasToBeSaveRef.current);
        console.log('check ? ', hasToBeSaveRef.current.checked);
        // if (hasToBeSaveRef.current.checked) {
        sessionStorage.setItem('user', JSON.stringify(userAuthInfo.user));
        // }
        setUser(userAuthInfo.user);
      })
      .catch(() => setIsError(true));
  };

  return (
    <div className="login-container">
      <h3 className="mb-2">Connexion</h3>
      <div className="inputs-container">
        <CustomInput
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <CustomInput
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        {error && <p className="error">E-mail ou Mot de passe incorrect</p>}
        <CustomButton
          placeholder="Se connecter"
          onClick={() => handleConnexion()}
          color="red"
        />
        {/*//TODO: checkbox to save user*/}
        {/*<div>*/}
        {/*  <input type="checkbox" id="remind-me" name="remind-me" ref={hasToBeSaveRef} />*/}
        {/*  <label htmlFor="remind-me">Se souvenir de moi</label>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
