import React from 'react';

function ContentContainer({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4 my-8 md:my-0">
                <div className={`max-w-4xl mx-auto`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ContentContainer;
