import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO from "../components/SEO";

function Tech() {
    return (
        <ContentContainer>
            <SEO 
                title="Technology"
                description="Ray Del Vecchio's engineering work - Co-Founder at Cerebral Valley, founding engineer at Nima Capital, many personal projects."
                path="/technology"
            />
            <h1 className="text-center text-4xl font-bold mb-8">
                I've done some engineering.
            </h1>
            <ul className="list-disc space-y-4 pl-6">
                <li>I'm a Co-Founder of <a className="underline text-link" href="https://cerebralvalley.ai" target="_blank" rel="noopener noreferrer">Cerebral Valley</a>, where I focus on search, backend, scraping, and various engineering tasks, while also leading government/defense initiatives, organizing community events, and handling operational responsibilities. I originally joined as Founding Engineer, but proved quite valuable in many other aspects of the business, and was retroactively granted founding equity & title.</li>
                <li>For ~2.5 years, I was the first engineering hire on Nima Capital's liquid strategy team (at 19 yo), managing cloud infrastructure, automating trading strategies, building MEV bots, AI engineering for VC workflow and equities analysis, sourcing / diligencing founders, and writing various internal tools for social media and alerting.</li>
                <li><a className="underline text-link" href="https://github.com/raydelvecchio/lazytorch" target="_blank" rel="noopener noreferrer">LazyTorch</a>: basic PyTorch implemented sequentially (no parallelization) directly in vanilla Python. Complete with Autodiff, Tensors, Loss Functions, Activations, Layers, and full Network abstractions, ready to train on!</li>
                <li><a className="underline text-link" href="https://github.com/raghavpillai/eXpect" target="_blank" rel="noopener noreferrer">eXpect</a>: agentic simulation to predict sentiment and responses from your own X followers for any poll or post. 2nd place in the first <a className="underline text-link" href="https://x.ai" target="_blank" rel="noopener noreferrer">x.ai</a> hackathon, featured on their main account <a className="underline text-link" href="https://x.com/xai/status/1846989686549696900" target="_blank" rel="noopener noreferrer">here</a>.</li>
                <li><a className="underline text-link" href="https://github.com/raydelvecchio/SwiftAI-v2" target="_blank" rel="noopener noreferrer">SwiftAIv2</a>: an LM fine tuned to write new Taylor Swift songs (improved upon <a className="underline text-link" href="https://github.com/raydelvecchio/SwiftAI" target="_blank" rel="noopener noreferrer">v1</a>).</li>
                <li><a className="underline text-link" href="https://github.com/raydelvecchio/vlite-v2" target="_blank" rel="noopener noreferrer">VLite2</a>: implementing metadata retrieval, fine-grained chunking, and Weaviate's "autocut" feature to avoid selecting K by clustering similar data. This was at one point the fastest available local vector, database powered by <a className="underline text-link" href="https://github.com/unum-cloud/usearch" target="_blank" rel="noopener noreferrer">usearch</a>, according to benchmarks <a className="underline text-link" href="https://github.com/raydelvecchio/vdb-benchmark" target="_blank" rel="noopener noreferrer">here</a>.</li>
                <li><a className="underline text-link" href="https://github.com/raydelvecchio/gptcachelite" target="_blank" rel="noopener noreferrer">GPTCacheLite</a>: a semantic caching system for natural language queries, saving 3x compute and LLM inference time for repeated semantically similar queries.</li>
                <li><a className="underline text-link" href="https://github.com/cerebralvalley/compute-boilerplate" target="_blank" rel="noopener noreferrer">Instant LLM API</a>: boilerplate code to turn any VM into a suite of inference and fine tuning endpoints for any Huggingface LLM, fully compatible with the <a className="underline text-link" href="https://github.com/meta-llama/llama-stack" target="_blank" rel="noopener noreferrer">Llama stack</a>, in a few hundred lines of code.</li>
                <li><a className="underline text-link" href="https://github.com/raydelvecchio/figma-translator" target="_blank" rel="noopener noreferrer">Figma Translate</a>: tool to convert any Figma file into accurate, working, and well-documented React/Bootstrap code in a dedicated runtime and edit environment.</li>
                <li><a className="underline text-link" href="https://github.com/raydelvecchio/word-cmd-k" target="_blank" rel="noopener noreferrer">Word CMD+K</a>: added cursor-style command+k functionality into Microsoft Word.</li>
                <li><a className="underline text-link" href="https://mockingbird.live" target="_blank" rel="noopener noreferrer">Mockingbird</a>: an ML tool to automatically DJ a party, generate song recommendations entirely based on crowd feedback, and manage music queuing for establishments. This is my longest ongoing project. I'm trying to find more time to optimize and release this.</li>
            </ul>
        </ContentContainer>
    );
}

export default Tech;