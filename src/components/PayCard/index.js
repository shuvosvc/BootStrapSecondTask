import React from 'react';

import PayCardItem from '../PayCardItem';

const PayCard = () => {
  return (
    <div className="row">
      <PayCardItem
        CardLabel="Name on card"
        cardDiscription="Full name as displayed on card"
      />
      <PayCardItem CardLabel="Credit card number " />
    </div>
  );
};

export default PayCard;
