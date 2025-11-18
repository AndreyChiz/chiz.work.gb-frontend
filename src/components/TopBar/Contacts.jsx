import { Fragment } from "react";


function ContactItem({ label, icon, href }) {

    return (
        <a href={href} className="text-white">
            <span className={`mr-2 text-white ${icon}`}></span>
            <span className="d-none d-md-inline-block">{label}</span>
        </a>
    )

}

export function Contacts({ items, children }) {
    return (
        <>
            {items.map((item, index) => (
                <Fragment key={index}>
                    <ContactItem {...item} />
                    {index < items.length - 1 && <span className="mx-md-2 d-inline-block"></span>}
                </Fragment>
            ))}
        </>
    );
}
