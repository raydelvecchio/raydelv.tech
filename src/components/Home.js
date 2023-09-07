import React from 'react';
import './Home.css';
import SocialLinks from "./SocialLinks";
import LinksList from "./LinksList";

function Home() {
    return (
        <div className="container">
            <div className="message">
                Hey, I'm Ray.
            </div>
            <LinksList />
            <SocialLinks />
        </div>
    );
}

export default Home;
