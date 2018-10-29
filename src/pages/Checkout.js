import React from 'react';
import AppCard from '../components/global/AppCard';

const Checkout = ({ Flight }) => {
  return (
    <AppCard Title="All set!">
      <h1>Thank you!</h1>
      <p>Your payment is complete!</p>
      <p>You are ready to go!</p>
    </AppCard>
  );
};

export default Checkout;
