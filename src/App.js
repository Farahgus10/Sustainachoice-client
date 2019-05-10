import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import ResultsPage from './Components/Results/ResultsPage';
import WhyPage from './Components/InfoSection/WhyPage';
import ConsumerHowPage from './Components/InfoSection/ConsumerHowPage';
import BusinessHowPage from './Components/InfoSection/BusinessHowPage';
import Footer from './Components/Footer/Footer'
import './App.css';
import config from './config'

class App extends React.Component {
  state = {
    results: [],
    emails: [],
    expandedView: false,
    searchTerm: '',
    emailFormVisible: true,
    emailInput: '',
    typeFilter: 'all',
  }

//=============================
//  HANDLERS FOR SEARCH FORM
// ============================
updateSearch = (searchTerm) => {
  this.setState({searchTerm})
}

handleSearchSubmit = (e) => {
  e.preventDefault();
  this.fetchApi();
}

handleMenuChange = (typeFilter) => {
  this.setState({ typeFilter })
}

fetchApi(method = 'GET', apiBody ) {
  const params = {
    location_zip_code: this.state.searchTerm
  };
  const urlParams = new URLSearchParams(Object.entries(params));
  let url = config.API_ENDPOINT + '/results?';

  if(this.state.searchTerm) { url = url + urlParams}
  if(this.state.typeFilter !== 'all') {
    url = url + `&location_type=${this.state.typeFilter}`
  }

  fetch(url, {
    method: method,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(apiBody)
  })
  .then(response => { 
    if (!response.ok) {
      return
    } else { return response.json() }
    
  })
  .then (response => {
    this.setState({ results: response }, () => { return this.props.history.push('/results')}
    );
  })
  .catch(error => console.log('Error:', error));
  }

//=============================
//  HANDLERS FOR EMAIL FORM
// ============================
updateEmail = (emailInput) => {
  this.setState({emailInput})
}

handleEmailSubmit = (e) => {
  e.preventDefault();
  let body = { email: e.currentTarget.newEmail.value};
  this.fetchEmail(body);

  this.setState({ emailFormVisible: false })
}

fetchEmail(apiBody) {
  fetch(config.API_ENDPOINT + '/emails', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(apiBody)
  })
  .then(response => { 
    if (!response.ok) {
      return
    } else { return response.json() }
    
  })
  .then (response => {
    let newEmail = { id: response.id, email: apiBody.email};
    this.setState({emails: [...this.state.emails, newEmail]})
  })
  .catch(error => console.log('Error:', error));
}

toggleExpandedItem = (key) => {
  this.setState({
    expandedView: key,
  })
}

render() {
return (
  
  <div className="App Site">
    <div className="Site-content">
      <Route exact path="/" render={() => (
        <Homepage results={this.state.results} searchTerm={this.state.searchTerm} handleSearchSubmit={this.handleSearchSubmit} 
        updateSearch={this.updateSearch} handleMenuChange={this.handleMenuChange} path={this.props.match.path} typeFilter={this.state.typeFilter}/>
      )} />

      <Route path="/results" render={() => 
        <ResultsPage results={this.state.results} searchTerm={this.state.searchTerm} expandedView={this.state.expandedView} 
        toggleExpandedItem={this.toggleExpandedItem} handleSearchSubmit={this.handleSearchSubmit} updateSearch={this.updateSearch} 
        handleMenuChange={this.handleMenuChange} typeFilter={this.state.typeFilter} />} />
      
      <Route path="/why-eat-sustainably" component={ WhyPage } />
      <Route path="/consumer-help" component={ ConsumerHowPage } />
      <Route path="/business-help" component={ BusinessHowPage }/>
    </div>

    <div id="revealed-section-placeholder"></div>
    <div id="revealed-section">
      <Footer emailSubmit={this.handleEmailSubmit} emailInput={this.state.emailInput} updateEmail={this.updateEmail} emailFormVisible={this.state.emailFormVisible}
      path={this.props.match.path}/>
    </div>
  </div>
  );
}}

export default withRouter(App);
