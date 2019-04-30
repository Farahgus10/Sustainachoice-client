import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import InfoSection from '../InfoSection/InfoSection';

class Homepage extends React.Component {
  render(){

    return (
    <div className="Homepage">
      <Nav />
      <main>
        <Header />
        <SearchForm handleSubmit={this.props.handleSubmit}/>
        <InfoSection />
      </main>
    </div>
  )}  
}

export default Homepage;
