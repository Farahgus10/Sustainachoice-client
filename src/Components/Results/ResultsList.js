import React from 'react';

class ResultsList extends React.Component {
  
  render(){
      const result = ((!this.props.results) && (this.props.results === [])) ? <p>No results</p> : 
      this.props.results.map((item, i) => 
      {
        if (this.props.expandedView === i ) {
        return (<li key={i} onClick={() => this.props.toggleExpandedItem(-1) }>
        <p>{item.location_name}</p>
        <p>{item.location_type}</p>
        <p>{item.info}</p>
        <p>{item.location_address}</p>
      </li>)
      } else {
        return (
           <li key={i} onClick={() => this.props.toggleExpandedItem(i)}>
          <p>{item.location_name}</p>
          </li>
        )
      }
    })
  
  return (
    <div className="ResultsList" >
      <div className="results" >
      <ul>
        {result}
      </ul>
      </div>
    </div>
  )}
}

export default ResultsList;
