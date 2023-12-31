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
                                <li>
                                    10/12/23: <a className="link" href="/mixes/Piece%20of%20Home%20Depot.mp3" target="_blank" rel="noopener noreferrer">Piece of Home Depot</a>: Piece of Me (MK and Becky Hill) x Home Depot Theme Song (Home Depot)
                                </li>
                                <li>
                                    10/13/23: <a className="link" href="/mixes/Slowly%20Daisy.mp3" target="_blank" rel="noopener noreferrer">Slowly Daisy</a>: Slowly (Weston Estate) x Daisy (Kid Travis)
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