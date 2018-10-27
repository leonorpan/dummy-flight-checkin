import React from 'react';
import { Card } from 'antd';

const PassengerInformation = ({ Passenger }) => {
  return (
    <Card title="Passenger Information:">
      <div>First Name: {Passenger.firstName}</div>
      <div>Last Name :{Passenger.lastName}</div>
      <div>Passport Id: {Passenger.validationId}</div>
    </Card>
  );
};

export default PassengerInformation;
