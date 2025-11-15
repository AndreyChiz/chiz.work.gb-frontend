

export default function WrapperTechnologies({ children }) {

    return (
        <div className="site-section bg-light" id="technologies-section" >
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )

}