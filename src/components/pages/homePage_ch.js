import React from 'react';

function Homepage_ch() {
  return (
    <header>
    <div className="headerbar">
    <img className="icon" src="/images/pharm.png" />
    <div class ="tag">
    保康西藥房
    </div>
    <div class="containernav">
    <div class="topnav">
    <a href="/ch" className="active">首頁</a>
    <a href="/Contact/ch">聯絡</a>
    <a href="/About/ch">關於</a>
    <a href="/">English</a>
    </div>
    </div>
    </div>

    <div className="sliderC">
    <div className="slider">
      <div className="slide1"></div>
      <div className="slide2"></div>
      <div className="slide3"></div>
      <div className="slide4"></div>
      <div className="slide5"></div>
      <div className="slide6"></div>
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
