import React from 'react'
import './Footer.css';

class EmailForm extends React.Component {

render(){

    return(
      (this.props.emailFormVisible) ? 
      <div className="email">

      <form className="email-form" onSubmit={this.props.emailSubmit}>
        <label htmlFor="email-newsletter-form">

        <p>Keep in touch! Sign up for our newsletter:</p>
        <div className="bar-button">
          <input required
              className="input-bar"
              id="newEmail"
              type="email"
              name="newEmail"
              value={this.props.emailInput}
              onChange={e => this.props.updateEmail(e.target.value)}
          />
            <button className="email-button" type="submit">Submit</button> 
            
        </div>
        </label>
      </form>
      </div>

      :

      <div className="ok-message">
          <h4>You are now subscribed</h4>
          <p>Newsletter coming soon. Be on the lookout for a welcome email in your inbox!</p>
      </div>
    ) 
  }
}

export default EmailForm;