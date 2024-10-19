import React from "react";

function About() {
    return (
        <div className="min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-center text-4xl font-bold mb-8">
                        A little about me.
                    </h1>
                    <p className="mb-4">
                        Hello! I'm Ray Del Vecchio, 22 years old, originally from <a className="underline text-link" href="https://en.wikipedia.org/wiki/Clifton,_Virginia" target="_blank" rel="noopener noreferrer">Clifton, VA</a>, but have lived in various places due to a military upbringing. I studied computer science (with some applied math) at <a className="underline text-link" href="https://brown.edu" target="_blank" rel="noopener noreferrer">Brown University</a>. Currently, I'm on an indefinite gap from school, splitting my time between San Francisco and New York City.
                    </p>
                    <p className="mb-4">
                        My journey in tech started early - from tinkering with terminals and writing scripts in elementary school to building my first computer before high school. Now, I code for a living, enjoying the problem-solving, logical, and precise aspects of computation. I feel fortunate to pursue my interests professionally.
                    </p>
                    <p className="mb-4">
                        While my focus is primarily on CS, my interests are broad. I've explored finance, chemistry, and computer science both academically and professionally. Currently, I'm optimizing my life to maximize <i>experience</i>.
                    </p>
                    <p className="mb-4">
                        For more fun facts about me, check out the <a className="underline text-link" href="/fun">Fun</a> section. Welcome to my website!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;