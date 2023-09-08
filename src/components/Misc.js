import "./title_with_list.css"
import SocialLinks from "./SocialLinks";
import React from "react";

function Misc() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="message">
                        Fun Facts / Get to Know Me:
                    </div>
                    <div className="centered-list">
                        <div className="bullet-list-container">
                            <ul>
                                <li>
                                    I hold a second degree black belt in ITF Taekwondo and was once 3rd in the world for <a className="link" href="https://centurymartialarts.com/collections/bo-staff" target="_blank" rel="noopener noreferrer">Bo Staff</a> performance
                                </li>
                                <li>
                                    I was ranked nationally in the NCFL PF debate circuit
                                </li>
                                <li>
                                    My current hobbies include surfing (when I can), bouldering (V2/3 right now), and basic music production
                                </li>
                                <li>
                                    I'm a passionate event host who enjoys meeting new people, and have held pool parties, pizza nights, and taco tuesdays in Palo Alto and San Francisco, as well as networking events for Brown's Entrepreneurship Program in Providence
                                </li>
                                <li>
                                    I used to be a pre-med student and took two college semesters of organic chemistry in high school
                                </li>
                                <li>
                                    For the summer of 2022, I lived at <a className="link" href="https://www.businessinsider.com/facebook-house-inside-palo-alto-home-mark-zuckerberg-la-jennifer-2017-12" target="_blank" rel="noopener noreferrer">819 La Jennifer Way</a> with a bunch of GSB students
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