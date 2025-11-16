import About from "./About/About"
import Home from "./Home/Home"
import Services from "./Services/Services"
import Team from "./Team/Team"
import Technologies from "./Technologies/Technologies"

export default function MainContent(){
    return (
        <>
        <Home />
        <Services/>
        <Technologies/>
        <About/>
        <Team/>
        </>
    )
}