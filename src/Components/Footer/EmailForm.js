import React from 'react'
import './Footer.css';

class EmailForm extends React.Component {
  state = {
    validationMessages: {},
    formValid: false,
  };

  handleVerifyEmailName = email => {
    const validationMessages = {...this.state.validationMessages};
    let formValid = true;

    if (email.length <= 1) {
      validationMessages.email = 'Must insert an email';
      formValid = false;
    }
    this.setState({ validationMessages, formValid });
  }

render(){
  const { email, validationMessages } = this.state;    

    return(
      (this.props.emailFormVisible) ? 
      <div className="email">
      <form className="email-form" onSubmit={this.props.emailSubmit}>
        <label htmlFor="email-newsletter-form">

        <p>Keep in touch! Sign up for our newsletter:</p>

        {validationMessages.email && (
          <p className="error">{validationMessages.email}</p>
        )}
        <input required
            id="newEmail"
            type="email"
            name="newEmail"
            value={this.props.emailInput}
            onChange={e => this.props.updateEmail(e.target.value)}
        />
        </label>
        <button className="email-button" type="submit">Submit</button>
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