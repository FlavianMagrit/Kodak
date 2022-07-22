import { SignInOrSignUp } from '../../containers/SignInOrSignUp';
import { Footer } from '../../containers/Footer';
import Logo from '../../assets/logo-kodak.png';
import './AuthenticationPage.scss';

export const AuthenticationPage = () => {
  return (
    <div className="flex-column jcc aic mt-2">
      <img src={Logo} alt="Kodak" />
      <div className="authent-container tac">
        <h2 className="mb-2">Connectez-vous pour régler vos achats plus rapidement !</h2>
        <SignInOrSignUp />
      </div>
      <Footer />
    </div>
  );
};
