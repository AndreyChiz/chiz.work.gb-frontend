
export function fetchUIData() {
    return {
        ui: {
            contacts: {
                common: [
                    { icon: "icon-envelope-open-o", label: "andrey.chizhov.dev@gmail.com", href: "mailto:andrey.chizhov.dev@gmail.com" },
                    { icon: "icon-phone", label: "+7 (960)-859-53-04", href: "tel:+79608595304" },
                ],
                social: [
                    { icon: "icon-vk", label: "VK", href: "https://vk.com/chizhov_net" },
                    { icon: "icon-telegram", label: "Telegram", href: "https://t.me/iamChizhov" },
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
