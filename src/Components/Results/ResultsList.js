import React from 'react';
import { Link } from 'react-router-dom'

function ResultsList(props) {
      const result = (!props.results || props.results.length === 0) ? <div className="no-results"><p >No results</p></div> : 
      props.results.map((item, i) => 
      {
        if (props.expandedView === i ) {
        return (<li key={item.id} onClick={() => props.toggleExpandedItem(-1) }>
        <p className="item-name">{item.location_name}</p>
        <p className="item-info">{item.info}</p>
        <p>{item.location_type}</p>
        <p>{item.location_address}</p>
        <a href={item.website}>{item.website}</a>
        <p></p>
        <Link to={`/location/${item.id}`}>Want to rate this location or have something to say about it? Click here to add a comment!</Link>
      </li>)
      } else {
        return (
           <li key={item.id} onClick={() => props.toggleExpandedItem(i)}>
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
