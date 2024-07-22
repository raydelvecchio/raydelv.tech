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
                        Hello! My name is Ray Del Vecchio - I'm 22 years old from <a className="link" href="https://en.wikipedia.org/wiki/Clifton,_Virginia" target="_blank" rel="noopener noreferrer">Clifton, VA</a>
                         , but have lived in a few other places growing up military. I attended <a className="link" href="https://brown.edu" target="_blank" rel="noopener noreferrer">Brown University</a> studying computer science 
                         (and some applied math). Currently I'm on a gap from school indefinitely, living in San Francisco and New York City.
                         In elementary school, I first began playing around with terminals, writing scripts, and eventually building my first computer before high school.
                         The technological knack stuck, and now I code for a living. I greatly enjoy the problem solving, logical, precise aspects of computation and consider myself lucky
                         I can pursue my interests for work. Though mostly in CS, my interests are quite broad - I've pursued finance, chemistry, and computer science both in education and professionally. At the moment,
                        I'm optimizing my life to maximize <i>experience</i>. You can find more fun facts about me <a className="link" href="/fun" target="_blank" rel="noopener noreferrer">here</a>. Welcome to my website :)
                    </p>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default About;