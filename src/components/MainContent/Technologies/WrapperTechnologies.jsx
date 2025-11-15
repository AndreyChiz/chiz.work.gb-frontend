

export default function WrapperTechnologies({ children }) {

    return (
        <div className="site-section bg-light">
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )

}