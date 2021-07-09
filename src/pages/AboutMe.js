import React from 'react';
import '../css/AboutMe.css'

function AboutMe() {
    
    return (
        <div className="AboutMe">
            <div className="AboutMeContainer CommonContainer">

                <div className="AboutMeTextWrapper">
                    <h2>Little <br/> About Me</h2>
                    <h5>HI! My name is Manish Pandey. I design and develop interactive websites. I am currently in the second year of my BTech in Computer science and looking for good internship opportunities to headstart my career in the field. My aim is to visualize your ideas through my front end development skills, so if you have a project idea in mind and wanna work together feel free to get in touch.</h5>
                    <a href="https://drive.google.com/file/d/1e6xpe2nhZ2rDcOdZ2LRDrZNDoRH1_dtM/view?usp=sharing" target="blank"><h5 className="AboutMeMore">Download my resume</h5></a>
                </div>
                
                <div className="AboutMeImageWrapper">
                </div>

            </div>
        </div>
    );
}

export default AboutMe;
