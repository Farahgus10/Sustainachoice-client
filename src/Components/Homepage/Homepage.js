import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import InfoSection from '../InfoSection/InfoSection';

class Homepage extends React.Component {
  // state = {
  //   results: [],
  //   searchTerm: '',
  // }

  // componentDidMount() {
  //   this.fetchApi('results', 'results');
  // }
  // fetchApi(endpoint, stateKey, method = 'GET', apiBody ) {
  //   fetch(`http://localhost:8000/api/${endpoint}`, {
  //     method: method,
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(apiBody)
  //   })
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then (data => {
  //     this.setState({ [stateKey]: data });
  //   })
  //   .catch(error => console.log('Error:', error));
  // }

  render(){
    const path = this.props.match.path;

    return (
    <div className="Homepage">
      <Nav />
      <main>
        <Header />
        <SearchForm  path={this.props}/>
        <InfoSection />
      </main>
    </div>
  )}  
}

export default Homepage;
