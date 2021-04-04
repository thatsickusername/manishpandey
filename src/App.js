import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from './pages/HeroSection';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectIdea from './pages/ProjectIdea';
import ContactMe from './pages/ContactMe';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Cursor from './pages/Cursor';
import './css/Shared.css';
import './mediaQueries/SmallMobileBreakpoint.css';
import './mediaQueries/SmallTabletBreakpoint.css';
import './mediaQueries/TabletBreakpoint.css';
import './mediaQueries/LaptopBreakpoint.css';
import './mediaQueries/MonitorBreakpoint.css';
import './mediaQueries/BigMonitorBreakpoint.css';


import gsap from "gsap";




function App() {


    return (
        <div id="my-scrollbar">
            <HeroSection/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <ProjectIdea/>
            <ContactMe/>
            <Footer/>
            <Navbar/>
            <Cursor/>
        </div>
        
            
        

    );
    
}

export default App;