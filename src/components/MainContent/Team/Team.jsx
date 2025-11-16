import { useContext } from "react";

import { UIContext } from "../../../UIContext";



import TeamDescription from "./TeamDescription"
import WrapperTeam from "./WrapperTeam"
import TeamList from "./TemList";

export default function Team() {
    const teamContent = useContext(UIContext).team


    return (
        <WrapperTeam>

            <TeamDescription description={teamContent.description}/>
            <TeamList employes={teamContent.employes}/>


        </WrapperTeam>
    )
}