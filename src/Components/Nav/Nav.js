import React from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../../Services/Token-Service';
import './Nav.css';

function Nav(props) {
  function handleLogout() {
    TokenService.clearAuthToken()
}

  return (
    <div className="nav">
      <nav className="nav" role="navigation">

      <div className="nav-link home">
        <Link to={'/'}>SustainaChoice</Link>
      </div>
      <div className="links_right">
        <div className="logout_link">
          <Link to='/login' className="link" onClick={handleLogout}>Logout</Link>
        </div>
        <div className="dropdown">
        <button className="dropbtn">Learn More</button>
          <div className="dropdown-content">
            <Link style={{display: 'block'}} to={'/why-eat-sustainably'}>Why eat sustainably?</Link>{' '}
            <Link style={{display: 'block'}} to={'/consumer-help'}>How can consumers help?</Link>{' '}
            <Link style={{display: 'block'}} to={'/business-help'}>How can businesses help?</Link>{' '}
          </div>
        </div>
        
      </div>
      
    </nav>
  </div>
  );
}

export default Nav;
