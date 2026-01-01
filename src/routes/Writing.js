import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO from "../components/SEO";
import Link from "../components/Link";

const articles = [
    { title: "How Do Transformers Work, Really? A intuitive explanation.", href: "https://medium.com/@raymond_del_vecchio/how-do-transformers-work-really-96fff8fe25c9" },
    { title: "High School Guide to Science Fair", href: "/CVHS_Guide_To_Science_Fair.pdf" },
];

const threads = [
    { title: "Exa's \"Twitter Wrapped\" Tech Stack", href: "https://x.com/raydelvecc/status/1872493328199217210" },
    { title: "VLite2 is the Fastest Vector Database", href: "https://x.com/raydelvecc/status/1755364584930861562" },
    { title: "Thread on NormalComputing's Baked-in RAG Alternative", href: "https://x.com/raydelvecc/status/1725317238495093094" },
    { title: "Key Points from October 30 AI Executive Order", href: "https://x.com/raydelvecc/status/1719544334435946758" },
    { title: "RL and Nvidia Eureka", href: "https://x.com/raydelvecc/status/1715496550024245318" },
    { title: "How Language Models Use Long Context Windows", href: "https://x.com/raydelvecc/status/1679968366377725953" },
    { title: "SEC Sues Coinbase Key Points", href: "https://x.com/raydelvecc/status/1666328599119663106" },
    { title: "AI Philosophy w/ Joanne Lim", href: "https://x.com/raydelvecc/status/1629547395359952897" },
];

function Writing() {
    return (
        <ContentContainer>
            <SEO 
                title="Writing"
                description="Ray Del Vecchio's writing - articles on transformers, AI threads, and technical explainers on X."
                path="/write"
            />
            <h1 className="text-center text-4xl font-bold mb-8">
                I write infrequently.
            </h1>
            <h2 className="text-2xl font-semibold mb-4">Writing</h2>
            <ul className="list-disc space-y-4 pl-6">
                {articles.map((a, i) => <li key={i}><Link href={a.href}>{a.title}</Link></li>)}
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Threads</h2>
            <ul className="list-disc space-y-4 pl-6 mb-8">
                {threads.map((t, i) => <li key={i}><Link href={t.href}>{t.title}</Link></li>)}
            </ul>
        </ContentContainer>
    );
}

export default Writing;
