import React from 'react';
import '../css/ProjectIdea.css';
import PhoneMockup from '../images/PhoneMockup.png';
import GetInTouch from '../images/GetInTouch.png';
import Hi from '../images/Hi.png';


function ProjectIdea() {
    return (
        <div className="ProjectIdea">
            <div className="ProjectIdeaContainer CommonContainer">
                <h2>Have a project idea in mind?</h2>
                <div className="PhoneContainer">
                    <img alt="somepicture" src={PhoneMockup}></img>
                    <img alt="somepicture" className="PhoneOverlay" src={Hi}></img>
                    <img alt="somepicture" className="PhoneOverlay" src={GetInTouch}></img>
                    
                </div>
            </div>
        </div>
    );
}

export default ProjectIdea;