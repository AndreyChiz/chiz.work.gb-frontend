
export default function WrapperHeader({ children }) {


    return (

        <header
            className="site-navbar js-sticky-header site-navbar-target"
            role="banner"
        >
            <div className="container">
                <div className="row align-items-center position-relative">
                    {children}
                </div>
            </div>
        </header>

    )

}