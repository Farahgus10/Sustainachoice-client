import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import InfoSection from '../InfoSection/InfoSection';
import './Homepage.css';

class Homepage extends React.Component {
  render(){
    return (
    <div className="homepage">
      <Nav path={this.props.path}/>
      <main>
        <Header />
        <SearchForm handleSubmit={this.props.handleSubmit} searchTerm={this.props.searchTerm}
            updateSearch={this.props.updateSearch} path={this.props.path} handleMenuChange={this.props.handleMenuChange} typeFilter={this.props.typeFilter}/>
        <InfoSection />
      </main>
    </div>
  )}  
}

export default Homepage;
