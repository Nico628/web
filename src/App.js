import React from 'react';
import {
  HashRouter as Router,
  Route,
  // eslint-disable-next-line
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


    <Route basename='/web/' component={Homepage_en} />
    <Route exact path='/web/Contact/en' component={Contactpage_en} />
    <Route exact path='/web/About/en' component={Aboutpage_en} />

    <Route exact path='/web/ch' component={Homepage_ch} />
    <Route exact path='/web/Contact/ch' component={Contactpage_ch} />
    <Route exact path='/web/About/ch' component={Aboutpage_ch} />

    </div>
    </Router>
  );
}

export default App;
