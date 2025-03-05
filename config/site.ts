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
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/posts",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact me",
      href: "/#contact",
    },
    {
      label: "Be a sponsor",
      href: "/sponsors",
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
      submit: "Submit",
      cancel: "Cancel",
      back: "Back",
      welcome: "Welcome",
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
  search: {
    placeholder: "Search...",
    no_search_results: "No results for ",
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
    home: "Home",
    title: "Blog",
    description: "Explore our insights",
    no_posts_found: "No posts found",
    read: "read",
    publishedOn: "Published on",
    reads: "reads",
    post_doesnt_exist: "Post does not exist",
    back_blog: "Back to Blog",
  },
  about: {
    banner: {
      title: "I'm author of this blog",
      text: "Since from 1999 year I've been working with this are being descibed of this blog. Feel free to contact with me to know more.",
      read_blog: "Read the blog",
    },
    story: {
      subtitle: "My story",
      title: "How did I learn about that?",
      text: "<p>The first hikes I can remember are all with my dad. Growing up in California’s Central Valley, I was always just a couple hours away from either the beach or the mountains… and with Yosemite in our backyard, we chose the mountains.</p><p>My dad was wired for adventure and he wasn’t afraid of driving for 12 hours straight, several days in a row to set his eyes on the best views. By time I was in college, my adventures (and many roadtrips with my dad) had taken me across all 50 U.S. states. I’ll be forever grateful that he gave me the gift of seeing the beauty our world has to offer.<p><p>Looking for yourself in the state</p>",
    },
    instagram: {
      title: "My popular posts on Intagram",
    },
  },
  pricing: {
    title: "Choose your better way that you can use for",
    description:
      "Find the best solution for you &mdash; 100% satisfaction garanteed.",
    plans: [
      {
        id: "starter",
        description:
          "It would be enought for getting an answer for something is important for you",
      },
      {
        id: "basic",
        description:
          "You could ask 3 different questions and you'll receive an answer for each of them",
      },
      {
        id: "premium",
        description:
          "5 different sessions that you could use for receiving all that you needed. It should be used until 2 months",
      },
      {
        id: "premium_plus",
        description:
          "10 different sessions and you should use them until next 3 months",
      },
    ],
    choose: "Choose",
    popular: "Popular",
    form: {
      title: "Please fill the form",
      selectedPlanLabel: "You choosed a plan",
      name: "Your name",
      email: "Your e-mail",
      email_hint: "Google authorization is been required",
      next: "Next",
      validators: {
        name_required: "Name is required",
        email_required: "Email is required",
        email_format: "Email format is wrong",
        time_slot_wrong: "Please select a time between 10:00 am until 9:00 pm",
        date_3months_ahead:
          "Please select a date not later than the current date plus 3 months",
        date_earlier_tomorrow: "Please select a date not later than tomorrow",
      },
      responses: {
        booking_success: "Your booking event has been created",
        plan_not_found_error: "Plan not found",
        max_sessions_limit_error: "The maximum number of sessions is reached",
        time_slot_unavailable_error:
          "This time slot is not available. Please try with different time slot.",
        google_auth_error: "Google Account does not authorized.",
        google_auth_success: "You authorized as",
        email_confirm_success:
          "Please check your mailbox to confirm your booking",
        email_confirm_error:
          "Error with sending email. Please try again later or try another email address",
      },
    },
    selectDate: {
      title: "Please select a date",
      label: "Appointment time",
      hint: "Please select a date and time that will be comfortable to you",
    },
    calendarEvent: {
      title: "Appointment with",
      description: "Listen-Yourself event is planned for the plan",
    },
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
