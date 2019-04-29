import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import WhyPage from './Components/InfoSection/WhyPage';
import ConsumerHowPage from './Components/InfoSection/ConsumerHowPage';
import BusinessHowPage from './Components/InfoSection/BusinessHowPage';
import './App.css';

function App() {
  return (
    <div className="App">
     
        <Route exact path="/" component={ Homepage } />
        <Route path="/why-eat-sustainably" component = { WhyPage } />
        <Route path="/consumer-help" component = { ConsumerHowPage } />
        <Route path="/business-help" component = { BusinessHowPage } />

      {/* <footer role="content-info">Footer</footer> */}
    </div>
  );
}

export default App;
