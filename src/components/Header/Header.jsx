import Logo from "./Logo"
import WrapperHeader from "./WrapperHeader"



export default function Header() {


    const LogoText = "ACV development"

    return (
        <WrapperHeader>
        <Logo text={LogoText}/>

        </WrapperHeader>
    )

}