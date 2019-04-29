import React from 'react';
import { Link } from 'react-router-dom'
import './InfoSection.css';

function InfoSection() {
  return (
    <div className="InfoSection">
      <section className="why-section">
        <p>Why eat sustainably?</p>
        <Link to={'/why-eat-sustainably'}>Learn why your food choices matter</Link>
      </section>

      <section className="consumers-how-section">
        <p>How can consumers help?</p>
        <Link to={'/consumer-help'}>Make more sustainable choices when you eat</Link>
        {/* <a href="">Explore restaurants in your area that support your mission</a> */}
      </section>

      <section className="businesses-how-section">
        <p>How can businesses help?</p>
        <Link to={'/business-help'}>Steps businesses can take to lower thier carbon footprint</Link>
      </section>
    </div>
  );
}

export default InfoSection;
