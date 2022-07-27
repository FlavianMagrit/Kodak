import { useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { db } from '../../utils/firebase-config';
import ImageArticle from '../../assets/favorite-camera.jpeg';
import './ProfilePage.scss';

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const { path } = useRouteMatch();

  return (
    <main>
      <div className="profile-container">
        <div className="background" />
        <h2>Bonjour {user?.displayName ?? user?.email}</h2>

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
            <Route path={`${path}/orders`} component={MyOrders} />
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

const MyOrders = () => {
  const ORDERS = [
    {
      state: 'En cours de livraison',
      date: '27 Juin 2022',
      reference: 'E8721855135484521158',
    },
    {
      state: 'Livrée',
      date: '14 Janvier 2022',
      reference: 'E6586421684846548731',
    },
    {
      state: 'Livrée',
      date: '6 Avril 2021',
      reference: 'E9154347851334297512',
    },
    {
      state: 'Livrée',
      date: '30 Novembre 2020',
      reference: 'E9181532158474564169',
    },
  ];
  return (
    <div className="my-orders flex-column">
      <h3>Mes commandes</h3>
      {ORDERS.map((order) => (
        <OrderCard state={order.state} date={order.date} reference={order.reference} />
      ))}
    </div>
  );
};

const OrderCard = ({ state, date, reference }) => {
  const article1 = {
    image: { ImageArticle },
    title: 'KODAK B98',
    color: 'yellow',
    quantity: '47',
    price: '27,99',
  };

  const article2 = {
    image: { ImageArticle },
    title: 'KODAK B98',
    color: 'yellow',
    quantity: '47',
    price: '27,99',
  };

  return (
    <div className="order-card flex-column">
      <h2>{state}</h2>
      <div className="date flex">
        <span className="grey">Commande passée le</span>
        <span>{date}</span>
      </div>
      <div className="ref flex">
        <span className="grey">Numéro de commande</span>
        <span>{reference}</span>
      </div>
      <div className="articles flex-column">
        <ArticleCard {...article1} />
        <ArticleCard {...article2} />
      </div>
      <div className="mt-2 tac">
        <CustomButton color="yellow" placeholder="DÉTAILS" />
      </div>
    </div>
  );
};

const ArticleCard = ({ image, title, color, quantity, price }) => (
  <div className="article-card flex mt-2">
    <img src={ImageArticle} alt={title} />
    <div className="details flex-column">
      <h3>{title}</h3>
      <div className="description flex jcsb">
        <div className="color">
          <span className="grey">Couleur</span>
          <span className={`${color}-point`} />
        </div>
        <div className="quantity">
          <span className="grey">Quantité x{quantity}</span>
        </div>
        <span className="price">{price}€</span>
      </div>
      <span className="grey">Pack éco</span>
      <span className="w75 ml-3 mt-1 asc tal">Donnez votre avis</span>
    </div>
  </div>
);

export default ProfilePage;
