// All TUAP content lives here, transcribed from the TUAP Notion workspace.
// Edit this file to update copy, points, ranks, events or resources.

export type Tone = "pink" | "blue" | "orange" | "green" | "red" | "purple";

export const nav = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/growth", label: "Growth" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export const socials = [
  { label: "WhatsApp", handle: "The English Cliniq", href: "https://wa.me/2349128585899" },
  { label: "Instagram", handle: "@theenglish_cliniq", href: "https://www.instagram.com/theenglish_cliniq" },
  { label: "X", handle: "@EnglishCliniq_", href: "https://x.com/EnglishCliniq_" },
  { label: "TikTok", handle: "@theenglishcliniq_", href: "https://www.tiktok.com/@theenglishcliniq_" },
  { label: "Facebook", handle: "TheEnglish Cliniq", href: "https://www.facebook.com/profile.php?id=61563387015713" },
];

export const telegramCommunity = {
  label: "TUAP Inter-department",
  href: "https://t.me/+_ggYtmYL0Nw5YjA0",
};

export type Department = {
  slug: string;
  number: string;
  name: string;
  tone: Tone;
  tagline: string;
  summary: string;
  explore: string[];
  build: string;
};

export const departments: Department[] = [
  {
    slug: "brand-communication",
    number: "01",
    name: "Brand Communication",
    tone: "pink",
    tagline: "Learn how ideas, businesses, and brands communicate value.",
    summary:
      "The strategic side of communication — how organisations talk to their audiences, build relationships, tell compelling stories, and maintain a strong public identity.",
    explore: [
      "Brand Communication",
      "Brand Strategy",
      "Corporate Communication",
      "Public Relations",
      "Storytelling",
      "Public Speaking",
      "Copywriting",
      "Community Outreach",
      "Professional Communication",
    ],
    build: "Brand campaigns, communication strategies, content, presentations, and communication projects.",
  },
  {
    slug: "content-creation",
    number: "02",
    name: "Content Creation",
    tone: "blue",
    tagline: "Turn ideas into content people want to see, read, hear, and remember.",
    summary: "Develop your ability to communicate through digital content across different platforms and formats.",
    explore: [
      "Content Strategy",
      "Copywriting",
      "Scriptwriting",
      "Caption Writing",
      "Social Media Storytelling",
      "Educational Content",
      "Creative Content",
      "Audience Engagement",
      "Content Planning",
    ],
    build:
      "Social media content, campaigns, scripts, educational resources, creative concepts, and content portfolios.",
  },
  {
    slug: "design-visual-communication",
    number: "03",
    name: "Design & Visual Communication",
    tone: "orange",
    tagline: "Learn to communicate ideas visually.",
    summary:
      "Design is more than making things look attractive. It is about solving communication problems through visual thinking.",
    explore: [
      "Graphic Design",
      "Visual Communication",
      "Brand Identity",
      "Typography",
      "Colour Theory",
      "Layout & Composition",
      "Social Media Design",
      "Presentation Design",
      "Canva",
      "Figma",
    ],
    build:
      "Brand assets, social media designs, campaign visuals, presentations, identity systems, and creative portfolios.",
  },
  {
    slug: "media-production",
    number: "04",
    name: "Media Production",
    tone: "green",
    tagline: "Tell stories through photography, video, sound, and motion.",
    summary: "The practical skills required to create professional visual media.",
    explore: [
      "Photography",
      "Videography",
      "Video Editing",
      "Cinematography",
      "Lighting",
      "Sound",
      "Composition",
      "Post-Production",
      "Visual Storytelling",
    ],
    build:
      "Photoshoots, short-form videos, campaign videos, interviews, documentaries, promotional content, and media portfolios.",
  },
  {
    slug: "digital-strategy",
    number: "05",
    name: "Digital Strategy",
    tone: "red",
    tagline: "Learn how digital platforms can become tools for growth.",
    summary: "The strategic use of digital platforms, audience data, campaigns, and online communication.",
    explore: [
      "Social Media Management",
      "Digital Marketing",
      "Digital Campaigns",
      "Audience Growth",
      "Community Growth",
      "Analytics",
      "Performance Tracking",
      "SEO Fundamentals",
      "Digital Strategy",
    ],
    build:
      "Digital campaigns, content strategies, social media systems, growth experiments, reports, and campaign portfolios.",
  },
  {
    slug: "community-engagement",
    number: "06",
    name: "Community Engagement",
    tone: "purple",
    tagline: "Learn how to build communities, coordinate people, and create meaningful experiences.",
    summary:
      "The leadership and organisational capabilities required to manage people, projects, events, partnerships, and communities.",
    explore: [
      "Community Management",
      "Event Planning",
      "Event Management",
      "Facilitation",
      "Team Coordination",
      "Partnership Development",
      "Mentorship",
      "Leadership",
      "Project Coordination",
    ],
    build: "Events, community initiatives, partnerships, workshops, campaigns, and leadership experience.",
  },
];

