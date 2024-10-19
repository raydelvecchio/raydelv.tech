import SocialLinks from "./SocialLinks";
import React from "react";

function Contact() {
    const links = [
        { label: 'Personal Email', url: 'mailto:xraydelv@gmail.com' },
        { label: 'Work Email', url: 'mailto:ray@cerebralvalley.ai' },
        { label: 'Telegram (@rayd0x)', url: 'https://web.telegram.org' },
    ];

    return (
        <div>
            <div className="container">
                <div className="content-wrapper flex flex-col justify-center min-h-screen">
                    <h1 className="text-center text-4xl font-bold mb-6">
                        Get in touch.
                    </h1>
                    <p className="text-center mx-auto max-w-2xl mb-6">
                        I have a few ways to get in touch. Feel free to reach out through any of the following methods:
                    </p>
                    <div className="flex flex-col items-center">
                        {links.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="underline text-link mb-2">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default Contact;