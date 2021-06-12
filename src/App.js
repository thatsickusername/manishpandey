import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

import HeroSection from './pages/HeroSection';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectIdea from './pages/ProjectIdea';
import ContactMe from './pages/ContactMe';
import AboutProject from './pages/AboutProject';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Cursor from './pages/Cursor';

// MediaQueries

import './css/Shared.css';
import './mediaQueries/SmallMobileBreakpoint.css';
import './mediaQueries/SmallTabletBreakpoint.css';
import './mediaQueries/TabletBreakpoint.css';
import './mediaQueries/LaptopBreakpoint.css';
import './mediaQueries/MonitorBreakpoint.css';
import './mediaQueries/BigMonitorBreakpoint.css';
import ScrollToTop from "./ScrollToTop";
import ProjectData from './ProjectData';



function App() {


    return (
        <div id="my-scrollbar">
            <Router>
                
                <Switch>
                    <Route path='/' exact>
                        <HeroSection/>
                        <AboutMe/>
                        <Skills/>
                        <Projects/>
                        <ProjectIdea/>
                        <ContactMe/>
                    </Route>

                    <Route path='/aboutMe' exact>
                        <AboutMe/>
                        <Skills/>
                        <ContactMe/>
                    </Route>

                    <Route path='/projects' exact>
                        <Projects/>
                        <ProjectIdea/>
                        <ContactMe/>
                    </Route>

                    <Route path='/contactMe' exact>
                        <ContactMe/>
                    </Route>

                    <Route path='/contactMe' exact>
                        <ContactMe/>
                    </Route>

                    <Route path='/Project1' exact>
                        <AboutProject projectImage={ProjectData[0].projectImage} projectTitle={ProjectData[0].projectTitle} projectText={ProjectData[0].projectText}/>
                    </Route>

                    <Route path='/Project2' exact>
                        <AboutProject projectImage={ProjectData[1].projectImage} projectTitle={ProjectData[1].projectTitle} projectText={ProjectData[1].projectText}/>
                    </Route>
                    
                    <Route path='/Project3' exact>
                        <AboutProject projectImage={ProjectData[2].projectImage} projectTitle={ProjectData[2].projectTitle} projectText={ProjectData[2].projectText}/>
                    </Route>

                    <Route path='/Project4' exact>
                        <AboutProject projectImage={ProjectData[3].projectImage} projectTitle={ProjectData[3].projectTitle} projectText={ProjectData[3].projectText}/>
                    </Route>
                </Switch>

                <Footer/>
                <Navbar/>
                <Cursor/>

                <ScrollToTop/>
            </Router>
            
            
        </div>
        
            
        

    );
    
}

export default App;