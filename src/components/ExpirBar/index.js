import React from 'react';

import ExpirBarItem from '../ExpirBarItem';

const ExpirBar = () => {
  return (
    <div className="row">
      <ExpirBarItem
        expirLabel="Expiration"
        feedback="Expiration date required"
      />
      <ExpirBarItem expirLabel="CVV" feedback="Security code required" />
    </div>
  );
};

export default ExpirBar;
