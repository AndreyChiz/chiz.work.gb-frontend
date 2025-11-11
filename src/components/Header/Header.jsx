import Logo from "./Logo"
import WrapperHeader from "./WrapperHeader"
import HeaderNav from "./HeaderNav/HeaderNav";



import { fetchUIData } from "../../api/mock/mockDataTopBar";


let data = fetchUIData().ui.header

export default function Header() {

    return (
        <WrapperHeader>
            <Logo text={data.LogoText} />
            <HeaderNav />

        </WrapperHeader>
    )

}