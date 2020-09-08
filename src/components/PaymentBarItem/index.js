import React from 'react';

const PaymentBarItem = (props) => {
  const { paymentOption } = props;
  return (
    <div className="form-check">
      <input
        className="form-check-input "
        type="radio"
        name="exampleRadios"
        id="exampleRadios1"
        value="option1"
        style={{ width: '1rem', height: '1rem' }}
      />
      <label className="form-check-label" for="exampleRadios1">
        {paymentOption}
      </label>
    </div>
  );
};

export default PaymentBarItem;
