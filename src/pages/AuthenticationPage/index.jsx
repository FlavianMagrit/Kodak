import { SignInOrSignUp } from '../../containers/SignInOrSignUp';

export const AuthenticationPage = () => {
  return (
    <div className="flex-column jcc aic pt-2">
      <h2 className="mt-2 mb-2">
        Connectez-vous pour régler vos achats plus rapidement !
      </h2>
      <SignInOrSignUp />
    </div>
  );
};
