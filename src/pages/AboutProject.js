import '../css/AboutProject.css'


function AboutProject(props) {

    return (
        <div className="AboutProject">
            <div className="projectBanner">
                <img alt="something" src={props.projectImage}/>
                <h2 className="projectHeading">{props.projectTitle}</h2>
            </div>
            <div className="projectContent">
                <h4>Type:</h4>
                <h4 className="projectText"> - {props.projectType}</h4>
                <br/>
                <h4>Technologies used: </h4>
                <h4 className="projectText"> - {props.projectTech}</h4>
                <br/>
                <h4>Project Description</h4>
                <h4 className="projectText"> - {props.projectText}</h4>
                <br/>
                <h4>GITHUB repository link:</h4>
                <h4 className="projectText"> - <a target="blank" href={props.projectGitHubLink}>click here</a></h4>
                <h4>Project Website:</h4>
                <h4 className="projectText"> - <a target="blank" href={props.projectWebsite}>click here</a></h4>
            </div>
            <div>

            </div>
        </div>
    );
}

export default AboutProject;
// {props.projectGitHubLink}
// {props.projectWebsite}