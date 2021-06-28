import React from 'react';

import logo from '../../../static/projectlogo.png';
import * as ROUTE from 'constants/routes';

const Footer = ({ path }) => {
  // hide the footer to these routes
  const hiddenPaths = [
    '/signin',
    '/signup',
    '/forgot_password',
    '/account',
    '/account/edit',
    '/checkout/step1',
    '/checkout/step2',
    '/checkout/step3'
  ];

  return hiddenPaths.includes(path) ? null : (
    <footer className="footer">
      
      {/* <div className="footer-col-1">
        <strong><span>Developed by : Muhammad Haris </span></strong>
      </div> */}
      <div className="footer-col-2">
        <img src={logo}/>
        <h5>&copy;&nbsp;{new Date().getFullYear()}</h5>
      </div>
     
    </footer>
  );
};

export default Footer;
