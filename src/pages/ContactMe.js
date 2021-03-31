import React from 'react';
import '../css/ContactMe.css'

function ContactMe() {
    return (
        <div className="ContactMe">
            <div className="ContactMeContainer">
                <div className="ContactMeTextWrapper">
                    <h2>Contact Me</h2>
                    <ul>
                        <li>@EmailMe</li>
                        <li>@LinkedIn</li>
                        <li>@GitHub</li>
                        <li>@Dribble</li>
                        <li>@Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;