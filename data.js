const DATA = {
  name: "Duralumin",

  // ── INTRODUCTION ──────────────────────────────────────────
  intro: {
    greeting: "Hey there!",
    bio: "My name’s Duralumin, and I make technology work for people. I have a passion for deeply understanding problems and inefficiencies and doing whatever is needed to make things better. That could be building a tool, designing or reworking a process, troubleshooting, or just facilitating interdepartmental communication. I'd love you help you with the things you need to do!",
    roles: [
      {
        title: "Process Engineer",
        summary: "Investigates potential avenues for process improvements, presents recommendations to management, and implements solutions as best aligned with organizational priorities and needs."
      },
      {
        title: "Project Lead",
        summary: "Helped lead concurrent remote AI training projects with up to 7000 workers each at a high-growth start-up. Collaborated with other leads to design fast-paced data collection and generation initiatives, execute ramps, rapidly align, monitor performance, and perform last-pass quality audits."
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
      name: "CompTIA A+ Certification",
      description: "Shows that I can perform critical IT support tasks, as well as diagnose and resolve IT issues based on the CompTIA troubleshooting methodology."
    },
    {
      logo: "assets/badge-ms-excel-associate.png",
      name: "Microsoft 365 Excel Associate",
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
      solution: "I built [DoppleDesk](https://doppledesk.com/), which supports 20 free agents with the trade-off that each organization must have 50 tickets or fewer in the system at once. This keeps cloud use low, allowing more free seats than popular software and flat, predictable fees for higher limits instead of traditional per-seat charges.",
      tools: "Planned the architecture myself, mocked UI in Figma Make, built using Lovable (extensive testing, debugging, and manual solution design), manually configured Squarespace domain with Zoho inbox, Paddle as merchant of record (higher fees than Stripe but easier tax compliance), ongoing SEO with Semrush and Google Search console.",
      media: [
        { type: "image", src: "assets/project-doppledesk-logo.png", caption: "The DoppleDesk logo I designed, overlaid over the ticket queue." }
      ]
    },
        {
      title: "CRM Scoping, Proposal and Migration",
      problem: "The Junior League of Reading had to migrate to a new CRM since its previous one was being sunset. They weren't sure which to choose, or how to perform the migration.",
      solution: "I recommended and am carrying out a full migration to Zeffy. I've migrated a subset of data and provided written and live demoes, so once the board approves (likely some time in early September) I'll move the rest of the data and finalize the reporting presets, workflow templates, and written documentation to allow easy hand-off and ongoing maintenance.",
      tools: "After talking with JLR about their needs, wants, desired integrations and budget, I scoped vendors and narrowed them down to three top options. I then researched those in-depth to develop a proposal brief with a comparison matrix and gap analysis, recommending Zeffy as the most appropriate option while noting its limitations.",
      media: [
        { type: "pdf", src: "assets/project-crm-report.pdf", caption: "The full two-page proposal brief I wrote (manual, not LLM-written) and presented to the JLR IT head." },
        { type: "html", src: "assets/project-crm-scorecard.html", caption: "The scorecard I created while researching and evaluating our three top CRM options. These notes formed the basis for the proposal." }
      ]
    },
    {
      title: "Automated AI-Powered Notion Database Dashboard",
      problem: "The [xkcd webcomic](https://xkcd.com) has over 3000 entries but no property-based search.",
      solution: "I created [XKCDatabase NEO](https://duralumin.notion.site/xkcdatabaseneo) on Notion. It provides data for all 3000+ numbered xkcd comics, dynamic dashboards for long- and short-term trends, and multi-property search.",
      tools: "[Make.com automation](https://us2.make.com/public/shared-scenario/psCyBMbRn7e/xkcdatabase-maintainer), API/JSON calls to Explain XKCD wiki, Notion database/automations, regular expressions, YOLOv5s computer vision model (fine-tuned myself with >550 hand-annotated comics over 300 epochs) [deployed on Hugging Face](https://huggingface.co/spaces/DuraluminHere/xkcd-panel-finder) as a demo and an API to detect panel edges.",
      media: [
        { type: "image", src: "assets/project-xkcdatabase-dash.png", caption: "The dashboard for XKCDatabase NEO, which shows comic statistics over time." },
        { type: "image", src: "assets/project-xkcdatabase-comics.png", caption: "An example of how comics look stored in XKCDatabase NEO." },
        { type: "image", src: "assets/project-xkcdatabase-make.png", caption: "The Make.com automation used to fetch xkcd comic data with error handling." },
        { type: "image", src: "assets/project-xkcdatabase-vision.png", caption: "The fine-tuned YOLOv5s model in action." }
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
      summary: "Rebuilt an organization's Slack environment, including onboarding automations and help ticket workflows",
      bullets: [
        "Halved average remote onboarding time from ~2 weeks to ~1 week",
        "Users submit ~1 help ticket per issue instead of ~3",
        "Improvements built on clear, actionable instructions, data validation (reduces backtracking), and well-documented workflows"
      ]
    },
    {
      summary: "Identified redundancies and discrepancies in internal process documentation and built a new reproducable layout design to resolve it",
      bullets: [
        "Separate pages for tasker and reviewer portions of the same AI data training pipeline led to missed updates and disagreement on standards",
        "Proposed and built a dual-column design with the tasker instructions on the left and the reviewer rubric on the right",
        "Taskers and reviewers stayed on the same page, and this design scheme has now been adopted across the start-up's projects"
      ]
    },
    {
      summary: "Audited a Google Workspace after the admin left suddenly, proposed changes directly to the CEO, and carried them out",
      bullets: [
        "Permissions given by department, eliminating delays and manual changes",
        "Organizational units for specific app permissions and dynamic Google Groups for shared inboxes and Drives",
        "Recommended and wrote policy for name-based emails instead of role-based for professionalism and accountability"
      ]
    }
  ],

  // ── SKILLS ────────────────────────────────────────────────
  skills: {
    // tools: icon can be an emoji, a text character, or a path to an image ("assets/python-icon.png")
    tools: [
      { icon: "assets/icon-lovable.png", title: "Lovable" },
      { icon: "assets/icon-admin.png", title: "Google Admin" },
      { icon: "assets/icon-make.png", title: "Make.com" },
      { icon: "assets/icon-github.png", title: "GitHub" },
      { icon: "assets/icon-forms.png", title: "Google Forms" },
      { icon: "assets/icon-sheets.png", title: "Google Sheets" },
      { icon: "assets/icon-squarespace.png", title: "Squarespace" },
      { icon: "assets/icon-hf.png", title: "Hugging Face" },
      { icon: "assets/icon-slack.png", title: "Slack" },
      { icon: "assets/icon-figma.png", title: "Figma Make" },
      { icon: "assets/icon-notion.png", title: "Notion" },
      { icon: "assets/icon-csharp.png", title: "C Sharp" }
    ],
    technical: [
      { icon: "assets/symbol-brackets.png", title: "API endpoints and JSON" },
      { icon: "assets/symbol-databases.png", title: "Databases and SQL querying" },
      { icon: "assets/symbol-computer.png", title: "AI-assisted development" },
      { icon: "assets/symbol-automation.png", title: "Automation" },
      { icon: "assets/symbol-design.png", title: "Solution design" },
      { icon: "assets/symbol-coding.png", title: "Programming" },
      { icon: "assets/symbol-ml.png", title: "Machine learning" },
      { icon: "assets/symbol-notes.png", title: "Documentation" },
      { icon: "assets/symbol-audit.png", title: "Data quality auditing" }
    ],
    soft: [
      { icon: "assets/symbol-meeting.png", title: "Cross-departmental collaboration" },
      { icon: "assets/symbol-talking.png", title: "Communication" },
      { icon: "assets/symbol-briefcase.png", title: "Professionalism" },
      { icon: "assets/symbol-training.png", title: "Training and workshops" },
      { icon: "assets/symbol-conflict.png", title: "Conflict resolution" },
      { icon: "assets/symbol-presentation.png", title: "Presentations and proposals" },
      { icon: "assets/symbol-problem.png", title: "Structured problem-solving" }
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
      title: "PitchLoop",
      url: "https://pitchloop.lovable.app/",
      description: "A utility for looping and pitch-shifting YouTube videos in your browser, since an iOS update broke the extension I was using for YouTube pitch-shifting"
    },
    {
      title: "Aesthetica Standard",
      url: "https://aesthetica-standard.lovable.app/",
      description: "A simple, easy-to-use photo editor made with Lovable to create aesthetically pleasing image posts and wallpapers without any log-ins or modern website bloat"
    }
  ]
};
