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
  }

  componentDidMount() {
    this.fetchApi('results', 'results');
  }
  fetchApi(endpoint, stateKey, method = 'GET', apiBody ) {
    fetch(`http://localhost:8000/api/${endpoint}`, {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(apiBody)
    })
    .then(response => {
      return response.json()
    })
    .then (response => {
      this.setState({ [stateKey]: response });
    })
    .catch(error => console.log('Error:', error));
  }

  toggleExpandedItem = (key) => {
    this.setState({
      expandedView: key,
    })
  }

  updateSearch = (searchTerm) => {
    this.setState({ searchTerm });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
  return (
    <div className="App">
     
        <Route exact path="/" render={() => 
          <Homepage results={this.state.results} searchTerm={this.state.searchTerm} />}/>
        <Route path="/results" render={() => 
          <ResultsPage results={this.state.results} searchTerm={this.state.searchTerm} 
          expandedView={this.state.expandedView} toggleExpandedItem={this.toggleExpandedItem}/>}/>
        <Route path="/why-eat-sustainably" component = { WhyPage } />
        <Route path="/consumer-help" component = { ConsumerHowPage } />
        <Route path="/business-help" component = { BusinessHowPage } />

      {/* <footer role="content-info">Footer</footer> */}
    </div>
  );
}}

export default withRouter(App);
