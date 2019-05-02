import React from 'react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import ResultsPage from './Components/Results/ResultsPage';
import WhyPage from './Components/InfoSection/WhyPage';
import ConsumerHowPage from './Components/InfoSection/ConsumerHowPage';
import BusinessHowPage from './Components/InfoSection/BusinessHowPage';
import './App.css';

class App extends React.Component {
  state = {
    results: [],
    expandedView: false,
    searchTerm: '',
    typeFilter: '',
  }

updateSearch = (searchTerm) => {
  this.setState({searchTerm})
}

handleSubmit = (e, header) => {
  e.preventDefault();
  this.fetchApi();

  this.setState({ header })
}

handleMenuChange = (typeFilter) => {
  this.setState({ typeFilter }, () => {
    console.log(this.state.typeFilter)
  })
}

  fetchApi(method = 'GET', apiBody ) {
    const params = {
      location_zip_code: this.state.searchTerm
    };
    const urlParams = new URLSearchParams(Object.entries(params));
    let url = 'http://localhost:8000/api/results?' + urlParams

    fetch(url, {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(apiBody)
    })
    .then(response => { 
      console.log(response)
      if (!response.ok) {
        return
      } else { return response.json() }
      
    })
    .then (response => {
      this.setState({ results: response } , () => { return this.props.history.push('/results')}
        );
        console.log(this.state.results)
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
    <div className="App">
        <Route exact path="/" render={() => (
          <Homepage results={this.state.results} searchTerm={this.state.searchTerm} handleSubmit={this.handleSubmit} 
          updateSearch={this.updateSearch} handleMenuChange={this.handleMenuChange} path={this.props.match.path}/>
        )} />

        <Route path="/results" render={() => 
          <ResultsPage results={this.state.results} searchTerm={this.state.searchTerm} expandedView={this.state.expandedView} 
          toggleExpandedItem={this.toggleExpandedItem} handleSubmit={this.handleSubmit} updateSearch={this.updateSearch} 
          handleMenuChange={this.handleMenuChange} />} />
        <Route path="/why-eat-sustainably" component = { WhyPage } />
        <Route path="/consumer-help" component = { ConsumerHowPage } />
        <Route path="/business-help" component = { BusinessHowPage } />

      {/* <footer role="content-info">Footer</footer> */}
    </div>
  );
}}

export default withRouter(App);
