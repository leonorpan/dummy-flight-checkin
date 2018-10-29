import React from 'react';
import { Checkbox, Radio } from 'antd';
import AppCard from '../components/global/AppCard';
import FlightSeatRow from '../components/aircraft/FlightSeatRow';
import FlightSeat from '../components/aircraft/FlightSeat';
import './SeatSelector.css';

class SeatSelector extends React.Component {
  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
    this.onCheckBoxChanged = this.onCheckBoxChanged.bind(this);
  }

  renderRows() {
    const seatsByRow = this.props.Aircraft.seatsByRow;
    const seatRows = [];
    let seats = this.props.Seats;
    let seatLength = this.props.Seats.length;
    for (let i = 0; i < seatLength; i += seatsByRow) {
      let row = [];
      for (let j = 0; j < seatsByRow; j++) {
        row.push(seats[i + j]);
      }
      seatRows.push(row);
    }

    return (
      <React.Fragment>
        {seatRows.map((row, i) => (
          <FlightSeatRow key={i} Seats={row} />
        ))}
      </React.Fragment>
    );
  }

  onCheckBoxChanged(checked) {
    if (checked) {
      this.props.onSeatSelected(null);
    }
  }

  render() {
    const RadioGroup = Radio.Group;
    if (!this.props.Seats) return null;

    return (
      <AppCard
        Title="Select your seat"
        PrevLink="/passenger"
        NextLink="/summary"
        PrevTxt="Passenger info"
        NextTxt="Order Summary">
        <div className="SeatSelector">
          <div className="SeatSelector-Aircraft">
            <RadioGroup
              onChange={e => this.props.onSeatSelected(e.target.value)}
              buttonStyle="solid"
              value={this.props.Selected ? this.props.Selected.id : null}>
              {this.props.Seats.length > 0 && this.renderRows()}
            </RadioGroup>
          </div>
          <div className="SeatSelector-Info">
            <Checkbox onChange={e => this.onCheckBoxChanged(e.target.checked)}>
              Assign me a random seat
            </Checkbox>
            <div className="SeatSelector-Demo">
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
          </div>
        </div>
      </AppCard>
    );
  }
}

export default SeatSelector;
