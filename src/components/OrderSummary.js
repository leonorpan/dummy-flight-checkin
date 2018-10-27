import React from 'react';
import { Card, Button } from 'antd';

class OrderSummaty extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const totalPrice = this.props.Flight.price  + (this.props.SelectedSeat ? this.props.SelectedSeat.price : 0);
    return (
      <Card title="Order Summary: ">
        {this.props.SelectedSeat && (
          <div>
            <p>Seat selected: {this.props.SelectedSeat.id}</p>
            <p>Flight price: {this.props.Flight.price}</p>
            <p>Price for Seat: {this.props.SelectedSeat.price}</p>
            <p>
            <b>Total: {totalPrice}</b>
            </p>
          </div>
        )}
        {!this.props.SelectedSeat && (
          <p>
            You have not selected a seat, if you try to pay you will be randomly
            assigned one.
          </p>
        )}
        <Button type="primary">PAY {totalPrice}
        </Button>
      </Card>
    );
  }
}

export default OrderSummaty;
