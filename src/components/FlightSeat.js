import React from 'react';
import './FlightSeat.css';
import { Radio } from 'antd';

const FlightSeat = ({ Seat }) => {
  const RadioButton = Radio.Button;

  return (
    <RadioButton
      disabled={Seat.occupied}
      className="FlightSeat"
      value={Seat.id}>
      {Seat.price}
    </RadioButton>
  );
};

export default FlightSeat;
