import React from 'react';

class SearchForm extends React.Component {

  render(){

    const searchForm = (this.props.path) ? 
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Search for sustainable food near you:
          <input name="searchTerm" placeholder="e.g. Washington"/>
        </label>
        What are you looking for?
        <select id="typeSelection" onChange={this.props.handleMenuChange}>
          <option>Restaurant</option>
          <option>Farmer's Market</option>
          <option>Grocery Store</option>
          <option>Bar</option>
          <option value="all" selected>all</option>
        </select>
        
          <input type="submit"/>
      </form> : 
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Search for a new city:
        </label>
          <input 
            onChange={e => this.props.updateSearch(e.target.value)}
            id="searchTerm"
            placeholder="e.g. Washington" />
           
        What are you looking for?
        <select id="typeSelection" onChange={e => this.props.handleMenuChange(e.target.value)}>
          <option value="Restaurant">Restaurant</option>
          <option value="Farmer's Market"> Farmer's Market</option>
          <option value="Grocery Store">Grocery Store</option>
          <option value="Bar">Bar</option>
          <option value="all" selected>all</option>
        </select>
          <button  type="submit">Go!</button>
      </form>

    return (
    <div className="SearchForm">
      {searchForm}
    </div>
  )}
}

export default SearchForm;
