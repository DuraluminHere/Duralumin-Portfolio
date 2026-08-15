// =============================================================
// PORTFOLIO DATA — edit this file to update your portfolio.
// All fields are plain text unless noted otherwise.
// Add more entries by copying an existing object in each array.
// =============================================================

const DATA = {
  // Used in the browser tab title
  name: "Kay Doe",

  // ── INTRODUCTION ──────────────────────────────────────────
  intro: {
    greeting: "Hey there! ^_^",
    bio: "I'm a product and operations professional with a background in process improvement, tooling, and cross-functional collaboration. I love turning messy workflows into clean systems that teams actually enjoy using.",
    roles: [
      {
        title: "Operations Lead",
        summary: "Led day-to-day operations for a 40-person SaaS team, owning sprint planning, tooling, and cross-department reporting. Reduced overhead by roughly 20% through process automation and tool consolidation."
      },
      {
        title: "Product Analyst",
        summary: "Partnered with engineering to define requirements, write specs, and track KPIs. Built dashboards in Looker and Metabase that surfaced actionable insights for leadership on a weekly cadence."
      },
      {
        title: "Process Engineer",
        summary: "Designed and documented end-to-end workflows for onboarding, QA, and support escalation. Trained team leads and maintained a living Confluence knowledge base read by over 80 contributors."
      }
    ]
  },

  // ── CERTIFICATIONS ────────────────────────────────────────
  // logo: path to image (e.g. "assets/pmp-logo.png"), or "" for a default badge icon
  certifications: [
    {
      logo: "",
      name: "PMP",
      description: "Project Management Professional · PMI · 2023"
    },
    {
      logo: "",
      name: "Lean Six Sigma Green Belt",
      description: "IASSC · 2022"
    },
    {
      logo: "",
      name: "AWS Cloud Practitioner",
      description: "Amazon Web Services · 2024"
    },
    {
      logo: "",
      name: "Google Data Analytics",
      description: "Coursera / Google · 2021"
    },
    {
      logo: "",
      name: "Scrum Master (CSM)",
      description: "Scrum Alliance · 2022"
    }
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  // Cards alternate orange / yellow accent.
  // media: array of { type, src, caption }
  //   type: "image" | "html" | "pdf"
  //   src:  relative path, e.g. "assets/screenshot.png" or "assets/demo.html"
  projects: [
    {
      title: "Internal Tooling Dashboard",
      problem: "Teams relied on three separate spreadsheets and a legacy intranet to track project status, causing version drift and missed deadlines across departments.",
      solution: "Built a unified internal dashboard in Retool, pulling live data from Airtable and the Jira REST API. All stakeholders gained a single source of truth with filtered views and real-time status.",
      tools: "Retool, Airtable, Jira REST API, JavaScript",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80", caption: "Live dashboard — performance analytics view" },
        { type: "image", src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1080&q=80", caption: "Monitoring screen showing real-time status" }
      ]
    },
    {
      title: "Onboarding Workflow Redesign",
      problem: "New-hire onboarding averaged 3–4 weeks due to manual handoffs and unclear ownership across HR, IT, and team leads — a friction point that showed up repeatedly in 90-day surveys.",
      solution: "Mapped the full onboarding journey, identified 14 friction points, and rebuilt the process in Notion with automated Slack triggers at each milestone. Time-to-productivity dropped to 10 days.",
      tools: "Notion, Zapier, Slack API, Miro",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=1080&q=80", caption: "Before: original process mapped on whiteboard" },
        { type: "image", src: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1080&q=80", caption: "After: redesigned flow presented to stakeholders" }
      ]
    },
    {
      title: "Reporting Pipeline Automation",
      problem: "Monthly executive reports required 12 hours of manual data wrangling across six sources — a fragile process that broke whenever a schema changed upstream.",
      solution: "Built a scheduled Airtable script that pulls, normalizes, and formats data automatically. Delivered an executive summary template now used across three departments.",
      tools: "Airtable Scripting, Python, Google Sheets API",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1080&q=80", caption: "Infrastructure underpinning the automated pipeline" }
      ]
    }
  ],

  // ── PROCESS IMPROVEMENTS ──────────────────────────────────
  processImprovements: [
    {
      summary: "Reduced monthly reporting time from 12 hours to under 2 hours by consolidating data sources into a single automated pipeline.",
      bullets: [
        "Audited 6 reporting sources for redundancy and overlap",
        "Built a scheduled Airtable script to pull and normalize data nightly",
        "Delivered an executive summary template adopted by 3 departments"
      ]
    },
    {
      summary: "Standardized the QA review cycle, cutting the defect escape rate by 35% over two quarters.",
      bullets: [
        "Defined a tiered severity framework adopted org-wide",
        "Introduced pre-release checklists directly in Linear",
        "Trained 8 team leads on structured root cause analysis"
      ]
    },
    {
      summary: "Migrated team documentation from a fragmented SharePoint to a structured Confluence space, reducing support tickets by 25%.",
      bullets: [
        "Audited 400+ pages and archived 60% of outdated content",
        "Designed a 3-tier information architecture with clear ownership",
        "Onboarded 35 contributors with a style guide and templates"
      ]
    },
    {
      summary: "Rebuilt the vendor onboarding checklist, cutting average vendor time-to-activation from 3 weeks to 8 days.",
      bullets: [
        "Identified 9 redundant approval steps that could be parallelized",
        "Created a shared Airtable tracker visible to legal, finance, and ops",
        "Automated status notification emails via Zapier"
      ]
    }
  ],

  // ── SKILLS ────────────────────────────────────────────────
  skills: {
    // tools: icon can be an emoji, a text character, or a path to an image ("assets/python-icon.png")
    tools: [
      { icon: "🗂️", title: "Airtable" },
      { icon: "📋", title: "Notion" },
      { icon: "📊", title: "Looker" },
      { icon: "🔗", title: "Zapier" },
      { icon: "🎯", title: "Jira" },
      { icon: "🗺️", title: "Miro" },
      { icon: "📈", title: "Tableau" },
      { icon: "🐍", title: "Python" },
      { icon: "🔧", title: "Retool" },
      { icon: "📝", title: "Confluence" }
    ],
    technical: [
      { icon: "🗄️", title: "SQL & data modeling" },
      { icon: "🔌", title: "API integration (REST)" },
      { icon: "🗺️", title: "Process mapping & BPMN" },
      { icon: "📊", title: "KPI dashboard design" },
      { icon: "⚙️", title: "Automation scripting" },
      { icon: "📄", title: "Requirements documentation" },
      { icon: "🔍", title: "Data quality auditing" }
    ],
    soft: [
      { icon: "🤝", title: "Cross-functional facilitation" },
      { icon: "💬", title: "Stakeholder communication" },
      { icon: "🔎", title: "Root cause analysis" },
      { icon: "🎙️", title: "Workshop facilitation" },
      { icon: "✍️", title: "Technical writing" },
      { icon: "🔄", title: "Change management" },
      { icon: "🧩", title: "Structured problem-solving" }
    ]
  },

  // ── OTHER PROJECTS ────────────────────────────────────────
  // url: use "#" if there is no link yet
  otherProjects: [
    {
      title: "Budget Tracker Template",
      url: "#",
      description: "A free Airtable base with 12 formulas and 4 views for personal or team budget tracking. Over 500 copies made by the community."
    },
    {
      title: "Ops Metrics Glossary",
      url: "#",
      description: "A crowd-sourced Notion document defining 80+ operations metrics with calculation notes and caveats. Shared with the Ops Nation Slack community."
    },
    {
      title: "Meeting Cost Calculator",
      url: "#",
      description: "A small web tool that estimates the fully-loaded cost of a meeting in real time based on attendee count and seniority mix."
    }
  ]
};
