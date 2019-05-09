import React from 'react';
import Nav from '../Nav/Nav';

function BusinessHowPage() {
  return (
    <div className="business-how-page">
    <Nav />
      <h1>How can businesses help?</h1>
      <p className="first-paragraph">Over the past few years, the restaurant landscape has changed dramatically, as consumers have become more conscious than even of where their food comes from. With increased consumer awareness comes increased business responsibility in being able to keep their establishment sustainable and serving sustainably-responsible food. In order to make your business run more sustainably, the entire team must be committed, but it is very possible. Step business can take to improve their carbon footprint include:</p>
      <ul>
        <li>Cooking what's in season and from local sources
          <p>Cooking with ingredients that don't grow locally in a certain season usually means that they are being transported from far away. Keeping a seasonal menu is one of the number one things a business can do.</p>
        </li>
        <li>Partner with the right producers
            <p>Create a network of responsible suppliers and operators. For example, are your seafood suppliers practicing sustainble fishing? Can you trace back where your ingredients are coming from? </p>
        </li>
        <li>Grow your own food
          <p>Plenty of restaurants are starting to grow their own herbs and veggies in their own gardens. This is a great way to reduce your carbon footprint from transport costs.</p>
        </li>
        <li>Manage your waste</li>
      </ul>
    </div>
  );
}

export default BusinessHowPage;
