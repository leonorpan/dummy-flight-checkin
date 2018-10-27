import React from 'react';
import { Card } from 'antd';
import AppCard from './AppCard';

const PassengerInformation = ({ Passenger }) => {
  return (
    <AppCard Title="Passenger Information:" PrevLink="/" NextLink="/seat" PrevTxt="Flight Overview" NextTxt="Select seat" >
      <div>First Name: {Passenger.firstName}</div>
      <div>Last Name :{Passenger.lastName}</div>
      <div>Passport Id: {Passenger.validationId}</div>
    </AppCard>
  );
};

export default PassengerInformation;
