import React from 'react';
import '../css/ProjectDisplayComponent.css'



function ProjectDisplayComponent(props) {
    

    return (
        <div >
            <div className="ProjectDisplayComponentContainer">
                <img alt="Project Display" src={props.imgurl}/>
                <h4>{props.ProjectTittle}</h4>
           </div>
        </div>
    );
}

export default ProjectDisplayComponent;