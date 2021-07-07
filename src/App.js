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

import Animation from './Animation';



function App() {

    Animation()

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
                        <AboutProject 
                            projectImage={ProjectData[0].projectImage} 
                            projectTitle={ProjectData[0].projectTitle}
                            projectType={ProjectData[0].projectType}
                            projectTech={ProjectData[0].projectTech} 
                            projectText={ProjectData[0].projectText}
                            projectGitHubLink={ProjectData[0].projectGitHubLink}
                            projectWebsite={ProjectData[0].projectWebsite}
                        />
                    </Route>

                    <Route path='/Project2' exact>
                        <AboutProject 
                            projectImage={ProjectData[1].projectImage} 
                            projectTitle={ProjectData[1].projectTitle} 
                            projectType={ProjectData[1].projectType}
                            projectTech={ProjectData[1].projectTech} 
                            projectText={ProjectData[1].projectText}
                            projectGitHubLink={ProjectData[1].projectGitHubLink}
                            projectWebsite={ProjectData[1].projectWebsite}
                        />
                    </Route>
                    
                    <Route path='/Project3' exact>
                        <AboutProject 
                            projectImage={ProjectData[2].projectImage} 
                            projectTitle={ProjectData[2].projectTitle} 
                            projectType={ProjectData[2].projectType}
                            projectTech={ProjectData[2].projectTech} 
                            projectText={ProjectData[2].projectText}
                            projectGitHubLink={ProjectData[2].projectGitHubLink}
                            projectWebsite={ProjectData[2].projectWebsite}
                        />
                    </Route>

                    <Route path='/Project4' exact>
                        <AboutProject 
                            projectImage={ProjectData[3].projectImage} 
                            projectTitle={ProjectData[3].projectTitle} 
                            projectType={ProjectData[3].projectType}
                            projectTech={ProjectData[3].projectTech} 
                            projectText={ProjectData[3].projectText}
                            projectGitHubLink={ProjectData[3].projectGitHubLink}
                            projectWebsite={ProjectData[3].projectWebsite}
                        />
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