import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ContentContainer from "../components/ContentContainer";

function Contact() {
    return (
        <ContentContainer>
            <h1 className="text-center text-4xl font-bold mb-8">
                Get in touch.
            </h1>
            <div className="space-y-4 text-center">
                <p>Personal Email: <a className="underline text-link" href="mailto:xraydelv@gmail.com">xraydelv@gmail.com</a></p>
                <p>Work Email: <a className="underline text-link" href="mailto:ray@cerebralvalley.ai">ray@cerebralvalley.ai</a></p>
                <p>Telegram: <a className="underline text-link" href="https://web.telegram.org">@rayd0x</a></p>
            </div>
            <div className="flex justify-center gap-6 mt-8">
                <a href="https://www.linkedin.com/in/raymond-del-vecchio/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-highlight transition-colors duration-200">
                    <FaLinkedin size={32} />
                </a>
                <a href="https://github.com/raydelvecchio" target="_blank" rel="noopener noreferrer" className="text-black hover:text-highlight transition-colors duration-200">
                    <FaGithub size={32} />
                </a>
                <a href="https://x.com/raydelvecc" target="_blank" rel="noopener noreferrer" className="text-black hover:text-highlight transition-colors duration-200">
                    <FaXTwitter size={32} />
                </a>
            </div>
        </ContentContainer>
    );
}

export default Contact;