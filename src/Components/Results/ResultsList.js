import React from 'react';

function ResultsList(props) {
      const result = (!props.results || props.results.length === 0) ? <div className="no-results"><p >No results</p></div> : 
      props.results.map((item, i) => 
      {
        if (props.expandedView === i ) {
        return (<li key={i} onClick={() => props.toggleExpandedItem(-1) }>
        <p className="item-name">{item.location_name}</p>
        <p>{item.info}</p>
        <p>{item.location_type}</p>
        <p>{item.location_address}</p>
        <a href={item.website}>{item.website}</a>
      </li>)
      } else {
        return (
           <li key={i} onClick={() => props.toggleExpandedItem(i)}>
          <p className="item-name">{item.location_name}</p>
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
  )
}


export default ResultsList;
