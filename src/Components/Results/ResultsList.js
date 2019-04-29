import React from 'react';

class ResultsList extends React.Component {
  

  render(){
    console.log(this.props.results)
    
    const result = (!this.props.expandedView) ? 
      this.props.results.map((item, i) => 
        <li key={i}>
          <p>{item.location_name}</p>
        </li>
      )
    : this.props.results.map((item, i) => 
      <li key={i}>
        <p>{item.location_name}</p>
        <p>{item.location_type}</p>
        <p>{item.info}</p>
        <p>{item.location_address}</p>
      </li>
    )

  return (
    <div className="ResultsList" >
      <div className="results" onClick={this.props.toggleExpandedItem}>
      <ul>
        {result}
      </ul>
      </div>
    </div>
  )}
}

export default ResultsList;
