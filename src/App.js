import React, { Component } from 'react';
import { generateSeatsForFlight } from './flightDataGenerator';
import FlightSeat from './components/FlightSeat';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: [],
      cols: 4,
    };
  }

  componentDidMount() {
    const seats = generateSeatsForFlight(60, 4);
    this.setState({
      seats,
    });
  }

  //shouldComponentUpdate() {}

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <main>
          <div className="App-Container">
            <h2>Please select a seat:</h2>
            <div className="App-FlightSeats-Wrapper">
              {this.state.seats.length > 0 &&
                this.state.seats.map((seat, id) => {
                  if (id % this.state.cols === 0) {
                    return <React.Fragment><br></br><FlightSeat key={seat.id} Seat={seat} /></React.Fragment>
                  }
                  return <FlightSeat key={seat.id} Seat={seat} />;
                })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
