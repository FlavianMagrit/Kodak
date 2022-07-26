import { useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { db } from '../../utils/firebase-config';
import './ProfilePage.scss';

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const { path, url } = useRouteMatch();

  return (
    <main>
      <div className="profile-container">
        <div className="background" />
        <h2>Bonjour {user.displayName ?? user.email}</h2>

        <div className="flex">
          <div className="tabs">
            <NavLink to={`${path}/my-account`} activeClassName="active" className="tab">
              <h5 className="vtmn-typo_title-5">Mon compte</h5>
            </NavLink>

            <NavLink to={`${path}/orders`} activeClassName="active" className="tab">
              <h5 className="vtmn-typo_title-5">Mes commandes</h5>
            </NavLink>
          </div>
          {/*<ul>*/}
          {/*  <CustomListItem*/}
          {/*    active={activeItem === 0}*/}
          {/*    url={url}*/}
          {/*    route="my-account"*/}
          {/*    label="Mon compte"*/}
          {/*  />*/}
          {/*  <CustomListItem*/}
          {/*    active={activeItem === 1}*/}
          {/*    url={url}*/}
          {/*    route="address-list"*/}
          {/*    label="Liste d'adresses"*/}
          {/*  />*/}
          {/*  <CustomListItem*/}
          {/*    active={activeItem === 2}*/}
          {/*    url={url}*/}
          {/*    route="orders"*/}
          {/*    label="Mes commandes"*/}
          {/*  />*/}
          {/*  <CustomListItem*/}
          {/*    active={activeItem === 3}*/}
          {/*    url={url}*/}
          {/*    route="means-of-payment"*/}
          {/*    label="Moyens de paiement"*/}
          {/*  />*/}
          {/*</ul>*/}

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

const CustomListItem = ({ active, url, route, label }) => (
  <li className={`${active ? 'active' : ''}`}>
    <Link to={`${url}/${route}`}>{label}</Link>
  </li>
);

const MyAccount = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(UserContext);

  const saveUserInfo = (information) =>
    setDoc(doc(db, 'user', user.uid), information).then(() => console.log('User save !'));
  return (
    <div className="flex-column ml-4">
      <h3>Mon compte</h3>
      <form className="ml-4" onSubmit={handleSubmit(saveUserInfo)}>
        <div className={'flex-column'}>
          <label>Nom</label>
          <CustomInput
            placeholder={'Edouard Martin'}
            type={'text'}
            {...register('name')}
          />
        </div>
        <div className={'flex-column'}>
          <label>Adresse mail</label>
          <CustomInput
            placeholder={'edouard.martin@gmail.com'}
            type={'email'}
            {...register('email')}
          />
        </div>
        <div className={'flex-column'}>
          <label>Mot de passe</label>
          <CustomInput
            placeholder={'exempledemotdepasse'}
            type={'password'}
            {...register('password')}
          />
        </div>
        <div className={'flex-column'}>
          <label>Téléphone</label>
          <CustomInput
            placeholder={'0793234323'}
            type={'number'}
            {...register('phone')}
          />
        </div>
        <div className={'flex-column'}>
          <label>Newsletter</label>
          <CustomInput type={'checkbox'} {...register('newsletter')} />
        </div>

        <div className="align-end">
          <CustomButton placeholder="ENREGISTRER" color="red" className="bold mt-5" />
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
