import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { CreateAccount } from '../CreateAccount';
import { Authentication } from '../Authentication';
import './Login.scss';
import { CustomButton } from '../../components/CustomButton';

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
          <CustomButton
            placeholder="Se connecter"
            onClick={() => setIsAccountCreation(false)}
            color="yellow"
          />
        ) : (
          <CustomButton
            placeholder="Inscrivez-vous"
            onClick={() => setIsAccountCreation(true)}
            color="yellow"
          />
        )}

        <CustomButton
          placeholder="Continuer comme invité"
          color="yellow"
          onClick={() => setUser({ email: 'anonyme@anonyme.fr', displayName: 'anonyme' })}
        />
      </div>
    </section>
  );
};