export type Rank = {
  name: string;
  emoji: string;
  stage: string;
  min: number;
  max: number | null;
  range: string;
  eligibility: string;
  description: string;
};

// Thresholds and eligibility as written on the Notion "Growth & Recognition" page.
export const ranks: Rank[] = [
  {
    name: "TeQster",
    emoji: "🌱",
    stage: "The foundation stage",
    min: 0,
    max: 29,
    range: "0–29 pts",
    eligibility: "Newly joined, onboarding complete",
    description:
      "You are beginning your TUAP journey. You learn the fundamentals, participate in departmental activities, complete tasks, and begin discovering where your strengths can create value.",
  },
  {
    name: "TeQstar",
    emoji: "🌟",
    stage: "The growth stage",
    min: 30,
    max: 89,
    range: "30–89 pts",
    eligibility: "Active contributor & 10+ referrals",
    description:
      "You have demonstrated consistency and contribution. You actively participate in projects, produce quality work, collaborate with others, and take greater responsibility within your department.",
  },
  {
    name: "TeQGrandstar",
    emoji: "🏆",
    stage: "The leadership stage",
    min: 90,
    max: null,
    range: "90+ pts",
    eligibility: "Leader with consistent tasks & 20+ referrals",
    description:
      "You have developed into an experienced and trusted contributor. You demonstrate leadership, initiative and excellence, mentor others, coordinate initiatives, and represent TUAP at a higher level.",
  },
];

export type Activity = {
  id: string;
  emoji: string;
  name: string;
  detail: string;
  points: number;
  bonus?: string;
};

export const activities: Activity[] = [
  { id: "onboarding", emoji: "✅", name: "Completed onboarding", detail: "Joined officially (after intake & intro)", points: 5 },
  {
    id: "referral",
    emoji: "🤝",
    name: "Referred a student or client to TeQ",
    detail: "Used your referral link or were named in the form",
    points: 8,
    bonus: "+ instant cash prize",
  },
  { id: "recruit", emoji: "👥", name: "Recruited 3+ TeQsters in one cycle", detail: "Department, class, prep group, community", points: 20 },
  { id: "campaign", emoji: "📣", name: "Posted a branded campaign", detail: "With caption/CTA on IG, X, WhatsApp or TikTok", points: 5 },
  { id: "prep", emoji: "🧠", name: "Hosted a peer prep session", detail: "Study circle, test strategy session", points: 5 },
  { id: "challenge", emoji: "🏆", name: "Participated in a TeQ challenge", detail: "Flash campaigns, contests, duo missions", points: 4 },
  { id: "event", emoji: "🎤", name: "Led a campus event", detail: "Spoke publicly or hosted a session physically", points: 8 },
  { id: "story", emoji: "✍️", name: "Wrote a blog or TeQ spotlight story", detail: "Student story, tips, brand message", points: 5 },
  { id: "testimonial", emoji: "💬", name: "Received a student testimonial", detail: "Screenshot or submitted praise", points: 4 },
  { id: "cohost", emoji: "🎥", name: "Co-hosted or assisted a TeQ class or webinar", detail: "Online or offline", points: 6 },
  { id: "checkin", emoji: "📅", name: "Attended monthly squad check-in", detail: "Zoom, WhatsApp voice, or physical meet", points: 5 },
  { id: "reflection", emoji: "📋", name: "Submitted monthly reflection log", detail: "Via Notion or form", points: 4 },
];

