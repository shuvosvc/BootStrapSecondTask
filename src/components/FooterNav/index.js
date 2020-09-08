import React from 'react';

const FooterNav = (props) => {
  const { linkItem } = props;
  return (
    <li className="list-inline-item">
      <a href="#">{linkItem}</a>
    </li>
  );
};

export default FooterNav;
