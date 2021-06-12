import { Link } from 'react-router-dom'
import '../css/Projects.css';
import ProjectDisplayComponent from './ProjectDisplayComponent';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import project3 from '../images/project3.jpeg';
import project4 from '../images/project4.jpeg'


function Projects() {
    return (
        <div className="Projects">
           <div className="ProjectsContainer CommonContainer">
                    <h2>latest <br/>projects</h2>
                    <div className="MobileCollumn">
                        <Link to='/Project1' className="ProjectDisplayComponent">
                            <ProjectDisplayComponent ProjectTittle="Project 1 tittle" imgurl={project1}/>
                        </Link>

                        <Link to='/Project2' className="ProjectDisplayComponent">
                            <ProjectDisplayComponent ProjectTittle="Project 2 tittle" imgurl={project2}/>
                        </Link>

                        <Link to='/Project3' className="ProjectDisplayComponent">
                            <ProjectDisplayComponent ProjectTittle="Project 3 tittle" imgurl={project3}/>
                        </Link>

                        <Link to='/Project4' className="ProjectDisplayComponent">
                            <ProjectDisplayComponent ProjectTittle="Project 4 tittle" imgurl={project4}/>
                        </Link>
                    </div>

                    <div className="LaptopGrid">
                        <div className="TopRow">
                            <Link to='/Project1'  className="ProjectDisplayComponent">
                                <ProjectDisplayComponent ProjectTittle="Project 1 tittle" imgurl={project1}/>
                            </Link>

                            <Link to='/Project2'  className="ProjectDisplayComponent">
                                <ProjectDisplayComponent ProjectTittle="Project 2 tittle" imgurl={project2}/>
                            </Link>
                        </div>
                        <div className="BottomRow">
                            <Link to='/Project3' className="ProjectDisplayComponent">
                                <ProjectDisplayComponent ProjectTittle="Project 3 tittle" imgurl={project3}/>
                            </Link>

                            <Link to='/Project4' className="ProjectDisplayComponent">
                                <ProjectDisplayComponent ProjectTittle="Project 4 tittle" imgurl={project4}/>
                            </Link>
                        </div>
                    </div>
           </div>
        </div>
    );
}

export default Projects;