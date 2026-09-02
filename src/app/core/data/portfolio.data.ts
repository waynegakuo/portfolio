import {
  Community,
  Education,
  Experience,
  MediaFeature,
  NavLink,
  Project,
  SocialLink,
  Practice,
  TechItem,
} from '../models/portfolio.model';

export const SITE = {
  name: 'Wayne Gakuo',
  shortName: 'WG',
  url: 'https://waynegakuo.netlify.app',
  email: 'waynejotham@gmail.com',
  role: 'Technical Solutions Architect',
  kicker: 'Frontend Engineer · Google Developer Expert for Angular · Design Systems · AI · Cloud',
  headline: 'I design and ship scalable enterprise web apps and AI-powered platforms.',
  about: `I am a Google Developer Expert (GDE) in Angular and Technical Solutions Consultant with 7+ years of experience architecting high-performance enterprise web applications, robust design systems, and modern AI-powered platforms.`,
  aboutExtra: `My focus centers on turning complex design constraints and emerging technology into seamless, production-grade web solutions. Beyond architecting scalable frontend systems, I actively build and ship AI-enabled web applications—orchestrating multimodal LLM workflows, automated data extraction, and intelligent user experiences on the web.`,
  resumeHref: '/assets/resume/Wayne_Gakuo_Resume.pdf',
  portrait: '/assets/img/profile_portrait.jpg',
  ogImage: '/assets/img/profile_portrait.jpg',
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Experience', path: '/experience' },
  { label: 'Communities', path: '/communities' },
  { label: 'Education', path: '/education' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/waynegakuo/',
    icon: 'linkedin',
  },
  {
    label: 'X',
    href: 'https://x.com/wayne_gakuo',
    icon: 'x',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/waynegakuo',
    icon: 'github',
  },
  {
    label: 'Résumé',
    href: SITE.resumeHref,
    icon: 'resume',
  },
  {
    label: 'Email',
    href: `mailto:${SITE.email}`,
    icon: 'email',
  },
];

export const PRACTICES: Practice[] = [
  {
    kicker: 'Angular',
    title: 'Systems that last',
    copy: 'Enterprise architecture, design tokens, and frontends built to stay fast as the product grows.',
  },
  {
    kicker: 'Design systems',
    title: 'Interfaces at scale',
    copy: 'Components and constraints that keep teams shipping the same product, not three versions of it.',
  },
  {
    kicker: 'AI on the web',
    title: 'Intelligent experiences',
    copy: 'Recommendations, assistants, and LLM workflows that live in the product — inventory, coaching, and ops.',
  },
];

