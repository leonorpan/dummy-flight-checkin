import React from 'react';
import AppCard from '../components/global/AppCard';
import './FlightOverview.css';

const getDateString = datestamp => {
  return new Date(datestamp).toDateString();
};

const getTimeString = timestamp => {
  return new Date(timestamp).toLocaleTimeString();
};

const FlightOverview = ({ Flight }) => {
  return (
    <AppCard
      NextLink="/passenger"
      NextTxt="Passenger Info"
      Title="Your flight details">
      <div>
        <h2>
          {' '}
          Flight {Flight.company} {Flight.id}
        </h2>
        <p>
          {' '}
          <b> Date:</b> {getDateString(Flight.from.timestamp)}
        </p>
        <p>
          {' '}
          <b> Aircraft:</b> {Flight.aircraft.name}
        </p>
        <p>
          {' '}
          <b> Class:</b> ECONOMY
        </p>
      </div>
      <hr />
      <div className="FlightOverview">
        <div>
          <h4>From:</h4>
          <p>
            {Flight.from.city} {Flight.from.airport}
          </p>
          <p>
            {' '}
            <b> Departs at:</b> {getTimeString(Flight.from.timestamp)}{' '}
            {Flight.from.zone}{' '}
          </p>
        </div>
        <div>
          <h4>To:</h4>
          <p>
            {Flight.to.city} {Flight.to.airport}
          </p>
          <p>
            {' '}
            <b> Arrives at:</b> {getTimeString(Flight.to.timestamp)}{' '}
            {Flight.to.zone}
          </p>
        </div>
      </div>
    </AppCard>
  );
};

export default FlightOverview;
