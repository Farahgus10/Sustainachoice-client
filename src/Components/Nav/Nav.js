import React from 'react';

function Nav() {
  return (
    <div className="nav">
      <nav className="nav" role="navigation">

        <div className="nav-link home">
          <a href="">SustainaChoice</a> {/* Will be changed to route */}
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
