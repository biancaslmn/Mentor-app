import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuIcon from '@material-ui/icons/Menu';

export default props => {
  return (
    <Menu customBurgerIcon={ <MenuIcon /> }>
    <a className="menu-item" href="/loginForm">
        Home
      </a>

    
      
      <a className="menu-item" href="/Profile">
        Profile
      </a>

    

      <a className="menu-item" href="/Mentors">
       Mentors
      </a>

      

    
    </Menu>
  );
};