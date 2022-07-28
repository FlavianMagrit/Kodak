import { useContext, useEffect, useState } from 'react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { db } from '../../utils/firebase-config';
import ImageArticle from '../../assets/favorite-camera.jpeg';
import './ProfilePage.scss';
import { notify } from '../../App';

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
    setDoc(doc(db, 'user', user.uid), information).then(() =>
      notify('Vos informations ont bien été modifiées'),
    );

  return (
    <div className="my-account flex-column">
      <h3>Mettre à jour mes informations personnelles</h3>
      <form onSubmit={handleSubmit(saveUserInfo)}>
        <div className="flex-column">
          <CustomInput placeholder="Nom" type="text" {...register('lastname')} />
          <CustomInput placeholder="Prénom" type="text" {...register('firstname')} />
          <CustomInput placeholder="Adresse mail" type="email" {...register('email')} />
          <CustomInput
            placeholder="Mot de passe"
            type="password"
            {...register('password')}
          />
          <CustomInput placeholder="Téléphone" type="number" {...register('phone')} />
          <CustomInput
            placeholder="Adresse de livraison"
            type="text"
            {...register('delivery-address')}
          />

          <div className="tac">
            <CustomButton placeholder="SAUVEGARDER" color="red" className="bold" />
          </div>
        </div>
      </form>
    </div>
  );
};

const MyOrders = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const ordersCollectionRef = collection(db, `user/${user.uid}/orders`);

  useEffect(() => {
    const getOrders = async () => {
      const data = await getDocs(ordersCollectionRef);
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getOrders();
  }, []);

  console.log(orders);

  return (
    <div className="my-orders flex-column">
      <h3>Mes commandes</h3>
      {orders.map((order) => (
        <OrderCard {...order} orders={orders} />
      ))}
    </div>
  );
};

const OrderCard = ({ date, id, orders }) => {
  return (
    <div className="order-card flex-column">
      <h2>En cours de livraison</h2>
      <div className="date flex">
        <span className="grey">Commande passée le</span>
        <span>{date}</span>
      </div>
      <div className="ref flex">
        <span className="grey">Numéro de commande</span>
        <span>{id}</span>
      </div>
      <div className="articles flex-column">
        <ArticleCard />
      </div>
      <div className="mt-2 tac">
        <CustomButton color="yellow" placeholder="DÉTAILS" />
      </div>
    </div>
  );
};

const ArticleCard = ({ image, name, color, quantity, itemTotal }) => (
  <div className="article-card flex mt-2">
    <img src={ImageArticle} alt="ouais" />
    <div className="details flex-column">
      <div className="description flex jcsb">
        <div className="color">
          <span className="grey">Couleur</span>
          <span className={`${color}-point`} />
        </div>
        <div className="quantity">
          <span className="grey">Quantité x{quantity}</span>
        </div>
        <span className="price">{itemTotal}€</span>
      </div>
      <span className="grey">{name}</span>
    </div>
  </div>
);

export default ProfilePage;
