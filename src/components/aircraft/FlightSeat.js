import React from 'react';
import './FlightSeat.css';
import { Radio } from 'antd';

const FlightSeat = props => {
  const RadioButton = Radio.Button;
  const Seat = props.Seat;
  const LeftAisle = props.LeftAisle;
  const seatStyle = {
    marginRight: LeftAisle ? '50px' : '6px',
  };

  if (Seat.features && Seat.features.extraLeg) {
    seatStyle.border = '2px solid #1ec0ff';
    seatStyle.marginTop = '50px';
  }

  return (
    <RadioButton
      {...props}
      style={seatStyle}
      size="small"
      disabled={Seat.occupied}
      className="FlightSeat"
      value={Seat.id}>
      {Seat.id}
    </RadioButton>
  );
};

export default FlightSeat;
