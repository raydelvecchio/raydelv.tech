import "./global.css"
import SocialLinks from "./SocialLinks";
import React from "react";

function Writing() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="message">
                        I write about tech sometimes.
                    </div>
                    <div className="centered-list">
                        <div className="bullet-list-container">
                            <ul>
                                <li>
                                    <a className="link" href="https://twitter.com/raydelvecc/status/1725317238495093094" target="_blank" rel="noopener noreferrer">Thread on NormalComputing's Baked-in RAG Alternative</a>
                                </li>
                                <li>
                                    <a className="link" href="https://twitter.com/raydelvecc/status/1719544334435946758" target="_blank" rel="noopener noreferrer">Key Points from October 30 AI Executive Order</a>
                                </li>
                                <li>
                                    <a className="link" href="https://twitter.com/raydelvecc/status/1715496550024245318" target="_blank" rel="noopener noreferrer">RL and Nvidia Eureka</a>
                                </li>
                                <li>
                                    <a className="link" href="https://twitter.com/raydelvecc/status/1679968366377725953" target="_blank" rel="noopener noreferrer">How Language Models Use Long Context Windows</a>
                                </li>
                                <li>
                                    <a className="link" href="https://twitter.com/raydelvecc/status/1666328599119663106" target="_blank" rel="noopener noreferrer">SEC Sues Coinbase Key Points</a>
                                </li>
                                <li>
                                    <a className="link" href="https://twitter.com/raydelvecc/status/1629547395359952897" target="_blank" rel="noopener noreferrer">AI Philosophy w/ Joanne Lim</a>
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

export default Writing;