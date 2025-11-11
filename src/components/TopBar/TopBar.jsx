import { Contacts } from "./Contacts";
import WrapperTopBar from "./WrapperTopBar";
import { fetchTopBarData } from "../../api/mock/mockDataTopBar";

export default function TopBar() {
    const data = fetchTopBarData().ui.topBar;

    return (
        <WrapperTopBar>
            <Contacts items={data.common} wrapperClass="contacts" />
            <Contacts items={data.social} wrapperClass="socials" />
        </WrapperTopBar>
    );
}
