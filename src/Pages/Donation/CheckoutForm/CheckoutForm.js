import { CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutForm = (props) => {
  const { amount } = props;
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("https://sheccha-shebok-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setSuccess("");
      setError(error.message);
    } else {
      setError("");
    }

    //payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setSuccess("Donation Completed Successfully");
      setError("");
      setProcessing(false);
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        transaction: paymentIntent.client_secret,
        last4: paymentMethod.card.last4,
        email: user.email,
        event: props.currentDonation.title,
        eventBanner: props.currentDonation.banner,
        date: new Date().toDateString(),
      };

      const url = "https://sheccha-shebok-server.vercel.app/payment";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success(`Successfully paid $${amount}`);
          }
        });
    }
  };

  return (
    <div style={{ width: "400px" }}>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress />
        ) : (
          <Button
            className="mt-4"
            sx={{ width: 400 }}
            variant="contained"
            type="submit"
            disabled={!stripe || success}
          >
            Pay ${amount}
          </Button>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <ToastContainer />
    </div>
  );
};

export default CheckoutForm;
