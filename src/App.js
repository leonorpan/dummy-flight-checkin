import React, { Component } from 'react';
import { generateSeatsForFlight } from './flightDataGenerator';
import { Radio, Button } from 'antd';
import FlightSeat from './components/FlightSeat';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: [],
      selectedSeat: null,
      cols: 4,
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
    // TODO
    // let countDownDate = new Date().getTime()
    // let x = setInterval(function() {
    //   let now = new Date().getTime();
    //   let distance = countDownDate - now;
    
    //   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //   this.setState = ({
    //     timeremaining: minutes + "m " + seconds + "s ",
    //   })
    
    //   if (minutes >= 180 && seconds >= 0) {
    //     console.log('cleaning....')
    //     clearInterval(x);
    //     this.setState = ({
    //       timeremaining: "00:00 -EXPIRED"
    //     })
    //   }
    // }, 1000);
  }

  onSeatChange(e) {
    let seat = this.state.seats.filter(s => s.id === e.target.value)[0];
    this.setState({
      selectedSeat: seat,
    });
    this.startTimer()
  }

  render() {
    const RadioGroup = Radio.Group;
    return (
      <div className="App">
        <header className="App-header" />
        <main className="App-Container">
          <div className="App-FlightSeats-Wrapper">
            <h2>Please select a seat:</h2>
            <RadioGroup
              onChange={e => this.onSeatChange(e)}
              buttonStyle="solid"
              value={this.state.selectedSeat}>
              {this.state.seats.length > 0 &&
                this.state.seats.map((seat, id) => {
                  if (id % this.state.cols === 0) {
                    return (
                      <React.Fragment key={seat.id}>
                        <br />
                        {seat.extraLeg && (<div><br></br><br></br></div>)}
                        <FlightSeat Seat={seat} />
                      </React.Fragment>
                    );
                  }
                  return <FlightSeat key={seat.id} Seat={seat} />;
                })}
            </RadioGroup>
          </div>
          <div className="App-Summary">
            {this.state.selectedSeat && (
              <div>
                <p>Seat selected: {this.state.selectedSeat.id}</p>
                <p>Price to Pay extra: {this.state.selectedSeat.price}</p>
                {/* <p>We will reserve your seat for: {this.state.timeremaining}</p> */}
              </div>
            )}
            {!this.state.selectedSeat && (
              <p>You have not selected a seat, if you try to pay you will be randomly assigned one.</p>
            )}
            <Button type="primary">PAY{ this.state.selectedSeat ? this.state.selectedSeat.price : 0}</Button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
