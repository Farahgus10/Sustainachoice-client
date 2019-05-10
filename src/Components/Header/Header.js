import React from 'react';
import './Header.css';


function Header(props) {
  let headerStyling = '';
  let content = '';
  if (props.path === '/') {
      headerStyling = 'header-home-page';
      content = 
        <header>
          <h1 className="title">SustainaChoice</h1>
          <h3>Using food to make smarter choices for a healthier planet</h3>
        </header>
  }
  if(props.path === '/why-eat-sustainably'){
    headerStyling = 'header-why-page';
    content = 
      <header>
        <h1 className="title">Why eat sustainably?</h1>
      </header>
  }
  if(props.path === '/consumer-help'){
    headerStyling = 'header-consumer-page';
    content = 
      <header>
        <h1 className="title">How can consumers help?</h1>
      </header>
  }
  if(props.path === '/business-help'){
    headerStyling = 'header-business-page';
    content = 
      <header>
        <h1 className="title">How can businesses help?</h1>
      </header>
  }
  
  return (
    <div className={headerStyling}>
      {content}
    </div>
  );
}
export default Header;
