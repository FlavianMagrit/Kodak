import './PaymentPage.scss';
import { useMemo } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

export const PaymentPage = () => {
  return (
    <div>
      <CardForm />
    </div>
  );
};

const CardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const billing_details = {
      email: 'alexandre.becue@gmail.com',
      name: 'Alexandre',
      phone: '06 05 04 03 02',
    };

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billing_details,
    });

    console.log('[PaymentMethod]', payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement
          options={options}
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
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }),
    [],
  );

  return options;
};
