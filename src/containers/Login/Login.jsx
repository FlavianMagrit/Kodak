import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase-config';
import { CustomInput } from '../../components/Input/CustomInput';
import { register, login, logout } from '../../utils/authentication/authentication';
import './Login.scss';

export const Login = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      {/*<div>*/}
      {/*  <h3> Register User </h3>*/}
      {/*  <input*/}
      {/*    placeholder="Email..."*/}
      {/*    onChange={(e) => {*/}
      {/*      setRegisterEmail(e.target.value);*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <input*/}
      {/*    placeholder="Password..."*/}
      {/*    onChange={(e) => {*/}
      {/*      setRegisterPassword(e.target.value);*/}
      {/*    }}*/}
      {/*  />*/}

      {/*  <button onClick={() => register(registerEmail, registerPassword)}>*/}
      {/*    Create User*/}
      {/*  </button>*/}
      {/*</div>*/}
      <div className="login-container">
        <h3> Connexion </h3>
        <div className="inputs-container">
          <CustomInput
            placeholder="E-mail"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <CustomInput
            placeholder="Mot de passe"
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <button onClick={() => login(loginEmail, loginPassword)}> Login</button>
        </div>
      </div>
      {/*<h4> User Logged In: </h4>*/}
      {/*{user?.email}*/}

      {/*<button onClick={logout}> Sign Out </button>*/}
    </>
  );
};
