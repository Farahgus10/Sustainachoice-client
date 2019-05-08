import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
    // if the path is "/" then render the question with this wording, else (e.g. /results) render it a different way
    const searchForm = (props.path) ? 
      <form onSubmit={props.handleSearchSubmit}>
        <label htmlFor="zip-cpde">
          <p>Enter a zip code to search for sustainable food near you:</p>
          <input 
            id="zip-code"
            type="number"
            name="zip-code" 
            value={props.searchTerm}
            onChange={e => props.updateSearch(e.target.value)}
            placeholder="e.g. 20007"/>
        
        <p>What are you looking for?</p>
        <select id="typeSelection" value={props.typeFilter} onChange={e => props.handleMenuChange(e.target.value)}> 
          <option>all</option>
          <option>Restaurant</option>
          <option>Farmers Market</option>
          <option>Grocery Store</option>
          <option>Bar</option>
         
        </select>
        </label>
          <button  type="submit">Go!</button>
          <p className="click-all">*Not sure where to look? Just click Go to get results for all locations!</p>
      </form> : 
      <form onSubmit={props.handleSearchSubmit}>
        <label htmlFor="zip-cpde">
          <p>Search for a new zip code:</p>
          <input 
            id="zip-code"
            type="number"
            name="zip-code" 
            value={props.searchTerm}
            onChange={e => props.updateSearch(e.target.value)}
            placeholder="e.g. 20003" />
          
        <p>What are you looking for?</p>
        <select id="typeSelection" value={props.typeFilter} onChange={e => props.handleMenuChange(e.target.value)}>
          <option defaultValue="all" >all</option> 
          <option value="Restaurant">Restaurant</option>
          <option value="Farmers Market"> Farmers Market</option>
          <option value="Grocery Store">Grocery Store</option>
          <option value="Bar">Bar</option>
          
        </select>
        </label> 
          <button  type="submit">Go!</button>
          <p className="click-all">*Not sure where to look? Just click Go to get results for all locations!</p>
      </form>

    return (
    <div className="search-form">
      {searchForm}
    </div>
  )
}


export default SearchForm;
