import "./global.css"
import SocialLinks from "./SocialLinks";
import React from "react";

function Investments() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="message">
                        My investing interests / history.
                    </div>
                    <div className="centered-list">
                        <div className="bullet-list-container">
                            <ul>
                                <li>
                                    I've sourced/diligenced startups in frontier tech/crypto/AI for Nima Capital, and regularly meet with founders!
                                </li>
                                <li>
                                    I made my first angel investment in <a className="link" href="https://skilldeck.io" target="_blank" rel="noopener noreferrer">Skilldeck</a> in August 2023. They're extremely capital efficient with a great repeat founder I've known for a while, targeting a niche market with high retention - I'm excited to watch them develop.
                                </li>
                                <li>
                                    My first equities position was $MRNA in December 2021, and since I've held positions in $GSFTX, $AMD, $NVDA, and others. I haven't yet dabbled in options myself :(
                                </li>
                                <li>
                                    As a senior analyst at <a className="link" href="https://www.brownhealthcareinvestmentgroup.com/" target="_blank" rel="noopener noreferrer">Brown Healthcare Investment Group</a>, I helped diligence and pitch small-cap biotechnology stocks for the $50k fund
                                </li>
                                <li>
                                    Real estate is also interesting to me; I've been the tech lead of <a className="link" href="https://www.brownstudentsre.com/" target="_blank" rel="noopener noreferrer">Brown Students in Real Estate</a>
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

export default Investments;