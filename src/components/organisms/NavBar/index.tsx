import React from 'react';
import Logo from '../../molecules/Logo';
import Burguer from '../../molecules/Burguer';
import { Nav } from './styles';

function NavBar() {
  return (
    <header>
      <Nav>
        <a href='#home' style={{ textDecoration: 'none' }}>
          <Logo />
        </a>
        <Burguer />
      </Nav>
    </header>
  );
}

export default NavBar;
