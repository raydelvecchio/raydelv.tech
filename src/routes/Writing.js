import React from "react";
import ContentContainer from "../components/ContentContainer";

function Writing() {
    return (
        <ContentContainer>
            <h1 className="text-center text-4xl font-bold mb-8">
                I write infrequently.
            </h1>
            <h2 className="text-2xl font-semibold mb-4">Writing</h2>
            <ul className="list-disc space-y-4 pl-6">
                <li><a className="underline text-link" href="https://medium.com/@raymond_del_vecchio/how-do-transformers-work-really-96fff8fe25c9" target="_blank" rel="noopener noreferrer">How Do Transformers Work, Really? A intuitive explanation.</a></li>
                <li><a className="underline text-link" href="/CVHS_Guide_To_Science_Fair.pdf" target="_blank" rel="noopener noreferrer">High School Guide to Science Fair</a></li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Threads</h2>
            <ul className="list-disc space-y-4 pl-6 mb-8">
                <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1755364584930861562" target="_blank" rel="noopener noreferrer">VLite2 is the Fastest Vector Database</a></li>
                <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1725317238495093094" target="_blank" rel="noopener noreferrer">Thread on NormalComputing's Baked-in RAG Alternative</a></li>
                <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1719544334435946758" target="_blank" rel="noopener noreferrer">Key Points from October 30 AI Executive Order</a></li>
                <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1715496550024245318" target="_blank" rel="noopener noreferrer">RL and Nvidia Eureka</a></li>
                <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1679968366377725953" target="_blank" rel="noopener noreferrer">How Language Models Use Long Context Windows</a></li>
                <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1666328599119663106" target="_blank" rel="noopener noreferrer">SEC Sues Coinbase Key Points</a></li>
                <li><a className="underline text-link" href="https://twitter.com/raydelvecc/status/1629547395359952897" target="_blank" rel="noopener noreferrer">AI Philosophy w/ Joanne Lim</a></li>
            </ul>
        </ContentContainer>
    );
}

export default Writing;