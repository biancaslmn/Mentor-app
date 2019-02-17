import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuIcon from '@material-ui/icons/Menu';

export default props => {
  return (
    <Menu customBurgerIcon={ <MenuIcon /> }>
    <a className="menu-item" href="/login">
        Home
      </a>

      <a className="menu-item" href="/Feed">
        Feed
      </a>
      
      <a className="menu-item" href="/Profile">
        Profile
      </a>

    

      <a className="menu-item" href="/Mentors">
       Mentors
      </a>

      <a className="menu-item" href="/Inqueries">
        Inqueries
      </a>

    
    </Menu>
  );
};