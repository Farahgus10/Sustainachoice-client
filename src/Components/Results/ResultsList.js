import React from 'react';

class ResultsList extends React.Component {
  render(){
    const results = this.props.results.map((item, i) => 
      <li key={i}>
        <p>{item.location_name}</p>
        <p>Category: {item.location_type}</p>
        <p><em>{item.info}</em></p>
      </li>
      );

  return (
    <div className="ResultsList">
    <div className="results results-list">
      <ul>
        {results}
        </ul>
    </div>
  </div>
  )}
}

export default ResultsList;
