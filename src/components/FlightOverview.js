import React from 'react';
import AppCard from './AppCard';
import './FlightOverview.css';

const FlightOverview = ({ Flight }) => {
  return (
    <AppCard NextLink="/passenger" PrevLink="/" Title="Your flight details">
      <h3>
        Flight {Flight.company} {Flight.id}
      </h3>
      <p>Date: {Flight.date}</p>
      <div className="FlightOverview">
        <div>
          <h4>From:</h4>
          <p>{Flight.from}</p>
          <p>Departs at: {Flight.departAt}</p>
        </div>
        <div>
          <h4>To:</h4>
          <p>{Flight.to}</p>
          <p>Arrives at: {Flight.arriveAt}</p>
        </div>
      </div>
    </AppCard>
  );
};

export default FlightOverview;
