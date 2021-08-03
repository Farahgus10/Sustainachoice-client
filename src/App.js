import React from 'react';
import EmailService from './Services/Email-Service'
import { Route, Switch, withRouter } from 'react-router-dom';
import HomepageRoute from './Routes/HomepageRoute/homepageRoute'
import ResultsRoute from './Routes/ResultsRoute/resultsRoute';
import LoginRoute from './Routes/LoginRoute/loginRoute'
import RegistrationRoute from './Routes/RegistrationRoute/registrationRoute';
import WhyPage from './Components/InfoSection/WhyPage';
import ConsumerHowPage from './Components/InfoSection/ConsumerHowPage';
import BusinessHowPage from './Components/InfoSection/BusinessHowPage';
import LocationRoute from './Routes/LocationRoute/locationRoute';
import Footer from './Components/Footer/Footer'
import PrivateRoute from './Routes/PrivateRoute/privateRoute'
import PublicRoute from './Routes/PublicRoute/publicRoute';
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
  let url = config.REACT_APP_API_BASE + '/api/results?';

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
  
  EmailService.postEmail({
    email: e.currentTarget.newEmail.value
  })
    .then(response => {
      this.setState({ emailFormVisible: false })
    })
}

toggleExpandedItem = (key) => {
  this.setState({
    expandedView: key,
  })
}

render() {
  console.log(this.state.results)
return (

  <div className="App Site">
    {/* <Switch> */}
      {/* <PublicRoute exact path='/login' component={LoginRoute}/> */}
      <Route exact path='/login' component={LoginRoute}/> 
      <PublicRoute path='/register' component={RegistrationRoute}/>

      <Route exact path="/" render={() => (
          <HomepageRoute results={this.state.results} searchTerm={this.state.searchTerm} handleSearchSubmit={this.handleSearchSubmit} 
          updateSearch={this.updateSearch} handleMenuChange={this.handleMenuChange} path={this.props.match.path} typeFilter={this.state.typeFilter}/>
      )} />
      {/* <PrivateRoute
        path={'/'}
        component={HomepageRoute}
        results={this.state.results}
      /> */}



      <Route path="/results" render={() => 
        <ResultsRoute results={this.state.results} searchTerm={this.state.searchTerm} expandedView={this.state.expandedView} 
        toggleExpandedItem={this.toggleExpandedItem} handleSearchSubmit={this.handleSearchSubmit} updateSearch={this.updateSearch} 
        handleMenuChange={this.handleMenuChange} typeFilter={this.state.typeFilter}/> }/>

      <Route path="/why-eat-sustainably" component={ WhyPage } />
      <Route path="/consumer-help" component={ ConsumerHowPage } />
      <Route path="/business-help" component={ BusinessHowPage }/>

      <Route path="/location/:locationId" render={(props) => 
        <LocationRoute results={this.state.results} path={props.match}/> }/>

    <div id="revealed-section-placeholder"></div>
    {/* <div id="revealed-section">
      <Footer emailSubmit={this.handleEmailSubmit} emailInput={this.state.emailInput} updateEmail={this.updateEmail} emailFormVisible={this.state.emailFormVisible}
      path={this.props.match.path}/>
    </div> */}
  </div>
  );
}}

export default withRouter(App);
