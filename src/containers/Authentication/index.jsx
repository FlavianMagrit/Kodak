import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { login } from '../../utils/authentication/authentication';
import { UserContext } from '../../App';
import { CustomButton } from '../../components/CustomButton';

export const Authentication = () => {
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
        history.push('/');
      })
      .catch(() => setIsError(true));
  };

  console.log(user);

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
      </div>
    </div>
  );
};
