import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const links = [
        { label: 'Existing', url: '/about' },
        { label: 'Working', url: '/technology' },
        { label: 'Researching', url: '/research' },
        { label: 'Teaching', url: '/teach' },
        { label: 'Writing', url: '/write'},
        { label: 'Enjoying', url: '/fun' },
        { label: 'Contacting', url: '/contact' }
    ];

    const handleNavigation = (url) => {
        navigate(url);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Hey, I'm <span className="text-highlight">Ray</span>! Here are some things I do.
                </h1>
                <div className="flex flex-col items-center space-y-2">
                    {links.map((link, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleNavigation(link.url)}
                            className="text-black py-2 px-4 text-lg underline underline-offset-2 decoration-1 hover:text-highlight transition-colors duration-200 touch-manipulation"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default Home;
