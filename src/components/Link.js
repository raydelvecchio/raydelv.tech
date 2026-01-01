import React from 'react';

const Link = ({ href, children }) => (
    <a 
        className="underline text-link" 
        href={href} 
        target={href.startsWith('/') || href.startsWith('mailto:') ? undefined : '_blank'} 
        rel={href.startsWith('/') || href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
    >
        {children}
    </a>
);

export default Link;
