import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Home() {
    const links = [
        { label: 'Existing', url: '/about' },
        { label: 'Working', url: '/technology' },
        { label: 'Researching', url: '/research' },
        { label: 'Teaching', url: '/teach' },
        { label: 'Writing', url: '/write'},
        { label: 'Enjoying', url: '/fun' },
        { label: 'Contacting', url: '/contact' }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <SEO 
                description="Ray Del Vecchio - 24-year-old software engineer and co-founder at Cerebral Valley. Experienced in AI, full-stack development, and research. Based in SF/NYC."
                path="/"
                type="profile"
            />
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Hey, I'm <span className="text-highlight">Ray</span>! Here are some things I do.
                </h1>
                <nav aria-label="Site sections" className="flex flex-col items-center space-y-2">
                    {links.map((link, index) => (
                        <Link 
                            key={index} 
                            to={link.url}
                            className="text-black py-2 px-4 text-lg underline underline-offset-2 decoration-1 hover:text-highlight transition-colors duration-200 touch-manipulation"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default Home;
