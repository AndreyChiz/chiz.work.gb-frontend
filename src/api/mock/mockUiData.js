
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
                    {
                        label: "Services", href: "#services-section", children: [
                            { label: "Technologies", href: "#technologies-section" },] },
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
            home: {
                screens: [
                    {
                        id: "1",
                        imgPath: "images/hero_3.jpg",
                        title: "Modern tools <br />for<br /> modern projects",
                        text: "Using up-to-date technologies and tools for maximum solution efficiency",
                        button: {
                            title: "Get in touch",
                            href: "#"
                        }
                    },
                    {
                        id: "2",
                        imgPath: "images/hero_2.jpg",
                        title: "From init to deploy",
                        text: "Handle the full development cycle"
                    },
                    {
                        id: "3",
                        imgPath: "images/main.jpg",
                        title: "Always online",
                        text: "Ready to help you 24/7.",
                        button: {
                            title: "Get in touch",
                            href: "#"
                        }
                    }
                ]
            },

            services: {
                servicesItems: [
                    {
                        id: 1,
                        imgPath: "images/img_1.jpg",
                        title: "Land & Property",
                        reverse: false,
                        paragraphs: [
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id dignissimos...",
                            "Minus perspiciatis ullam itaque voluptas iure vero..."
                        ],
                        list: [
                            "Lorem ipsum dolor.",
                            "Quod, amet. Provident.",
                            "Quo, adipisci, quis.",
                            "Cumque perspiciatis, blanditiis?"
                        ]
                    },
                    {
                        id: 2,
                        imgPath: "images/img_2.jpg",
                        title: "Surface Mining",
                        reverse: true, // картинка справа
                        paragraphs: [
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
                            "Minus perspiciatis ullam itaque voluptas iure vero..."
                        ],
                        list: [
                            "Lorem ipsum dolor.",
                            "Quod, amet. Provident.",
                            "Quo, adipisci, quis.",
                            "Cumque perspiciatis, blanditiis?"
                        ]
                    },

                ]
            },
            technologies: {
                technologiesItems: [
                    {
                        "id": 1,
                        "icon": "flaticon-mining",
                        "title": "Surface Mining",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
                        "delay": ""
                    },
                    {
                        "id": 2,
                        "icon": "flaticon-gold-ingots",
                        "title": "Gold Nuggets",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
                        "delay": "100"
                    },
                    {
                        "id": 3,
                        "icon": "flaticon-wagon",
                        "title": "Soil Carrier",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
                        "delay": "200"
                    },
                    {
                        "id": 4,
                        "icon": "flaticon-refinery",
                        "title": "Gold Refinery",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
                        "delay": ""
                    },
                    {
                        "id": 5,
                        "icon": "flaticon-blacksmith",
                        "title": "Anvil Blacksmith",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
                        "delay": "100"
                    },
                    {
                        "id": 6,
                        "icon": "flaticon-crucible",
                        "title": "Gold Melt Crucible",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
                        "delay": "200"
                    }
                ]
            }
        },
    };
}
