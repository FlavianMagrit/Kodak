import { useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { db } from '../../utils/firebase-config';
import './ProfilePage.scss';

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const { path } = useRouteMatch();

  return (
    <main>
      <div className="profile-container">
        <div className="background" />
        <h2>Bonjour {user.displayName ?? user.email}</h2>

        <div className="content flex">
          <div className="tabs flex">
            <NavLink to={`${path}/my-account`} activeClassName="active" className="tab">
              <p>Mon compte</p>
            </NavLink>

            <NavLink to={`${path}/orders`} activeClassName="active" className="tab">
              <p>Mes commandes</p>
            </NavLink>
          </div>

          <Switch>
            <Route path={`${path}/my-account`} component={MyAccount} />

            <Route path={`${path}/address-list`}>
              <form>toto</form>
            </Route>
            <Route path={`${path}/orders`}>
              <form>toa</form>
            </Route>
            <Route path={`${path}/means-of-payment`}>
              <form>tote</form>
            </Route>
          </Switch>
        </div>
      </div>
    </main>
  );
};

const MyAccount = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(UserContext);

  const saveUserInfo = (information) =>
    setDoc(doc(db, 'user', user.uid), information).then(() => console.log('User save !'));
  return (
    <div className="my-account flex-column">
      <h3>Mon compte</h3>
      <form onSubmit={handleSubmit(saveUserInfo)}>
        <div className="flex-column">
          <label>Nom</label>
          <CustomInput placeholder="Edouard Martin" type="text" {...register('name')} />
        </div>
        <div className="flex-column">
          <label>Adresse mail</label>
          <CustomInput
            placeholder="edouard.martin@gmail.com"
            type="email"
            {...register('email')}
          />
        </div>
        <div className="flex-column">
          <label>Mot de passe</label>
          <CustomInput
            placeholder="exempledemotdepasse"
            type="password"
            {...register('password')}
          />
        </div>
        <div className="flex-column">
          <label>Téléphone</label>
          <CustomInput placeholder="0793234323" type="number" {...register('phone')} />
        </div>
        <div className="flex">
          <label>S'abonner à la newsletter</label>
          <CustomInput type="checkbox" {...register('newsletter')} />
        </div>

        <div className="tac">
          <CustomButton placeholder="ENREGISTRER" color="red" className="bold" />
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
