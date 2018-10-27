import React from 'react';
import './FlightSeat.css';
import { Radio } from 'antd';

const FlightSeat = (props) => {
  const RadioButton = Radio.Button;
  const Seat = props.Seat;

  return (
    <RadioButton
      {...props}
      disabled={Seat.occupied}
      className="FlightSeat"
      value={Seat.id}>
      {Seat.id}
    </RadioButton>
  );
};

export default FlightSeat;
