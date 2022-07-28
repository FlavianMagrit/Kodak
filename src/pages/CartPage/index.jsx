import React, { useContext, useState } from 'react';
import { useCart } from 'react-use-cart';
import Logo from '../../assets/logo-kodak.png';
import './CartPage.scss';
import { CustomButton } from '../../components/CustomButton';
import { useHistory } from 'react-router-dom';
import { db } from '../../utils/firebase-config';
import { Popup } from '../../components/Popup';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { doc, setDoc } from 'firebase/firestore';
import { notify, UserContext } from '../../App';
import { CustomInput } from '../../components/CustomInput/CustomInput';

const CartPage = () => {
  const { addItem, cartTotal, isEmpty } = useCart();
  const total = cartTotal?.toFixed(2);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="cartpage-container">
      <img src={Logo} alt="Logo" className="cartpage-logo" />
      {isEmpty ? (
        <h2 className="mt-5 mb-5"> Votre panier est vide</h2>
      ) : (
        <h2> Le total de votre panier est {total}€</h2>
      )}
      <div className="cart-content">
        <Cart setShowPopup={() => setShowPopup(true)} />
      </div>
      {showPopup && <PaymentPopup setShowPopup={setShowPopup} />}
    </div>
  );
};

export const Cart = ({ setShowPopup }) => {
  const { items, cartTotal, setItems, isEmpty } = useCart();
  const history = useHistory();

  const total = cartTotal?.toFixed(2);

  return (
    <div className="flex-column h100">
      {items.map((item) => (
        <CartItem {...item} />
      ))}
      {!isEmpty && (
        <>
          <CustomButton
            placeholder="SUPPRIMER"
            onClick={() => setItems([])}
            className="bold mt-2 mb-2 remove-btn"
          />
          <div className="cart-content w100 mb-5">
            <div className="flex jcsb">
              <h2> Sous-total</h2>
              <h2> {total}€</h2>
            </div>
            <div className="flex jcsb">
              <h2> Livraison</h2>
              <h2> 0.00€</h2>
            </div>
          </div>
          <div className="cart-content w100">
            <div className="flex jcsb">
              <h2> Total</h2>
              <h2> {total}€</h2>
            </div>
          </div>
          <CustomButton
            placeholder="COMMANDER"
            onClick={setShowPopup}
            color="red"
            className="bold mt-2 mb-2 asc payment-btn"
          />
        </>
      )}
    </div>
  );
};

const CartItem = ({ name, id, quantity, color }) => {
  if (color === undefined) {
    color = 'gris';
  }
  const { updateItemQuantity } = useCart();
  return (
    <div className="flex mt-1 aic jcsb">
      <img
        src={require(`../../assets/printomatic/Printomatic-${color}.png`).default}
        alt="Logo"
        className="product-cart-image"
      />
      <h3>{name}</h3>
      <div className="quantity-buttons flex jcsa aic">
        <button onClick={() => updateItemQuantity(id, quantity - 1)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => updateItemQuantity(id, quantity + 1)}>+</button>
      </div>
    </div>
  );
};

export const PaymentPopup = ({ setShowPopup }) => {
  const [address, setAddress] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal, setItems, items } = useCart();
  const { user, setUser } = useContext(UserContext);

  const total = cartTotal?.toFixed(2);
  const randomOrder = Math.floor(Math.random() * 1000000).toString();
  const shippingDate = new Date().toLocaleDateString();

  const saveOrder = (order) =>
    setDoc(doc(db, `user/${user.uid}/orders/`, `${randomOrder}`), order).then(() => {
      console.log('Order saved !');
      setItems([]);
      notify('Votre commande a bien été prise en compte');
    });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const billing_details = {
      email: user.email,
      address: {
        line1: address,
      },
    };

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billing_details,
    });

    if (payload) {
      setShowPopup(false);
      await saveOrder({ items, billing_details, total, date: shippingDate });
    }
  };

  return (
    <Popup closePopup={() => setShowPopup(false)}>
      <div className="flex-column aic">
        <img src={Logo} alt="Logo" className="cartpage-logo" />
        <form onSubmit={handleSubmit} className="w50 mia">
          <h3>Adresse de Livraison</h3>
          <CustomInput
            type="text"
            placeholder="Adresse de livraison"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <h3>Informations de paiement</h3>
          <div className="form-payment-container">
            <CardElement
              onReady={() => {
                console.log('CardElement [ready]');
              }}
              onChange={(event) => {
                console.log('CardElement [change]', event);
              }}
              onBlur={() => {
                console.log('CardElement [blur]');
              }}
              onFocus={() => {
                console.log('CardElement [focus]');
              }}
            />
          </div>
          <CustomButton
            placeholder={`PAYER ${total}€`}
            color="red"
            className="bold mt-5 payment-btn jcc aic"
          />
        </form>
      </div>
    </Popup>
  );
};

export default CartPage;
