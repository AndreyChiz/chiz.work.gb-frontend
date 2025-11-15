export default function ServiceList({ sections }) {
    return (
        <>
            {sections.map((item) => {
                const isReversed = item.reverse; // для order-lg-2 / order-lg-1

                return (
                    <div key={item.id} className="block__73694 mb-2">
                        <div className="container">
                            <div className="row d-flex no-gutters align-items-stretch">

                                {/* Картинка */}
                                <div
                                    className={`col-12 col-lg-6 block__73422 ${isReversed ? "order-lg-2" : ""
                                        }`}
                                    style={{ backgroundImage: `url("${item.imgPath}")` }}
                                    data-aos={isReversed ? "fade-left" : "fade-right"}
                                ></div>

                                {/* Контент */}
                                <div
                                    className={`col-lg-5 p-lg-5 mt-4 mt-lg-0 ${isReversed ? "mr-auto order-lg-1" : "ml-auto"
                                        }`}
                                    data-aos={isReversed ? "fade-right" : "fade-left"}
                                >
                                    <h2 className="mb-3 text-black">{item.title}</h2>

                                    {item.paragraphs?.map((text, index) => (
                                        <p key={index}>{text}</p>
                                    ))}

                                    {item.list && (
                                        <ul className="ul-check primary list-unstyled mt-5">
                                            {item.list.map((li, idx) => (
                                                <li key={idx}>{li}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
