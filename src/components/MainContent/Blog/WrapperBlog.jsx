export default function WrapperBlog({ title, children }) {

    return (

        <div className="site-section" id="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                            <span>Latest Blog Posts</span>
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