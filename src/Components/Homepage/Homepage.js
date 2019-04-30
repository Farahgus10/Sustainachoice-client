import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import InfoSection from '../InfoSection/InfoSection';
import ResultsPage from '../Results/ResultsPage';

class Homepage extends React.Component {
  handleSubmit = () => {
    this.props.handleSubmit()
      if (this.props.searchTerm) {
        this.state.redirect: true
   
      }
    
  }
  
  render(){

    return (
    <div className="Homepage">
      <Nav />
      <main>
        <Header />
        <SearchForm handleSubmit={this.handleSubmit()} searchTerm={this.props.searchTerm}/>
        <InfoSection />
      </main>
    </div>
  )}  
}

export default Homepage;
