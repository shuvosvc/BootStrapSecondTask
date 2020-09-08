import React from 'react';

import FooterNav from '../FooterNav';

const Footer = () => {
  return (
    <footer className="my-5 pt-5 text-muted text-center text-small">
      <p className="mb-1">© 2017-2020 Company Name</p>
      <ul className="list-inline">
        <FooterNav linkItem="Privacy" />
        <FooterNav linkItem="Terms" />
        <FooterNav linkItem="Support" />
      </ul>
    </footer>
  );
};

export default Footer;
