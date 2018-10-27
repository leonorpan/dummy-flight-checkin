import React, { Component } from 'react';
import { generateSeatsForFlight } from './flightDataGenerator';
import { FLIGHT, PASSENGER } from './Cnst';
import FlightOverview from './components/FlightOverview';
import PassengerInformation from './components/PassengerInformation';
import SeatSelector from './components/SeatSelector';
import OrderSummary from './components/OrderSummary';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: [],
      selectedSeat: null,
    };
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    const seats = generateSeatsForFlight(60, 4);
    this.setState({
      seats,
    });
  }

  startTimer() {
    console.log('timer');
  }

  onSeatChange(seatId) {
    let seat = this.state.seats.filter(s => s.id === seatId)[0];
    this.setState({
      selectedSeat: seat,
    });
    //this.startTimer();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <main className="App-Container">
          <div className="App-FlightSeats-Wrapper">
            <FlightOverview Flight={FLIGHT} />
            <PassengerInformation Passenger={PASSENGER} />
            <SeatSelector
              Seats={this.state.seats}
              Selected={this.state.selectedSeat}
              onSeatSelected={seatId => this.onSeatChange(seatId)}
            />
          </div>
          <div className="App-Summary">
            <OrderSummary
              SelectedSeat={this.state.selectedSeat}
              Flight={FLIGHT}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
