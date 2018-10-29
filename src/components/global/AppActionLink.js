import React from 'react';
import { Link } from 'react-router-dom';

const AppActionLink = ({ To, Txt, AddBefore, AddAfter }) => {
  if (!To) return null;

  return (
    <Link to={To}>
      {AddBefore}
      {Txt}
      {AddAfter}
    </Link>
  );
};

export default AppActionLink;
