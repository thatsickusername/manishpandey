import React from 'react';
import '../css/Projects.css';
import ProjectDisplayComponent from './ProjectDisplayComponent';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import project3 from '../images/project3.jpeg';
import project4 from '../images/project4.jpeg'


function Projects() {
    return (
        <div className="Projects">
           <div className="ProjectsContainer">
                    <h2>latest <br/>projects</h2>
                    <ProjectDisplayComponent ProjectTittle="Project 1 tittle" imgurl={project1}/>
                    <ProjectDisplayComponent ProjectTittle="Project 2 tittle" imgurl={project2}/>
                    <ProjectDisplayComponent ProjectTittle="Project 3 tittle" imgurl={project3}/>
                    <ProjectDisplayComponent ProjectTittle="Project 4 tittle" imgurl={project4}/>
           </div>
        </div>
    );
}

export default Projects;