import React from 'react';

import CartBar from '../CartBar';

const BoodyRight = () => {
  return (
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">3</span>
      </h4>
      <CartBar />
    </div>
  );
};

export default BoodyRight;
