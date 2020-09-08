import React from 'react';

import HeaderLogo from 'src/assets/img/pic2.jpg';

const Header = () => {
  return (
    <div className="container">
      <div className="py-5 text-center ">
        <img
          className="d-block mx-auto mb-4"
          src={HeaderLogo}
          alt="shuvo"
          width="72"
          height="72"
        />
        <h2>Checkout form</h2>
        <p className="lead">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>
    </div>
  );
};

export default Header;
