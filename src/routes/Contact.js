import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO from "../components/SEO";

function Contact() {
    return (
        <ContentContainer>
            <SEO 
                title="Contact"
                description="Get in touch with Ray Del Vecchio - email, Telegram, LinkedIn, Github, and X."
                path="/contact"
            />
            <h1 className="text-center text-4xl font-bold mb-8">
                Get in touch.
            </h1>
            <div className="space-y-4 text-center">
                <p><a className="underline text-link" href="mailto:xraydelv@gmail.com">Personal Email</a></p>
                <p><a className="underline text-link" href="mailto:ray@cerebralvalley.ai">Work Email</a></p>
                <p><a className="underline text-link" href="https://web.telegram.org">Telegram</a></p>
                <p><a className="underline text-link" href="https://linkedin.com/in/raymond-del-vecchio" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a className="underline text-link" href="https://github.com/raydelvecchio" target="_blank" rel="noopener noreferrer">Github</a></p>
                <p><a className="underline text-link" href="https://x.com/raydelvecc" target="_blank" rel="noopener noreferrer">X</a></p>
            </div>
        </ContentContainer>
    );
}

export default Contact;