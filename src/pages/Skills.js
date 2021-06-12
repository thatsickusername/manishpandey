import React from 'react';
import '../css/Skills.css'

function Skills() {
    return (
        <div className="Skills">
            <div className="SkillsContainer CommonContainer">
                <div className="SkillsTextWrapper">
                    <h2>Skills</h2>
                    <ul>
                        <li>UX/UI design</li>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>ES6 javascript</li>
                        <li>GSAP.js</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Interactive web design</li>
                        <li>chess enthusiast</li>
                    </ul>

                    <div className="SkillsDesktop">
                        <h3>
                                <span>UX/UI design </span>      
                                <span>HTML 5 </span>     
                                <span>CSS 3 </span>      
                                <span>ES6 javascript</span>      
                                <span>GSAP.js</span>     
                                <span>React.js</span>        
                                <span>Node.js </span>    
                                <span>Interactive web design</span>      
                                <span>chess enthusiast</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;