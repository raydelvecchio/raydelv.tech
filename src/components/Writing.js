import SocialLinks from "./SocialLinks";
import React from "react";

function Writing() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper flex flex-col justify-center min-h-screen">
                    <h1 className="text-center text-4xl font-bold mb-6">
                        My writing on tech.
                    </h1>
                    <div className="mx-auto max-w-2xl">
                        <ul className="list-disc pl-5 space-y-2">
                            <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1755364584930861562" target="_blank" rel="noopener noreferrer">VLite2 is the Fastest Vector Database</a></li>
                            <li><a className="underline text-link" href="https://medium.com/@raymond_del_vecchio/how-do-transformers-work-really-96fff8fe25c9" target="_blank" rel="noopener noreferrer">How Do Transformers Work, Really? A intuitive explanation.</a></li>
                            <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1725317238495093094" target="_blank" rel="noopener noreferrer">Thread on NormalComputing's Baked-in RAG Alternative</a></li>
                            <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1719544334435946758" target="_blank" rel="noopener noreferrer">Key Points from October 30 AI Executive Order</a></li>
                            <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1715496550024245318" target="_blank" rel="noopener noreferrer">RL and Nvidia Eureka</a></li>
                            <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1679968366377725953" target="_blank" rel="noopener noreferrer">How Language Models Use Long Context Windows</a></li>
                            <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1666328599119663106" target="_blank" rel="noopener noreferrer">SEC Sues Coinbase Key Points</a></li>
                            <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1629547395359952897" target="_blank" rel="noopener noreferrer">AI Philosophy w/ Joanne Lim</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default Writing;