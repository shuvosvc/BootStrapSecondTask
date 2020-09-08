import React from 'react';

const PayCardItem = (props) => {
  const { CardLabel, cardDiscription } = props;
  return (
    <div className="col-md-6 mb-3">
      <label>{CardLabel}</label>
      <input type="text" className="form-control" placeholder required />
      <small className="text-muted">{cardDiscription}</small>
      <div className="invalid-feedback"> {CardLabel} is required.</div>
    </div>
  );
};

export default PayCardItem;
