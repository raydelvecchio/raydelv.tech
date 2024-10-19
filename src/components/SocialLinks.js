import React from 'react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => {
    return (
        <div className="social-container">
            <a href="https://www.linkedin.com/in/raymond-del-vecchio/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/raydelvecchio" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} />
            </a>
            <a href="https://x.com/raydelvecc" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={32} />
            </a>
        </div>
    );
}

export default SocialLinks;
