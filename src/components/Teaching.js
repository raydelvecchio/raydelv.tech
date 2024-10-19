import SocialLinks from "./SocialLinks";
import React from "react";

function Teaching() {
    return (
        <div>
            <div className="container">
                <div className="content-wrapper flex flex-col justify-center min-h-screen">
                    <h1 className="text-center text-4xl font-bold mb-6">
                        Sharing knowledge.
                    </h1>
                    <div className="mx-auto max-w-2xl">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Teaching assistant for Brown's <a className="underline text-link" href="https://cs.brown.edu/courses/info/csci1470/" target="_blank" rel="noopener noreferrer">Deep Learning</a> course (2 semesters).</li>
                            <li>Teaching assistant for <i>Entrepreneurial Management in Adversity</i> (<a className="underline text-link" href="https://entrepreneurship.brown.edu/courses/" target="_blank" rel="noopener noreferrer">ENGN1931Q</a>) with Professor Howard Anderson (founder, Battery Ventures, Yankee Group).</li>
                            <li>Taekwondo instructor (2017-2020), where I learned how to teach to different student's needs, adjust to learning styles, and clearly/concisely explain concepts.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default Teaching;