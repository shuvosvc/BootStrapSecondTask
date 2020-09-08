import React from 'react';

const CountryBarItem = (props) => {
  const { labelValue, optionValue } = props;
  return (
    <>
      <label>{labelValue}</label>
      <select className="custom-select d-block w-100" required>
        <option value>choose</option>
        <option>{optionValue}</option>
      </select>
      <div className="invalid-feedback ">
        Please select a valid {labelValue}.
      </div>
    </>
  );
};

export default CountryBarItem;
