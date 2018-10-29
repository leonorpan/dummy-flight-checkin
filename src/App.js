import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { generateSeatsForFlight } from './flightDataGenerator';
import { FLIGHT, PASSENGER } from './Cnst';
import {
  Checkout,
  FlightOverview,
  PassengerInformation,
  OrderSummary,
  SeatSelector,
} from './pages';
import Checkin from './CheckinRouter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: [],
      selectedSeat: null,
    };
  }

  componentDidMount() {
    const seats = generateSeatsForFlight(
      FLIGHT.aircraft.seats,
      FLIGHT.aircraft.seatsByRow
    );
    this.setState({
      seats,
    });
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
        <main className="App-Container">
          <Router>
            <Checkin>
              <Route
                path="/checkout"
                render={() => <Checkout Flight={FLIGHT} />}
              />
              <Route
                path="/summary"
                render={() => (
                  <OrderSummary
                    SelectedSeat={this.state.selectedSeat}
                    Flight={FLIGHT}
                  />
                )}
              />
              <Route
                path="/seat"
                render={() => (
                  <SeatSelector
                    Aircraft={FLIGHT.aircraft}
                    Seats={this.state.seats}
                    Selected={this.state.selectedSeat}
                    onSeatSelected={seatId => this.onSeatChange(seatId)}
                  />
                )}
              />
              <Route
                path="/passenger"
                render={() => <PassengerInformation Passenger={PASSENGER} />}
              />
              <Route
                path="/"
                exact
                render={() => <FlightOverview Flight={FLIGHT} />}
              />
            </Checkin>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
