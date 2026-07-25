export const contact = {
  brand: "Venus Event & Decor",
  tagline: "Professional Events. Precise Production.",
  secondaryTagline: "Corporate, Exhibition, Institutional and Religious Event Production.",
  city: "Indore, Madhya Pradesh, India",
  phonePrimary: "+91 8269371546",
  phoneSecondary: "+91 7898200410",
  email: "venusevent1623@gmail.com",
  whatsapp: "918269371546",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Indore%2C%20Madhya%20Pradesh%2C%20India",
  instagramUrl: "https://www.instagram.com/venusevent01?igsh=ZWgzcTlycjhiOWMy",
};

const pexels = (id, width = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&q=82`;

const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=82`;

const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#080808"/><stop offset="0.55" stop-color="#17110a"/><stop offset="1" stop-color="#2a210e"/></linearGradient><radialGradient id="glow" cx="50%" cy="42%" r="55%"><stop stop-color="#d4af37" stop-opacity="0.45"/><stop offset="1" stop-color="#d4af37" stop-opacity="0"/></radialGradient></defs><rect width="1600" height="1000" fill="url(#bg)"/><circle cx="800" cy="420" r="430" fill="url(#glow)"/><path d="M170 740 C360 560 510 835 715 635 C920 435 1085 785 1430 520" fill="none" stroke="#d4af37" stroke-opacity="0.42" stroke-width="4"/><path d="M230 300 H1370 M230 700 H1370" stroke="#f7e7ce" stroke-opacity="0.11" stroke-width="2"/><text x="800" y="465" fill="#f7e7ce" font-family="Georgia,serif" font-size="82" text-anchor="middle">Venus Event &amp; Decor</text><text x="800" y="535" fill="#d4af37" font-family="Arial,sans-serif" font-size="30" letter-spacing="8" text-anchor="middle">EVENT PRODUCTION</text></svg>`;

export const fallbackImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(fallbackSvg)}`;

export const imageBank = {
  heroCorporate: pexels("38111333", 2200),
  heroExhibition: pexels("31311125", 2200),
  heroReligious: pexels("21046832", 2200),
  heroInstitutional: pexels("7780108", 2200),
  aboutPlanning: unsplash("1552664730-d307ca884978"),
  aboutExecution: pexels("34774320"),
  serviceCorporate: pexels("37887616"),
  serviceExhibition: pexels("35138560"),
  serviceBhagwat: pexels("15335735"),
  serviceInstitutional: pexels("29581807"),
  serviceGroundbreaking:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Gold_Shovels_-_Webber_Park_Library_Groundbreaking%2C_Minneapolis_%2826338060081%29.jpg/1600px-Gold_Shovels_-_Webber_Park_Library_Groundbreaking%2C_Minneapolis_%2826338060081%29.jpg",
  serviceConference: pexels("34612075"),
  serviceAward: pexels("7005630"),
  serviceProduct: unsplash("1551818255-e6e10975bc17"),
  serviceOffice: unsplash("1497366811353-6870744d04b2"),
  serviceSchool: unsplash("1509062522246-3755977927d7"),
  serviceCultural: pexels("36791504"),
  serviceReligiousGathering: pexels("19064527"),
  portfolioSummit: unsplash("1475721027785-f74eccf877e2"),
  portfolioExpo: pexels("36799143"),
  portfolioKatha: pexels("34420837"),
  portfolioLaunch: unsplash("1505373877841-8d25f7d46678"),
  portfolioInstitution: unsplash("1523580846011-d3a5bc25702b"),
  portfolioGroundbreaking: unsplash("1503387762-592deb58ef4e"),
  categoryCorporate: unsplash("1511578314322-379afb476865"),
  categoryExhibition: pexels("31311141"),
  categoryReligious: pexels("15276583"),
  categoryInstitutional: unsplash("1541339907198-e08756dedf3f"),
  compareBefore: unsplash("1504384308090-c894fdcc538d"),
  compareAfter: unsplash("1540575467063-178a50c2df87"),
  videoConference: pexels("7648232"),
  videoExpo: pexels("30669727"),
  videoSpiritual: pexels("27403382"),
  galleryBoardroom: unsplash("1556761175-b413da4baf72"),
  gallerySeminar: unsplash("1517048676732-d65bc937f952"),
  galleryExpoHall: unsplash("1556761175-4b46a572b786"),
  galleryExpoBooth: pexels("2155552"),
  galleryReligiousStage: pexels("33641680"),
  galleryPandal: pexels("28779439"),
  galleryAward: pexels("7005751"),
  galleryLaunch: unsplash("1517245386807-bb43f82c33c4"),
  galleryOffice: unsplash("1521737604893-d14cc237f11d"),
  gallerySchool: unsplash("1523050854058-8df90110c9f1"),
  galleryCollege: unsplash("1523240795612-9a054b0db644"),
  galleryCultural: pexels("34594518"),
  galleryPublic: unsplash("1528605248644-14dd04022da1"),
  galleryLighting: unsplash("1492684223066-81342ee5ff30"),
  galleryStageRig: unsplash("1516280440614-37939bbacd81"),
  galleryRegistration: unsplash("1551836022-d5d88e9218df"),
  galleryBranding: unsplash("1542744094-3a31f272c490"),
  gallerySeminarRoom: unsplash("1560439514-4e9645039924"),
  galleryAudience: unsplash("1515187029135-18ee286d815b"),
  galleryPress: unsplash("1495020689067-958852a7765e"),
  galleryDevotional: pexels("15447775"),
  galleryTemple: pexels("30074204"),
  routeAbout: unsplash("1553877522-43269d4ea984", 1800),
  routeServices: pexels("8761551", 1800),
  routePortfolio: pexels("32660518", 1800),
  routeGallery: pexels("13242274", 1800),
  routeCorporate: unsplash("1503428593586-e225b39bddfe", 1800),
  routeDetails: pexels("7005062", 1800),
  routeVideos: pexels("13203101", 1800),
  routeTestimonials: unsplash("1556761175-5973dc0f32e7", 1800),
  routeFaq: unsplash("1557804506-669a67965ba0", 1800),
  routeContact: unsplash("1497366754035-f200968a6e72", 1800),
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Corporate", href: "/corporate-events" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { label: "Professional Events", value: 210, suffix: "+", note: "Corporate, institutional and public programs" },
  { label: "Exhibition Setups", value: 75, suffix: "+", note: "Stalls, expo counters and brand display zones" },
  { label: "Religious Programs", value: 90, suffix: "+", note: "Bhagwat, pravachan, pandal and spiritual gatherings" },
  { label: "Launch & Award Stages", value: 55, suffix: "+", note: "Product reveals, ceremonies and recognition events" },
  { label: "Cities Served", value: 12, suffix: "+", note: "Indore and nearby professional event locations" },
  { label: "Production Experience", value: 8, suffix: "+", note: "Years of disciplined on-ground execution" },
];

export const services = [
  {
    title: "Corporate Events",
    icon: "briefcase",
    image: imageBank.serviceCorporate,
    accent: "#d4af37",
    layout: "executive",
    description: "Formal event planning, branded stages, registration flow, guest seating and executive-ready execution.",
  },
  {
    title: "Exhibitions & Stalls",
    icon: "stage",
    image: imageBank.serviceExhibition,
    accent: "#7dd3fc",
    layout: "expo",
    description: "Exhibition booths, display counters, signage, lighting, visitor movement and brand presentation zones.",
  },
  {
    title: "Bhagwat & Religious Events",
    icon: "sparkle",
    image: imageBank.serviceBhagwat,
    accent: "#f59e0b",
    layout: "spiritual",
    description: "Devotional stage setups, pandal planning, seating, sound coordination and dignified spiritual ambience.",
  },
  {
    title: "Professional & Institutional Events",
    icon: "building",
    image: imageBank.serviceInstitutional,
    accent: "#a78bfa",
    layout: "institutional",
    description: "Seminars, foundation programs, formal gatherings and structured events for organizations and institutes.",
  },
  {
    title: "Groundbreaking Ceremonies",
    icon: "flag",
    image: imageBank.serviceGroundbreaking,
    accent: "#f97316",
    layout: "ceremony",
    description: "Bhoomi pujan, project launches, shovel ceremonies, site branding, seating and formal protocol support.",
  },
  {
    title: "Conferences & Seminars",
    icon: "mic",
    image: imageBank.serviceConference,
    accent: "#60a5fa",
    layout: "conference",
    description: "Speaker stages, AV flow, seating layouts, check-in desks, presentation screens and audience management.",
  },
  {
    title: "Award Functions",
    icon: "award",
    image: imageBank.serviceAward,
    accent: "#facc15",
    layout: "award",
    description: "Recognition stages, trophy moments, lighting, walk-up flow, backdrop branding and formal hosting setups.",
  },
  {
    title: "Product Launches",
    icon: "play",
    image: imageBank.serviceProduct,
    accent: "#22c55e",
    layout: "launch",
    description: "Reveal moments, display zones, media corners, brand storytelling stages and premium guest experience.",
  },
  {
    title: "Office Events",
    icon: "briefcase",
    image: imageBank.serviceOffice,
    accent: "#38bdf8",
    layout: "office",
    description: "Internal town halls, annual meets, team programs, inauguration setups and office activation support.",
  },
  {
    title: "School & College Events",
    icon: "school",
    image: imageBank.serviceSchool,
    accent: "#34d399",
    layout: "campus",
    description: "Annual days, seminars, orientation programs, cultural stages and disciplined campus event layouts.",
  },
  {
    title: "Cultural Programs",
    icon: "music",
    image: imageBank.serviceCultural,
    accent: "#fb7185",
    layout: "cultural",
    description: "Stage decor, lighting, audience areas, artist flow and presentation support for cultural performances.",
  },
  {
    title: "Religious Gatherings",
    icon: "book",
    image: imageBank.serviceReligiousGathering,
    accent: "#fbbf24",
    layout: "devotional",
    description: "Spiritual assemblies, pravachan seating, entry planning, sound setup and respectful crowd flow.",
  },
];

export const features = [
  ["Production Discipline", "Timelines, vendor coordination, installation checks and handover routines are handled with structure."],
  ["Relevant Visual Planning", "Stage, stall, pandal and venue design choices are matched to the exact event format."],
  ["Professional Guest Flow", "Registration, seating, entry, backstage and exit movement are planned before execution."],
  ["Brand & Protocol Alignment", "Corporate identity, institutional tone and religious dignity are maintained across touchpoints."],
  ["Technical Readiness", "Lighting, sound, screens, power needs and presentation moments are coordinated early."],
  ["On-Ground Ownership", "The team remains available during setup and event hours for adjustments and issue handling."],
  ["Premium Finish", "Materials, signage, stage geometry and details are reviewed for a polished public-facing result."],
  ["Clear Communication", "Scope, schedule and event requirements are discussed clearly before production begins."],
];

export const portfolio = [
  {
    title: "Leadership Summit Stage",
    category: "Corporate",
    location: "Indore",
    date: "Executive Conference",
    image: imageBank.portfolioSummit,
    description: "A clean conference stage with audience-focused lighting, branded backdrop and speaker-ready flow.",
  },
  {
    title: "Industrial Expo Pavilion",
    category: "Exhibition",
    location: "Vijay Nagar",
    date: "Trade Showcase",
    image: imageBank.portfolioExpo,
    description: "A structured exhibition environment with product displays, counter planning and visitor movement.",
  },
  {
    title: "Bhagwat Katha Pandal",
    category: "Religious",
    location: "Indore",
    date: "Spiritual Program",
    image: imageBank.portfolioKatha,
    description: "A devotional stage and seating arrangement built for clear darshan, sound reach and guest comfort.",
  },
  {
    title: "Product Reveal Theatre",
    category: "Launch",
    location: "Indore",
    date: "Brand Reveal",
    image: imageBank.portfolioLaunch,
    description: "A product launch setup with presentation stage, media-friendly lighting and reveal timing.",
  },
  {
    title: "Institutional Annual Program",
    category: "Institutional",
    location: "Rau",
    date: "Campus Event",
    image: imageBank.portfolioInstitution,
    description: "A formal campus program setup with stage visibility, guest seating and disciplined entry flow.",
  },
  {
    title: "Project Groundbreaking Setup",
    category: "Ceremony",
    location: "Dewas Road",
    date: "Site Ceremony",
    image: imageBank.portfolioGroundbreaking,
    description: "A site-ready ceremony setup with formal seating, branded welcome area and protocol-sensitive planning.",
  },
];

export const categories = [
  { title: "Corporate Events", image: imageBank.categoryCorporate, text: "Formal stages, audience flow, branding and executive presentation environments." },
  { title: "Exhibitions", image: imageBank.categoryExhibition, text: "Expo stalls, product displays, visitor counters and trade-show visual systems." },
  { title: "Religious Events", image: imageBank.categoryReligious, text: "Bhagwat, pravachan, pandal, seating, sound and dignified spiritual arrangements." },
  { title: "Institutional Events", image: imageBank.categoryInstitutional, text: "School, college, seminar, award and professional program production." },
];

export const galleryItems = [
  {
    title: "Executive Boardroom Event",
    category: "Corporate",
    image: imageBank.galleryBoardroom,
    caption: "Premium room planning for leadership meetings, review sessions and formal addresses.",
    description: "A focused corporate setup with table flow, lighting and visual consistency for senior stakeholders.",
  },
  {
    title: "Training Seminar Setup",
    category: "Seminar",
    image: imageBank.gallerySeminar,
    caption: "Structured seating, presentation visibility and disciplined training-room arrangement.",
    description: "A seminar-ready production surface built around content clarity, speaker focus and participant comfort.",
  },
  {
    title: "Exhibition Hall Layout",
    category: "Exhibition",
    image: imageBank.galleryExpoHall,
    caption: "Visitor-friendly expo flow with display planning, booth spacing and strong visual hierarchy.",
    description: "A practical exhibition environment where stalls, aisles and brand touchpoints remain easy to navigate.",
  },
  {
    title: "Trade Booth Counter",
    category: "Exhibition",
    image: imageBank.galleryExpoBooth,
    caption: "A professional stall setup with counter branding, display area and clear visitor interaction.",
    description: "A compact trade-show booth designed to support product conversations and brand recall.",
  },
  {
    title: "Religious Stage Focus",
    category: "Religious",
    image: imageBank.galleryReligiousStage,
    caption: "Dignified spiritual stage planning with clear visibility and devotional ambience.",
    description: "A respectful religious event setup shaped around sound reach, seating and stage clarity.",
  },
  {
    title: "Bhagwat Pandal Seating",
    category: "Religious",
    image: imageBank.galleryPandal,
    caption: "Covered seating and stage alignment for long-duration devotional gatherings.",
    description: "A pandal arrangement planned for comfort, flow and uninterrupted devotional programming.",
  },
  {
    title: "Award Function Moment",
    category: "Award",
    image: imageBank.galleryAward,
    caption: "Recognition-stage planning with lights, host flow and photo-friendly award moments.",
    description: "An award function setup designed for audience visibility, walk-up flow and polished documentation.",
  },
  {
    title: "Launch Presentation Screen",
    category: "Launch",
    image: imageBank.galleryLaunch,
    caption: "A brand reveal environment with screen focus, staging and professional presentation rhythm.",
    description: "A launch setup built around story, timing, audience attention and media-friendly composition.",
  },
  {
    title: "Office Team Program",
    category: "Office",
    image: imageBank.galleryOffice,
    caption: "Internal event planning for teams, leadership talks and formal office gatherings.",
    description: "A polished office-event layout with practical seating, discussion areas and clear presentation flow.",
  },
  {
    title: "School Auditorium Program",
    category: "Institutional",
    image: imageBank.gallerySchool,
    caption: "Formal campus staging and audience seating for school programs and ceremonies.",
    description: "An institutional event setup made for stage visibility, guest discipline and smooth movement.",
  },
  {
    title: "College Event Hall",
    category: "Institutional",
    image: imageBank.galleryCollege,
    caption: "A college program environment for seminars, orientation and formal student events.",
    description: "A campus-ready production setup supporting structured sessions and formal announcements.",
  },
  {
    title: "Cultural Performance Stage",
    category: "Cultural",
    image: imageBank.galleryCultural,
    caption: "Stage planning for cultural performances with audience focus and lighting control.",
    description: "A performance environment designed for visibility, artist movement and a strong public presentation.",
  },
  {
    title: "Public Program Seating",
    category: "Professional",
    image: imageBank.galleryPublic,
    caption: "Organized seating, entry flow and guest planning for public-facing events.",
    description: "A formal event setup that keeps audience movement, stage focus and event order aligned.",
  },
  {
    title: "Stage Lighting Direction",
    category: "Production",
    image: imageBank.galleryLighting,
    caption: "Lighting direction for staged programs, product reveals and formal presentations.",
    description: "A technical production detail focused on depth, camera visibility and audience attention.",
  },
];

export const galleryPageItems = [
  ...galleryItems,
  {
    title: "Stage Rigging Detail",
    category: "Production",
    image: imageBank.galleryStageRig,
    caption: "Technical stage support for performance, conference and formal production needs.",
    description: "A production-focused detail showing the infrastructure behind clean, reliable stage execution.",
  },
  {
    title: "Registration Desk Flow",
    category: "Corporate",
    image: imageBank.galleryRegistration,
    caption: "Guest check-in planning for seminars, product launches and business programs.",
    description: "A registration-focused setup that supports controlled entry, badge flow and first impressions.",
  },
  {
    title: "Branding Wall Setup",
    category: "Corporate",
    image: imageBank.galleryBranding,
    caption: "Brand walls and presentation surfaces for formal media and stakeholder moments.",
    description: "A branded visual environment built for corporate identity, photos and event recall.",
  },
  {
    title: "Seminar Room Alignment",
    category: "Seminar",
    image: imageBank.gallerySeminarRoom,
    caption: "A formal room layout with clear content focus and participant-ready seating.",
    description: "A professional seminar setup planned for visibility, comfort and structured session delivery.",
  },
  {
    title: "Audience View Planning",
    category: "Conference",
    image: imageBank.galleryAudience,
    caption: "Audience-first planning for staged conferences and professional addresses.",
    description: "A conference environment arranged around stage visibility, sound reach and smooth transitions.",
  },
  {
    title: "Press Interaction Area",
    category: "Launch",
    image: imageBank.galleryPress,
    caption: "A media-friendly setup for product announcements, interviews and brand communication.",
    description: "A launch support zone designed for press movement, backdrop clarity and controlled communication.",
  },
  {
    title: "Devotional Assembly View",
    category: "Religious",
    image: imageBank.galleryDevotional,
    caption: "A spiritual gathering arrangement focused on dignity, order and clear stage view.",
    description: "A religious-event layout where seating, stage and devotional atmosphere are planned together.",
  },
  {
    title: "Temple Program Support",
    category: "Religious",
    image: imageBank.galleryTemple,
    caption: "Sacred event support with respectful planning for flow, sound and congregation comfort.",
    description: "A spiritual program setup aligned with ceremony requirements and guest movement.",
  },
];

export const process = [
  ["01", "Requirement Brief", "Event type, audience, venue, schedule, branding and technical needs are documented."],
  ["02", "Site Planning", "Layouts, stage dimensions, guest movement, electrical points and access routes are mapped."],
  ["03", "Design Direction", "Stage, stall, pandal, signage, seating and lighting directions are aligned with event purpose."],
  ["04", "Production Setup", "Materials, vendors, technical systems and installation teams are coordinated on schedule."],
  ["05", "Event Execution", "Final checks, guest flow, speaker/stage support and on-ground adjustments are handled."],
  ["06", "Handover", "The event surface is closed cleanly with post-event coordination and material removal."],
];

export const testimonials = [
  {
    name: "Rajat Mehta",
    event: "Product Launch",
    location: "Vijay Nagar",
    date: "March 2026",
    rating: 5,
    verified: false,
    quote:
      "The launch stage, screen focus and guest movement felt professional from entry to reveal. The setup looked premium and stayed organized throughout.",
  },
  {
    name: "Anita Sharma",
    event: "Institutional Seminar",
    location: "Indore",
    date: "April 2026",
    rating: 5,
    verified: false,
    quote:
      "The seminar hall was arranged with clear visibility, neat branding and disciplined seating. It gave the program a formal and reliable presentation.",
  },
  {
    name: "Mahesh Agrawal",
    event: "Bhagwat Program",
    location: "Rau, Indore",
    date: "May 2026",
    rating: 5,
    verified: false,
    quote:
      "The pandal, stage and sound arrangement were handled respectfully. Guests were comfortable and the devotional atmosphere felt calm and well managed.",
  },
];

export const faqs = [
  ["Which types of events do you manage?", "Venus Event & Decor supports corporate events, exhibitions, Bhagwat and religious programs, professional events, institutional functions, conferences, award functions, product launches, office events, cultural programs and public gatherings."],
  ["Do you provide exhibition stall and booth setup?", "Yes. Stall design, booth counters, branding panels, display planning, lighting and visitor flow can be discussed according to exhibition size and venue rules."],
  ["Can you manage Bhagwat or religious event pandal arrangements?", "Yes. The team can support stage setup, pandal planning, seating, sound coordination, entry flow and devotional ambience for religious gatherings."],
  ["Do you handle school and college events?", "Yes. Annual programs, seminars, cultural programs, orientation sessions and institutional ceremonies can be planned with formal staging and audience flow."],
  ["How early should a professional event be booked?", "For conferences, exhibitions, large religious programs and institutional events, early booking is recommended so layout, material, permissions and technical requirements can be planned properly."],
  ["How is pricing determined?", "Pricing depends on event type, venue size, audience count, materials, staging, sound, lighting, branding, production complexity, travel and installation requirements."],
];

export const routePages = {
  about: {
    title: "About Venus Event & Decor",
    eyebrow: "Professional event production house",
    image: imageBank.routeAbout,
    description:
      "A premium event production studio from Indore focused on corporate, exhibition, institutional and religious event execution.",
    sections: [
      ["Mission", "To deliver structured, visually refined and dependable event environments for professional and spiritual programs."],
      ["Vision", "To become a trusted production partner for organizations, institutions, brands and religious committees across Central India."],
      ["Values", "Planning discipline, respectful execution, visual clarity, timely setup, transparent communication and premium finishing."],
    ],
  },
  services: {
    title: "Services",
    eyebrow: "Corporate, exhibition and religious production",
    image: imageBank.routeServices,
    description:
      "From corporate stages and exhibition stalls to Bhagwat pandals and institutional programs, each service is planned around event purpose and audience flow.",
    cards: services,
  },
  portfolio: {
    title: "Portfolio",
    eyebrow: "Professional showcase",
    image: imageBank.routePortfolio,
    description:
      "A focused showcase of corporate conferences, expo setups, devotional programs, product launches and institutional events.",
    cards: portfolio,
  },
  gallery: {
    title: "Gallery",
    eyebrow: "Event production visuals",
    image: imageBank.routeGallery,
    description:
      "A responsive gallery for corporate setups, exhibitions, religious stages, institutional halls and production details.",
    cards: galleryPageItems,
    galleryPreview: true,
  },
  "corporate-events": {
    title: "Corporate Events",
    eyebrow: "Professional production partner",
    image: imageBank.routeCorporate,
    description:
      "Groundbreaking ceremonies, product launches, annual events, conferences, award functions, exhibition support, stage production, lighting and brand activations.",
    sections: [
      ["Production Capabilities", "LED stage design, professional lighting, sound production, exhibition setup, branded entries and guest flow."],
      ["Brand Consistency", "Every touchpoint can align with brand colors, messaging, launch scripts and stakeholder expectations."],
      ["Corporate Consultation", "Share your event format, audience size and brand direction to shape a polished professional experience."],
    ],
  },
  "event-details": {
    title: "Event Details",
    eyebrow: "Project storytelling template",
    image: imageBank.routeDetails,
    description:
      "A detail-page format for event type, venue, production scope, services delivered, gallery, video moments and next project navigation.",
    cards: portfolio.slice(0, 3),
  },
  videos: {
    title: "Videos",
    eyebrow: "Reels, films and production moments",
    image: imageBank.routeVideos,
    description:
      "A video showcase surface for corporate highlights, exhibition walkthroughs, stage reveals, setup timelapses and religious program coverage.",
    sections: [
      ["Event Reels", "Short highlight films, stage reveals, guest entries, stall walkthroughs and setup timelapses can be presented with cinematic posters."],
      ["Playback Rule", "Videos should never autoplay with sound and should include accessible controls."],
    ],
  },
  testimonials: {
    title: "Testimonials",
    eyebrow: "Client words",
    image: imageBank.routeTestimonials,
    description:
      "Client-style reviews that highlight production quality, planning clarity, religious-event dignity and event-day presentation.",
    cards: testimonials,
  },
  faqs: {
    title: "FAQs",
    eyebrow: "Planning clarity",
    image: imageBank.routeFaq,
    description:
      "Clear questions and answers for professional events, exhibitions, religious programs, booking timelines, customization and pricing.",
    faqs,
  },
  contact: {
    title: "Contact",
    eyebrow: "Start the production brief",
    image: imageBank.routeContact,
    description:
      "Book a consultation for corporate events, exhibitions, religious programs, conferences, award functions, product launches and institutional events.",
    sections: [
      ["Phone", `${contact.phonePrimary} / ${contact.phoneSecondary}`],
      ["Email", contact.email],
      ["Location", contact.city],
    ],
  },
};
