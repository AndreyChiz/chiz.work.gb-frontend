import { useContext } from "react";
import { UIContext } from "../../UIContext.jsx";

import WrapperFooter from "./WrapperFooter";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import FooterBottom from "./FooterBottom";

export default function Footer() {
    const footerItems = useContext(UIContext).footer;

    return (
        <WrapperFooter>
            <div className="row">
                <FooterLeft footerItems={footerItems} />
                <FooterRight />
            </div>

            <FooterBottom />
        </WrapperFooter>
    );
}
