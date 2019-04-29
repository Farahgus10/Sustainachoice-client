import React from 'react';

function SearchForm() {
  return (
    <div className="SearchForm">
      <section>
        <p>Search for sustainable food near you:</p>
          <div className="search-bar">
            <input type="text" placeholder="e.g. Washington, D.C."></input>
            <button type="submit">Go</button>
          </div>
      </section>
    </div>
  );
}

export default SearchForm;
