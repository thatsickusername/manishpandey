import React from 'react';

function MoreAboutMe() {
    return (
        <div className="MoreBoutMe">
            <div className="projectBanner">
                <img alt="something" src={props.projectImage}/>
                <h2 className="projectHeading">{props.projectTitle}</h2>
            </div>
            <div className="projectContent">
                <h4 className="projectText">
                    {props.projectText}
                </h4>
            </div>
            <div>

            </div>
        </div>
    );
}

export default MoreAboutMe;