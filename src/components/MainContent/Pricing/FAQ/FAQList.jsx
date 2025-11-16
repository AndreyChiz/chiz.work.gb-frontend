export default function FAQList({ questions }) {
    const middle = Math.ceil(questions.length / 2);
    const left = questions.slice(0, middle);
    const right = questions.slice(middle);

    return (
        <>
            <div className="col-lg-6">
                {left.map(item => (
                    <div key={item.id} className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                        <h3 className="text-black h4 mb-4">{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>

            <div className="col-lg-6">
                {right.map(item => (
                    <div key={item.id} className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                        <h3 className="text-black h4 mb-4">{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
