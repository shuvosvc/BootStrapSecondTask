import React from 'react';

import PaymentBarItem from '../PaymentBarItem';

const PaymentBar = () => {
  return (
    <>
      <h4 className="mb-3">Payment</h4>
      <div className="d-block my-3">
        <PaymentBarItem paymentOption="Credit card" />
        <PaymentBarItem paymentOption="Debit card" />
        <PaymentBarItem paymentOption="PayPal" />
      </div>
    </>
  );
};

export default PaymentBar;
