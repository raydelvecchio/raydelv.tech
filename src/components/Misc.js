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
                                    When I can, I enjoy surfing, bouldering, and hiking, although I'm not very good at any of these activities
                                </li>
                                <li>
                                    I was ranked nationally in the NCFL PF debate circuit
                                </li>
                                <li>
                                    I'm a passionate event host who enjoys meeting new people; have held social/networking events the bay, led independent seminar-like discussions on Brown's campus on tech/ethical/social topics, and frequently meet/source founders!
                                </li>
                                <li>
                                    I used to be pre-med (chemistry major at Brown) and took two college semesters of organic chemistry in high school
                                </li>
                                <li>
                                    For the summer of 2022, I lived at <a className="link" href="https://www.businessinsider.com/facebook-house-inside-palo-alto-home-mark-zuckerberg-la-jennifer-2017-12" target="_blank" rel="noopener noreferrer">819 La Jennifer Way</a> with a bunch of GSB students
                                </li>
                                <li>
                                    In 2020, I co-founded a startup <a className="link" href="https://hyphora.org" target="_blank" rel="noopener noreferrer">Hyphora</a> (now inactive) where I ran marketing and product
                                </li>
                                <li>
                                    Loquor quidam latine, and I have taken somewhere around 5 years of the language
                                </li>
                                <li>
                                    I'm an <a className="link" href="/mix">amateur DJ</a>, and DJed my first party at Harvard in September '23. I mostly mix house music, but am slowly expanding to other genres.
                                </li>
                                <li>
                                    I love <a className="link" href="https://en.wikipedia.org/wiki/Electronic_dance_music" target="_blank" rel="noopener noreferrer">EDM</a>. I've attended EZOO (2x), Countdown, Escape, Beyond Wonderland, Breakaway Carolina, Breakaway Boston, Daytrip Seattle, and Hard Summer, as well as independent shows by Diesel, Valentino Khan, Deorro, Jiqui, Galantis, and Muerte. Upcoming: Apocalypse, Thunderdome, and EDC Las Vegas.
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