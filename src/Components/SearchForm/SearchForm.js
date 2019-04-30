import React from 'react';

class SearchForm extends React.Component {
  // updateSearch = (searchTerm) => {
  //   this.setState({ searchTerm });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  render(){
    const searchTerm = this.props.searchTerm;

    const searchForm = (this.props.path) ? 
      <section>
        <p>Search for sustainable food near you:</p>
          <div className="search-bar">
            <input type="text" placeholder="e.g. Washington, D.C."></input>
            <button type="submit">Go</button>
          </div>
      </section> : 
      <section>
        <span>Search new location: </span>
        <div className="search-bar">
          <input type="text" placeholder="e.g. Arlington, VA"></input>
          <button type="submit">Go</button>
        </div>
      </section>

    console.log(searchForm)

    return (
    <div className="SearchForm">
      {searchForm}
    </div>
  )}
}

export default SearchForm;
