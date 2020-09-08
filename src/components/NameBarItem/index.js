import React from 'react';

const NameBarItem = (props) => {
  const { name } = props;

  return (
    <div className="col-md-6 mb-3">
      <label forHtml="Name">{name}</label>
      <input type="text" className="form-control " placeholder required />
      <div className="invalid-feedback">Valid {name} is required.</div>
    </div>
  );
};

export default NameBarItem;
