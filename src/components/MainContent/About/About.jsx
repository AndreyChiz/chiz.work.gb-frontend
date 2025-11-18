import { useContext } from "react";

import { UIContext } from "../../../UIContext";


import WrapperDefault from "./WrapperAbout"
import VideoFrame from "./VideoFrame"
import Achives from "./Achives/Achives"

export default function About() {
    const aboutContent = useContext(UIContext).about
    return (

        <WrapperDefault>
            <VideoFrame videoFrame={aboutContent.videoFarme} />
            <Achives achivesData={aboutContent.achivesData}/>        
        </WrapperDefault>

    )
}