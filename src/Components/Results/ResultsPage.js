import React from 'react';
import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from './ResultsList';
import './ResultsPage.css';

class ResultsPage extends React.Component {
  state = {
    results: [],
    expandedView: false,
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

  render() {
    return (
    <div className="results">
      <Nav />
  
        <section className="results-section">
        <header role="banner">
          <h3>Washington, D.C.</h3>
        </header>
        <SearchForm />
        <ResultsList results = {this.state.results}
        toggleExpandedItem={this.toggleExpandedItem} 
        expandedView={this.state.expandedView}/>
      </section>


        {/* <footer role="content-info">Footer</footer> */}
    </div>
    );
  }  
}

export default ResultsPage;
