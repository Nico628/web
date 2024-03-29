import React from 'react';
import {Link} from 'react-router-dom';

function Contactpage_ch() {
  return (
    <header>
    <div className="headerbar">
    <img className="icon" src="/web/images/pharm.png" />
    <div class ="tag">
    保康西藥房
    </div>
    <div class="containernav">
    <div class="topnav">
    <Link to="/web/ch">首頁</Link>
    <Link to="/web/Contact/ch" className="active">聯絡</Link>
    <Link to="/web/About/ch">關於</Link>
    <Link to="/web/Contact/en">English</Link>
    </div>
    </div>
    </div>
    <div className="contactPage">
    <center>
    <div className="table">
    <tr>
      <th><h3>營業時間</h3></th>
    </tr>
    <tr>
      <th>週一: 10:00 am - 6:00 pm</th>
    </tr>
    <tr>
      <th>週二: 10:00 am - 6:00 pm</th>
    </tr>
    <tr>
      <th>週三: 10:00 am - 6:00 pm</th>
    </tr>
    <tr>
      <th>週四: 10:00 am - 6:00 pm</th>
    </tr>
    <tr>
      <th>週五: 10:00 am - 6:00 pm</th>
    </tr>
    <tr>
      <th>週六: 10:00 am - 3:00 pm</th>
    </tr>
    <tr>
      <th>週日: Closed am - Closed pm</th>
    </tr>
    </div>
    </center>
    </div>

    <div className="contactinfo">
      <p>地址: 3700 No 3 Rd #2260, Richmond, BC V6X3X2</p>
      <p>電話: (604) 273-9812</p>
    </div>
    </header>
  );
}

export default Contactpage_ch;
