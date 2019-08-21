import React from 'react';
import {Link} from 'react-router-dom';

function Homepage_en() {
  return (
    <header>
    <div className="headerbar">
    <img className="icon" src="/web/images/pharm.png" />
    <div class ="tag">
    Park Pacific Pharmacy
    </div>
    <div class="containernav">
    <div class="topnav">
    <Link to="/web/" className="active">Home</Link>
    <Link to="/web/Contact/en">Contact</Link>
    <Link to="/web/About/en">About</Link>
    <Link to="/web/ch">繁體</Link>
    </div>
    </div>
    </div>

    <div className="sliderC">
    <div className="slider">
      <div className="slide1" style ={ { backgroundImage: "url('/web/images/p4.jpg')" } }></div>
      <div className="slide2"></div>
      <div className="slide3"></div>
    </div>
    </div>
    <div className="homePage">
    <div className="whyus">
    <h1>Why Us</h1>
    <p>If you are looking for a pharmacy in Richmond, BC, come to Park Pacific Pharmacy. We have 50 years of experience providing prescription medicines, vitamins, first aid supplies, and so much more. We have a variety of products and we are sure to have what you are looking for. We strive to offer our patients with phenomenal service and products that are easily affordable. For a great drug store in Richmond, BC, call on Park Pacific Pharmacy.
    </p>
    </div>
    </div>
    </header>
  );
}

export default Homepage_en;
