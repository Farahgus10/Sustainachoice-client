import React from 'react';
import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from './ResultsList';
import GoogleMap from '../Map/GoogleMap';
import Footer from '../Footer/Footer'
import './ResultsPage.css';

function ResultsPage(props) {
    return (
    <div className="results-page">
      <Nav />
  
        <section className="results-section">
         
          <SearchForm handleSearchSubmit={props.handleSearchSubmit} searchTerm={props.searchTerm}
          updateSearch={props.updateSearch} handleMenuChange={props.handleMenuChange} typeFilter={props.typeFilter}/>
          
          <div className="results-list-map">
          <ResultsList results = {props.results}
          toggleExpandedItem={props.toggleExpandedItem} 
          expandedView={props.expandedView} searchTerm={props.searchTerm}/>

          <div className="map">
            <GoogleMap results={props.results}/>
          </div>
          </div>
          <Footer />
      </section>
      
    </div>
    );
  }  

export default ResultsPage;
