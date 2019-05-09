import React from 'react';
import EmailForm from './EmailForm';
import './Footer.css'

function Footer(props) {
  console.log(props.path)
  return (
    
    <div className="footer">
      <EmailForm emails={props.emails} emailSubmit={props.emailSubmit} emailInput={props.emailInput}
      updateEmail={props.updateEmail} emailFormVisible={props.emailFormVisible} path={props.path}/>
    </div>
  );
}
export default Footer;
