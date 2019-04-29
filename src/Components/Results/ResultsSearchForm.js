import React from 'react';

function ResultsSearchForm() {
  return (
    <div className="search">
      <span>Search new location: </span>
      <div className="search-bar">
        <input type="text" placeholder="e.g. Arlington, VA"></input>
        <button type="submit">Go</button>
      </div>
    </div>
  );
}

export default ResultsSearchForm;
