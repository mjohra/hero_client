import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51KD91DIngtIavZmDP9zlDMwoJLluLbQbiEgALcAYdHWM6woYFc7KjCx4soSQe5VlBSH776sraN7BcJtp1abS2cII00QBXMP5YL"
  );
  const {packageId}=useParams();
  let price;
  if(packageId==="1"){
    price=200;
  }
  else{
    price=100;
  }
  return (
    <div>
     
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
