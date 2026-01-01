import React from 'react';

function ContentContainer({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center py-16 md:py-20">
            <div className="container mx-auto px-6 md:px-8">
                <div className={`max-w-4xl mx-auto`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ContentContainer;
