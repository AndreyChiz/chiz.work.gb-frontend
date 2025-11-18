import { useContext } from "react";

import { UIContext } from "../../../UIContext";


import ContactUsForm from "./ContactUsForm";
import WrapperContectus from "./WrapperContactUs";
import ContactBlock from "./ContactBlock";

export default function ContactUs() {

    const contactUsItems = useContext(UIContext).contactUs


    return (


        <WrapperContectus title={contactUsItems.title}>
            <ContactUsForm dialog={contactUsItems.contactUsDialog} />
            <ContactBlock content={contactUsItems.contactUsBlockContent} />
        </WrapperContectus>
    )


}