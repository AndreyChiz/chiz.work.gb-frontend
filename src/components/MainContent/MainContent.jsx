import About from "./About/About"
import Home from "./Home/Home"
import Press from "./Press/Press"
import Pricing from "./Pricing/Pricing"
import Services from "./Services/Services"
import Team from "./Team/Team"
import Technologies from "./Technologies/Technologies"
import Testiomonials from "./Testiomonials/Testimonials"

export default function MainContent() {
    return (
        <>
            <Home />
            <Services />
            <Technologies />
            <About />
            <Team />
            <Pricing />
            <Press />
            <Testiomonials />
        </>
    )
}