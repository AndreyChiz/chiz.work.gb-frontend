export default function FooterNewsletter() {
    return (
        <div className="mb-5">
            <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
            <form className="footer-suscribe-form">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control border-secondary text-white bg-transparent"
                        placeholder="Enter Email"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary text-white" type="button">
                            Subscribe
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
