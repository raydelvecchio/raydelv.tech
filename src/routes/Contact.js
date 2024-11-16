import React from "react";
import ContentContainer from "../components/ContentContainer";

function Contact() {
    return (
        <ContentContainer>
            <h1 className="text-center text-4xl font-bold mb-8">
                Get in touch.
            </h1>
            <div className="space-y-4 text-center">
                <p>Personal Email: <a className="underline text-link" href="mailto:xraydelv@gmail.com">xraydelv@gmail.com</a></p>
                <p>Work Email: <a className="underline text-link" href="mailto:ray@cerebralvalley.ai">ray@cerebralvalley.ai</a></p>
                <p>Telegram: <a className="underline text-link" href="https://web.telegram.org">@rayd0x</a></p>
            </div>
        </ContentContainer>
    );
}

export default Contact;