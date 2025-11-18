export default function WrapperContectus({title, children }) {

    return (

        <div className="site-section bg-light" id="contact-section">
            <div className="container">
                <div className="row">
                    <div
                        className="col-12 text-center mb-5"
                        data-aos="fade-up"
                        data-aos-delay=""
                    >
                        <div className="block-heading-1">
                            <span>Get In Touch</span>
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {children}
                </div>
            </div>
        </div>



    )

}