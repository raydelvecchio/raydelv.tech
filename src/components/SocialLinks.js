import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'

const SocialLinks = () => {
    return (
        <div className="flex gap-5 fixed bottom-4 left-4">
            <a href="https://www.linkedin.com/in/raymond-del-vecchio/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-darkred transition-colors duration-200">
                <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/raydelvecchio" target="_blank" rel="noopener noreferrer" className="text-black hover:text-darkred transition-colors duration-200">
                <FaGithub size={32} />
            </a>
            <a href="https://x.com/raydelvecc" target="_blank" rel="noopener noreferrer" className="text-black hover:text-darkred transition-colors duration-200">
                <FaXTwitter size={32} />
            </a>
        </div>
    );
}

export default SocialLinks;
