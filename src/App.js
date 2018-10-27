import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    let seat = seatId ? this.state.seats.filter(s => s.id === seatId)[0] : null;
    this.setState({
      selectedSeat: seat,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <main className="App-Container">
          <Router>
            <React.Fragment>
            <Route path="/summary" render={() =>             <OrderSummary
              SelectedSeat={this.state.selectedSeat}
              Flight={FLIGHT}
            />} />
            <Route path="/seat" render={() => <SeatSelector
              Seats={this.state.seats}
              Selected={this.state.selectedSeat}
              onSeatSelected={seatId => this.onSeatChange(seatId)}
            />} />
            <Route path="/passenger" render={() => <PassengerInformation Passenger={PASSENGER} />} />
            <Route path="/" exact render={() => <FlightOverview Flight={FLIGHT} />} />
            </React.Fragment>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
