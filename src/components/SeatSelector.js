import React from 'react';
import { Card } from 'antd';
import { Radio } from 'antd';
import FlightSeat from './FlightSeat';

class SeatSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const RadioGroup = Radio.Group;

    return (
      <Card title="Select your seat:">
        <RadioGroup
          onChange={e => this.props.onSeatSelected(e.target.value)}
          buttonStyle="solid"
          value={this.props.Selected ? this.props.Selected.id : null}>
          {this.props.Seats.length > 0 &&
            this.props.Seats.map((seat, id) => {
              if (id % 4 === 0) {
                return (
                  <React.Fragment key={seat.id}>
                    <br />
                    {seat.extraLeg && (
                      <div>
                        <br />
                        <br />
                      </div>
                    )}
                    <FlightSeat Seat={seat} />
                  </React.Fragment>
                );
              }
              return <FlightSeat key={seat.id} Seat={seat} />;
            })}
        </RadioGroup>
      </Card>
    );
  }
}

export default SeatSelector;
