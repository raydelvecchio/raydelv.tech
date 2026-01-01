import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO from "../components/SEO";
import Link from "../components/Link";

const items = [
    <>I'm a Co-Founder of <Link href="https://cerebralvalley.ai">Cerebral Valley</Link>, where I focus on search, backend, scraping, and various engineering tasks, while also leading government/defense initiatives, organizing community events, and handling operational responsibilities. I originally joined as Founding Engineer, but proved quite valuable in many other aspects of the business, and was retroactively granted founding equity & title.</>,
    <>For ~2.5 years, I was the first engineering hire on Nima Capital's liquid strategy team (at 19 yo), managing cloud infrastructure, automating trading strategies, building MEV bots, AI engineering for VC workflow and equities analysis, sourcing / diligencing founders, and writing various internal tools for social media and alerting.</>,
    <><Link href="https://github.com/raydelvecchio/lazytorch">LazyTorch</Link>: basic PyTorch implemented sequentially (no parallelization) directly in vanilla Python. Complete with Autodiff, Tensors, Loss Functions, Activations, Layers, and full Network abstractions, ready to train on!</>,
    <><Link href="https://github.com/raghavpillai/eXpect">eXpect</Link>: agentic simulation to predict sentiment and responses from your own X followers for any poll or post. 2nd place in the first <Link href="https://x.ai">x.ai</Link> hackathon, featured on their main account <Link href="https://x.com/xai/status/1846989686549696900">here</Link>.</>,
    <><Link href="https://github.com/raydelvecchio/SwiftAI-v2">SwiftAIv2</Link>: an LM fine tuned to write new Taylor Swift songs (improved upon <Link href="https://github.com/raydelvecchio/SwiftAI">v1</Link>).</>,
    <><Link href="https://github.com/raydelvecchio/vlite-v2">VLite2</Link>: implementing metadata retrieval, fine-grained chunking, and Weaviate's "autocut" feature to avoid selecting K by clustering similar data. This was at one point the fastest available local vector, database powered by <Link href="https://github.com/unum-cloud/usearch">usearch</Link>, according to benchmarks <Link href="https://github.com/raydelvecchio/vdb-benchmark">here</Link>.</>,
    <><Link href="https://github.com/raydelvecchio/gptcachelite">GPTCacheLite</Link>: a semantic caching system for natural language queries, saving 3x compute and LLM inference time for repeated semantically similar queries.</>,
    <><Link href="https://github.com/cerebralvalley/compute-boilerplate">Instant LLM API</Link>: boilerplate code to turn any VM into a suite of inference and fine tuning endpoints for any Huggingface LLM, fully compatible with the <Link href="https://github.com/meta-llama/llama-stack">Llama stack</Link>, in a few hundred lines of code.</>,
    <><Link href="https://github.com/raydelvecchio/figma-translator">Figma Translate</Link>: tool to convert any Figma file into accurate, working, and well-documented React/Bootstrap code in a dedicated runtime and edit environment.</>,
    <><Link href="https://github.com/raydelvecchio/word-cmd-k">Word CMD+K</Link>: added cursor-style command+k functionality into Microsoft Word.</>,
    <><Link href="https://mockingbird.live">Mockingbird</Link>: an ML tool to automatically DJ a party, generate song recommendations entirely based on crowd feedback, and manage music queuing for establishments. This is my longest ongoing project. I'm trying to find more time to optimize and release this.</>,
];

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
                {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </ContentContainer>
    );
}

export default Tech;
