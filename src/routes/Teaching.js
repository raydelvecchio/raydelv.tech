import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO from "../components/SEO";
import Link from "../components/Link";

const items = [
    <>Teaching assistant for Brown's <Link href="https://cs.brown.edu/courses/info/csci1470/">Deep Learning</Link> course (2 semesters).</>,
    <>Teaching assistant for <i>Entrepreneurial Management in Adversity</i> (<Link href="https://entrepreneurship.brown.edu/courses/">ENGN1931Q</Link>) with Professor Howard Anderson (founder, Battery Ventures, Yankee Group).</>,
    <>Taekwondo instructor (2017-2020), where I learned how to teach to different student's needs, adjust to learning styles, and clearly/concisely explain concepts.</>,
];

function Teaching() {
    return (
        <ContentContainer>
            <SEO 
                title="Teaching"
                description="Ray Del Vecchio's teaching experience - TA for Brown's Deep Learning course, Entrepreneurial Management, and Taekwondo instructor."
                path="/teach"
            />
            <h1 className="text-center text-4xl font-bold mb-8">
                Sharing knowledge.
            </h1>
            <ul className="list-disc space-y-4 pl-6">
                {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </ContentContainer>
    );
}

export default Teaching;
