import React from 'react';
import { Card, Checkbox, Radio } from 'antd';
import FlightSeatRow from './FlightSeatRow';
import './SeatSelector.css';

class SeatSelector extends React.Component {
  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
    this.onCheckBoxChanged = this.onCheckBoxChanged.bind(this);
  }

  renderRows() {
    const seatRows = []
    let seats = this.props.Seats;
    let seatLength = this.props.Seats.length;
    for (let i = 0; i < seatLength; i += 4) {
      let row = []
      for (let j = 0; j < 4; j++) {
        row.push(seats[i + j])
      }
      seatRows.push(row);
    }

    return (
      <React.Fragment>
        {seatRows.map((row, i) => {
          return <FlightSeatRow key={i} Seats={row}>
          </FlightSeatRow>
        })}
      </React.Fragment>
    )
  }

  onCheckBoxChanged(checked) {
    if (checked) {
      this.props.onSeatSelected(null)
    }
  }

  render() {
    const RadioGroup = Radio.Group;
    if (!this.props.Seats) return (<div></div>);

    return (
      <Card title="Select your seat:">
        <div className="SeatSelector">
        <Checkbox onChange={(e) => this.onCheckBoxChanged(e.target.checked)}>Assign me a random seat</Checkbox>
        <RadioGroup
          onChange={e => this.props.onSeatSelected(e.target.value)}
          buttonStyle="solid"
          value={this.props.Selected ? this.props.Selected.id : null}>
          {this.props.Seats.length > 0 && this.renderRows()}
        </RadioGroup>
        </div>
      </Card>
    );
  }
}

export default SeatSelector;
