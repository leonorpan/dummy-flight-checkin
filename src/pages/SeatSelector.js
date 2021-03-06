import React from 'react';
import { Checkbox, Radio } from 'antd';
import AppCard from '../components/global/AppCard';
import FlightSeatRow from '../components/aircraft/FlightSeatRow';
import FlightSeatDemo from '../components/aircraft/FlightSeatDemo';
import AppCountDown from '../components/global/AppCountdown';
import './SeatSelector.css';

class SeatSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reserved: false,
    };
    this.renderRows = this.renderRows.bind(this);
    this.onCheckBoxChanged = this.onCheckBoxChanged.bind(this);
    this.onSeatChanged = this.onSeatChanged.bind(this);
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

  onSeatChanged(seatId) {
    this.setState({
      reserved: !!seatId,
    });
    this.props.onSeatSelected(seatId);
  }

  onCheckBoxChanged(checked) {
    if (checked) {
      this.props.onSeatChanged(null);
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
              onChange={e => this.onSeatChanged(e.target.value)}
              buttonStyle="solid"
              value={this.props.Selected ? this.props.Selected.id : null}>
              {this.props.Seats.length > 0 && this.renderRows()}
            </RadioGroup>
          </div>
          <div className="SeatSelector-Info">
            <Checkbox onChange={e => this.onCheckBoxChanged(e.target.checked)}>
              Assign me a random seat
            </Checkbox>
            <FlightSeatDemo />
            {this.state.reserved && (
              <AppCountDown
                onTimeOut={() => this.onSeatChanged(null)}
                Seconds={180}
              />
            )}
          </div>
        </div>
      </AppCard>
    );
  }
}

export default SeatSelector;
