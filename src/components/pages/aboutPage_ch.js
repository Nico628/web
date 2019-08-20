import React from 'react';

function Aboutpage_ch() {
  return (
    <header>
    <div className="headerbar">
    <img className="icon" src="/images/pharm.png" />
    <div class ="tag">
    保康西藥房
    </div>
    <div class="containernav">
    <div class="topnav">
    <a href="/ch">首頁</a>
    <a href="/Contact/ch">聯絡</a>
    <a href="/About/ch" className="active">關於</a>
    <a href="/About/en">English</a>
    </div>
    </div>
    </div>
    <div className="aboutPage">
    <center><img className="map" src="/images/map.png" /></center>
    </div>
    <div className="words">

    <p>保康西藥房立於70年代，服務市民五十多年，致力於為華人社區及新移民提供健康服務，經營西藥及醫療用品為主，深得顧客信賴與支持。現時於列治文八佰伴中心二樓設立專門店，同時亦不斷擴大服務範圍。我們團隊奉行的三大原則包括: 誠懇,專業和優質服務。我們提供的服務包括:
    </p>

    <ul>
    <li>處方配藥服務</li>
    <li>方便藥包</li>
    <li>藥劑調配</li>
    <li>疫苗注射</li>
    <li>藥物諮詢</li>
    <li>血糖儀及相關產品使用教學</li>
    <li>戒煙計劃</li>
    <li>English, 國語, 粵語服務</li>
    </ul>
    <p>我們的藥劑師亦會免費為你解答任何醫藥問題、亦為你解病除憂！謝謝你的支持！</p>
    </div>
    </header>
  );
}

export default Aboutpage_ch;
