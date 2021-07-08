import { Link } from 'react-router-dom'
import '../css/Projects.css';
import ProjectDisplayComponent from './ProjectDisplayComponent';
import project1 from '../images/SkilllyBackground.png'
import project2 from '../images/shoestore.png'
import project3 from '../images/giphy.gif'
import project4 from '../images/project4.jpeg'



function Projects() {
    return (
        <div className="Projects">
           <div className="ProjectsContainer CommonContainer">
                    <h2>latest <br/>projects</h2>
                    <div className="MobileCollumn">
                        <Link to='/Project2' className="ProjectDisplayComponent">
                            <ProjectDisplayComponent ProjectTittle="Project Shoe Store" imgurl={project2}/>
                        </Link>

                        <Link to='/Project3' className="ProjectDisplayComponent">
                            <ProjectDisplayComponent ProjectTittle="Giphy Clone" imgurl={project3}/>
                        </Link>

                        <Link to='/Project4' className="ProjectDisplayComponent">
                            <ProjectDisplayComponent ProjectTittle="Portfolio Website" imgurl={project4}/>
                        </Link>

                        <Link to='/Project1' className="ProjectDisplayComponent">
                            <ProjectDisplayComponent ProjectTittle="SKILLLY" imgurl={project1}/>
                        </Link>
                    </div>

                    <div className="LaptopGrid">
                        <div className="TopRow">
                            <Link to='/Project2' className="ProjectDisplayComponent">
                                <ProjectDisplayComponent ProjectTittle="Project Shoe Store" imgurl={project2}/>
                            </Link>

                            <Link to='/Project3' className="ProjectDisplayComponent">
                                <ProjectDisplayComponent ProjectTittle="Giphy Clone" imgurl={project3}/>
                            </Link>
                        </div>
                        <div className="BottomRow">

                            <Link to='/Project4' className="ProjectDisplayComponent">
                                <ProjectDisplayComponent ProjectTittle="Portfolio Website" imgurl={project4}/>
                            </Link>
                            <Link to='/Project1' className="ProjectDisplayComponent">
                                <ProjectDisplayComponent ProjectTittle="SKILLLY" imgurl={project1}/>
                            </Link>
                        </div>
                    </div>
           </div>
        </div>
    );
}

export default Projects;