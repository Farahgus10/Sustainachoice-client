import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

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
      <div className="dropdown">
        <button className="dropbtn">Learn More</button>
          <div className="dropdown-content">
            <Link style={{display: 'block'}} to={'/why-eat-sustainably'}>Why eat sustainably?</Link>{' '}
            <Link style={{display: 'block'}} to={'/consumer-help'}>How can consumers help?</Link>{' '}
            <Link style={{display: 'block'}} to={'/business-help'}>How can businesses help?</Link>{' '}
        </div>
      </div>
    </nav>
  </div>
  );
}

export default Nav;
