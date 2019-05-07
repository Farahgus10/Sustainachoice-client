import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {

  render(){
    const searchForm = (this.props.path) ? 
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Enter a zip code to search for sustainable food near you:
        </label>
          <input 
            value={this.props.searchTerm}
            onChange={e => this.props.updateSearch(e.target.value)}
            name="searchTerm" 
            placeholder="e.g. 20007"/>
        
        <p>What are you looking for?</p>
        <select id="typeSelection" value={this.props.typeFilter} onChange={e => this.props.handleMenuChange(e.target.value)}> 
          <option>all</option>
          <option>Restaurant</option>
          <option>Farmers Market</option>
          <option>Grocery Store</option>
          <option>Bar</option>
         
        </select>
        
          <button  type="submit">Go!</button>
          <p className="click-all">*Not sure where to look? Just click Submit to get results for all locations!</p>
      </form> : 
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Search for a new zip code:
        </label>
          <input 
            value={this.props.searchTerm}
            onChange={e => this.props.updateSearch(e.target.value)}
            id="searchTerm"
            placeholder="e.g. 20003" />
           
        <p>What are you looking for?</p>
        <select id="typeSelection" value={this.props.typeFilter} onChange={e => this.props.handleMenuChange(e.target.value)}>
          <option defaultValue="all" >all</option> 
          <option value="Restaurant">Restaurant</option>
          <option value="Farmers Market"> Farmers Market</option>
          <option value="Grocery Store">Grocery Store</option>
          <option value="Bar">Bar</option>
          
        </select>
          <button  type="submit">Go!</button>
          <p className="click-all">*Not sure where to look? Just click Submit to get results for all locations!</p>
      </form>

    return (
    <div className="search-form">
      {searchForm}
    </div>
  )}
}

export default SearchForm;
