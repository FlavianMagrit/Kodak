import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import './PaymentPage.scss';
import { CustomButton } from '../../components/CustomButton';

export const PaymentPage = () => {
  return (
    <div>
      <CheckoutForm />
    </div>
  );
};

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  // TIP
  // use the cardElements onChange prop to add a handler
  // for setting any errors:

  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value,
      },
    };

    setProcessingTo(true);

    const cardElement = elements.getElement('card');

    try {
      const { data: clientSecret } = await axios.post('/api/payment_intents', {
        amount: price * 100,
      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq?.error?.message);
        setProcessingTo(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        setCheckoutError(error?.message);
        setProcessingTo(false);
        return;
      }

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  const cardElementOpts = {
    iconStyle: 'solid',
    hidePostalCode: true,
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex">
        <BillingDetailsFields />
      </div>
      <div className="flex">
        <div className="flex">
          <CardElement options={cardElementOpts} onChange={handleCardDetailsChange} />
        </div>
      </div>
      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
      <div className="row">
        {/* TIP always disable your submit button while processing payments */}
        <CustomButton color="red" disabled={isProcessing || !stripe}>
          {isProcessing ? 'Processing...' : `Pay $${price}`}
        </CustomButton>
      </div>
    </form>
  );
};

const BillingDetailsFields = () => {
  return (
    <>
      <FormField name="name" label="Name" type="text" placeholder="Jane Doe" required />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="jane.doe@example.com"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="185 Berry St. Suite 550"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="San Francisco"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="California"
        required
      />
      <FormField name="zip" label="ZIP" type="text" placeholder="94103" required />
    </>
  );
};

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} placeholder={placeholder} required />
    </div>
  );
};

const CheckoutError = ({ children }) => (
  <div className="flex" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);
