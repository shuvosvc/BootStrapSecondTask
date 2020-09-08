import React from 'react';

const ExpirBarItem = (props) => {
  const { expirLabel, feedback } = props;
  return (
    <div className="col-md-3 mb-3">
      <label>{expirLabel}</label>
      <input type="text" className="form-control" placeholder required />

      <div className="invalid-feedback"> {feedback} </div>
    </div>
  );
};

export default ExpirBarItem;
