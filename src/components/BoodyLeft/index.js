import React from 'react';

import NameBarItem from '../NameBarItem';
import UserName from '../UserName';
import AddressBar from '../AddressBar';
import CountryBar from '../CountryBar';
import ShippingBar from '../ShippingBar';
import PaymentBar from '../PaymentBar';
import PayCard from '../PayCard';
import ExpirBar from '../ExpirBar';
import CheckOutButton from '../CheckOutButton';

const BoodyLeft = () => {
  return (
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation" noValidate>
        <div className="row">
          <NameBarItem name="First Name" />
          <NameBarItem name="Last Name" />
        </div>
        <UserName />
        <AddressBar />
        <CountryBar />
        <ShippingBar />
        <PaymentBar />
        <PayCard />
        <ExpirBar />
        <CheckOutButton />
      </form>
    </div>
  );
};

export default BoodyLeft;
