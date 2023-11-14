import "./global.css"
import SocialLinks from "./SocialLinks";
import React from "react";

function Tech() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="message">
                        Primarily, I'm an engineer.
                    </div>
                    <div className="centered-list">
                        <div className="bullet-list-container">
                            <ul>
                                <li>
                                    I work at the family office Nima Capital, where I manage cloud infrastructure, automate quantitative trading strategies, perform data analytics, AI engineering for VC workflow and equities analysis, and write various internal tools for social media and alerting
                                </li>
                                <li>
                                    From September to November 2023, I served as an engineering consultant for <a className="link" href="https://letsift.com" target="_blank" rel="noopener noreferrer">Sift</a>, a Brown-based startup building a platform to discover cheaper clothing products, where I helped with system design, API creation, and backend engineering / deployment efforts
                                </li>
                                <li>
                                    I've built <a className="link" href="https://github.com/raydelvecchio/SwiftAI-v2" target="_blank" rel="noopener noreferrer">SwiftAIv2</a>, an LLM fine tuned to write new Taylor Swift songs (improved upon my original <a className="link" href="https://github.com/raydelvecchio/SwiftAI" target="_blank" rel="noopener noreferrer">v1</a>)
                                </li>
                                <li>
                                    At the <a className="link" href="https://tedai.devpost.com/" target="_blank" rel="noopener noreferrer">2023 TED AI Multimodal Hackathon</a>, my team and I built <a className="link" href="https://github.com/raydelvecchio/PitchPerfect" target="_blank" rel="noopener noreferrer">Crux</a>, an AI tool to iteratively improve presentations, giving feedback on posture, cadence, and content, then re-presenting it in a user's OWN voice
                                </li>
                                <li>
                                    I'm currently working on <a className="link" href="https://mockingbird.live" target="_blank" rel="noopener noreferrer">Mockingbird</a>, an ML tool to automatically DJ a party, generate song recommendations based on crowd feedback, and manage music queuing for establishments
                                </li>
                                <li>
                                    Through my time coding, I've completed a number of small projects as well, such as a remote controlled water gun (Arduino, Blynk, C++), a camera control virus (Kali Linux), variational autoencoder (VAE) for similar molecule generation (Python, Tensorflow), full GUI and playable pacman (Java, JavaFX), on-chain maximum extractable value (MEV) bots (Ethers.js, web3.js, Typescript, Solidity), and more
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

export default Tech;