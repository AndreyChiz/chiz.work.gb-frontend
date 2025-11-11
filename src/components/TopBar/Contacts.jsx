import {Fragment} from "react";

export function Contacts({ items, wrapperClass }) {
    return (
        <div className={wrapperClass}>
            {items.map((item, index) => (
                <Fragment key={index}>
                    <a href={item.href} className="text-white">
                        <span className={`mr-2 text-white ${item.icon}`}></span>
                        <span className="d-none d-md-inline-block">{item.label}</span>
                    </a>
                    {index < items.length - 1 && <span className="mx-md-2 d-inline-block"></span>}
                </Fragment>
            ))}
        </div>
    );
}
