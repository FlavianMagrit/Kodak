import React from 'react';
import { useCart } from 'react-use-cart';
import Logo from '../../assets/logo-kodak.png';
import './CartPage.scss';
import { CustomButton } from '../../components/CustomButton';
import { useHistory } from 'react-router-dom';

const CartPage = () => {
  const { addItem, cartTotal, isEmpty } = useCart();
  const total = cartTotal?.toFixed(2);
  return (
    <div className="cartpage-container">
      <img src={Logo} alt="Logo" className="cartpage-logo" />
      {isEmpty ? (
        <h2 className="mt-5 mb-5"> Votre panier est vide</h2>
      ) : (
        <h2> Le total de votre panier est {total}€</h2>
      )}
      <div className="cart-content">
        <Cart />
      </div>
    </div>
  );
};

export const Cart = () => {
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
            onClick={() => history.push('/payment')}
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
      <div className="flex w10 jcsa aic">
        <button onClick={() => updateItemQuantity(id, quantity - 1)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => updateItemQuantity(id, quantity + 1)}>+</button>
      </div>
    </div>
  );
};

export default CartPage;
