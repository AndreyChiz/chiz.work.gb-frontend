import FAQList from "./FAQList"
import WrapperFAQ from "./WrapperFAQ"

export default function FAQ({faqContent}) {
    return (
        <WrapperFAQ title={faqContent.title}>
            <FAQList questions={faqContent.questions}/>
        </WrapperFAQ>
    )
}
