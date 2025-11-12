import { useContext } from "react";

import { UIContext } from "../../UIContext.jsx";

import Logo from "./Logo"
import WrapperHeader from "./WrapperHeader"
import HeaderNav from "./HeaderNav/HeaderNav";




export default function Header() {
    const headerItems = useContext(UIContext).header
    return (
        <WrapperHeader>
            <Logo text={headerItems.logoText} />
            <HeaderNav menuItems={headerItems.navMenu}/>
        </WrapperHeader>
    )

}