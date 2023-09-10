import "./global.css"
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
                    <p>
                        Hello! Nice to meet you. My name is Ray Del Vecchio - I'm 21 years old from <a className="link" href="https://en.wikipedia.org/wiki/Clifton,_Virginia" target="_blank" rel="noopener noreferrer">Clifton, VA</a>
                         , but have lived in Los Angeles, Boston, Newport, Palo Alto, and San Francisco. I attend <a className="link" href="https://brown.edu" target="_blank" rel="noopener noreferrer">Brown University</a> studying computer science, yet
                         I'm on a gap at the moment (to build). In elementary school, I first began playing around with terminals, writing scripts, and eventually building my first computer before high school.
                         The technological knack stuck, and now I code for a living. I greatly enjoy the problem solving, logical, precise aspects of computation and consider myself lucky
                         I can pursue my interests for work. Though mostly in CS, my interests are quite broad, and I've taken classes in neuroscience, economics, engineering, pure/applied math, and chemistry. You can find more fun facts about me <a className="link" href="/fun" target="_blank" rel="noopener noreferrer">here</a>. Welcome to my website :)
                    </p>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default About;