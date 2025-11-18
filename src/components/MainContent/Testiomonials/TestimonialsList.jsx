export default function TestimonialsList({ testimonialsItems }) {
    return (
        <>
            {testimonialsItems.map((item, index) => {
                const textAfterImage = index % 2 === 1;
                return (
                    <div key={index}>
                        <div className="block-testimony-1 text-center">
                            {!textAfterImage && (
                                <blockquote className="mb-4">
                                    <p>{item.text}</p>
                                </blockquote>
                            )}

                            <figure>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="img-fluid rounded-circle mx-auto"
                                />
                            </figure>

                            <h3 className="font-size-20 text-black">{item.name}</h3>

                            {textAfterImage && (
                                <blockquote className="mb-4">
                                    <p>{item.text}</p>
                                </blockquote>
                            )}
                        </div>
                    </div>
                );
            })}
        </>
    );
}
