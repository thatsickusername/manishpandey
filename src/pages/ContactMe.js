import React from 'react';
import '../css/ContactMe.css'

function ContactMe() {

    return (
        <div className="ContactMe">
            <div className="ContactMeContainer CommonContainer">
                <div className="ContactMeTextWrapper">
                    <h2>Contact Me</h2>
                    <ul>
                        <a href="mailto:manish1234pandeycrpf@gmail.com" target="blank"><li>@EmailMe</li></a>
                        <a href="https://www.linkedin.com/in/manish-pandey-245b83194/" target="blank"><li>@LinkedIn</li></a>
                        <a href="https://github.com/thatsickusername" target="blank"><li>@GitHub</li></a>
                        <a href="tel:+918882078095" target="blank"><li>@Contact No.</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
