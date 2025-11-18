export default function PressList({ items }) {
    return (
        <ul className="list-unstyled">
            {items.map(item => (
                <li
                    key={item.id}
                    className="mb-5"
                    data-aos="fade-right"
                    data-aos-delay={item.delay}
                >
                    <span className="d-block text-muted mb-3">{item.date}</span>

                    <h2 className="h4">
                        <a href={item.href} className="text-black">
                            {item.title}
                        </a>
                    </h2>

                    <p>{item.text}</p>
                </li>
            ))}
        </ul>
    );
}
