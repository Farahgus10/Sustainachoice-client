import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import InfoSection from '../InfoSection/InfoSection';

import './Homepage.css';

function Homepage(props) {
    return (
    <div className="homepage">
      <Nav path={props.path}/>
      <main>
        <Header path={props.path}/>
        <div className="fas fa-seedling">
        </div>
        <SearchForm handleSearchSubmit={props.handleSearchSubmit} searchTerm={props.searchTerm}
            updateSearch={props.updateSearch} path={props.path} handleMenuChange={props.handleMenuChange} typeFilter={props.typeFilter}/>
        <InfoSection />
      </main>
      
    </div>
  )
}  

export default Homepage;
