import '../css/AboutProject.css'


function AboutProject(props) {

    return (
        <div className="AboutProject">
            <div className="projectBanner">
                <img alt="something" src={props.projectImage}/>
                <h2 className="projectHeading">{props.projectTitle}</h2>
            </div>
            <div className="projectContent">
                <h4 className="projectType">Type: {props.projectType}</h4>
                <br/>
                <h4 className="projectText">{props.projectText}</h4>
                <br/>
                <h4 className="projectGitHubLink">GITHUB repository link: click here</h4>
                <h4 className="projectWebsite">Project Website: click here</h4>
            </div>
            <div>

            </div>
        </div>
    );
}

export default AboutProject;
// {props.projectGitHubLink}
// {props.projectWebsite}