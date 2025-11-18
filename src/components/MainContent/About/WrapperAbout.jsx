export default function WrapperDefault({ children }) {
    return (

        <div className="site-section bg-dark" id="about-section">
            <div className="container">
                {children}
            </div>
        </div>

    )
}