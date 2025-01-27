export type SiteConfig = typeof siteConfig;
export type MetaSocial = typeof metaSocial;

export const siteConfig = {
  url: process.env.SITE_URL,
  name: "Listen to yourself",
  description:
    "Individual Consultation Project. Professional consultant offering personalized guidance to help you achieve your goals.",
  author: "Vasil K.",
  maintainer: "Angelika B.",
  keywords: ["Individual consultation", "Follow me", "Job seeker"],
  navItems: [
    {
      label: "Blog",
      href: "/posts",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Blog",
      href: "/posts",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    facebook: "http://facebook.com",
    telegram: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    linkedin: "http://www.linkedin.com",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    instagram: "https://www.instagram.com",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  common: {
    actions: {
      viewMore: "View More",
    },
    header: {
      sponsor: "Sponsor",
    },
    errors: {
      page_error: "An error occurred",
      page_not_found: "The page you requested is not found.",
    },
    back_home: "Back to Home",
  },
  main: {
    title: "Listen to yourself Follow your heart",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
    altBanner: "Listen to yourself",
    contactUs: "Contact Us",
  },
  contact: {
    title: "Get individual consultation",
    placeholders: {
      name: "Your name",
      email: "Your email",
      message: "Your message",
    },
    emailSubject: "Message from",
    validators: {
      name_required: "Name is required",
      email_required: "Email is required",
      email_format: "Email format is wrong",
      message_required: "Message is required",
      message_min_len: "Message is too short. Must be at least 10 characters",
      message_max_len: "Message is too long. Must be less than 500 characters",
    },
    responses: {
      success: "Email sent successfully",
      error: "Email sending error",
    },
    requestBtn: "Request consultation",
    contactMe: "Contact Me",
    phone: "Phone",
    email: "Email",
    location: "Location",
  },
  blog: {
    root: "Blog",
    title: "Blog",
    description: "Explore our insights",
    no_posts_found: "No posts found",
    read: "read",
    publishedOn: "Published on",
    reads: "reads",
    post_doesnt_exist: "Post does not exist",
    back_blog: "Back to Blog",
  },
  footer: {
    aboutTitle: "About me",
    aboutText:
      "I am a professional consultant offering personalized guidance to help you achieve your goals.",
    services: "Services",
    connect: "Connect with me",
    copyrights: "Individual Consultation Project. All rights reserved.",
  },
};

export const metaSocial = {
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/Banner.svg`,
        width: 793,
        height: 892,
        alt: "Lsiten yourself",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      `${siteConfig.url}/Banner.svg`,
      `${siteConfig.url}/contact-banner.jpg`,
    ],
    creator: "@grond6",
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vasyl K.",
  alternateName: "grond",
  url: "https://listen-yourself.vercel.app",
  logo: "",
};
