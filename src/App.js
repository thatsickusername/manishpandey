import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from './pages/HeroSection';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills'
import './css/Shared.css'

function App() {

    return (
      <div className="App">
        <HeroSection/>
        <AboutMe/>
        <Skills/>
      </div>
    );
  
}

export default App;