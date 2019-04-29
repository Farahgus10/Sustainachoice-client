import React from 'react';
import { Link } from 'react-router-dom'
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <nav className="nav" role="navigation">

        <div className="nav-link home">
        <Link to={'/'}>SustainaChoice</Link>
        </div>
        <div className="nav--home-links">
          {/* <a className="nav-link" href="">Sign up</a> {/* Will be changed to route */}
          {/* <a className="nav-link" href="">Login</a>  Will be changed to route  */}
        </div>

      </nav>
    </div>
  );
}

export default Nav;
