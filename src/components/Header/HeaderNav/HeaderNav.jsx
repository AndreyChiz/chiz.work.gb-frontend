
import WrapperHeaderNav from "./WrapperHeaderNav"
import HeaderNavMenu from "./HeaderNavMenu"


export default function HeaderNav({ menuItems }) {

    return (
        <WrapperHeaderNav>
            <HeaderNavMenu menuItems={menuItems} />
        </WrapperHeaderNav>

    )
}