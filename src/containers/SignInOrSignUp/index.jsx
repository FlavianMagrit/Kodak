import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { CustomButton } from '../../components/CustomButton';
import { Login } from '../Login';
import './SignInOrSignUp.scss';

export const SignInOrSignUp = () => {
  const [accountCreation, setIsAccountCreation] = useState(false);

  const { setUser } = useContext(UserContext);

  return (
    <div className="flex w90 jcsa aic">
      <Login />
      <div className="vertical-separation" />

      <div className="flex-column aic">
        <CustomButton
          placeholder="Inscrivez-vous"
          onClick={() => setIsAccountCreation(true)}
          color="yellow"
        />
        <div className="horizontal-separation" />
        <CustomButton
          placeholder="Continuer comme invité"
          color="yellow"
          onClick={() => setUser({ email: 'anonyme@anonyme.fr', displayName: 'anonyme' })}
        />
      </div>
    </div>
  );
};
