import React from 'react';

class SearchForm extends React.Component {

  render(){

    const searchForm = (this.props.path) ? 
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Search for sustainable food near you:
          <input name="searchTerm" placeholder="e.g. Washington, D.C."/>
        </label>
          <input type="submit"/>
      </form> : 
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Search for a new location:
          <input name="searchTerm" />
        </label>
          <input type="submit"/>
      </form>

    return (
    <div className="SearchForm">
      {searchForm}
    </div>
  )}
}

export default SearchForm;
