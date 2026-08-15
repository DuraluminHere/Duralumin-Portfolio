const DATA = {
  // Used in the browser tab title
  name: "Duralumin",

  // ── INTRODUCTION ──────────────────────────────────────────
  intro: {
    greeting: "Hey there!",
    bio: "My name’s Duralumin, and I make technology work for people. I have a passion for deeply understanding problems and inefficiencies and doing whatever is needed to make things better. That could be building a tool, designing or reworking a process, troubleshooting, or just facilitating interdepartmental communication. I'd love you help you with the things you need to do!",
    roles: [
      {
        title: "Project Lead",
        summary: "Helped lead concurrent remote AI training projects with up to 7000 workers each at a high-growth start-up. Collaborated with other leads to design fast-paced data collection and generation initiatives, execute ramps, rapidly align, monitor performance, and perform last-pass quality audits."
      },
      {
        title: "Process Engineer",
        summary: "Investigates potential avenues for process improvements, presents recommendations to management, and implements solutions as best aligned with organizational priorities and needs."
      },
      {
        title: "Help Desk Technician",
        summary: "Provides Tier 1 and Tier 2 technical support for campus community of over 8,000 students, staff, and faculty in person, over email and phone, by Zoom, and with remote support screen sharing software in a fast-paced environment."
      }
    ]
  },

  // ── CERTIFICATIONS ────────────────────────────────────────
  // logo: path to image (e.g. "assets/pmp-logo.png"), or "" for a default badge icon
  certifications: [
    {
      logo: "assets/badge-aws-saa.png",
      name: "AWS Solutions Architect Associate",
      description: "Validates my ability to review, design, and improve architectures based on the AWS Well-Architected Framework, incorporating AWS cloud-based services into resilient solutions."
    },
    {
      logo: "assets/badge-comptia-a-plus.png",
      name: "CompTIA A+",
      description: "Shows that I can perform critical IT support tasks, as well as diagnose and resolve IT issues based on the CompTIA troubleshooting methodology."
    },
    {
      logo: "assets/badge-ms-excel-associate.png",
      name: "Excel Associate",
      description: "Proves that I can create and edit complex Excel workbooks, using formulas and graphic elements to create professional reports."
    }
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  // Cards alternate orange / yellow accent.
  // media: array of { type, src, caption }
  //   type: "image" | "html" | "pdf"
  //   src:  relative path, e.g. "assets/screenshot.png" or "assets/demo.html"
  projects: [
    {
      title: "DoppleDesk Help Desk SaaS",
      problem: "Small organizations find popular help desk software expensive and bloated.",
      solution: "I built DoppleDesk, which supports 20 free agents with the trade-off that each organization must have 50 tickets or fewer in the system at once. This keeps cloud use low, allowing more free seats than popular software and flat, predictable fees for higher limits instead of traditional per-seat charges.",
      tools: "Planned architecture myself, mocked UI in Figma Make, built using Lovable (extensive testing, debugging, and manual solution design), manually configured Squarespace domain with Zoho inbox, Paddle as merchant of record (higher fees than Stripe but easier tax compliance), ongoing SEO with Semrush and Google Search console",
      media: [
        { type: "image", src: "assets/project-doppledesk-logo.png", caption: "The DoppleDesk logo I designed, overlaid over the ticket queue." }
      ]
    },
    {
      title: "Automated Notion Database Dashboard",
      problem: "The xkcd webcomic has over 3000 entries but no property-based search.",
      solution: "I created XKCDatabase NEO on Notion. It provides data for all 3000+ numbered xkcd comics, dynamic dashboards for long- and short-term trends, and multi-property search.",
      tools: "Make.com, API/JSON calls to Explain XKCD wiki, Notion database/automations, regular expressions, YOLOv5s computer vision model (fine-tuned myself with >550 hand-annotated comics over 300 epochs to detect comic panels without false positives) deployed on Hugging Face as a demo and an API",
      media: [
        { type: "image", src: "assets/project-xkcdatabase-dash.png", caption: "The dashboard for XKCDatabase NEO, which shows comic statistics over time." },
        { type: "image", src: "assets/project-xkcdatabase-comics.png", caption: "An example of how comics look stored in XKCDatabase NEO." },
        { type: "image", src: "assets/project-xkcdatabase-make.png", caption: "The Make.com automation used to fetch xkcd comic data with error handling." },
        { type: "image", src: "assets/project-xkcdatabase-model.png", caption: "The fine-tuned YOLOv5s model in action." }
      ]
    }
  ],

  // ── PROCESS IMPROVEMENTS ──────────────────────────────────
  processImprovements: [
    {
      summary: "Proposed and built a Forms/Sheets/Drive pipeline for my Guest Service team’s room inspections, replacing text messages and formatting reports for bulk submission",
      bullets: [
        "Tickets submitted on first notice for ~95% of issues (up from ~70%)",
        "Reduced manual entry, formatting, and detail chasing by ~5hr/week",
        "Resolutions in days (up from 1-2 weeks)",
        "Revenue boosted as more damages were logged within the billing deadline"
      ]
    },
    {
      summary: "Rebuilt Slack environment, including onboarding automations and help ticket workflows",
      bullets: [
        "Halved average remote onboarding time from ~2 weeks to ~1 week",
        "Users submit ~1 help ticket per issue instead of ~3",
        "Improvements built on clear, actionable instructions, data validation (reduces backtracking), and well-documented workflows"
      ]
    },
    {
      summary: "Audited a Google Workspace after the admin left suddenly, proposed changes directly to the CEO, and carried them out",
      bullets: [
        "Permissions given by department, eliminating delays and manual changes",
        "Organizational units for app permissions and dynamic Google Groups for shared inboxes and Drives",
        "Recommended and wrote policy for name-based emails instead of role-based for professionalism and accountability"
      ]
    }
  ],

  // ── SKILLS ────────────────────────────────────────────────
  skills: {
    // tools: icon can be an emoji, a text character, or a path to an image ("assets/python-icon.png")
    tools: [
      { icon: "💜", title: "Lovable" },
      { icon: "⚙️", title: "Google Admin" },
      { icon: "⚡", title: "Make.com" },
      { icon: "🪛", title: "GitHub" },
      { icon: "📝", title: "Google Forms" },
      { icon: "📊", title: "Google Sheets" },
      { icon: "🤗", title: "Hugging Face" },
      { icon: "💬", title: "Slack" },
      { icon: "🎨", title: "Figma Make" },
      { icon: "🧠", title: "Notion" }
      { icon: "💻", title: "C Sharp" },
    ],
    technical: [
      { icon: "🌐", title: "API endpoints and JSON" },
      { icon: "📈", title: "Databases and SQL querying" },
      { icon: "🤖", title: "AI-assisted development" },
      { icon: "⚡", title: "Automation" },
      { icon: "🧠", title: "Manual coding and solution design" },
      { icon: "⚙️", title: "Machine learning" },
      { icon: "📄", title: "Documentation" },
      { icon: "🔍", title: "Data quality auditing" }
    ],
    soft: [
      { icon: "🤝", title: "Cross-departmental facilitation" },
      { icon: "💬", title: "Communication" },
      { icon: "💼", title: "Professionalism" },
      { icon: "🎙️", title: "Workshop facilitation" },
      { icon: "👥", title: "Conflict resolution" },
      { icon: "🧩", title: "Structured problem-solving" }
    ]
  },

  // ── OTHER PROJECTS ────────────────────────────────────────
  // url: use "#" if there is no link yet
  otherProjects: [
    {
      title: "wDIM Desktop Icon Manager",
      url: "https://github.com/duralumin-here/wDIM-Desktop-Icon-Manager",
      description: "A manual/hand-coded C# and Windows Forms application to create, edit and apply desktop themes, with comprehensive documentation"
    },
    {
      title: "Con•sensus",
      url: "https://con-sensus.lovable.app/",
      description: "A proof-of-concept “news” website made with Lovable that calls Gemini 3 Flash Preview and exemplifies the dangers of LLM-manufactured consent"
    },
    {
      title: "PitchLoop",
      url: "https://pitchloop.lovable.app/",
      description: "A utility for looping and pitch-shifting YouTube videos in-browser, since an iOS update broke the extension I was using for YouTube pitch-shifting"
    },
    {
      title: "Aesthetica Standard",
      url: "https://aesthetica-standard.lovable.app/",
      description: "A simple, quick photo editor made with Lovable to create aesthetically pleasing posts and wallpapers without log-in or common modern website bloat"
    }
  ]
};
