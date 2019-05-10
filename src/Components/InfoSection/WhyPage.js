import React from 'react';
import { withRouter } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'

function WhyPage(props) {
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
      <p>When you start paying attention to where your food comes from, how it is grown, produced, harvested and prepared, not only are you taking control of your own health, but you are helping your community and environment.</p>
      <p>By supporting local growers and food providers who make resposibible practices a priority, you are enabling them to continue providing their services to the community. </p>
      <p>By choosing to support your local communities, your avoid the big food business and mass growers of pesticide-laden produce and inhumanely raised meat. You are also saying "no" to modern agricultural practices that lead to soil erosion, air and water pollution, and habitat destruction.</p>

      <p>When it comes to seafood, worldwide demand for seafood is growing more rapidly than our oceans can respond. More than 85% of the world's fisheries are fully exploited. Destructive fishing practices are damaging sensitive habitats and resulting in an alarming amount of bycatch. </p>
        
       <p>However, if you should choose to eat seafood, supporting businesses that only serve sustainably-caught seafood is a good place to start.</p>

      </div>
    </div>
  );
}

export default withRouter(WhyPage);
