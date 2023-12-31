import React from 'react';
import './Home.css';
import './global.css'
import SocialLinks from "./SocialLinks";

function Home() {
    const links = [
        { label: 'Existing', url: '/about' },
        { label: 'Coding', url: '/technology' },
        { label: 'Researching', url: '/research' },
        { label: 'Teaching', url: '/teach' },
        { label: 'Writing', url: '/write'},
        { label: 'Enjoying', url: '/fun' },
        { label: 'Contacting', url: '/contact' }
    ];

    return (
        <div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="message">
                        Hey, I'm <span className="highlight">Ray</span>! Here are some things I do.
                    </div>
                    <div className="centered-list">
                        {links.map((link, index) => (
                            <a key={index} href={link.url} className="item">
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

export default Home;
