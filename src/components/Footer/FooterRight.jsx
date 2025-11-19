import FooterNewsletter from "./FooterNewsletter";
import FooterSocial from "./FooterSocial";

export default function FooterRight() {
    return (
        <div className="col-md-4 ml-auto">
            <FooterNewsletter />
            <FooterSocial />
        </div>
    );
}
