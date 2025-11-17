export default function BlogList({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className="col-md-6 col-lg-6"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    <div>
                        <a href={item.url} className="mb-4 d-block">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="img-fluid rounded"
                            />
                        </a>

                        <h2>
                            <a href={item.url}>{item.title}</a>
                        </h2>

                        <p className="text-muted mb-3 text-uppercase small">
                            <span className="mr-2">{item.date}</span>
                            By <a href={item.url} className="by">{item.author}</a>
                        </p>

                        <p>{item.text}</p>

                        <p>
                            <a href={item.url}>Read More</a>
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}
