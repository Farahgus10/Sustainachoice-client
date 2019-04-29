import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

function Homepage() {
  return (
    <div className="Homepage">
      <Nav />
      <main>
        <Header />
        <SearchForm />
      </main>
    </div>
  );
}

export default Homepage;
