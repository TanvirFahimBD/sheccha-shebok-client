import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = (props) => {
    const {amount} = props;   
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
      fetch("http://localhost:5000/create-payment-intent",{
          method: "POST",
          headers: {
              'content-type': "application/json"
          },
          body: JSON.stringify({amount})
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
      })
    }, [amount])
  
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
            console.log('[error]', error);
        } else {
            setError("")
            console.log('[PaymentMethod]', paymentMethod);
            setSuccess("Donation Completed Successfully")
        }
    };
    
    return (
        <div style={{ width: "400px" }}>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay ${amount}
                </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
    );
};

export default CheckoutForm;