export default function FooterAbout({ title, text }) {
    console.log(title)
    console.log(text)
    return (

        <div className="col-md-8">
            <h2 className="footer-heading mb-4">{title}</h2>
            <p>
                {text}
            </p>
        </div>
    )


}