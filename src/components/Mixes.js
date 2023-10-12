import "./global.css"
import React from "react";

function Mixes() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="message">
                        Live deck mixes.
                    </div>
                    <div className="centered-list">
                        <div className="bullet-list-container">
                            <ul>
                                <li>
                                    10/11/23: <a className="link" href="/mixes/Electric%20Love%20Story.mp3" target="_blank" rel="noopener noreferrer">Electric Love Story</a>: Love Story (Taylor Swift) x Electric Love (BORNS, TWINSICK 2022 Remix)
                                </li>
                                <li>
                                    10/11/23: <a className="link" href="/mixes/UCLA%20From%20the%20Start.mp3" target="_blank" rel="noopener noreferrer">UCLA From the Start</a>: From the Start (Laufey) x UCLA (RL Grime)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mixes;