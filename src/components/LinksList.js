import React from 'react';

function LinksList() {
    const links = [
        { label: 'Exist', url: '/about' },
        { label: 'Code', url: '/technology' },
        { label: 'Research', url: '/research' },
        { label: 'Invest', url: '/investing' },
        { label: 'Miscellaneous', url: '/fun' },
        { label: 'Contact', url: '/contact' }
    ];

    return (
        <div>
            <p>
                Some things I do:
            </p>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default LinksList;