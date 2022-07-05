import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { CreateAccount } from '../CreateAccount';
import { Authentication } from '../Authentication';
import './Login.scss';
import {CustomIconButton} from "../../components/IconButton/CustomIconButton";
import {CustomTextButton} from "../../components/TextButton/CustomTextButton";
import {MdShoppingBag} from "react-icons/all";

export const SignInOrSignUp = () => {
  const [accountCreation, setIsAccountCreation] = useState(false);

  const { setUser } = useContext(UserContext);

  return (
    <section className="sign-in_sign-up">
      <div className="left-side">
        {accountCreation ? <CreateAccount /> : <Authentication />}
      </div>

      <div className="right-side">
        {accountCreation ? (
          <a className="create-account" onClick={() => setIsAccountCreation(false)}>
            Se connecter
          </a>
        ) : (
          <a className="create-account" onClick={() => setIsAccountCreation(true)}>
              <CustomTextButton type='solid' color='red' value={'Créer un compte'}/>
          </a>
        )}

        <a
          className="invite-people"
          onClick={() => setUser({ email: 'anonyme@anonyme.fr', displayName: 'anonyme' })}
        >
            <CustomIconButton type='outline' color='yellow' icon={<MdShoppingBag/>}/>Continuer comme invité
        </a>
      </div>
    </section>
  );
};
