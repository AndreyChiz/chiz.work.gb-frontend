import React from "react";

export default function ContactBlock({ content }) {
    return (
        <div className="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay={200}>
            <h2 className="text-black">{content.title}</h2>

            <p>{content.text}</p>

            <p>
                <a href={content.button.href} className="btn btn-primary text-white">
                    {content.button.label}
                </a>
            </p>
        </div>
    );
}
