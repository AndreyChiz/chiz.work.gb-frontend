import AchivesList from "./AchivesList";
import WrapperAchives from "./WrapperAchives";

export default function Achives({ achivesData }) {

    return (

        <WrapperAchives>
            <AchivesList achivesData={achivesData} />

        </WrapperAchives>
    )

}