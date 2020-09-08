import React from 'react';

import ShippingBarItem from '../ShippingBarItem';

const ShippingBar = () => {
  return (
    <>
      <hr className="mb-4  " />
      <ShippingBarItem discription="Shipping address is the same as my billing address" />
      <ShippingBarItem discription="Save this information for next time" />
      <hr className="mb-4  " />
    </>
  );
};

export default ShippingBar;
