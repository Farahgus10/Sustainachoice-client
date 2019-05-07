import React from 'react';
import Nav from '../Nav/Nav'
import "./ConsumerHowPage.css";

function ConsumerHowPage() {
  return (
    <div className="consumer-how-page">
    <Nav />
      <h1>How can consumers help?</h1>
      <p>Unless you are a farmer, the best way to support sustainable efforts is to eat sustainably. The best ways you can do this are:</p>
      <ul>
        <li>Shop locally: shop at your local farmers markets, or choose restaurants that make sustainability a priority.<br/><br/></li>
        <li>Eat seasonally. Rasberries don't grow in D.C. in the middle of winter, yet you can often find "fresh" rasberries at your nearest supermarket. This means it's likely being transported from far away. Focus on foods that are grown locally and available in season.<br/><br/></li>
        <li>Watched where you get your water from. Liquids are some of the heaviest to transport around. Instead of purchasing plastic water bottles, invest in a reusable water bottle.<br/><br/></li>
        <li>Think bulk: grocery stores that sell foods in bulk allow you bring your own reusable contains and minimize your plastic use. You also can choose how much food you want, hopefully minimizes your food waste as well.<br/><br/></li>
        <li>Initiate conversations about food: talk with the farmers at your market, personnel at your grocery store, or staff at a restaurant. This helps influence others who may not be knowledgeable in sustainable food, but it can also help you discovery new tips, learn about other resources and find more local, sustainably-minded food produces and providers.<br/><br/> </li>
        <li>Vote with your wallet and your fork<br/><br/></li>
      </ul>
    </div>
  );
}

export default ConsumerHowPage;