export const MEDIA_FEATURES: MediaFeature[] = [
  {
    id: 'TVOozawQsj4',
    title: 'Cloud Study Jam in Ghana',
    source: 'Google for Developers',
  },
  {
    id: 'trpNISDTyXs',
    title: 'NG Kenya 2024',
    source: 'Angular Kenya',
  },
  {
    id: 'EQyHXDnCqmg',
    title: 'Google I/O Extended Pwani 2024',
    source: 'GDG Pwani',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Solutions Architect & Co-Founder',
    company: 'Unstacked Labs',
    location: 'Remote',
    period: 'May 2025 – Present',
    stack: [
      'Angular',
      'TypeScript',
      'SASS',
      'Gemini AI',
      'Google Cloud',
      'Firebase',
      'Genkit',
      'Nx',
      'Jest',
    ],
    description:
      'As a strategic technical partner, I bridge the gap between ambitious business goals and engineering excellence by architecting bespoke, scalable system architectures and leading high-performance teams to deliver innovative, full-stack solutions that solve complex challenges and drive sustainable competitive advantage.',
    current: true,
  },
  {
    role: 'Senior Full-Stack Development Consultant & Trainer',
    company: 'Westerwelle Startup Haus',
    location: 'Mombasa, Kenya',
    period: 'Dec 2024 – May 2025',
    stack: ['Angular', 'TypeScript', 'SASS', 'Gemini AI', 'Google Cloud', 'Firebase'],
    description:
      "As a Lead Technical Instructor within the Westerwelle Foundation's Digitalents initiative, I designed and delivered an intensive 40-hour curriculum focused on Angular architecture and full-stack integration, mentoring participants through the complete SDLC of capstone projects to cultivate job-ready engineering talent.",
  },
  {
    role: 'Frontend Engineer & Project Lead',
    company: 'Sky.Garden',
    location: 'Nairobi, Kenya',
    period: 'July 2021 – Dec 2024',
    stack: ['Angular', 'TypeScript', 'Cypress'],
    description:
      "I spearheaded the redesign of the Sky.Garden marketplace, implementing the company's Design System and optimizing application performance (60% reduction in loading times), improved product search indexing efficiency by 30%, and led the company's technical strategy, advocating for a monorepo architecture to scale product development across multiple markets.",
  },
  {
    role: 'Frontend Developer',
    company: 'Cobiro',
    location: 'Warsaw, Poland (Remote)',
    period: 'June 2021 – July 2022',
    stack: ['Angular', 'TypeScript', 'Jest'],
    description:
      "I developed core features for Cobiro's no-code website builder, empowering over 350,000 users to launch online businesses with integrated Google Ads, while also designed and implemented Cobiro's UI Design System, increasing developer productivity by 50%.",
  },
  {
    role: 'Frontend Developer',
    company: 'Edventures',
    location: 'Sweden (Remote)',
    period: 'Feb 2021 – June 2021',
    stack: ['Angular', 'TypeScript', 'NgRx', 'TailwindCSS', 'Firebase'],
    description:
      'I developed user-facing features using Angular for a flagship e-learning platform designed to empower 100 million youths through entrepreneurship education and guidance.',
  },
  {
    role: 'Frontend Engineer (Contract)',
    company: 'Foondi Tech',
    location: 'Kenya',
    period: 'July 2020 – Mar 2021',
    stack: ['Angular', 'TypeScript', 'Firebase', 'M-Pesa'],
    description:
      'Designed and built a loan management system meant to be used by 1500 small businesses and individual loan applicants in Kenya. The system eliminates the barrier of having SMEs and SACCOs do loan applications for their customers and instead have the customers themselves apply for loans in the comfort of their seats, wherever they are.',
  },
  {
    role: 'Frontend Engineer',
    company: 'GCSP',
    location: 'Kenya',
    period: 'June 2020 – Mar 2021',
    stack: ['Angular', 'TypeScript', 'Firebase'],
    description:
      'I developed and implemented the GCSP app, a platform connecting global community learners with expert tutors for on-demand learning, and collaborated with cross-functional Engineering and Design teams to ensure seamless product development and user experience.',
  },
  {
    role: 'Software Engineer & Technical Lead',
    company: 'MySpace Properties',
    location: 'Kenya',
    period: 'Feb 2020 – July 2020',
    stack: ['Angular', 'TypeScript', 'Firebase'],
    description:
      'I built a real-estate platform in Kenya, designed to reduce the property transaction times from 90 days to 60 days, connecting property owners, agents, and buyers, and developed an in-house application using Angular and Firebase to allow property managers to track customer real-estate inquiries.',
  },
  {
    role: 'Remote Software Developer',
    company: 'Knackapp',
    location: 'Remote',
    period: 'Oct 2019 – January 2020',
    stack: ['Angular', 'TypeScript', 'SASS'],
    description:
      'I revamped the KnackApp business platform, which is used in over 100 countries and available in 20+ languages, by improving user and onboarding experiences with Angular, HTML, TypeScript, and SASS. KnackApp leverages brain science, game theory, computer and data science, digital UX, and machine learning to help individuals discover their natural talents.',
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Shop n' Drop Store",
    description:
      'A modern, high-performance e-commerce application built with Angular. Customers browse a product catalog, manage their shopping cart, and move through a streamlined, simulated checkout.',
    href: 'https://shop-drop-store.web.app/',
    image: '/assets/img/projects/shop_n_drop.png',
    tags: ['Commerce', 'Angular'],
    featured: true,
  },
  {
    title: 'NG Kenya',
    description:
      'NG Kenya is an annual conference organized by Angular Kenya, dedicated to fostering growth and expertise within the Angular community — a robust learning experience for every level of Angular expertise.',
    href: 'https://ng-kenya.com/',
    image: '/assets/img/projects/ng_kenya.png',
    tags: ['Community', 'Angular'],
    featured: true,
  },
  {
    title: 'Nova Reel',
    description:
      "An AI-powered Angular app that changes how you discover movies and TV shows. Built with Google's Genkit, it delivers intelligent, personalized recommendations.",
    href: 'https://nova-reels.web.app/',
    image: '/assets/img/projects/nova_reel.png',
    tags: ['AI', 'Angular'],
    featured: true,
  },
  {
    title: 'Nano Studio',
    description:
      'An AI-powered Angular application using Google Gemini 3 Pro to transform simple smartphone product photos into studio-quality, culturally rich marketing assets — instantly.',
    href: 'https://nano-studios.web.app/',
    image: '/assets/img/projects/nano_studio.png',
    tags: ['AI', 'Angular'],
    featured: true,
  },
  {
    title: 'Wander Genie',
    description:
      'Generates personalized travel itineraries with AI. Users define destination, duration, budget, and interests, then receive a structured day-by-day plan from Gemini.',
    href: 'https://wandersgenie.web.app/',
    image: '/assets/img/projects/wander_genie.png',
    tags: ['AI', 'Angular'],
    featured: true,
  },
  {
    title: 'Bytewise',
    description:
      "An AI-powered e-commerce app where customers talk to an agent to query inventory and take actions such as add to cart.",
    href: 'https://bytewise-shop.web.app/',
    image: '/assets/img/projects/bytewise.png',
    tags: ['AI', 'Commerce'],
    featured: true,
  },
  {
    title: 'Sky.Garden',
    description:
      'An e-commerce platform built for African businesses. Merchants download the Sky.Garden Merchant App, set up an account, and start selling.',
    href: 'https://sky.garden/home',
    image: '/assets/img/projects/skygarden.png',
    tags: ['Commerce', 'Angular'],
  },
  {
    title: 'Sky Tickets',
    description:
      'A ticketing platform for event organizers: create an account, upload events, then manage and sell tickets directly to customers.',
    href: 'https://skytickets.ke/tickets',
    image: '/assets/img/projects/skytickets_app.png',
    tags: ['Events', 'Angular'],
  },
  {
    title: 'Loan Management System',
    description:
      'A loan platform for 1500 small businesses and individuals in Kenya. Customers apply directly, without SMEs and SACCOs as intermediaries.',
    href: 'https://enonecustomer.netlify.app/',
    image: '/assets/img/projects/enone_loan.png',
    tags: ['Fintech', 'Angular'],
  },
  {
    title: 'Edventures Official Website',
    description:
      "A one-stop platform where aspiring and current entrepreneurs explore Edventures' offerings, mission, and personalized coaching.",
    href: 'https://edventures-web.netlify.app/',
    image: '/assets/img/projects/edvntrs_info.png',
    tags: ['Education', 'Angular'],
  },
  {
    title: 'Edventures — Entrepreneurship with Anna',
    description:
      'An in-depth look at the entrepreneurship coaching program. Anna, a domain-specific virtual assistant, supports entrepreneurs with guidance and data-driven insight.',
    href: 'https://edventures.netlify.app/',
    image: '/assets/img/projects/edvntrs_anna.png',
    tags: ['Education', 'AI'],
  },
  {
    title: 'Online Resume Builder',
    description:
      'A user-friendly resume builder that simplifies creating professional-looking resumes from structured personal information.',
    href: 'https://resumebuild.netlify.app/',
    image: '/assets/img/projects/resume_bldr.png',
    tags: ['Tools', 'Angular'],
  },
  {
    title: 'GDG DevFest Kenya 2020',
    description:
      'Official site for DevFest Kenya 2020: schedule, speakers, registration, recorded sessions, and live chat.',
    href: 'https://devfestkenya.netlify.app/',
    image: '/assets/img/devfest_kenya.png',
    tags: ['Community', 'Angular'],
  },
  {
    title: 'GCSP Website',
    description:
      'Education technology that connects global learners with professional tutors for on-demand learning — anything, anywhere, anytime.',
    href: 'https://gcspapp.netlify.app/',
    image: '/assets/img/gcsp_web.png',
    tags: ['Education', 'Angular'],
  },
  {
    title: 'Virtual Retreat',
    description:
      'Registration and authorized access to expert videos and content for a virtual retreat focused on abundance in wealth and wellbeing.',
    href: 'https://virtualretreat.netlify.app/',
    image: '/assets/img/vretreat.png',
    tags: ['Content', 'Angular'],
  },
];

