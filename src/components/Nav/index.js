import React from 'react';
import Nav from 'react-bootstrap/Nav'


function Navigation() {
      return (
        <Nav className="justify-content-center" activeKey="/about"
          >
        <Nav.Item >
            <Nav.Link href="/">Mallory Willeke</Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
        </Nav> 
      )
    }
  
export default Navigation;

