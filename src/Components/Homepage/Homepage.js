import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import InfoSection from '../InfoSection/InfoSection';

function Homepage() {
  return (
    <div className="Homepage">
      <Nav />
      <main>
        <Header />
        <SearchForm />
        <InfoSection />
      </main>
    </div>
  );
}

export default Homepage;
