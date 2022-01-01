import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { Container } from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const CheckoutForm = ({ price }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios
      .post("https://hidden-sands-08000.herokuapp.com/create-payment-intent", {
        price,
      })
      .then(function (response) {
        setClientSecret(response.data.clientSecret);
        console.log(response.data);
      })
      .catch(function (error) {
        window.alert(error.message + "Try Again");
      });
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setClicked(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
          },
        },
      });
    if (intentError) {
      window.alert(intentError.message);
    } else {
      console.log(paymentIntent);
      window.alert("Success");
      setClicked(false);
    }
  };

  return (
    <><Header></Header>
    <Container className="mt-5 p-5">
        <h1 className="mb-5 p-5">Payment</h1>
      <form classname="" onSubmit={handleSubmit}>
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
        {!clicked && (
          <button
            type="submit"
            disabled={!stripe}
            style={{
              padding: "5px 10px",
              border: "1px solid green",
              backgroundColor: "#42d942",
              marginTop: "20px",
            }}
          >
            Pay ${price}
          </button>
        )}
      </form>
    </Container>
    
    </>
  );
};
export default CheckoutForm;
