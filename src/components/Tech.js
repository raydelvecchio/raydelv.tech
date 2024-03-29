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
                                    I'm founding engineer at <a className="link" href="https://cerebralvalley.ai" target="_blank" rel="noopener noreferrer">Cerebral Valley</a>, spending my time thinking about AI-powered search, RAG, and product.
                                </li>
                                <li>
                                    For ~2.6 years, I was an engineer at the family office Nima Capital, where I managed cloud infrastructure, automated trading strategies (quant-adjacent), built MEV bots, performed data analytics, AI engineering for VC workflow and equities analysis, sourced/diligenced founders, and wrote various internal tools for social media and alerting
                                </li>
                                <li>
                                    For a few months was as an engineering consultant for <a className="link" href="https://letsift.com" target="_blank" rel="noopener noreferrer">Sift</a>, where I helped with system design, API creation, and backend engineering / deployment efforts
                                </li>
                                <li>
                                    A favorite quick project of mine is <a className="link" href="https://github.com/raydelvecchio/SwiftAI-v2" target="_blank" rel="noopener noreferrer">SwiftAIv2</a>, an LLM fine tuned to write new Taylor Swift songs (improved upon my original <a className="link" href="https://github.com/raydelvecchio/SwiftAI" target="_blank" rel="noopener noreferrer">v1</a>)
                                </li>
                                <li>
                                    At the <a className="link" href="https://tedai.devpost.com/" target="_blank" rel="noopener noreferrer">2023 TED AI Multimodal Hackathon</a>, my team and I built <a className="link" href="https://github.com/raydelvecchio/PitchPerfect" target="_blank" rel="noopener noreferrer">Crux</a>, an AI tool to iteratively improve presentations, giving feedback on posture, cadence, and content, then re-presenting it in a user's OWN voice
                                </li>
                                <li>
                                    I built on the vector database VLite to make <a className="link" href="https://github.com/raydelvecchio/vlite-v2" target="_blank" rel="noopener noreferrer">VLite V2 (VLite2)</a>, implementing metadata retrieval, fine-grained chunking, and Weaviate's "autocut" feature to avoid selecting K by clustering similar data! This is currently the fastest available vector database, according to benchmarks <a className="link" href="https://github.com/raydelvecchio/vdb-benchmark" target="_blank" rel="noopener noreferrer">here</a>.
                                </li>
                                <li>
                                    Using Vlite2, I made <a className="link" href="https://github.com/raydelvecchio/gptcachelite" target="_blank" rel="noopener noreferrer">GPTCacheLite</a> in a night: a semantic caching system for natural language queries, saving 3x compute and LLM inference time for repeated semantically similar queries!
                                </li>
                                <li>
                                    Created AI-powered sqlite3 called <a className="link" href="https://github.com/raydelvecchio/aisqlite" target="_blank" rel="noopener noreferrer">AISQLite</a>. This wraps sqlite3 in python with AI features for query generation and retrieval via natural language.
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