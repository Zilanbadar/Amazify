import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CardPayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      // Send paymentMethod.id to your server for further processing
      console.log(paymentMethod);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />

      <button type="submit" disabled={!stripe || loading}>
        Pay
      </button>
    </form>
  );
}

export default CardPayment;