import { useContext } from "react";

import { UIContext } from "../../../UIContext";

import CoruselScreens from "./CoruselScreens"
import WrapperHome from "./WrapperHome"


export default function Home() {
    const homeItems = useContext(UIContext).home
    return (
        <WrapperHome>
            <CoruselScreens screens={homeItems.screens} />;
        </WrapperHome>
    )
}