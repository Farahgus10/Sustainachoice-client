import React from 'react';
import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from './ResultsList';
import './ResultsPage.css';

class ResultsPage extends React.Component {
  render() {
    return (
    <div className="results">
      <Nav />
  
        <section className="results-section">
        <header role="banner">
          <h3>Washington, D.C.</h3>
        </header>
        <SearchForm handleSubmit={this.props.handleSubmit} searchTerm={this.props.searchTerm}
        updateSearch={this.props.updateSearch}/>
        <ResultsList results = {this.props.results}
        toggleExpandedItem={this.props.toggleExpandedItem} 
        expandedView={this.props.expandedView}/>
      </section>


        {/* <footer role="content-info">Footer</footer> */}
    </div>
    );
  }  
}

export default ResultsPage;