export const pillars = [
  {
    name: "Learn",
    emoji: "📚",
    text: "Develop practical skills through training, workshops, resources, mentorship, challenges, and exposure to industry practitioners.",
  },
  {
    name: "Build",
    emoji: "🛠️",
    text: "Apply what you learn through real projects, campaigns, collaborations, community initiatives, and practical briefs.",
  },
  {
    name: "Earn",
    emoji: "💼",
    text: "As you demonstrate competence and consistency, become eligible for recognition, leadership, project opportunities, and potential earning opportunities.",
  },
];

export const gains = [
  { title: "Recognition", text: "Earn certificates, recognition, leadership opportunities, and documented evidence of your contributions." },
  { title: "Professional Portfolio", text: "Build evidence of what you can actually do — not just what you claim to know." },
  { title: "Industry Exposure", text: "Learn from practitioners and gain exposure to how different industries and professionals operate." },
  { title: "Real-World Experience", text: "Work on practical projects, campaigns, initiatives, and collaborative assignments." },
  { title: "Practical Education", text: "Learn skills that extend beyond conventional classroom knowledge." },
  {
    title: "Career Opportunities",
    text: "Position yourself for internships, freelance work, collaborations, and partnerships as your capabilities develop.",
  },
];

export const realWorldQuestions = [
  "Can you apply what you know?",
  "Can you create value?",
  "Can you solve labour market problems?",
  "Can you communicate your ideas?",
  "Can you work with people?",
  "Can you build something people are willing to pay for?",
];

export const ecosystemPath = [
  "TeQster",
  "TeQstar",
  "TeQGrandstar",
  "Campus Lead",
  "Certified TeQ Creator",
  "TeQ Freelancer",
  "TeQ Partner",
  "TeQ Instructor",
  "TeQ Consultant",
];

export type OnboardingPhase = {
  id: string;
  label: string;
  title: string;
  purpose?: string;
  tasks: { id: string; text: string; href?: string }[];
};

