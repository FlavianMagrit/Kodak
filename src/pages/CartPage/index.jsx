import React from 'react';
import { useCart } from 'react-use-cart';

const CartPage = () => {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: 'Malm',
      price: 9900,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Nordli',
      price: 16500,
      quantity: 5,
    },
    {
      id: 3,
      name: 'Kullen',
      price: 4500,
      quantity: 1,
    },
  ];
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
      <Cart />
    </div>
  );
};

export const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;
  const total = cartTotal?.toFixed(2);

  return (
    <>
      <h4>
        Cart ({totalUniqueItems}) pour {total}
      </h4>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default CartPage;
