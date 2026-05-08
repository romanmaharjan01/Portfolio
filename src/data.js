import newYearSrSmiles from "./assets/new-year-sr-smiles.png";
import post1Video from "./assets/post 1.mp4";
import foreverBeginsVideo from "./assets/Where Your Forever Begins.mp4";
import navadurga2Video from "./assets/Navadurga2.mp4";

export const services = [
  {
    title: "Short-Form Video Editing (CapCut)",
    desc: "High-retention Reels, TikTok, and Shorts with hooks, captions, transitions, and pacing optimized for engagement."
  },
  {
    title: "YouTube & Long-Form Editing",
    desc: "Clean storytelling edits with sound polish, motion details, and brand consistency that improve watch time."
  },
  {
    title: "2D Animation & Motion Graphics",
    desc: "Custom animated scenes and motion typography that simplify complex messages and make content memorable."
  },
  {
    title: "Social Media Design Packs",
    desc: "Branded templates for posts and stories that keep your visual identity consistent and premium."
  },
  {
    title: "Branding & Marketing Graphics",
    desc: "Professional banners, thumbnails, flyers, and promo creatives designed to increase clicks and conversions."
  },
  {
    title: "Canva Editable Design Systems",
    desc: "Reusable Canva templates so your team can publish faster while maintaining high design quality."
  }
];

export const skills = {
  "Video Editing": [
    ["CapCut", "Advanced"],
    ["Short-Form Editing", "Advanced"],
    ["YouTube Workflow", "Intermediate"],
    ["Audio Sync & Cleanup", "Intermediate"]
  ],
  Animation: [
    ["2D Animation Concepts", "Intermediate"],
    ["Motion Typography", "Advanced"],
    ["Explainer Sequences", "Intermediate"]
  ],
  "Graphic Design": [
    ["Canva", "Advanced"],
    ["Adobe Photoshop", "Intermediate"],
    ["Adobe Illustrator", "Intermediate"],
    ["Visual Hierarchy", "Advanced"]
  ]
};

export const projects = [
  {
    name: "S.R Smiles New Year Social Creative",
    goal: "Design a festive New Year post for a multispeciality dental clinic brand.",
    tools: "Canva, Photoshop",
    outcome:
      "Delivered a premium social media creative featuring brand colors, skyline silhouettes, and celebratory visuals.",
    image: newYearSrSmiles
  },
  {
    name: "Marketing Mistakes in Nepal - Nexora Lift",
    goal: "Educate business owners in Nepal about common marketing mistakes and how to avoid them.",
    tools: "CapCut, 2D Animation",
    outcome:
      "Created a compelling 2D animated explainer video that helped Nexora Lift Marketing Agency increase engagement and establish thought leadership in the Nepalese market.",
    video: post1Video,
    thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231a1a2e' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23f59e0b' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EMarketing Mistakes%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='36' fill='%23fbbf24' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3Ein Nepal%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Navadurga Party Venue - Marketing Motion Graphics",
    goal: "Create an elegant promotional video for Navadurga Party Venue to attract event bookings and showcase the venue's premium facilities.",
    tools: "CapCut, Motion Graphics",
    outcome:
      "Produced a captivating marketing video that highlights the venue's ambiance and features, helping increase event inquiries and bookings.",
    video: foreverBeginsVideo,
    thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%232a1a3e' width='800' height='600'/%3E%3Crect fill='%23f59e0b' opacity='0.2' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23fbbf24' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3ENavadurga%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='36' fill='%23f59e0b' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EParty Venue%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Navadurga Party Venue - Premium Event Marketing",
    goal: "Showcase Navadurga Party Venue's premium services and elegant atmosphere to potential clients through dynamic marketing visuals.",
    tools: "Canva, CapCut",
    outcome:
      "Created high-impact promotional video that effectively communicates the venue's premium positioning and drives event booking inquiries.",
    video: navadurga2Video,
    thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231a0f2e' width='800' height='600'/%3E%3Crect fill='%23f59e0b' opacity='0.15' width='800' height='600'/%3E%3Ctext x='50%25' y='45%25' font-size='44' fill='%23fbbf24' text-anchor='middle' dominant-baseline='middle' font-family='Arial' font-weight='bold'%3EPremium%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='44' fill='%23f59e0b' text-anchor='middle' dominant-baseline='middle' font-family='Arial' font-weight='bold'%3EEvent Venue%3C/text%3E%3C/svg%3E"
  }
];
