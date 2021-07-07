import React from 'react';
import '../css/AboutMe.css'

function AboutMe() {
    
    return (
        <div className="AboutMe">
            <div className="AboutMeContainer CommonContainer">

                <div className="AboutMeTextWrapper">
                    <h2>Little <br/> About Me</h2>
                    <h5>rwbwbrb rbwrbbw rbwbbrb rwbwrbwrbwbwr bwrbrwbrbwbwbrbwrb wrbwrb wr bwb rbwrbwbwrb wbrwbwrbw rbrwb wrb wrbrbwrb brbw wrbwrbrbw rbbbrb</h5>
                    <a href="https://www.google.com" target="blank"><h5 className="AboutMeMore">Download my resume</h5></a>
                </div>
                
                <div className="AboutMeImageWrapper">
                </div>

            </div>
        </div>
    );
}

export default AboutMe;