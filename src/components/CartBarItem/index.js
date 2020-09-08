import React from 'react';

const CartBarItem = (props) => {
  const { ProductName, productDescription, productPrice } = props;
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{ProductName}</h6>
        <small className="text-muted">{productDescription}</small>
      </div>
      <span className="text-muted">{productPrice}</span>
    </li>
  );
};

export default CartBarItem;
