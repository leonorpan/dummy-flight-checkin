import React from 'react';
import FlightSeat from './FlightSeat';
import './FlightSeatRow.css';

const FlightSeatRow = ({ Seats }) => {
  return (
    <div className="FlightSeatRow">
      {Seats.map((col, index) => {
        if (!col) return null;
        const leftAisle = Seats.length / 2 === index + 1;
        return <FlightSeat LeftAisle={leftAisle} Seat={col} key={col.id} />;
      })}
    </div>
  );
};

export default FlightSeatRow;
