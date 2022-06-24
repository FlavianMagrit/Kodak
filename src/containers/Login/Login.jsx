import {Component, useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase-config';
import {UserContext} from "../../App";
import {CreateAccount} from "../CreateAccount";
import {Authentication} from "../Authentication";
import './Login.scss';

export const Login = () => {
  const [accountCreation, setIsAccountCreation] = useState(false);


  const history = useHistory();
  const { setUser } = useContext(UserContext);

  console.log(history)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>

      {accountCreation
        ? <button onClick={() => setIsAccountCreation(false)}>Se connecter</button>
        : <button onClick={() => setIsAccountCreation(true)}>Créer un compte</button>
      }

      {accountCreation
        ? <CreateAccount />
        : <Authentication />
      }
    </>
  );
};
