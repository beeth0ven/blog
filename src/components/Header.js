import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Beeth0ven's Blog
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to='/'>
        <NavItem>Home</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavItem>English</NavItem>
      <NavItem>中文</NavItem>
    </Nav>
  </Navbar>
);

export default Header;