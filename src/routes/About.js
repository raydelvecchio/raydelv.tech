import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO, { SITE_URL } from "../components/SEO";
import Link from "../components/Link";

const paragraphs = [
    <>Hello! I'm Ray Del Vecchio, 24 years old, originally from <Link href="https://en.wikipedia.org/wiki/Clifton,_Virginia">Clifton, VA</Link>. I studied computer science (with some applied math) at <Link href="https://brown.edu">Brown University</Link>. I've since dropped out, and now split my time between San Francisco and New York City.</>,
    <>While my background is software-heavy, I don't consider myself a computer scientist. I've explored finance, chemistry, and computer science both academically and professionally. Currently, I'm optimizing my life to maximize <i>experience</i>.</>,
    <>For more fun facts about me, check out the <Link href="/fun">Fun</Link> section.</>,
];

const pageSchema = {
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: 'About Ray Del Vecchio',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: { '@id': `${SITE_URL}/#person` },
};

function About() {
    return (
        <ContentContainer>
            <SEO 
                title="About"
                description="Learn about Ray Del Vecchio - 24-year-old software engineer from Clifton, VA. Brown University CS dropout, currently based in San Francisco and NYC."
                path="/about"
                type="profile"
                pageSchema={pageSchema}
            />
            <h1 className="text-center text-4xl font-bold mb-8">
                A little about me.
            </h1>
            {paragraphs.map((p, i) => <p key={i} className="mb-4">{p}</p>)}
        </ContentContainer>
    );
}

export default About;
