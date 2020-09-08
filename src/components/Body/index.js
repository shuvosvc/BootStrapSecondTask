import React from 'react';

import BoodyLeft from '../BoodyLeft';
import BoodyRight from '../BoodyRight';

const Body = () => {
  return (
    <div className="container">
      <div className="row">
        <BoodyLeft />
        <BoodyRight />
      </div>
    </div>
  );
};

export default Body;
