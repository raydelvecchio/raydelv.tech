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
                                    I'm founding engineer at <a className="link" href="https://cerebralvalley.ai" target="_blank" rel="noopener noreferrer">Cerebral Valley</a>.
                                </li>
                                <li>
                                    For ~2.6 years, I was an engineer at the family office Nima Capital, where I managed cloud infrastructure, automated quantitative trading strategies, built MEV bots, performed data analytics, AI engineering for VC workflow and equities analysis, and wrote various internal tools for social media and alerting
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
                                    In open source, I built on the vector database VLite to make <a className="link" href="https://github.com/raydelvecchio/vlite-v2" target="_blank" rel="noopener noreferrer">VLite V2</a>, implementing metadata retrieval, fine-grained chunking, and Weaviate's "autocut" feature to avoid selecting K by clustering similar data!
                                </li>
                                <li>
                                    A (long) ongoing project I'm working on <a className="link" href="https://mockingbird.live" target="_blank" rel="noopener noreferrer">Mockingbird</a>, an ML tool to automatically DJ a party, generate song recommendations based on crowd feedback, and manage music queuing for establishments. Prototype/MVP already complete!
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