import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Hero from '../Hero'

function Nav() {
      return (
        <ul >
            <li>
            <Link to="/">Mallory Willeke</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <h3>
            <Link to="/contact">Contact</Link>
          </h3>
        </ul>
      );
    }
  
export default Nav;

