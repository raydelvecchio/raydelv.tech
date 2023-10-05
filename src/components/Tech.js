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
                                    I work at the family office Nima Capital, where I manage cloud infrastructure, automate trading strategies, perform data analytics, write internal tools for equities analysis, social media, and alerting, AI engineering, and quantitative development
                                </li>
                                <li>
                                    My favorite personal project was <a className="link" href="https://github.com/raydelvecchio/SwiftAI-v2" target="_blank" rel="noopener noreferrer">SwiftAIv2</a> (Python, Huggingface, PyTorch), an LLM fine tuned to write new Taylor Swift songs (improved upon my original <a className="link" href="https://github.com/raydelvecchio/SwiftAI" target="_blank" rel="noopener noreferrer">v1</a>)
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