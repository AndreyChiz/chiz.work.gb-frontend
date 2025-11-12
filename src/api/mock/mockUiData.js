
export function fetchUIData() {
    return {
        ui: {
            contacts: {
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
                logoText: "AVC-development",

                navMenu: [
                    { label: "Home", href: "#home-section" },
                    { label: "Services", href: "#services-section" },
                    {
                        label: "About Us",
                        href: "#about-section",
                        children: [
                            { label: "Team", href: "#team-section" },
                            { label: "Pricing", href: "#pricing-section" },
                            { label: "FAQ", href: "#faq-section" },
                            {
                                label: "More Links",
                                href: "#",
                                children: [
                                    { label: "Menu One", href: "#" },
                                    { label: "Menu Two", href: "#" },
                                    { label: "Menu Three", href: "#" },
                                ],
                            },
                        ],
                    },
                    { label: "Press", href: "#press-section" },
                    { label: "Testimonials", href: "#testimonials-section" },
                    { label: "Blog", href: "#blog-section" },
                    { label: "Contact", href: "#contact-section" },
                ],
            },
        },
    };
}
