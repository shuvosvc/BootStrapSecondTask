import React from 'react';

import CountryBarItem from '../CountryBarItem';

const CountryBar = () => {
  return (
    <div className="row">
      <div className="col-md-5 mb-3">
        <CountryBarItem labelValue="Country" optionValue="United States" />
      </div>
      <div className="col-md-4 mb-3">
        <CountryBarItem labelValue="State" optionValue="California" />
      </div>
      <div className="col-md-3 mb-3">
        <label>Zip</label>
        <input type="text" className="form-control" placeholder required />
        <div className="invalid-feedback ">Zip code required.</div>
      </div>
    </div>
  );
};

export default CountryBar;
