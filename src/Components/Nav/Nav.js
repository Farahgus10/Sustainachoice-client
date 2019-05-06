import React from 'react';
import { Link } from 'react-router-dom'
import "./Nav.css";

function Nav(props) {
  return (
    (props.path) ? 
    <div className="nav">
      <nav className="nav" role="navigation">

        <div className="nav-link home">
        <Link to={'/'}>SustainaChoice</Link>
        </div>
      </nav>
    </div>
    :
    <div className="nav">
    <nav className="nav" role="navigation">

      <div className="nav-link home">
        <Link to={'/'}>SustainaChoice</Link>
      </div>
      <div className="nav--home-links">
        <Link to={'/why-eat-sustainably'}>Why eat sustainably?</Link>{' '}
        <Link to={'/consumer-help'}>How can consumers help?</Link>{' '}
        <Link to={'/business-help'}>How can businesses help?</Link>{' '}
      </div>

    </nav>
  </div>
  );
}

export default Nav;
