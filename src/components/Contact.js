import "./title_with_list.css"
import SocialLinks from "./SocialLinks";
import React from "react";

function Contact() {
    const links = [
        { label: 'School Email', url: 'mailto:raymond_del_vecchio@brown.edu' },
        { label: 'Personal Email', url: 'mailto:xraydelv@gmail.com' },
        { label: 'Work Email', url: 'mailto:raymond@nimacap.com' },
        { label: 'Calendly', url: 'https://calendly.com/raydelvecchio/30min' },
        { label: 'Telegram (@rayd0x)', url: 'https://web.telegram.org' },
    ];

    return (
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
            <SocialLinks />
        </div>
    );
}

export default Contact;