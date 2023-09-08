import "./title_with_list.css"
import SocialLinks from "./SocialLinks";
import React from "react";

function Misc() {
    return (
        <div className="container">
            <div className="content-wrapper">

                <div className="message">
                    Fun Facts / Get to Know Me:
                </div>
                <div className="centered-list">
                    <div className="bullet-list-container">
                        <ul>
                            <li>
                                I used to be a pre-med student with the goal of getting an MD-PhD and took two college semesters of organic chemistry in high school
                            </li>
                            <li>
                                I hold a second degree black belt in ITF Taekwondo and was one ranked 3rd in the world for <a href="https://centurymartialarts.com/collections/bo-staff">Bo Staff</a> performance
                            </li>
                            <li>
                                I was ranked nationally in the NCFL public forum debate circuit
                            </li>
                            <li>
                                I love <a href="https://en.wikipedia.org/wiki/Electronic_dance_music">EDM</a>. I've attended EZOO (2x), Countdown, Beyond Wonderland, Breakaway Carolina, Daytrip Seattle, and Hard Summer, as well as independent shows by Diesel, Valentino Khan, Deorro, Jiqui, and Muerte. Upcoming: Breakaway Boston, Escape, Apocalypse, Countdown, EDC Las Vegas.
                            </li>
                            <li>
                                My current hobbies include surfing (when I can), bouldering (V2/3 right now), and basic music production
                            </li>
                            <li>
                                I'm a passionate event host who enjoys meeting new people, and have held pool parties, pizza nights, and taco tuesdays in Palo Alto and San Francisco, as well as networking events for Brown's Entrepreneurship Program in Providence
                            </li>
                            <li>
                                For the summer of 2022, I lived at <a href="https://www.businessinsider.com/facebook-house-inside-palo-alto-home-mark-zuckerberg-la-jennifer-2017-12">819 La Jennifer Way</a> with a bunch of GSB students
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default Misc;