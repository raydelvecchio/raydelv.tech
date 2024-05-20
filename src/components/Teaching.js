import "./global.css"
import SocialLinks from "./SocialLinks";
import React from "react";

function Teaching() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="message">
                        It's great to share knowledge.
                    </div>
                    <div className="centered-list">
                        <div className="bullet-list-container">
                            <ul>
                                <li>
                                    Teaching assistant for Brown's <a className="link" href="https://cs.brown.edu/courses/info/csci1470/" target="_blank" rel="noopener noreferrer">Deep Learning</a> (2 semesters).
                                </li>
                                <li>
                                    Teaching assistant for <i>Entrepreneurial Management in Adversity</i> (<a className="link" href="https://entrepreneurship.brown.edu/courses/" target="_blank" rel="noopener noreferrer">ENGN1931Q</a>) with Professor Howard Anderson (founder, Battery Ventures, Yankee Group).
                                </li>
                                <li>
                                    Taekwondo instructor (2017-2020), where I learned how to teach to different student's needs, adjust to learning styles, and clearly/concisely explain concepts.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default Teaching;