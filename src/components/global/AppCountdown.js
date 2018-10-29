import React from 'react';

class AppCountdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      started: this.props.Active || false,
      secondsleft: null,
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ secondsleft: this.state.secondsleft - 1 });
    if (this.state.secondsleft <= 0) {
      clearInterval(this.interval);
      this.props.onTimeOut();
    }
  }

  componentDidMount() {
    this.setState({ secondsleft: this.props.Seconds });
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seat Reserved for: {this.state.secondsleft}</div>;
  }
}

export default AppCountdown;
