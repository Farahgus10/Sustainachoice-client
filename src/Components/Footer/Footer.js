import React from 'react';
import EmailForm from './EmailForm';
import './Footer.css'

function Footer(props) {
  return (
    <div className="footer">
      <EmailForm emails={props.emails} emailSubmit={props.emailSubmit} emailInput={props.emailInput}
      updateEmail={props.updateEmail} emailFormVisible={props.emailFormVisible}/>
    </div>
  );
}
export default Footer;
