import React from 'react';

function Aboutpage_en() {
  return (
    <header>
    <div className="headerbar">
    <img className="icon" src="/images/pharm.png" />
    <div class ="tag">
    Park Pacific Pharmacy
    </div>
    <div class="containernav">
    <div class="topnav">
    <a href="/">Home</a>
    <a href="/Contact/en">Contact</a>
    <a href="/About/en" className="active">About</a>
    <a href="/About/ch">繁體</a>
    </div>
    </div>
    </div>

    <div className="aboutPage">
    <center><img className="map" src="/images/map.png" /></center>
    </div>
    <div className="words">

    <p>Based in Yaohan centre, Park Pacific Pharmacy is a community pharmacy driven to provide pharmaceutical care to our neighbourhood. With roots that date back to the 1970s, we are one of Richmond’s first pharmacies to serve the local community and empower new immigrants on healthcare-related decisions. Building our reputation through integrity, patient-specific care and extensive patient education, we pride ourselves on our strong relationships and connections with our patients and the local doctors.</p>

    <p>Whether it is a quick refill or enquiries with regard to your medication, Park Pacific Pharmacy offers a quick, efficient and friendly service to cater to your needs. Contrary to large chain store pharmacies, we offer personalized service in a more private atmosphere. Our team reflects the demographic diversity that characterizes Richmond: a diversity that enables us to deliver patient-centered care in a relaxed and comfortable setting. We offer services in Mandarin, Cantonese and English.</p>

    <p>At Park Pacific Pharmacy we go above and beyond the standard pharmacy services to provide the highest level of care and service to our customers. Some of our services include:
    </p>

    <ul>
    <li>Quick fillings and refills</li>
    <li>Blister Packing (Medication Management Packaging)</li>
    <li>Compounding of specialty medications</li>
    <li>Injections/Vaccines/Travel Clinic</li>
    <li>Medication Reviews</li>
    <li>Up to date information on over-the-counter and prescription medication</li>
    <li>Expired medication and sharps disposal</li>
    <li>And much more!</li>

    </ul>
    </div>
    </header>
  );
}

export default Aboutpage_en;
