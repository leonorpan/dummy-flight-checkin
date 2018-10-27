import React from 'react';
import FlightSeat from './FlightSeat';
import './FlightSeatRow.css';

const FlightSeatRow = ({ Seats }) => {
  return (
    <div className="FlightSeatRow">
      {Seats.map((col, index) => {
        const leftAisle = Seats.length / 2 === index + 1;
        return <FlightSeat style={{
          marginRight: leftAisle ? 60 : 0,
          marginTop: col.features.extraLeg ? 50 : 0,
        }} Seat={col} key={col.id} />;
      })}
    </div>
  );
};

export default FlightSeatRow;
