import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} style= {{ width:"25%" }} alt="Logo" href="/" />;
}

export default Header;