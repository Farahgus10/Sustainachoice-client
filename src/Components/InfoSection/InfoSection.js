import React from 'react';
import { Link } from 'react-router-dom'
import './InfoSection.css';

function InfoSection() {
  return (
    <div className="InfoSection">
      <section className="why-section">
        <div className="why-window">
          <p>Why eat sustainably?</p>
          <Link to={'/why-eat-sustainably'}>Learn why your food choices matter</Link>
          <div className="why-background-image"></div>
        </div>
      </section>

      <section className="consumers-how-section">
      <div className="consumer-window">
          <p>How can consumers help?</p>
          <Link to={'/consumer-help'}>Make more sustainable choices when you eat</Link>
          <div className="consumer-background-image"></div>
        </div>
      </section>

      <section className="businesses-how-section">
        <div className="business-window">
          <p>How can businesses help?</p>
          <Link to={'/business-help'}>Steps businesses can take to lower thier carbon footprint</Link>
          <div className="business-background-image"></div>
        </div>
      </section>
    </div>
  );
}

export default InfoSection;
