import { Contacts } from "./Contacts";
import WrapperTopBar from "./WrapperTopBar";
import { fetchUIData } from "../../api/mock/mockDataTopBar";

export default function TopBar() {
    const data = fetchUIData().ui.topBar;

    return (
        <WrapperTopBar>
            <Contacts items={data.common} wrapperClass="contacts" />
            <Contacts items={data.social} wrapperClass="socials" />
        </WrapperTopBar>
    );
}
