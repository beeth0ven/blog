import React from 'react';
import {
  Navbar,
  // Nav,
  // NavItem
} from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Beeth0ven's Blog</Link>
      </Navbar.Brand>
    </Navbar.Header>
    {/*<Nav pullRight>*/}
      {/*<LinkContainer to='/'>*/}
        {/*<NavItem>English</NavItem>*/}
      {/*</LinkContainer>*/}
      {/*<NavItem>中文</NavItem>*/}
    {/*</Nav>*/}
  </Navbar>
);

export default Header;