export const onboardingPhases: OnboardingPhase[] = [
  {
    id: "know-teq",
    label: "Phase 2",
    title: "Know TeQ",
    purpose: "Understand the institution behind TUAP.",
    tasks: [
      { id: "purpose-manual", text: "Read the TeQ Purpose Manual" },
      { id: "vision", text: "Understand TeQ's vision" },
      { id: "ecosystem", text: "Understand TeQ's communication & creative industry ecosystem" },
      { id: "structure", text: "Understand how TUAP fits into the larger TeQ structure" },
    ],
  },
  {
    id: "understand-tuap",
    label: "Phase 3",
    title: "Understand TUAP",
    purpose: "Learn how the programme, departments and ranks work.",
    tasks: [
      { id: "how-it-works", text: "Understand how TUAP works", href: "/how-it-works" },
      { id: "programme-structure", text: "Understand the programme structure" },
      { id: "department-system", text: "Understand the department system" },
      { id: "expectations", text: "Understand participation expectations" },
      { id: "rank-system", text: "Understand the rank system: TeQster → TeQstar → TeQGrandstar", href: "/growth" },
      { id: "tracker", text: "Explore the Recognition Tracker — how your efforts are tracked & rewarded", href: "/growth" },
    ],
  },
  {
    id: "standards",
    label: "Phase 4",
    title: "Professional Standards",
    purpose: "Know what is expected of every TeQster.",
    tasks: [
      { id: "code-of-conduct", text: "TUAP Code of Conduct" },
      { id: "etiquette", text: "Communication etiquette" },
      { id: "professional", text: "Professional expectations" },
      { id: "digital", text: "Digital conduct" },
      { id: "collaboration", text: "Collaboration standards" },
      { id: "confidentiality", text: "Project/client confidentiality" },
      { id: "ip", text: "Intellectual property expectations" },
      { id: "attendance", text: "Attendance/participation expectations" },
    ],
  },
  {
    id: "tools",
    label: "Phase 5",
    title: "Tools & Systems",
    purpose: "Get familiar with the tools you'll use every week.",
    tasks: [
      { id: "resources-hub", text: "Browse the Tools & Resources Hub", href: "/resources" },
      { id: "activity-tracker", text: "Activity tracker" },
      { id: "events", text: "View current or future events", href: "/events" },
      { id: "project-tracker", text: "Project tracker" },
      { id: "reporting", text: "Reporting system" },
      { id: "learning", text: "Learning resources" },
      { id: "workspace", text: "Department workspace" },
    ],
  },
  {
    id: "community",
    label: "Phase 6",
    title: "Community Integration",
    purpose: "Meet your people and get connected.",
    tasks: [
      { id: "telegram", text: "Join the official TeQster community on Telegram", href: telegramCommunity.href },
      { id: "meet-lead", text: "Meet your Department Lead" },
      { id: "meet-members", text: "Meet your department members" },
      { id: "introduce", text: "Introduce yourself" },
      { id: "channels", text: "Understand your communication channels" },
      { id: "follow", text: "Follow TeQ on her official handles", href: "/contact" },
    ],
  },
  {
    id: "orientation",
    label: "Final phase",
    title: "TUAP Orientation",
    purpose: "Wrap up and get activated.",
    tasks: [
      { id: "attend", text: "Attend official TUAP orientation" },
      { id: "leadership", text: "Meet leadership" },
      { id: "dept-leads", text: "Meet Department Leads" },
      { id: "projects", text: "Understand the project ecosystem" },
      { id: "earning", text: "Understand how earning opportunities work" },
    ],
  },
];

export const applicationPrep = [
  "Read the Welcome Note",
  "Read the role description to make an informed choice",
  "Understand the TeQ Philosophy",
];

export type ResourceCategory = {
  id: string;
  emoji: string;
  name: string;
  audience: string;
  items: { emoji: string; name: string; type: string }[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    id: "branding",
    emoji: "📣",
    name: "Branding & Content Kits",
    audience: "For communication & content TeQsters",
    items: [
      { emoji: "✅", name: "Brand Style Guide (colors, fonts, voice, logos)", type: "Guide" },
      { emoji: "📦", name: "TeQ Logo Pack", type: "PNG / SVG" },
      { emoji: "📱", name: "Social Media Templates (IG, TikTok, etc.)", type: "Canva" },
      { emoji: "📝", name: "Caption Banks (product, testimonial, storyline, promo)", type: "Doc" },
      { emoji: "📽️", name: "Sample Reels & Script Starters", type: "Video" },
      { emoji: "🗓️", name: "Social Content Calendar", type: "Template" },
      { emoji: "🎨", name: "How-To: Creating Your First Branded Post", type: "Guide" },
    ],
  },
  {
    id: "test-prep",
    emoji: "📚",
    name: "Test Prep Tools & Templates",
    audience: "For test prep mentors",
    items: [
      { emoji: "🧾", name: "JAMB Prep Timetable Template", type: "PDF / Canva" },
      { emoji: "📝", name: "Weekly Study Plan", type: "Notion" },
      { emoji: "🧠", name: "Top 20 JAMB Tips", type: "PDF" },
      { emoji: "🎯", name: "Daily Practice Tracker", type: "Printable" },
      { emoji: "💬", name: "Telegram Group Template for study circles", type: "Template" },
      { emoji: "🗂️", name: "Success Story Scripts", type: "Doc" },
      { emoji: "🎙️", name: "Hosting a Mini Prep Session — Quick Guide", type: "Guide" },
    ],
  },
  {
    id: "campaign-event",
    emoji: "🛠️",
    name: "Campaign & Event Tools",
    audience: "For all TeQsters organising online or campus activity",
    items: [
      { emoji: "🎤", name: "Event Hosting Guide (lives, talks, study circles)", type: "Checklist" },
      { emoji: "📌", name: "Sample Event Plan — from ideation to promotion", type: "Doc" },
      { emoji: "🧾", name: "Attendance Sheet Template", type: "Google Form" },
      { emoji: "📷", name: "Post-Event Content Capture Checklist", type: "Checklist" },
      { emoji: "📢", name: "Event Flyer Template", type: "Canva" },
    ],
  },
  {
    id: "growth",
    emoji: "📦",
    name: "Ambassador Growth Tools",
    audience: "For personal planning, reflection & tracking",
    items: [
      { emoji: "🌱", name: "Monthly Growth Goal Sheet", type: "Notion" },
      { emoji: "📈", name: "TeQster Impact Log", type: "Notion" },
      { emoji: "📓", name: "Content Brain Dump Page", type: "Notion" },
      { emoji: "🔁", name: "Self-Review Template (monthly check-in)", type: "Template" },
      { emoji: "🧠", name: "How to Rise to TeQstar", type: "PDF" },
      { emoji: "🏅", name: "Sample TeQGrandstar Showcase Page", type: "Notion" },
    ],
  },
  {
    id: "referral",
    emoji: "🤝",
    name: "Referral & Promotion Toolkit",
    audience: "For promoting TeQ courses & building trust",
    items: [
      { emoji: "📣", name: "TeQ Course Flyers (JAMB, IELTS, etc.)", type: "Image" },
      { emoji: "📬", name: "DM Templates for invites & follow-ups", type: "Doc" },
      { emoji: "🖼️", name: "Story Frames — “Join Me at TeQ”", type: "Image" },
      { emoji: "🔗", name: "Shortened Referral Links + How-To Guide", type: "Guide" },
      { emoji: "🎤", name: "Sample “Why I Chose TeQ” Script", type: "Doc" },
    ],
  },
];

