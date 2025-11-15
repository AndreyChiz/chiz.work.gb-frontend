

export default function TechnologiesList({ technologiesItems }) {
    return (
        <>
            {
                technologiesItems.map(item => (
                    <div
                        key={item.id}
                        className="col-md-6 col-lg-4 mb-4"
                        data-aos="fade-up"
                        data-aos-delay={item.delay}
                    >
                        <div className="block__35630">
                            <div className="icon mb-3">
                                <span className={item.icon}></span>
                            </div>

                            <h3 className="mb-3">{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
