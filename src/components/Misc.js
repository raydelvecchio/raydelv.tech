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
                                    I greatly enjoy lifting, surfing (when I can), bouldering, and hiking, although I'm not very good at any of these activities
                                </li>
                                <li>
                                    I was ranked nationally in the NCFL PF debate circuit
                                </li>
                                <li>
                                    Most of my life I wanted to be a doctor, got into university as a chem major, and took two college semesters of organic chemistry in high school
                                </li>
                                <li>
                                    For the summer of 2022, I lived at <a className="link" href="https://www.businessinsider.com/facebook-house-inside-palo-alto-home-mark-zuckerberg-la-jennifer-2017-12" target="_blank" rel="noopener noreferrer">819 La Jennifer Way</a> with a bunch of GSB students
                                </li>
                                <li>
                                    In 2020, I co-founded a startup <a className="link" href="https://hyphora.org" target="_blank" rel="noopener noreferrer">Hyphora</a> in EdTech, where I learned marketing / product
                                </li>
                                <li>
                                    I'm a huge fan of investing, both in stocks and crypto. Part of my morning routine is checking each market! For a while, I was a senior analyst at <a className="link" href="https://www.brownhealthcareinvestmentgroup.com/" target="_blank" rel="noopener noreferrer">BHIG</a> focused on small-cap pharma equities.
                                </li>
                                <li>
                                    I'm an amateur house DJ - did my first party at Harvard in September '23, and have since spun the NeurIPS Huggingface afterparty, as well as Cerebral Valley's e/acc holiday party, Apple Vision Pro launch party (covered by the SF Standard <a className="link" href="https://sfstandard.com/2024/02/24/san-francisco-vision-pro-parties-trend/">here</a>!), and the <a className="link" href="https://twitter.com/cerebral_valley/status/1778187849248153705">YC W24 afterparty</a> at the top of Transamerica Pyramid!
                                </li>
                                <li>
                                    I love <a className="link" href="https://en.wikipedia.org/wiki/Electronic_dance_music" target="_blank" rel="noopener noreferrer">EDM</a>. I've attended EZOO (2x), Countdown, EDC Las Vegas, Escape, Beyond Wonderland, Breakaway Carolina, Breakaway Boston, Daytrip Seattle, Zombie Apocalypse, Wobbleland, and Hard Summer, and many independent shows. My favorite festival of all time was Burning Man 2024.
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