export const PROJECT_FILTERS = [
  'All',
  'AI',
  'Commerce',
  'Community',
  'Education',
  'Fintech',
  'Events',
  'Tools',
] as const;

export const TECH_STACK: TechItem[] = [
  { name: 'Angular', image: '/assets/img/stack/angular_logo.png' },
  { name: 'TypeScript', image: '/assets/img/stack/ts-logo.svg' },
  { name: 'Nx', image: '/assets/img/stack/nx-logo.svg' },
  { name: 'NgRx', image: '/assets/img/stack/ngrx-logo.svg' },
  { name: 'RxJS', image: '/assets/img/stack/rxjs-logo.svg' },
  { name: 'Firebase', image: '/assets/img/stack/firebase_logo.svg' },
  { name: 'Google Cloud', image: '/assets/img/stack/googlecloud.svg' },
];

export const COMMUNITIES: Community[] = [
  {
    name: 'Angular Kenya',
    role: 'Lead',
    description:
      'A community of developers passionate about sharing knowledge of the Angular framework, experiences, best practices, and guidance while learning from others simultaneously.',
    logo: '/assets/img/angular_kenya_logo.png',
    logoAlt: 'Angular Kenya logo',
    socials: [
      { label: 'X', href: 'https://x.com/angular_kenya' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/angular-kenya/' },
    ],
  },
  {
    name: 'GDG Pwani',
    role: 'Lead',
    description:
      "Spearheading developer outreach and support in Kenya's Coastal region — fostering a vibrant community, building strategic partnerships, and driving innovation through Google technologies.",
    logo: '/assets/img/gdg_pwani_logo.png',
    logoAlt: 'GDG Pwani logo',
    socials: [
      { label: 'X', href: 'https://x.com/GDG_Pwani' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gdg-pwani/' },
    ],
  },
  {
    name: 'GDG Nairobi',
    role: 'Co-Organizer',
    description:
      'Organize and create events in Nairobi with the aim of spreading knowledge about technology and sharing experiences in building user-centered solutions using Google technologies.',
    logo: '/assets/img/gdg_nairobi.png',
    logoAlt: 'GDG Nairobi logo',
    socials: [
      { label: 'X', href: 'https://x.com/GDG_Nairobi' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gdg-nairobi/' },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    course: 'BSc. Computer Science',
    school: 'Ashesi University, Ghana',
    period: 'Aug 2015 – June 2019',
    description:
      'I received a 4-year scholarship from the MasterCard Foundation to study Computer Science at Ashesi University, Ghana. Through my four years at Ashesi, apart from academics, I was involved in give-back community programs and problem-solving communities that sought to solve real-world problems with user-centered solutions.',
  },
  {
    course: 'Kenya Certificate of Secondary Education, K.C.S.E.',
    school: 'The Aga Khan High School, Mombasa',
    period: 'Jan 2010 – Nov 2013',
    description:
      "Through my four years in high school, I was a beneficiary of a USAID Scholarship under Equity Bank's Wings to Fly Program, which sought to sponsor students who came from disadvantaged backgrounds but were academically gifted.",
  },
];

export const PAGE_SEO = {
  home: {
    title: 'Wayne Gakuo · Technical Solutions Architect · GDE Angular',
    description:
      'Technical Solutions Architect and Google Developer Expert for Angular. Enterprise web apps, design systems, and AI-powered platforms.',
    path: '/',
  },
  work: {
    title: 'Work · Wayne Gakuo',
    description:
      'Selected products and platforms Wayne Gakuo has designed, built, and shipped — from AI-powered Angular apps to African commerce.',
    path: '/work',
  },
  experience: {
    title: 'Experience · Wayne Gakuo',
    description:
      'Career timeline: Solutions Architect, senior frontend engineering, consulting, and technical leadership across Kenya, Europe, and remote teams.',
    path: '/experience',
  },
  communities: {
    title: 'Communities · Wayne Gakuo',
    description:
      'Wayne Gakuo leads Angular Kenya and GDG Pwani, and co-organizes GDG Nairobi — growing Angular and Google developer communities in Kenya.',
    path: '/communities',
  },
  education: {
    title: 'Education · Wayne Gakuo',
    description:
      'BSc. Computer Science from Ashesi University (MasterCard Foundation Scholar) and Wings to Fly alumnus from The Aga Khan High School, Mombasa.',
    path: '/education',
  },
  notFound: {
    title: 'Page not found · Wayne Gakuo',
    description: 'This page does not exist on Wayne Gakuo’s portfolio.',
    path: '/404',
  },
};
