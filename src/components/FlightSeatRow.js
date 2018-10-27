import React from 'react';
import FlightSeat from './FlightSeat';
import './FlightSeatRow.css';

const FlightSeatRow = ({ Seats }) => {
  return (
    <div className="FlightSeatRow">
                {Seats.map((col) => {
              return <FlightSeat Seat={col} key={col.id} />
            })}
    </div>
  );
};

export default FlightSeatRow;
