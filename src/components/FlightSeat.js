import React from 'react';
import './FlightSeat.css';

const FlightSeat = ({ Seat }) => {
  return (
    <div className="App-FlightSeat">
      <span>{Seat.window && 'W'}</span>
      <span>{Seat.id}</span>
    </div>
  );
};

export default FlightSeat;
