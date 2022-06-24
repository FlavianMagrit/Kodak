import {useContext, useState} from 'react';
import {UserContext} from "../../App";
import {CreateAccount} from "../CreateAccount";
import {Authentication} from "../Authentication";
import './Login.scss';

export const SignInOrSignUp = () => {
  const [accountCreation, setIsAccountCreation] = useState(false);

  const { setUser } = useContext(UserContext);

  return (
    <section className='sign-in_sign-up'>
      <div className="left-side">
        { accountCreation
          ? <CreateAccount />
          : <Authentication />
        }
      </div>

      <div className="right-side">
        { accountCreation
          ? <a className='create-account' onClick={() => setIsAccountCreation(false)}>Se connecter</a>
          : <a className='create-account' onClick={() => setIsAccountCreation(true)}>Créer un compte</a>
        }

        <a className='invite-people' onClick={() => setUser({ email: 'anonyme@anonyme.fr', displayName: 'anonyme'})}>Continuer comme invité</a>
      </div>
    </section>
  );
};
