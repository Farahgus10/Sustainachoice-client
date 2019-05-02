import React from 'react';

class SearchForm extends React.Component {

  render(){
    const searchForm = (this.props.path) ? 
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Enter a zip code to search for sustainable food near you:
        </label>
          <input 
            onChange={e => this.props.updateSearch(e.target.value)}
            name="searchTerm" 
            placeholder="e.g. 20007"/>
        
        What are you looking for?
        <select id="typeSelection" onChange={e => this.props.handleMenuChange(e.target.value)}> 
          <option>all</option>
          <option>Restaurant</option>
          <option>Farmers Market</option>
          <option>Grocery Store</option>
          <option>Bar</option>
         
        </select>
        
          <input type="submit"/>
      </form> : 
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Search for a new zip code:
        </label>
          <input 
            onChange={e => this.props.updateSearch(e.target.value)}
            id="searchTerm"
            placeholder="e.g. 20003" />
           
        What are you looking for?
        <select id="typeSelection" onChange={e => this.props.handleMenuChange(e.target.value)}>
          <option defaultValue="all" >all</option> 
          <option value="Restaurant">Restaurant</option>
          <option value="Farmers Market"> Farmers Market</option>
          <option value="Grocery Store">Grocery Store</option>
          <option value="Bar">Bar</option>
          
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
