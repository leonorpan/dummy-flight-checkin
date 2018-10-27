import React from 'react';
import { Card } from 'antd';

const FlightOverview = ({ Flight }) => {
  return (
    <Card title="Your flight details:">
      <div>Flight No: {Flight.id}</div>
      <div>From :{Flight.from}</div>
      <div>To: {Flight.to}</div>
    </Card>
  );
};

export default FlightOverview;
