import React from 'react';
import {Link} from 'react-router-dom';

function Contactpage_en() {
  return (
    <header>
    <div className="headerbar">
    <img className="icon" src="/web/images/pharm.png" />
    <div class ="tag">
    Park Pacific Pharmacy
    </div>
    <div class="containernav">
    <div class="topnav">
    <Link to="/web/">Home</Link>
    <Link to="/web/Contact/en" className="active">Contact</Link>
    <Link to="/web/About/en">About</Link>
    <Link to="/web/Contact/ch">繁體</Link>
    </div>
    </div>
    </div>
    <div className="contactPage">
    <center>
    <div className="table">
    <tr>
      <th><h3>BUSINESS HOURS</h3></th>
    </tr>
    <tr>
      <th>MON: 10:00 am - 6:00 pm</th>
    </tr>
    <tr>
      <th>TUES: 10:00 am - 6:00 pm</th>
    </tr>
    <tr>
      <th>WED: 10:00 am - 6:00 pm</th>
    </tr>
    <tr>
      <th>THURS: 10:00 am - 6:00 pm</th>
    </tr>
    <tr>
      <th>FRI: 10:00 am - 6:00 pm</th>
    </tr>
    <tr>
      <th>SAT: 10:00 am - 3:00 pm</th>
    </tr>
    <tr>
      <th>SUN: Closed am - Closed pm</th>
    </tr>
    </div>
    </center>
    </div>

    <div className="contactinfo">
      <p>Address: 3700 No 3 Rd #2260, Richmond, BC V6X3X2</p>
      <p>Phone Number: (604) 273-9812</p>
    </div>

    </header>
  );
}

export default Contactpage_en;
