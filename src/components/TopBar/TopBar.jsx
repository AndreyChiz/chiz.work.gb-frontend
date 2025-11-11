import Contacts from './Contacts';


export default function TopBar() {


    const Common = [
        { icon: "icon-envelope-open-o", label: "andrey.chizhov.dev@gmail.com", href: "#" },
        { icon: "icon-phone", label: "+7 (960)-859-53-04", href: "#" },
    ];

    const Social = [
        { icon: "icon-twitter", label: "Twitter", href: "#" },
        { icon: "icon-instagram", label: "Instagram", href: "#" },
    ];


    return (
        <div className="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <Contacts items={Common} wrapperClass="contacts" />
                        <Contacts items={Social} wrapperClass="socials" />
                    </div>
                </div>
            </div>
        </div>
    );
}