import "./global.css"
import SocialLinks from "./SocialLinks";
import React from "react";

function Research() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="message">
                        I've done some research before.
                    </div>
                    <div className="centered-list">
                        <div className="bullet-list-container">
                            <ul>
                                <li>
                                    I'm an <a className="link" href="https://www.societyforscience.org/isef/" target="_blank" rel="noopener noreferrer">ISEF</a> finalist; my <a className="link" href="https://abstracts.societyforscience.org/Home/FullAbstract?Category=Any%20Category&Finalist=del%20vecchio&AllAbstracts=True&FairCountry=Any%20Country&FairState=Any%20State&ProjectId=19661" target="_blank" rel="noopener noreferrer">project</a> was on using machine learning to identify potential biomarkers for <a className="link" href="https://www.cdc.gov/parasites/chagas/gen_info/detailed.html" target="_blank" rel="noopener noreferrer">Chagas Disease</a> in urine
                                </li>
                                <li>
                                    In GMU's <a className="link" href="https://capmm.science.gmu.edu/" target="_blank" rel="noopener noreferrer">Center for Applied Proteomics and Molecular Medicine</a>, I worked under professors Alessandra Luchini and Lance Liotta over 1.5 years. I completed projects in analyzing mass spectrometry results with statistical and machine learning methods to search for markers of Lung Cancer, Lyme Disease, Babesiosis, and Chagas Disease. Here, I learned wet lab and bioinformatic techniques, as well as the patience research process.
                                </li>
                                <li>
                                    I spent a semester completing an independent study in Professor <a className="link" href="https://chensun.me" target="_blank" rel="noopener noreferrer">Chen Sun</a>'s PALM lab, researching engineering methods in deep learning to detect object states
                                </li>
                                <li>
                                    For <a className="link" href="https://cs.brown.edu/courses/info/csci2952-n/" target="_blank" rel="noopener noreferrer">CS2952N</a>, other students and I completed a research project exploring a Shared Uniform Space (SUS) to allow generalist/multitask agents to complete tasks accurately without giving the model knowledge of input modality. You can find the report <a className="link" href="/SUS_Embedding.pdf" download>here</a>.
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

export default Research;