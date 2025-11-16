export default function PricingPlans({ plans }) {
    return (
        <div className="row mb-5">
            {plans.map(plan => (
                <div
                    key={plan.id}
                    className="col-md-6 mb-4 mb-lg-0 col-lg-4"
                    data-aos="fade-up"
                    data-aos-delay={plan.delay}
                >
                    <div className="pricing">
                        <h3 className="text-center text-black">{plan.title}</h3>

                        <div className="price text-center mb-4">
                            <span>
                                <span>${plan.price}</span> / {plan.period}
                            </span>
                        </div>

                        <ul className="list-unstyled ul-check success mb-5">
                            {plan.features.map((f, index) => (
                                <li key={index} className={!f.active ? "remove" : ""}>
                                    {f.text}
                                </li>
                            ))}
                        </ul>

                        <p className="text-center">
                            <a href="#" className={plan.buttonClass}>
                                Buy Now
                            </a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
