import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.min.css';
import Homepage_en from './components/pages/homePage_en';
import Contactpage_en from './components/pages/contactPage_en';
import Aboutpage_en from './components/pages/aboutPage_en';

import Homepage_ch from './components/pages/homePage_ch';
import Contactpage_ch from './components/pages/contactPage_ch';
import Aboutpage_ch from './components/pages/aboutPage_ch';

function App() {
  return (

    <Router>
    <div className="App">


    <Route exact path='/' component={Homepage_en} />
    <Route exact path='/Contact/en' component={Contactpage_en} />
    <Route exact path='/About/en' component={Aboutpage_en} />

    <Route exact path='/ch' component={Homepage_ch} />
    <Route exact path='/Contact/ch' component={Contactpage_ch} />
    <Route exact path='/About/ch' component={Aboutpage_ch} />

    </div>
    </Router>
  );
}

export default App;
