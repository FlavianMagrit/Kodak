import { SignInOrSignUp } from '../../containers/SignInOrSignUp';

export const AuthenticationPage = () => {
  return (
    <div className="flex-column jcc aic mt-2">
      <h1 className="mt-2 mb-2">
        Connectez-vous pour régler vos achats plus rapidement !
      </h1>
      <SignInOrSignUp />
    </div>
  );
};
