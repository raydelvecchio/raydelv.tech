import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO from "../components/SEO";

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
                <li>Teaching assistant for Brown's <a className="underline text-link" href="https://cs.brown.edu/courses/info/csci1470/" target="_blank" rel="noopener noreferrer">Deep Learning</a> course (2 semesters).</li>
                <li>Teaching assistant for <i>Entrepreneurial Management in Adversity</i> (<a className="underline text-link" href="https://entrepreneurship.brown.edu/courses/" target="_blank" rel="noopener noreferrer">ENGN1931Q</a>) with Professor Howard Anderson (founder, Battery Ventures, Yankee Group).</li>
                <li>Taekwondo instructor (2017-2020), where I learned how to teach to different student's needs, adjust to learning styles, and clearly/concisely explain concepts.</li>
            </ul>
        </ContentContainer>
    );
}

export default Teaching;