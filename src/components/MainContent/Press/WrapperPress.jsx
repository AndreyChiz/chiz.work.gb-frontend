export default function WrapperPress({ title, children }) {


    return (

        <div className="site-section" id="press-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div
                            className="block-heading-1"
                            data-aos="fade-right"
                            data-aos-delay=""
                        >
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>






    )



}