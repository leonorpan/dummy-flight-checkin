import React from 'react';
import AppCard from './AppCard';

const FlightOverview = ({ Flight }) => {
  return (
    <AppCard NextLink="/passenger" PrevLink="/" Title="Your flight details:">
      <div>Flight No: {Flight.id}</div>
      <div>From :{Flight.from}</div>
      <div>To: {Flight.to}</div>
    </AppCard>
  );
};

export default FlightOverview;
