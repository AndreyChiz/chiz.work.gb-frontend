import MobileMenuLayout from "./MobileMenuLayout"
import Spinner from "./Spinner"

export default function GlobalWrapper({ children }) {

    return (
        <>
            <div id="overlayer" />
            <Spinner />
            <div className="site-wrap" id="home-section">
                <MobileMenuLayout />
                {children}
            </div>

        </>
    )
}