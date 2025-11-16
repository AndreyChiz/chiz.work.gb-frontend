import { useContext } from "react";

import { UIContext } from "../../../UIContext";


import WrapperPress from "./WrapperPress"
import PressList from "./PressList";


export default function Press() {
    const pressContent = useContext(UIContext).press
    return (

        <WrapperPress title={pressContent.title}>
            <PressList items={pressContent.pressItems}/>
        </WrapperPress>
    )

}