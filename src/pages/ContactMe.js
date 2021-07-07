import React from 'react';
import '../css/ContactMe.css'

function ContactMe() {
    return (
        <div className="ContactMe">
            <div className="ContactMeContainer CommonContainer">
                <div className="ContactMeTextWrapper">
                    <h2>Contact Me</h2>
                    <ul>
                        <a href="http://www.google.com" target="blank"><li>@EmailMe</li></a>
                        <a href="http://www.google.com" target="blank"><li>@LinkedIn</li></a>
                        <a href="http://www.google.com" target="blank"><li>@GitHub</li></a>
                        <a href="http://www.google.com" target="blank"><li>@Dribble</li></a>
                        <a href="http://www.google.com" target="blank"><li>@Instagram</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;