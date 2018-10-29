import React from 'react';
import { Progress } from 'antd';
import { withRouter } from 'react-router-dom';

const getProgressByPathName = path => {
  let progress = null;
  switch (path) {
    case '/passenger':
      progress = 25;
      break;
    case '/seat':
      progress = 50;
      break;
    case '/summary':
      progress = 75;
      break;
    case '/checkout':
      progress = 100;
      break;
    default:
      progress = 0;
  }
  return progress;
};

class CheckinRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location !== prevProps.location ||
      getProgressByPathName(this.props.location.pathname) !==
        this.state.progress
    ) {
      this.setState({
        progress: getProgressByPathName(this.props.location.pathname),
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Progress
          style={{ marginBottom: '2rem' }}
          percent={this.state.progress}
          trailColor="#0080ff"
        />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default withRouter(CheckinRouter);
