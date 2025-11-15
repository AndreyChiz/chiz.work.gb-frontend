
import { useContext } from "react";

import { UIContext } from "../../../UIContext";

import TechnologiesList from "./TechnologiesList";
import WrapperTechnologies from "./WrapperTechnologies";





export default function Technologies() {

    const technologiesItems = useContext(UIContext).technologies.technologiesItems

    console.log(technologiesItems)
    return (<WrapperTechnologies>
        <TechnologiesList technologiesItems={technologiesItems} />
    </WrapperTechnologies>)

}
