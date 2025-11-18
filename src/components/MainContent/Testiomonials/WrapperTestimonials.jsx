export default function WrapperTestimonials({ title, children }) {
    return (

        <div
            className="site-section bg-light block-13"
            id="testimonials-section"
            data-aos="fade"
        >
            <div className="container">
                <div className="text-center mb-5">
                    <div className="block-heading-1">
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className="owl-carousel nonloop-block-13">

                    {children}

                </div>
            </div>
        </div>

    )



}