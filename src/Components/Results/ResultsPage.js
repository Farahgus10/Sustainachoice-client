import React from 'react';
import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from './ResultsList';
import GoogleMap from '../Map/GoogleMap';
import './ResultsPage.css';

class ResultsPage extends React.Component {
  render() {
    return (
    <div className="results-page">
      <Nav />
  
        <section className="results-section">
         
          <SearchForm handleSubmit={this.props.handleSubmit} searchTerm={this.props.searchTerm}
          updateSearch={this.props.updateSearch} handleMenuChange={this.props.handleMenuChange} typeFilter={this.props.typeFilter}/>
          
          <div className="results-list-map">
          <ResultsList results = {this.props.results}
          toggleExpandedItem={this.props.toggleExpandedItem} 
          expandedView={this.props.expandedView} searchTerm={this.props.searchTerm}/>

          <div className="map">
            <GoogleMap results={this.props.results}/>
          </div>
          </div>
      </section>


        {/* <footer role="content-info">Footer</footer> */}
    </div>
    );
  }  
}

export default ResultsPage;
