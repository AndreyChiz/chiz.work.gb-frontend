import { useContext } from "react";
import { Contacts } from "./Contacts";
import WrapperTopBar from "./WrapperTopBar";
import { UIContext } from "../../UIContext.jsx";



export default function TopBar() {
    const contacts = useContext(UIContext).contacts
    return (
        <WrapperTopBar>
            <Contacts items={contacts.common} wrapperClass="contacts" />
            <Contacts items={contacts.social} wrapperClass="socials" />
        </WrapperTopBar>
    );
}
