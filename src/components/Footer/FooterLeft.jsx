import FooterAbout from "./FooterAbout";
import FooterFeaturesList from "./FooterFeatures";

export default function FooterLeft({ footerItems }) {
    return (
        <div className="col-md-6">
            <div className="row">
                <FooterAbout {...footerItems.aboutUs} />
                <FooterFeaturesList {...footerItems.featuresList} />
            </div>
        </div>
    );
}
