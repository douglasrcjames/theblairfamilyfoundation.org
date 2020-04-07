import React from 'react';

import Header from './components/navigation/Header';
import Body from './components/Body'
import Footer from './components/navigation/Footer'
import './assets/css/Text.css'
import './assets/css/Images.css'
import './assets/css/Align.css'
import './assets/css/Animations.css'

function App() {
  // TODO: add google analytics stuff
  return (
    <div>
      <Header />

      <Body />

      <br/>
      <hr/>
      <br/>

      <Footer />
    </div>
  );
}

export default App;
