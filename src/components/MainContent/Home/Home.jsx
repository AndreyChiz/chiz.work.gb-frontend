export default function Home() {

    return (
        <div className="owl-carousel slide-one-item">
            <div
                className="site-section-cover overlay img-bg-section"
                style={{ backgroundImage: 'url("images/hero_3.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-12 col-lg-7">
                            <h1 data-aos="fade-up" data-aos-delay="">
                                Modern tools <br />for<br /> modern projects
                            </h1>
                            <p className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                Using up-to-date technologies and tools for maximum solution efficiency.                            </p>
                            <p data-aos="fade-up" data-aos-delay={200}>
                                <a href="#" className="btn btn-outline-white border-w-2 btn-md">
                                    Get in touch
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="site-section-cover overlay img-bg-section"
                style={{ backgroundImage: 'url("images/hero_2.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-12 col-lg-8">
                            <h1 data-aos="fade-up" data-aos-delay="">
                                From init to deploy
                            </h1>
                            <p className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                Handle the full development cycle
                            </p>
                            <p data-aos="fade-up" data-aos-delay={200}>
                                <a href="#" className="btn btn-outline-white border-w-2 btn-md">
                                    Get in touch
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="site-section-cover overlay img-bg-section"
                style={{ backgroundImage: 'url("images/hero_2.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-12 col-lg-8">
                            <h1 data-aos="fade-up" data-aos-delay="">
                                Always online
                            </h1>
                            <p className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                Ready to help you for 24/7.
                            </p>
                            <p data-aos="fade-up" data-aos-delay={200}>
                                <a href="#" className="btn btn-outline-white border-w-2 btn-md">
                                    Get in touch
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}