import React from 'react';
import {Link} from 'react-router-dom';

function Homepage_ch() {
  return (
    <header>
    <div className="headerbar">
    <img className="icon" src="/web/images/pharm.png" />
    <div class ="tag">
    保康西藥房
    </div>
    <div class="containernav">
    <div class="topnav">
    <Link to="/web/ch" className="active">首頁</Link>
    <Link to="/web/Contact/ch">聯絡</Link>
    <Link to="/web/About/ch">關於</Link>
    <Link to="/web/">English</Link>
    </div>
    </div>
    </div>

    <div className="sliderC">
    <div className="slider">
      <div className="slide1" style ={ { backgroundImage: "url('/web/images/p3.jpg')" } }></div>
      <div className="slide2" style ={ { backgroundImage: "url('/web/images/p4.jpg')" } }></div>
      <div className="slide3" style ={ { backgroundImage: "url('/web/images/p5.jpg')" } }></div>
    </div>
    </div>
    <div className="homePage">
    <div className="whyus">
    <h1>為何選擇我們</h1>
    <p>保康藥房具有五十年經驗服務大眾於配藥，保健品，急救用品,成藥等等。我們致力提供最佳服務同產品給客戶，價廉物美。</p>
    </div>
    </div>
    </header>
  );
}

export default Homepage_ch;
