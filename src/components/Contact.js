import SocialLinks from "./SocialLinks";
import React from "react";

function Contact() {
    return (
        <div className="min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-center text-4xl font-bold mb-8">
                        Get in touch.
                    </h1>
                    <div className="space-y-4 text-center">
                        <p>Personal Email: <a className="underline text-link" href="mailto:xraydelv@gmail.com">xraydelv@gmail.com</a></p>
                        <p>Work Email: <a className="underline text-link" href="mailto:ray@cerebralvalley.ai">ray@cerebralvalley.ai</a></p>
                        <p>Telegram: <a className="underline text-link" href="https://web.telegram.org">@rayd0x</a></p>
                    </div>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default Contact;