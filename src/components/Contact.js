import "./global.css"
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
                <div className="content-wrapper">
                    <div className="message">
                        I have a few ways to get in touch.
                    </div>
                    <div className="centered-list">
                        {links.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="item">
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