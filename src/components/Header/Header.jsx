import Logo from "./Logo"
import WrapperHeader from "./WrapperHeader"



import { fetchTopBarData } from "../../api/mock/mockDataTopBar";


LogoText = fetchTopBarData().ui.header.LogoText

export default function Header() {

    return (
        <WrapperHeader>
        <Logo text={LogoText}/>
        </WrapperHeader>
    )

}