export type TuapEvent = {
  name: string;
  category: string;
  status: "Not started" | "Planning" | "Pending review" | "Registration open" | "Done" | "Cancelled";
  formats: ("In person" | "Virtual")[];
  start: string;
  end?: string;
};

// From the Notion "Event Management" database.
export const events: TuapEvent[] = [
  {
    name: "JAMB ’26 Campaign",
    category: "Campaign",
    status: "Registration open",
    formats: ["Virtual", "In person"],
    start: "2025-08-04",
    end: "2026-03-31",
  },
  { name: "TeQ Admission Party", category: "Party", status: "Done", formats: ["In person"], start: "2025-12-17" },
];

export const institutions = ["Unilag", "Unilorin"];

// SAMPLE DATA — placeholder names for the leaderboard layout. Replace with live data later.
export const sampleLeaderboard = [
  { name: "Adaeze O.", institution: "Unilag", department: "content-creation", points: 112 },
  { name: "Tobi A.", institution: "Unilorin", department: "community-engagement", points: 97 },
  { name: "Chiamaka E.", institution: "Unilag", department: "design-visual-communication", points: 91 },
  { name: "Ibrahim S.", institution: "Unilorin", department: "digital-strategy", points: 74 },
  { name: "Funmi K.", institution: "Unilag", department: "brand-communication", points: 66 },
  { name: "Emeka N.", institution: "Unilag", department: "media-production", points: 52 },
  { name: "Zainab Y.", institution: "Unilorin", department: "content-creation", points: 41 },
  { name: "David O.", institution: "Unilorin", department: "community-engagement", points: 33 },
  { name: "Blessing I.", institution: "Unilag", department: "design-visual-communication", points: 27 },
  { name: "Samuel T.", institution: "Unilorin", department: "brand-communication", points: 18 },
  { name: "Grace A.", institution: "Unilag", department: "digital-strategy", points: 12 },
  { name: "Kunle B.", institution: "Unilorin", department: "media-production", points: 5 },
];

export function rankFor(points: number): Rank {
  return [...ranks].reverse().find((r) => points >= r.min) ?? ranks[0];
}
