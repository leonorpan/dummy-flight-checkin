import React from 'react';
import './FlightSeat.css';

const FlightSeat = ({ Seat }) => {
  return <div className="App-FlightSeat">{Seat.id}</div>;
};

export default FlightSeat;
