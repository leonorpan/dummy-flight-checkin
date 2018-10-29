import React from 'react';
import { Card, Icon } from 'antd';
import AppActionLink from './AppActionLink';

const IconStyle = {
  padding: 5,
};

const CardHeadStyle = {
  backgroundColor: '#ff7761',
  color: 'rgba(256, 256, 256, 1)',
  fontWeight: '500',
  fontSize: 20,
};

const PrevNode = ({ PrevLink, PrevTxt = 'Previous' }) => {
  return (
    <AppActionLink
      To={PrevLink}
      AddBefore={<Icon style={IconStyle} type="left" />}
      Txt={PrevTxt}
    />
  );
};

const NextNode = ({ NextLink, NextTxt = 'Next' }) => {
  return (
    <AppActionLink
      To={NextLink}
      AddAfter={<Icon style={IconStyle} type="right" />}
      Txt={NextTxt}
    />
  );
};

const AppCard = ({
  children,
  Title,
  NextLink,
  PrevLink,
  NextTxt,
  PrevTxt,
  Actions,
}) => {
  const actions = Actions || [
    <PrevNode PrevLink={PrevLink} PrevTxt={PrevTxt} />,
    <NextNode NextLink={NextLink} NextTxt={NextTxt} />,
  ];

  return (
    <Card title={Title} headStyle={CardHeadStyle} actions={actions}>
      {children}
    </Card>
  );
};

export default AppCard;
