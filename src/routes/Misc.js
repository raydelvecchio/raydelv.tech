import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO from "../components/SEO";
import Link from "../components/Link";

const items = [
    <>I hold a second degree black belt in ITF Taekwondo and was technically once 3rd in the world for <Link href="https://centurymartialarts.com/collections/bo-staff">Bo Staff</Link> performance</>,
    <>I greatly enjoy lifting, surfing (when I can), bouldering, and hiking, although I'm not very good at any of these activities</>,
    <>I was ranked nationally in the NCFL PF debate circuit</>,
    <>I originally got into into college as a chem major, and took two college semesters of organic chemistry in high school. Most of my life I wanted to be a doctor, inspired by the many foot and knee surgeries I had growing up. I don't have half of my left ankle due to club foot, and I have no feeling in my entire right knee.</>,
    <>For the summer of 2022, I lived at <Link href="https://www.businessinsider.com/facebook-house-inside-palo-alto-home-mark-zuckerberg-la-jennifer-2017-12">819 La Jennifer Way</Link> with a bunch of GSB students</>,
    <>In 2020, I co-founded a startup <Link href="https://hyphora.org">Hyphora</Link> in EdTech, where I learned marketing / product</>,
    <>I'm a big fan of spending time on farms, starting with a month on a dairy farm in Southern Virginia in 2018, and most recently a couple of weeks on a donkey refuge in Arizona</>,
    <>I'm an amateur tech house DJ – did my first party at Harvard in September '23, and have since played the NeurIPS Huggingface afterparty, Apple Vision Pro launch party (covered by the SF Standard <Link href="https://sfstandard.com/2024/02/24/san-francisco-vision-pro-parties-trend/">here</Link>), and <Link href="https://twitter.com/cerebral_valley/status/1778187849248153705">YC demo day afterparties</Link> for each batch since W24! I have a few recorded sets, which you can check out <Link href="https://www.youtube.com/watch?v=gs7_UdRvuqY">here</Link>.</>,
];

function Misc() {
    return (
        <ContentContainer>
            <SEO 
                title="Fun Facts"
                description="Fun facts about Ray Del Vecchio - black belt in Taekwondo, amateur DJ, debate champion, and more personal interests."
                path="/fun"
            />
            <h1 className="text-center text-4xl font-bold mb-8">
                Get to know me with these facts.
            </h1>
            <ul className="list-disc space-y-4 pl-6">
                {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </ContentContainer>
    );
}

export default Misc;
