import "./title_with_list.css"
import SocialLinks from "./SocialLinks";
import React from "react";

function About() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="message">
                        A little about me.
                    </div>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default About;