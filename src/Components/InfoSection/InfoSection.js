import React from 'react';
import { Link } from 'react-router-dom'
import './InfoSection.css';

function InfoSection() {
  return (
    <div className="InfoSection">
      <section className="why-section">
        <div className="why-window">
          <Link to={'/why-eat-sustainably'}><p>Why eat sustainably?</p>
          Learn why your food choices matter
          <div className="why-background-image"></div></Link>
        </div>
      </section>

      <section className="consumers-how-section">
      <div className="consumer-window">
          <Link to={'/consumer-help'}><p>How can consumers help?</p>
          Make more sustainable choices when you eat
          <div className="consumer-background-image"></div></Link>
        </div>
      </section>

      <section className="businesses-how-section">
        <div className="business-window">
          <Link to={'/business-help'}><p>How can businesses help?</p>
          Steps businesses can take to lower thier carbon footprint
          <div className="business-background-image"></div></Link>
        </div>
      </section>
    </div>
  );
}

export default InfoSection;
