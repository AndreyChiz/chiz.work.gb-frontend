
export function fetchTopBarData() {
    return {
        ui: {
            "top-bar": {
                common: [
                    { icon: "icon-envelope-open-o", label: "andrey.chizhov.dev@gmail.com", href: "#" },
                    { icon: "icon-phone", label: "8 (960)-859-53-04", href: "#" },
                ],
                social: [
                    { icon: "icon-twitter", label: "Twitter", href: "#" },
                    { icon: "icon-instagram", label: "Instagram", href: "#" },
                ],
            },
            header: {
                nav: [
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "About Us", href: "/about" },
                    { label: "Press", href: "/press" },
                    { label: "Testimonials", href: "/testimonials" },
                    { label: "Blog", href: "/blog" },
                    { label: "Contact", href: "/contact" },
                ],
            },
        },
    };
}
