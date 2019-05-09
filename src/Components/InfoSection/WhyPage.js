import React from 'react';
import { withRouter } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'

function WhyPage(props) {
  console.log(props.location.pathname)
  return (
    <div className="why-page">
    <Nav />
    <Header path={props.location.pathname}/>
    <div className="content">
      <h1>What is sustainable food?</h1>
      <h4>The concept of sustainability is simple</h4>
      <p>Sustainability focuses on the production of food or other plant or animal products using farming techniques and practices that help to conserve natural resources and have minimal impacts on the environment.</p>

      <p>Sustainable agricultre enables us to produce healthful food without compromising future generations’ ability to do the same.</p>

      <h4>Why eat sustainably?</h4>
      
      <p>Sustainable eating and farming hopes to replace “conventional farming” and it’s destructive and harmful effects on the environment. </p>
      </div>
    </div>
  );
}

export default withRouter(WhyPage);
