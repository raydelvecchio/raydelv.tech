import "./global.css"
import SocialLinks from "./SocialLinks";
import React from "react";

function Misc() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="message">
                        Get to know me with these facts.
                    </div>
                    <div className="centered-list">
                        <div className="bullet-list-container">
                            <ul>
                                <li>
                                    I hold a second degree black belt in ITF Taekwondo and was technically once 3rd in the world for <a className="link" href="https://centurymartialarts.com/collections/bo-staff" target="_blank" rel="noopener noreferrer">Bo Staff</a> performance
                                </li>
                                <li>
                                    I was ranked nationally in the NCFL PF debate circuit
                                </li>
                                <li>
                                    My current hobbies include surfing (when I can), bouldering (V2/3 right now), and basic music production
                                </li>
                                <li>
                                    I'm a passionate event host who enjoys meeting new people, and have held social/networking events in Palo Alto and San Francisco, led independent seminar-like discussions on Brown's campus on tech/ethical/social topics, as well as helped organize events for Brown's Entrepreneurship Program
                                </li>
                                <li>
                                    I used to be a pre-med student and took two college semesters of organic chemistry in high school
                                </li>
                                <li>
                                    For the summer of 2022, I lived at <a className="link" href="https://www.businessinsider.com/facebook-house-inside-palo-alto-home-mark-zuckerberg-la-jennifer-2017-12" target="_blank" rel="noopener noreferrer">819 La Jennifer Way</a> with a bunch of GSB students
                                </li>
                                <li>
                                    In 2020, I co-founded a startup <a className="link" href="https://hyphora.org" target="_blank" rel="noopener noreferrer">Hyphora</a> (now inactive) where I ran marketing and product
                                </li>
                                <li>
                                    Loquor quidam latine
                                </li>
                                <li>
                                    I love <a className="link" href="https://en.wikipedia.org/wiki/Electronic_dance_music" target="_blank" rel="noopener noreferrer">EDM</a>. I've attended EZOO (2x), Countdown, Beyond Wonderland, Breakaway Carolina, Daytrip Seattle, and Hard Summer, as well as independent shows by Diesel, Valentino Khan, Deorro, Jiqui, and Muerte. Upcoming: Breakaway Boston, Escape, Apocalypse, Countdown, Thunderdome, and EDC Las Vegas.
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

export default Misc;