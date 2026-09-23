import React from 'react';

const Link = ({ href, children }) => (
    <a 
        className="underline text-link" 
        href={href} 
        target={href.startsWith('/') ? undefined : '_blank'} 
        rel={href.startsWith('/') ? undefined : 'noopener noreferrer'}
    >
        {children}
    </a>
);

export default Link;
