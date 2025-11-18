import { useContext } from "react";

import { UIContext } from "../../../UIContext";


import WrapperTestimonials from "./WrapperTestimonials";
import TestimonialsList from "./TestimonialsList"

export default function Testiomonials() {
    const testimonialsContent = useContext(UIContext).testimonials

    return (

        <WrapperTestimonials title={testimonialsContent.title}>
            <TestimonialsList testimonialsItems={testimonialsContent.testimonialsItems} />




        </WrapperTestimonials>



    )


}