import { Fragment } from "react"

function FeatureItem({href, text}) {
 
    return <li > <a href={href}>{text}</a></li >
}






export default function FooterFeaturesList({ title, items }) {

    return (

        <div className="col-md-4 ml-auto">
            <h2 className="footer-heading mb-4">{title}</h2>
            <ul className="list-unstyled">
                {items.map((item, index) => (
                    <Fragment key={index}>
                        <FeatureItem {...item} />
                    </Fragment>
                ))}
            </ul>
        </div>


    )



}