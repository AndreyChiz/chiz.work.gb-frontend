export function fetchUIData() {
    return {
        ui: {
            contacts: {
                common: [
                    {
                        icon: 'icon-envelope-open-o',
                        label: 'andrey.chizhov.dev@gmail.com',
                        href: 'mailto:andrey.chizhov.dev@gmail.com',
                    },
                    {
                        icon: 'icon-phone',
                        label: '+7 (960)-859-53-04',
                        href: 'tel:+79608595304',
                    },
                ],
                social: [
                    {
                        icon: 'icon-vk',
                        label: 'VK',
                        href: 'https://vk.com/chizhov_net',
                    },
                    {
                        icon: 'icon-telegram',
                        label: 'Telegram',
                        href: 'https://t.me/iamChizhov',
                    },
                ],
            },
            header: {
                logoText: 'AVC-development',

                navMenu: [
                    { label: 'Home', href: '#home-section' },
                    {
                        label: 'Services',
                        href: '#services-section',
                        children: [
                            {
                                label: 'Technologies',
                                href: '#technologies-section',
                            },
                        ],
                    },
                    {
                        label: 'About Us',
                        href: '#about-section',
                        children: [
                            { label: 'Team', href: '#team-section' },
                            { label: 'Pricing', href: '#pricing-section' },
                            { label: 'FAQ', href: '#faq-section' },
                            {
                                label: 'More Links',
                                href: '#',
                                children: [
                                    { label: 'Menu One', href: '#' },
                                    { label: 'Menu Two', href: '#' },
                                    { label: 'Menu Three', href: '#' },
                                ],
                            },
                        ],
                    },
                    { label: 'Press', href: '#press-section' },
                    { label: 'Testimonials', href: '#testimonials-section' },
                    { label: 'Blog', href: '#blog-section' },
                    { label: 'Contact', href: '#contact-section' },
                ],
            },
            home: {
                screens: [
                    {
                        id: '1',
                        imgPath: 'images/hero_3.jpg',
                        title: 'Modern tools <br />for<br /> modern projects',
                        text: 'Using up-to-date technologies and tools for maximum solution efficiency',
                        button: {
                            title: 'Get in touch',
                            href: '#',
                        },
                    },
                    {
                        id: '2',
                        imgPath: 'images/hero_2.jpg',
                        title: 'From init to deploy',
                        text: 'Handle the full development cycle',
                    },
                    {
                        id: '3',
                        imgPath: 'images/main.jpg',
                        title: 'Always online',
                        text: 'Ready to help you 24/7.',
                        button: {
                            title: 'Get in touch',
                            href: '#',
                        },
                    },
                ],
            },

            services: {
                servicesItems: [
                    {
                        id: 1,
                        imgPath: 'images/img_1.jpg',
                        title: 'Land & Property',
                        reverse: false,
                        paragraphs: [
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id dignissimos...',
                            'Minus perspiciatis ullam itaque voluptas iure vero...',
                        ],
                        list: [
                            'Lorem ipsum dolor.',
                            'Quod, amet. Provident.',
                            'Quo, adipisci, quis.',
                            'Cumque perspiciatis, blanditiis?',
                        ],
                    },
                    {
                        id: 2,
                        imgPath: 'images/img_2.jpg',
                        title: 'Surface Mining',
                        reverse: true, // картинка справа
                        paragraphs: [
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
                            'Minus perspiciatis ullam itaque voluptas iure vero...',
                        ],
                        list: [
                            'Lorem ipsum dolor.',
                            'Quod, amet. Provident.',
                            'Quo, adipisci, quis.',
                            'Cumque perspiciatis, blanditiis?',
                        ],
                    },
                ],
            },
            technologies: {
                technologiesItems: [
                    {
                        id: 1,
                        icon: 'flaticon-mining',
                        title: 'Surface Mining',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.',
                        delay: '',
                    },
                    {
                        id: 2,
                        icon: 'flaticon-gold-ingots',
                        title: 'Gold Nuggets',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.',
                        delay: '100',
                    },
                    {
                        id: 3,
                        icon: 'flaticon-wagon',
                        title: 'Soil Carrier',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.',
                        delay: '200',
                    },
                    {
                        id: 4,
                        icon: 'flaticon-refinery',
                        title: 'Gold Refinery',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.',
                        delay: '',
                    },
                    {
                        id: 5,
                        icon: 'flaticon-blacksmith',
                        title: 'Anvil Blacksmith',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.',
                        delay: '100',
                    },
                    {
                        id: 6,
                        icon: 'flaticon-crucible',
                        title: 'Gold Melt Crucible',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.',
                        delay: '200',
                    },
                ],
            },
            about: {
                videoFarme: {
                    img: 'images/hero_1.jpg',
                    videoUrl: 'https://vimeo.com/45830194',
                    ratio: 2,
                    alt: 'Hero Video',
                },
                achivesData: [
                    { id: 1, title: 'Projects', number: 8, delay: 0 },
                    {
                        id: 2,
                        title: 'Expert Engineers',
                        number: 300,
                        delay: 100,
                    },
                    {
                        id: 3,
                        title: 'Number of Employees',
                        number: 2000,
                        delay: 200,
                    },
                    {
                        id: 4,
                        title: 'Number of Golds',
                        number: 1500,
                        delay: 300,
                    },
                ],
            },
            team: {
                description: {
                    title: 'The best team',
                    text: "We dsvkmla;v askmasv lkvmaslkva avd'klmasvlkva asvklmsadlk asv'msa sdl'avlkm",
                },
                employes: [
                    {
                        id: 1,
                        name: 'Jean Smith',
                        role: 'Mining Expert',
                        img: 'images/person_1.jpg',
                        delay: 0,
                        socials: {
                            facebook: '#',
                            twitter: '#',
                            instagram: '#',
                        },
                    },
                    {
                        id: 2,
                        name: 'Bob Carry',
                        role: 'Project Manager',
                        img: 'images/person_2.jpg',
                        delay: 100,
                        socials: {
                            facebook: '#',
                            twitter: '#',
                            instagram: '#',
                        },
                    },
                    {
                        id: 3,
                        name: 'Ricky Fisher',
                        role: 'Engineer',
                        img: 'images/person_1.jpg',
                        delay: 200,
                        socials: {
                            facebook: '#',
                            twitter: '#',
                            instagram: '#',
                        },
                    },
                    {
                        id: 4,
                        name: 'Jean Smith',
                        role: 'Mining Expert',
                        img: 'images/person_2.jpg',
                        delay: 0,
                        socials: {
                            facebook: '#',
                            twitter: '#',
                            instagram: '#',
                        },
                    },
                    {
                        id: 5,
                        name: 'Bob Carry',
                        role: 'Project Manager',
                        img: 'images/person_1.jpg',
                        delay: 100,
                        socials: {
                            facebook: '#',
                            twitter: '#',
                            instagram: '#',
                        },
                    },
                    {
                        id: 6,
                        name: 'Ricky Fisher',
                        role: 'Engineer',
                        img: 'images/person_2.jpg',
                        delay: 200,
                        socials: {
                            facebook: '#',
                            twitter: '#',
                            instagram: '#',
                        },
                    },
                ],
            },
            pricing: {
                description: {
                    title: 'The best ricing',
                    text: "We dsvkmla;v askmasv lkvmaslkva avd'klmasvlkva asvklmsadlk asv'msa sdl'avlkm",
                },
                plans: [
                    {
                        id: 1,
                        title: 'Basic',
                        price: 47,
                        period: 'year',
                        delay: '',
                        features: [
                            {
                                text: 'Officia quaerat eaque neque',
                                active: true,
                            },
                            {
                                text: 'Possimus aut consequuntur incidunt',
                                active: true,
                            },
                            {
                                text: 'Lorem ipsum dolor sit amet',
                                active: false,
                            },
                            {
                                text: 'Consectetur adipisicing elit',
                                active: false,
                            },
                            {
                                text: 'Dolorum esse odio quas architecto sint',
                                active: false,
                            },
                        ],
                        buttonClass: 'btn btn-secondary btn-md',
                    },
                    {
                        id: 2,
                        title: 'Premium',
                        price: 200,
                        period: 'year',
                        delay: 100,
                        features: [
                            {
                                text: 'Officia quaerat eaque neque',
                                active: true,
                            },
                            {
                                text: 'Possimus aut consequuntur incidunt',
                                active: true,
                            },
                            {
                                text: 'Lorem ipsum dolor sit amet',
                                active: true,
                            },
                            {
                                text: 'Consectetur adipisicing elit',
                                active: true,
                            },
                            {
                                text: 'Dolorum esse odio quas architecto sint',
                                active: false,
                            },
                        ],
                        buttonClass: 'btn btn-primary btn-md text-white',
                    },
                    {
                        id: 3,
                        title: 'Professional',
                        price: 750,
                        period: 'year',
                        delay: 200,
                        features: [
                            {
                                text: 'Officia quaerat eaque neque',
                                active: true,
                            },
                            {
                                text: 'Possimus aut consequuntur incidunt',
                                active: true,
                            },
                            {
                                text: 'Lorem ipsum dolor sit amet',
                                active: true,
                            },
                            {
                                text: 'Consectetur adipisicing elit',
                                active: true,
                            },
                            {
                                text: 'Dolorum esse odio quas architecto sint',
                                active: true,
                            },
                        ],
                        buttonClass: 'btn btn-secondary btn-md',
                    },
                ],
                faq: {
                    title: 'FAQ list',
                    questions: [
                        {
                            id: 1,
                            question: 'Can I accept both Paypal and Stripe?',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
                        },
                        {
                            id: 2,
                            question: 'What available is refund period?',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
                        },
                        {
                            id: 3,
                            question: 'Can I accept both Paypal and Stripe?',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
                        },
                        {
                            id: 4,
                            question: 'What available is refund period?',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
                        },
                        {
                            id: 5,
                            question: 'Where are you from?',
                            answer: 'Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.',
                        },
                        {
                            id: 6,
                            question: 'What is your opening time?',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
                        },
                        {
                            id: 7,
                            question: 'Can I accept both Paypal and Stripe?',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
                        },
                        {
                            id: 8,
                            question: 'What available is refund period?',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
                        },
                    ],
                },
            },
        },
    };
}
