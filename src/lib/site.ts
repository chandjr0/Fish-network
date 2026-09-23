export const SITE_URL = "https://fishnetwork.co";

export const LINKS = {
  onboarding: "https://onboarding.fishnetwork.co",
  docs: "https://docs.fishnetwork.co",
  blog: "https://docs.fishnetwork.co/blog",
  brandAssets: "https://docs.fishnetwork.co/brand-assets",
  partners: "https://partners.fishnetwork.co",
  poweredBy: "https://theinnovations.tech",
} as const;

export const CONTACT = {
  phone: "+1 954-378-9809",
  phoneHref: "tel:+19543789809",
  email: "argiro1025@gmail.com",
} as const;

export const NAV = [
  { label: "Home", href: "/", external: false },
  { label: "About Us", href: "/about", external: false },
  { label: "Docs", href: LINKS.docs, external: true },
  { label: "Contact", href: "/contact", external: false },
  { label: "Partnerships", href: "/partnerships", external: false },
];

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/fish-network/" },
  { label: "X", href: "https://x.com/FishNetworkco" },
  { label: "Instagram", href: "https://www.instagram.com/fishnetworkco/" },
  { label: "TikTok", href: "https://www.tiktok.com/@fish_network" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCHaDuRoOJUr4pS_4WyZVzTg" },
  { label: "Telegram", href: null },
];

export const TEAM = [
  {
    name: "Joseph Argiro",
    title: "Founder & CEO",
    initials: "JA",
    image: "/team/joseph-argiro.webp",
    imageFallback: "/team/joseph-argiro.jpg",
    linkedin: "https://www.linkedin.com/in/josephargiro",
    x: "https://x.com/FishNetworkco",
  },
  {
    name: "Eric Swartz",
    title: "General Counsel",
    initials: "ES",
    image: "/team/eric-swartz.webp",
    imageFallback: "/team/eric-swartz.jpg",
    linkedin: null,
    x: null,
  },
  {
    name: "Sai",
    title: "Tech Lead",
    initials: "S",
    image: "/team/sai.webp",
    imageFallback: "/team/sai.jpg",
    linkedin: null,
    x: null,
  },
  {
    name: "Enoch",
    title: "Full Stack Developer",
    initials: "E",
    image: "/team/enoch.webp",
    imageFallback: "/team/enoch.jpg",
    linkedin: null,
    x: null,
  },
];

export const FAQS = [
  {
    q: "What is Fish Network?",
    a: "Fish Network is platform infrastructure for launching and running member-led investment clubs — called Fish Schools — with verifiable onchain governance, capital accounting, and participation-based reputation.",
  },
  {
    q: "What is the purpose of Fish Network?",
    a: "To make collaborative capital formation accessible and sustainable. We provide the operating rails — governance, records, capital accounts — so communities can invest together without sponsors, managers, or performance fees. Keep your carry; we'll handle the ops.",
  },
  {
    q: "What is the purpose of Fish Schools (aka Investment Clubs)?",
    a: "A Fish School lets a group of members pool effort and capital around a shared thesis, split risk and reward evenly, collaborate on diligence and sourcing, and document every decision through proposals and votes.",
  },
  {
    q: "What is a Fish School Organizer (aka Investment Organizer)?",
    a: "An organizer coordinates the club: onboarding members, structuring governance, and running operations. Any authority to execute documents or transmit funds must be explicitly granted by the club through a written rider — see the Nominee Rider Agreement.",
  },
  {
    q: "Do you source or promote investment opportunities?",
    a: "No. Fish Network does not source, recommend, or promote investments. Members and organizers bring their own opportunities.",
  },
  {
    q: "Do I need to be an accredited investor to join?",
    a: "It varies by club and by investment. Accreditation requirements differ, and clubs — not Fish Network — are responsible for ensuring their members meet applicable eligibility rules.",
  },
  {
    q: "Can I launch my own investment club on Fish Network?",
    a: "Yes. You define the thesis, invite members, set governance rules, and coordinate capital accounts. Entity-level and compliance review is completed before launch where required.",
  },
  {
    q: "How quickly can I launch a Fish School?",
    a: "Most clubs go from idea to fully operational in a few weeks rather than months, depending on entity formation and any required reviews.",
  },
  {
    q: "What is the minimum fund size for a Fish School?",
    a: "There is no platform-imposed fund size. Clubs set their own commitment structure and minimums in their operating agreement, subject to their entity and provider requirements.",
  },
  {
    q: "Where are my funds held and is it safe?",
    a: "Funds are not held by the platform. Contributions go directly to club-controlled treasury accounts or wallets, often managed by third-party providers. Fish Network provides onchain governance and capital accounting, but does not custody funds and has no ability to move them.",
  },
  {
    q: "How do I track my portfolio and investments?",
    a: "Capital accounts, contributions, ownership references, and club-level activity are tracked in the platform, alongside a transparent participation and decision history.",
  },
  {
    q: "What is a Fish Shoal or Shoal Leader?",
    a: "A Fish Shoal is a business or VC fund that wants to coordinate capital and community. A Shoal Leader can administer and organize a collection of individual Fish Schools to achieve a specific business outcome — a coordination tier above a single club.",
  },
  {
    q: "What are Fish Points?",
    a: "Fish Points are non-transferable reputation tokens minted to verified participants for actively contributing to Fish Schools or Shoals. They decay over time to ensure ongoing engagement and can be slashed for poor behaviour. They are not a tradable or speculative investment token, and they carry no promise of returns.",
  },
];

export const COMPLIANCE_NOTE =
  "Fish Network provides platform infrastructure. This website does not constitute legal, tax, or investment advice.";

export const FAQ_DISCLAIMER =
  "Fish Network is platform infrastructure and does not provide legal, tax, or investment advice unless explicitly stated by the company. Users should consult qualified advisors where appropriate.";

export const SMS_CONSENT =
  "I agree to receive non-promotional SMS messages from Fish Network regarding my inquiry, callback requests, and application updates. Message & data rates may apply.";
