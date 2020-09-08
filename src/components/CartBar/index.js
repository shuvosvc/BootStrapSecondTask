import React from 'react';

import CartBarItem from '../CartBarItem';
import RedemBar from '../RedemBar';

const CartBar = () => {
  return (
    <>
      <ul className="list-group mb-3">
        <CartBarItem
          ProductName="Product name"
          productDescription="Brief description"
          productPrice="$12"
        />
        <CartBarItem
          ProductName="Second product"
          productDescription="Brief description"
          productPrice="$8"
        />
        <CartBarItem
          ProductName="Third item"
          productDescription="Brief description"
          productPrice="$5"
        />
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span className="text-success">-$5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>
      <RedemBar />
    </>
  );
};

export default CartBar;
