export default function CoruselScreens({ screens }) {
    return (
        <>
            {screens.map((screen) => (
                <div
                    key={screen.id}
                    className="site-section-cover overlay img-bg-section"
                    style={{ backgroundImage: `url("${screen.imgPath}")` }}
                >
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-md-12 col-lg-8">
                                <h1
                                    data-aos="fade-up"
                                    dangerouslySetInnerHTML={{ __html: screen.title }}
                                />

                                {screen.text && (
                                    <p
                                        className="mb-5"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        {screen.text}
                                    </p>
                                )}

                                {screen.button && (
                                    <p data-aos="fade-up" data-aos-delay={200}>
                                        <a
                                            href={screen.button.href}
                                            className="btn btn-outline-white border-w-2 btn-md"
                                        >
                                            {screen.button.title}
                                        </a>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
