import React from 'react';

function ResultsList(props) {
    console.log(props.results)
      const result = (props.results.length === 0) ? <p>No results</p> : 
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
          <p>{item.info}</p>
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
