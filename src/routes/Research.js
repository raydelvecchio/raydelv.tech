import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO from "../components/SEO";
import Link from "../components/Link";

const items = [
    <>I'm an <Link href="https://www.societyforscience.org/isef/">ISEF</Link> finalist; my <Link href="https://abstracts.societyforscience.org/Home/FullAbstract?Category=Any%20Category&Finalist=del%20vecchio&AllAbstracts=True&FairCountry=Any%20Country&FairState=Any%20State&ProjectId=19661">project</Link> was on using machine learning to identify potential biomarkers for <Link href="https://www.cdc.gov/parasites/chagas/gen_info/detailed.html">Chagas Disease</Link> in urine.</>,
    <>In GMU's <Link href="https://capmm.science.gmu.edu/">Center for Applied Proteomics and Molecular Medicine</Link>, I worked under professors Alessandra Luchini and Lance Liotta over 1.5 years. I completed projects in analyzing mass spectrometry results with statistical and machine learning methods to search for markers of Lung Cancer, Lyme Disease, Babesiosis, and Chagas Disease. Here, I learned wet lab and bioinformatic techniques, as well as the patience research process.</>,
    <>I spent a semester completing an independent study in Professor <Link href="https://chensun.me">Chen Sun</Link>'s PALM lab, working on engineering methods in deep learning to detect object state and localization.</>,
    <>For <Link href="https://cs.brown.edu/courses/info/csci2952-n/">CS2952N</Link>, my team and I completed a research project exploring a novel method for training generalist/multitask agents via a Shared Uniform Space (<Link href="https://www.github.com/raydelvecchio/SUS">SUS</Link>), allowing a model to complete tasks accurately without providing knowledge of input modality thus preventing the formation of sub-networks within the weight space. You can find the report <Link href="/SUS_Embedding.pdf">here</Link>.</>,
];

function Research() {
    return (
        <ContentContainer>
            <SEO 
                title="Research"
                description="Ray Del Vecchio's research experience - ISEF finalist, proteomics research at GMU, deep learning research at Brown University's PALM lab."
                path="/research"
            />
            <h1 className="text-center text-4xl font-bold mb-8">
                My research experience.
            </h1>
            <ul className="list-disc space-y-4 pl-6">
                {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </ContentContainer>
    );
}

export default Research;
