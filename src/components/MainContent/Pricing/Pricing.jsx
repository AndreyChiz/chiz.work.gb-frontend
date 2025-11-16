import { useContext } from "react";

import { UIContext } from "../../../UIContext";


import PricingDescription from "./PricingDescription"
import WrapperPricing from "./WrapperPricing"
import PricingPlans from "./PricingPlans";
import FAQ from "./FAQ/FAQ";

export default function Pricing() {
    const pricingContent = useContext(UIContext).pricing

    return (

        <WrapperPricing >
            <PricingDescription description={pricingContent.description} />
            <PricingPlans plans={pricingContent.plans} />
            <FAQ faqContent={pricingContent.faq} />
        </WrapperPricing>


    )
}