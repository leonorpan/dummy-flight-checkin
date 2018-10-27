import React from 'react';
import { Input } from 'antd';
import AppCard from './AppCard';
import './PassengerInformation.css';

const PassengerInformation = ({ Passenger }) => {
  return (
    <AppCard
      Title="Passenger Information:"
      PrevLink="/"
      NextLink="/seat"
      PrevTxt="Flight Overview"
      NextTxt="Select seat">
      <div className="PassengerInformation">
        <Input
          size="large"
          addonBefore="First Name"
          value={Passenger.firstName}
        />
        <Input
          size="large"
          addonBefore="Last Name"
          value={Passenger.lastName}
        />
        <Input
          size="large"
          addonBefore="Passport Id:"
          value={Passenger.validationId}
        />
      </div>
    </AppCard>
  );
};

export default PassengerInformation;
