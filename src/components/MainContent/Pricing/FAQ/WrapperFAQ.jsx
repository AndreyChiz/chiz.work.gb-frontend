

export default function WrapperFAQ({title, children }) {

    return (
        <>
            <div className="row site-section" id="faq-section">
                <div className="col-12 text-center" data-aos="fade">
                    <h2 className="section-title text-primary">{title}</h2>
                </div>
            </div>
            <div className="row">
                {children}
            </div>
        </>
    )
}