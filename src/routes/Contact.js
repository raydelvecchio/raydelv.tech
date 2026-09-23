import React from "react";
import ContentContainer from "../components/ContentContainer";
import SEO, { SITE_URL } from "../components/SEO";
import Link from "../components/Link";

const links = [
    { label: "Telegram", href: "https://web.telegram.org" },
    { label: "LinkedIn", href: "https://linkedin.com/in/raymond-del-vecchio" },
    { label: "Github", href: "https://github.com/raydelvecchio" },
    { label: "X", href: "https://x.com/raydelvecc" },
];

const pageSchema = {
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: 'Contact Ray Del Vecchio',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    mainEntity: { '@id': `${SITE_URL}/#person` },
};

function Contact() {
    return (
        <ContentContainer>
            <SEO 
                title="Contact"
                description="Get in touch with Ray Del Vecchio - Telegram, LinkedIn, Github, and X."
                path="/contact"
                pageSchema={pageSchema}
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
