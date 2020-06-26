import React from 'react';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import ScrollToTop from "./components/misc/ScrollToTop"; // Fixed bug where pages would start in middle
import Header from './components/header-footer/Header';
import Footer from './components/header-footer/Footer'

// CSS
import './assets/css/Text.css'
import './assets/css/Images.css'
import './assets/css/Align.css'
import './assets/css/Forms.css'
import './assets/css/PDF.css'
import './assets/css/Animations.css'
import './assets/css/Misc.css'
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <ReactNotification />
        <Routes/>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
