import React from 'react';
import { Card, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './AppCard.css';

const AppCard = ({
  children,
  Title,
  NextLink,
  PrevLink,
  NextTxt = 'Next',
  PrevTxt = 'Previous',
}) => {
  return (
    <Card title={Title} className="AppCard">
      <div className="AppCard-Content">{children}</div>
      <div className="AppCard-Footer">
        {PrevLink && (
          <Link to={PrevLink}>
            <Button disabled={!PrevLink}>
              <Icon type="left" />
              {PrevTxt}
            </Button>
          </Link>
        )}

        {NextLink && (
          <Link to={NextLink}>
            <Button disabled={!NextLink}>
              {NextTxt}
              <Icon type="right" />
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
};

export default AppCard;
