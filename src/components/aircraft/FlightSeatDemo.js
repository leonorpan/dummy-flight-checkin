import React from 'react';
import FlightSeat from './FlightSeat';
import './FlightSeatDemo.css';

class FlightSeatDemo extends React.PureComponent {
  render() {
    return (
      <div className="FlightSeatDemo">
        <div>
          <FlightSeat
            Seat={{
              features: {
                extraLeg: true,
              },
              id: 'XX',
            }}
          />
          <p>Extra space</p>
        </div>
        <div>
          <FlightSeat
            Seat={{
              occupied: true,
              id: 'ZZ',
            }}
          />
          <p>Occupied</p>
        </div>
      </div>
    );
  }
}

export default FlightSeatDemo;
