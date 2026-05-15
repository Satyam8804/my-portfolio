import chatifyD1 from "./image/chatify/desktop/chatify-login.png";
import chatifyD2 from "./image/chatify/desktop/chatify-chat.png";
import chatifyD3 from "./image/chatify/desktop/chatify-chatItems.png";
import chatifyD4 from "./image/chatify/desktop/chatify-contactInfo.png";
import chatifyD5 from "./image/chatify/desktop/chatify-callhistory.png";

import chatifyM1 from "./image/chatify/mobile/chatify-login-mb.png";
import chatifyM2 from "./image/chatify/mobile/chatify-chat-mb.png";
import chatifyM3 from "./image/chatify/mobile/chatify-chatItems-mb.png";
import chatifyM4 from "./image/chatify/mobile/chatify-contactInfo-mb.png";
import chatifyM5 from "./image/chatify/mobile/chatify-callhistory-mb.png";

import fwD1 from "./image/flashwash/desktop/flashwash-register.png";
import fwD2 from "./image/flashwash/desktop/flashwash-landing.png";
import fwD3 from "./image/flashwash/desktop/flashwash-book.png";

import fwM1 from "./image/flashwash/mobile/flashwash-register-mb.png";
import fwM2 from "./image/flashwash/mobile/flashwash-landing-mb.png";
import fwM3 from "./image/flashwash/mobile/flashwash-book-mb.png";

import bookOpediaM1 from "./image/bookOpedia/landing.png";


import dp from "./image/dp.jpeg";

const portfolioConfig = {
  name: "Satyam Kumar",
  title: "Full Stack Developer",
  tagline: "Building real-time, scalable web apps with React & Node.js",
  about: `I'm a Full Stack Developer currently working at Tata Consultancy Services, 
    passionate about building real-time, user-focused web applications. 
    I specialize in the MERN stack and have hands-on experience with 
    WebRTC, WebSockets, and modern frontend frameworks. 
    With 255+ LeetCode problems solved, I bring strong problem-solving 
    skills to every project I work on.`,

  email: "satyam8804378323@gmail.com",
  phone: "+91-6207621814",
  location: "Bengaluru, Karnataka, India",
  avatarUrl: dp,

  // ── Social Links ───────────────────────────────────────────
  social: {
    github: "https://github.com/Satyam8804",
    linkedin: "https://linkedin.com/in/Satyam8804",
    twitter: "https://twitter.com/satyam8804",
    portfolio: "https://satyam8804.github.io/MyPortfolio/portfolio",
    leetcode: "https://leetcode.com/u/satyam_8804/",
  },

  resumeUrl: "/Satyam_Resume.pdf",

  skills: [
    {
      category: "Frontend",
      icon: "🎨",
      items: [
        "React.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Redux Toolkit",
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "WebRTC"],
    },
    {
      category: "Database",
      icon: "🗄️",
      items: ["MongoDB", "SQL", "Firebase", "SQLite"],
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Linux",
        "Render",
        "Google OAuth",
      ],
    },
    {
      category: "Salesforce",
      icon: "☁️",
      items: [
        "Apex",
        "LWC",
        "Salesforce Flows",
        "ServiceNow",
        "Data Management",
      ],
    },
    {
      category: "CS Fundamentals",
      icon: "🧠",
      items: ["DSA", "OOPs", "DBMS", "OS", "255+ LeetCode (135M, 28H)"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Chatify",
      subtitle: "Real-Time Chat & Calling Platform",
      description:
        "Full-stack real-time chat app supporting 50+ concurrent users with WebSocket messaging and WebRTC peer-to-peer audio/video calling. Features Google Auth, admin dashboard, and user management.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "WebRTC",
        "WebSockets",
        "Tailwind CSS",
        "Google OAuth",
        "Brevo",
      ],
      demoUrl: "https://chatify-1-8qeq.onrender.com/",
      githubUrl: "",
      featured: true,
      status: "Live",

      // ── Thumbnails ─────────────────────────────────────────
      // Use separate desktop + mobile arrays for the device mockup.
      // Desktop images: wide / landscape screenshots (16:9 or similar).
      // Mobile images:  portrait screenshots taken on a phone (9:16 or similar).
      // Both arrays are optional — omit either to reuse the other,
      // or leave thumbnails out entirely to show the gradient placeholder.
      thumbnails: {
        desktop: [chatifyD1, chatifyD2, chatifyD3, chatifyD4, chatifyD5],
        mobile: [chatifyM1, chatifyM2, chatifyM3, chatifyM4, chatifyM5],
      },

      thumbColors: ["#1e1b4b", "#312e81"], // shown when thumbnails are missing
    },

    {
      id: 2,
      title: "FlashWash",
      subtitle: "Car Wash Booking Platform",
      description:
        "Feature-rich car wash booking platform supporting 3 user roles (admin, customer, employee) with real-time appointment tracking and JWT-based authentication. Manages 100+ appointments.",
      techStack: [
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "JWT",
        "MongoDB",
        "Postman",
      ],
      demoUrl: "https://flash-frontend.onrender.com/",
      githubUrl: "https://github.com/Satyam8804/Flash-Wash",
      featured: false,
      status: "Live",

      thumbnails: {
        desktop: [fwD1, fwD2, fwD3],
        mobile: [fwM1, fwM2, fwM3],
      },

      thumbColors: ["#0c4a6e", "#075985"],
    },

    {
      id: 3,
      title: "BookOpedia",
      subtitle: "Mobile Book Reader App",
      mobileOnly: true,
      description:
        "Android app for book enthusiasts supporting 10+ genres with Firebase-backed storage for 500+ books. Features secure auth, offline SQLite support, and dynamic user contributions.",
      techStack: ["Android", "Kotlin", "XML", "Firebase", "SQLite"],
      demoUrl: "",
      githubUrl: "https://github.com/Satyam8804/BookOpedia",
      featured: false,
      status: "Completed",

      // BookOpedia is a mobile-only app — provide only mobile screenshots.
      // The MacBook frame will reuse mobile images as a fallback.
      thumbnails: {
        mobile: [bookOpediaM1],
      },

      thumbColors: ["#1c1917", "#292524"],
    },
  ],

  // ── Experience ─────────────────────────────────────────────
  experience: [
    {
      id: 1,
      company: "Tata Consultancy Services (TCS)",
      role: "Associate System Engineer",
      period: "April 2025 – Present",
      location: "Bengaluru, Karnataka",
      type: "Full-time",
      logo: "TCS",
      bullets: [
        "Managed and resolved Salesforce CRM tickets via ServiceNow, diagnosing access issues, opportunity module errors, and configuration incidents for enterprise users.",
        "Handled Salesforce CRM access provisioning for enterprise users, managing access requests, approvals, and revocations in compliance with security policies and SLA requirements.",
        "Gained hands-on experience with Apex, Lightning Web Components (LWC), and Salesforce Flows; selected for Salesforce Developer role on PwC client project.",
      ],
    },
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      institution: "Lovely Professional University (LPU)",
      degree: "B.Tech in Computer Science",
      period: "Sep 2020 – Present",
      location: "Phagwara, Punjab",
      courses: ["DSA", "DBMS", "Operating Systems", "Linux Fundamentals"],
    },
  ],

  // ── Stats (shown on Hero) ──────────────────────────────────
  stats: [
    { label: "Projects Built", value: "3+" },
    { label: "LeetCode Solved", value: "255+" },
    { label: "Hard Problems", value: "28" },
  ],
};

export default portfolioConfig;
