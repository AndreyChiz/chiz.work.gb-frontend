
export default function AchivesList({achivesData}) {
    return (
        <>
            {achivesData.map((item) => (
                <div
                    key={item.id}
                    className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                >
                    <div className="block-counter-1">
                        <span className="number">
                            <span data-number={item.number}>0</span>+
                        </span>
                        <span className="caption">{item.title}</span>
                    </div>
                </div>
            ))}
        </>
    );
}
