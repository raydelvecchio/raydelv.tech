import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO from "../components/SEO";
import Link from "../components/Link";

const links = [
    { label: "Personal Email", href: "mailto:xraydelv@gmail.com" },
    { label: "Work Email", href: "mailto:ray@cerebralvalley.ai" },
    { label: "Telegram", href: "https://web.telegram.org" },
    { label: "LinkedIn", href: "https://linkedin.com/in/raymond-del-vecchio" },
    { label: "Github", href: "https://github.com/raydelvecchio" },
    { label: "X", href: "https://x.com/raydelvecc" },
];

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
                {links.map((l, i) => <p key={i}><Link href={l.href}>{l.label}</Link></p>)}
            </div>
        </ContentContainer>
    );
}

export default Contact;
