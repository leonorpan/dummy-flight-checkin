import React from 'react';
import { Button } from 'antd';
import AppCard from '../components/global/AppCard';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';
import ApplicationLink from '../components/global/AppActionLink';
import './OrderSummary.css';

class OrderSummary extends React.Component {
  constructor(props) {
    super(props);

    this.mockPayment = this.mockPayment.bind(this);
  }

  mockPayment() {
    this.props.history.push('/checkout');
  }

  render() {
    const totalPrice =
      this.props.Flight.price +
      (this.props.SelectedSeat ? this.props.SelectedSeat.price : 0);

    return (
      <AppCard
        Title="Order Summary"
        PrevLink="/seat"
        PrevTxt="Choose seat"
        NextLink="/checkout"
        NextTxt="PAY">
        {this.props.SelectedSeat && (
          <div>
            <p>Seat selected: {this.props.SelectedSeat.id}</p>
            <p>Price for Seat: {this.props.SelectedSeat.price}</p>
          </div>
        )}
        {!this.props.SelectedSeat && (
          <p>
            You have not selected a seat, if you try to pay you will be randomly
            assigned one.
          </p>
        )}
        <p>Flight price: {this.props.Flight.price}</p>
        <p>
          <b>Total: {totalPrice}</b>
        </p>
      </AppCard>
    );
  }
}

export default withRouter(OrderSummary);
