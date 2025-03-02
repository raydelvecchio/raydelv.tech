import React from "react";
import ContentContainer from "../components/ContentContainer";

function Misc() {
    return (
        <ContentContainer>
            <h1 className="text-center text-4xl font-bold mb-8">
                Get to know me with these facts.
            </h1>
            <ul className="list-disc space-y-4 pl-6">
                <li>I hold a second degree black belt in ITF Taekwondo and was technically once 3rd in the world for <a className="underline text-link" href="https://centurymartialarts.com/collections/bo-staff" target="_blank" rel="noopener noreferrer">Bo Staff</a> performance</li>
                <li>I greatly enjoy lifting, surfing (when I can), bouldering, and hiking, although I'm not very good at any of these activities</li>
                <li>I was ranked nationally in the NCFL PF debate circuit</li>
                <li>Most of my life I wanted to be a doctor, got into university as a chem major, and took two college semesters of organic chemistry in high school</li>
                <li>For the summer of 2022, I lived at <a className="underline text-link" href="https://www.businessinsider.com/facebook-house-inside-palo-alto-home-mark-zuckerberg-la-jennifer-2017-12" target="_blank" rel="noopener noreferrer">819 La Jennifer Way</a> with a bunch of GSB students</li>
                <li>In 2020, I co-founded a startup <a className="underline text-link" href="https://hyphora.org" target="_blank" rel="noopener noreferrer">Hyphora</a> in EdTech, where I learned marketing / product</li>
                <li>I'm a big fan of spending time on farms, starting with a month on a dairy farm in Southern Virginia in 2018, and most recently a couple of weeks on a donkey refuge in Arizona</li>
                <li>I'm an amateur tech house DJ - did my first party at Harvard in September '23, and have since played the NeurIPS Huggingface afterparty, as well as Cerebral Valley's e/acc holiday party, Apple Vision Pro launch party (covered by the SF Standard <a className="underline text-link" href="https://sfstandard.com/2024/02/24/san-francisco-vision-pro-parties-trend/">here</a>), and <a className="underline text-link" href="https://twitter.com/cerebral_valley/status/1778187849248153705">YC demo day afterparties</a> for each batch since W24!</li>
            </ul>
        </ContentContainer>
    );
}

export default Misc;