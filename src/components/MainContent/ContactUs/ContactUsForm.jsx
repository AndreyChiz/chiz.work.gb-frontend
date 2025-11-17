import { useState } from "react";

export default function ContactUsForm({dialog}) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            const res = await fetch("https://your-fastapi-url.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Request failed");

            setSuccess(true);
            setForm({ firstName: "", lastName: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            alert("Ошибка при отправке.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay={100}>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col-md-6 mb-4 mb-lg-0">
                        <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First name"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Last name"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-12">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email address"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-12">
                        <textarea
                            name="message"
                            className="form-control"
                            placeholder="Write your message."
                            rows={10}
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {success && (
                    <p className="text-success mb-3">{dialog.saccessSend}</p>
                )}

                <div className="form-group row">
                    <div className="col-md-6 ml-auto">
                        <button
                            type="submit"
                            className="btn btn-block btn-primary text-white py-3 px-5"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
