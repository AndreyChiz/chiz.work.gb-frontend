import { useContext } from "react";

import { UIContext } from "../../../UIContext";


import ServiceList from "./ServiceList"
import WrapperServices from "./WrapperServicesSection"

export default function Services(){
    const servicesSections = useContext(UIContext).services.servicesItems

    return (

        <WrapperServices>
            <ServiceList sections={servicesSections}/>
    </WrapperServices >
    )


    
}