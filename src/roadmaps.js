const roadmapGuides = {
  youtuber: {
    title: "Content Creator Studio",
    description: "A comprehensive content management system for YouTubers to plan, create, and analyze their video content. The system helps creators organize their content calendar, track performance metrics, and streamline their production workflow.",
    implementation: "The application will help YouTubers manage their content creation process from ideation to publication. Users can plan their content calendar, track video performance, and get insights on audience engagement. The system will also help with thumbnail creation and SEO optimization.",
    roadmap: [
      "Design content calendar interface",
      "Implement video project management",
      "Create analytics dashboard",
      "Build thumbnail generator",
      "Add SEO optimization tools",
      "Implement collaboration features"
    ],
    descriptions: [
      "Develop a visual calendar for planning, scheduling, and organizing video content. Features should include drag-and-drop functionality, reminders, and integration with publishing platforms.",
      "Create a system to manage all aspects of video production, including scripting, shooting, editing, and publishing. Allow users to track project status, assign tasks, and set deadlines.",
      "Build a dashboard that aggregates and visualizes key performance metrics such as views, watch time, subscriber growth, and engagement. Include customizable charts and export options.",
      "Implement a tool for generating and editing video thumbnails. Provide templates, image editing features, and best practice tips for creating eye-catching thumbnails.",
      "Add tools to help optimize video titles, descriptions, and tags for search engines. Include keyword suggestions, SEO scoring, and competitor analysis.",
      "Enable collaboration among team members with shared project boards, real-time editing, and communication tools. Support permissions, version control, and activity logs."
    ],
    resources: {
      "YouTube Data API": "API for accessing YouTube analytics and channel data",
      "React.js": "Frontend framework for building the user interface",
      "Node.js": "Backend runtime for server operations",
      "MongoDB": "Database for storing project and analytics data"
    }
  },

  instagram: {
    title: "Visual Content Planner",
    description: "An intelligent content planning system for Instagram creators to design, schedule, and analyze their visual content. The app helps users maintain consistent aesthetics, plan content grids, and optimize posting times.",
    implementation: "The application will provide tools for visual content planning and grid layout design. Users can preview their Instagram feed, schedule posts, and analyze engagement patterns. The system will also suggest optimal posting times and hashtags.",
    roadmap: [
      "Create visual grid planner",
      "Implement post scheduling system",
      "Build hashtag analyzer",
      "Add engagement tracking",
      "Implement AI-powered caption suggestions",
      "Create automated posting system"
    ],
    descriptions: [
      "Design and implement a drag-and-drop interface for planning Instagram grid layouts. Features include template presets, color scheme analysis, and visual preview of how posts will appear in the feed. Users can arrange posts, add placeholders, and maintain aesthetic consistency.",
      
      "Develop a comprehensive scheduling system with calendar integration, time zone support, and optimal posting time suggestions. Include features for batch scheduling, post queuing, and automated reminders. Support for both single posts and carousel content.",
      
      "Create an intelligent hashtag analysis tool that suggests relevant hashtags based on content, tracks hashtag performance, and identifies trending topics. Features include hashtag grouping, performance metrics, and competitor hashtag analysis.",
      
      "Implement detailed engagement tracking with metrics for likes, comments, saves, and shares. Create visual analytics dashboards showing engagement patterns, audience growth, and content performance. Include features for tracking competitor engagement.",
      
      "Develop an AI-powered caption generator that creates engaging captions based on image content, brand voice, and trending topics. Include features for emoji suggestions, hashtag integration, and tone customization. Support for multiple languages.",
      
      "Build an automated posting system with features for content queuing, error handling, and post verification. Include support for multiple Instagram accounts, content recycling, and emergency post cancellation. Integration with Instagram's API for reliable posting."
    ],
    resources: {
      "Instagram Graph API": "API for Instagram content management",
      "Vue.js": "Frontend framework for reactive interfaces",
      "Express.js": "Backend framework for API development",
      "PostgreSQL": "Database for content and analytics storage"
    }
  },

  gym: {
    title: "Fitness Progress Tracker",
    description: "A comprehensive fitness tracking system that helps users monitor workouts, track progress, and achieve their fitness goals. The app provides personalized workout plans and nutrition guidance.",
    implementation: "The application will track users' workout routines, progress photos, and nutrition data. It will provide visual progress tracking, workout suggestions, and meal planning features. The system will also include form checking and exercise tutorials.",
    roadmap: [
      "Design workout logging interface",
      "Implement progress tracking system",
      "Create nutrition calculator",
      "Build exercise library",
      "Add progress photo comparison",
      "Implement AI form checking"
    ],
    descriptions: [
      "Develop an intuitive interface for users to log workouts, including exercises, sets, reps, and weights. Support custom routines, quick entry, and workout templates.",
      "Create a system to track user progress over time, visualizing metrics such as weight, body measurements, and personal records. Include charts, milestones, and goal tracking.",
      "Build a calculator that helps users estimate daily caloric needs and macronutrient breakdowns based on their goals. Allow users to log meals and track nutrition.",
      "Develop a searchable library of exercises with instructions, images, and videos. Allow users to add custom exercises and filter by muscle group or equipment.",
      "Enable users to upload and compare progress photos side-by-side. Provide privacy controls, date stamps, and visual progress indicators.",
      "Integrate AI to analyze exercise form using video or photo input. Provide real-time feedback, tips for improvement, and track form consistency over time."
    ],
    resources: {
      "TensorFlow.js": "Machine learning for form checking",
      "React Native": "Cross-platform mobile development",
      "Firebase": "Backend and real-time database",
      "Cloud Storage": "For storing progress photos and videos"
    }
  },

  blogger: {
    title: "Content Management Hub",
    description: "A powerful blogging platform that helps writers organize, create, and optimize their content. The system includes SEO tools, content planning features, and audience analytics.",
    implementation: "The application will provide a rich text editor, content calendar, and SEO optimization tools. Users can manage their editorial calendar, track content performance, and get insights on reader engagement.",
    roadmap: [
      "Build rich text editor",
      "Implement content calendar",
      "Create SEO analysis tools",
      "Add analytics dashboard",
      "Build audience insights",
      "Implement content distribution"
    ],
    descriptions: [
      "Develop a feature-rich text editor supporting formatting, media embedding, and autosave. Include markdown support, version history, and collaborative editing.",
      "Create a calendar for planning and scheduling blog posts. Allow users to set deadlines, assign topics, and visualize publishing frequency.",
      "Implement tools to analyze and improve SEO for blog posts. Provide keyword suggestions, readability analysis, and on-page optimization tips.",
      "Build a dashboard to track blog performance metrics such as page views, bounce rate, and average read time. Include customizable reports and export options.",
      "Develop insights into audience demographics, behavior, and engagement. Provide actionable recommendations to grow readership and increase retention.",
      "Enable automated and manual distribution of content to social media, newsletters, and syndication platforms. Track distribution performance and engagement."
    ],
    resources: {
      "Draft.js": "Rich text editing framework",
      "Next.js": "React framework for SEO optimization",
      "Express.js": "Backend API framework",
      "PostgreSQL": "Content and analytics database"
    }
  },

  designer: {
    title: "Design Project Manager",
    description: "A comprehensive design project management system that helps designers organize their work, collaborate with clients, and maintain their portfolio. The app streamlines the design workflow from concept to delivery.",
    implementation: "The application will help designers manage projects, track revisions, and collaborate with clients. It will include tools for mood board creation, version control, and design asset management.",
    roadmap: [
      "Create project management interface",
      "Implement file version control",
      "Build mood board creator",
      "Add client collaboration tools",
      "Create design asset library",
      "Implement feedback system"
    ],
    descriptions: [
      "Develop an interface for managing design projects, including task lists, deadlines, and project milestones. Support project templates and progress tracking.",
      "Integrate version control for design files, allowing users to save, revert, and compare different versions. Support branching and merging for collaborative work.",
      "Build a tool for creating and organizing mood boards with images, colors, and typography. Allow sharing and real-time collaboration with clients or team members.",
      "Add tools for seamless client collaboration, including file sharing, feedback threads, and approval workflows. Support notifications and activity tracking.",
      "Create a centralized library for storing and organizing design assets such as icons, images, and templates. Support tagging, search, and usage analytics.",
      "Implement a feedback system for collecting, organizing, and responding to client or team feedback. Support inline comments, status tracking, and resolution history."
    ],
    resources: {
      "Figma API": "Design tool integration",
      "React.js": "Frontend framework",
      "Node.js": "Backend runtime",
      "AWS S3": "Asset storage solution"
    }
  },

  photographer: {
    title: "Photo Workflow Manager",
    description: "A comprehensive photography workflow management system that helps photographers organize shoots, edit photos, and deliver to clients. The app streamlines the entire photography process from booking to delivery.",
    implementation: "The application will manage photo shoots, client communications, and image delivery. It will include tools for photo organization, basic editing, and client galleries.",
    roadmap: [
      "Design shoot management system",
      "Implement photo organization",
      "Create client gallery system",
      "Build basic editing tools",
      "Add booking calendar",
      "Implement automated delivery"
    ],
    descriptions: [
      "Develop a system to manage photo shoots, including scheduling, shot lists, and client requirements. Support reminders and location management.",
      "Create tools for organizing photos by date, event, or client. Support tagging, rating, and batch operations for efficient management.",
      "Build a secure gallery system for clients to view, select, and download photos. Support password protection, watermarks, and order tracking.",
      "Implement basic photo editing tools such as cropping, color correction, and filters. Allow batch editing and non-destructive changes.",
      "Add a booking calendar for scheduling shoots, managing availability, and sending automated reminders to clients.",
      "Enable automated delivery of final photos to clients via secure links or downloads. Support delivery tracking and expiration controls."
    ],
    resources: {
      "Sharp.js": "Image processing library",
      "React.js": "Frontend framework",
      "Express.js": "Backend framework",
      "AWS S3": "Photo storage solution"
    }
  },

  chef: {
    title: "Recipe Development Studio",
    description: "A professional recipe development and management system for chefs to create, test, and share their culinary creations. The app helps with recipe scaling, cost calculation, and nutrition analysis.",
    implementation: "The application will help chefs develop and document recipes, calculate costs and nutrition information, and manage their recipe collection. It will include tools for meal planning and inventory management.",
    roadmap: [
      "Create recipe builder interface",
      "Implement cost calculator",
      "Build nutrition analyzer",
      "Add inventory management",
      "Create meal planning tools",
      "Implement recipe scaling"
    ],
    descriptions: [
      "Develop an interface for creating, editing, and organizing recipes. Support ingredient lists, instructions, and media attachments.",
      "Implement a calculator to estimate the cost of recipes based on ingredient prices and quantities. Allow users to update prices and generate shopping lists.",
      "Build a tool to analyze the nutritional content of recipes, including calories, macronutrients, and vitamins. Support custom ingredient entries.",
      "Add inventory management features to track ingredient stock, expiration dates, and usage. Support alerts for low stock and integration with shopping lists.",
      "Create tools for planning meals over days or weeks, generating shopping lists, and tracking dietary goals. Support templates and recurring plans.",
      "Implement recipe scaling to adjust ingredient quantities for different serving sizes. Support automatic recalculation of nutrition and cost."
    ],
    resources: {
      "USDA Food Database API": "Nutrition data source",
      "Vue.js": "Frontend framework",
      "Node.js": "Backend runtime",
      "MongoDB": "Recipe database"
    }
  },

  musician: {
    title: "Music Production Suite",
    description: "A comprehensive music production and project management system for musicians to organize their work, collaborate with others, and track their progress. The app helps with song development, recording, and distribution.",
    implementation: "The application will help musicians manage their projects, record ideas, and collaborate with other artists. It will include tools for audio recording, project organization, and track sharing.",
    roadmap: [
      "Build project organization system",
      "Implement audio recording",
      "Create collaboration tools",
      "Add track sharing features",
      "Build basic mixing tools",
      "Implement distribution system"
    ],
    descriptions: [
      "Develop a system for organizing music projects, including song ideas, arrangements, and production notes. Support project templates and progress tracking.",
      "Implement high-quality audio recording tools with support for multiple tracks, effects, and real-time monitoring. Allow exporting in various formats.",
      "Create tools for collaborating with other musicians, including file sharing, version control, and real-time editing. Support feedback and approval workflows.",
      "Add features for sharing tracks with collaborators, clients, or fans. Support private links, download controls, and feedback collection.",
      "Build basic mixing tools for adjusting levels, panning, and effects. Support presets, automation, and non-destructive editing.",
      "Implement a distribution system for releasing music to streaming platforms, stores, and social media. Support scheduling, analytics, and royalty tracking."
    ],
    resources: {
      "Web Audio API": "Audio processing",
      "React.js": "Frontend framework",
      "Node.js": "Backend runtime",
      "AWS S3": "Audio file storage"
    }
  },

  podcaster: {
    title: "Podcast Production Manager",
    description: "A comprehensive podcast production and management system that helps podcasters plan episodes, record content, and distribute their shows. The app streamlines the entire podcasting workflow.",
    implementation: "The application will help podcasters manage episode planning, recording, and distribution. It will include tools for show notes creation, guest management, and analytics tracking.",
    roadmap: [
      "Create episode planning system",
      "Implement recording interface",
      "Build show notes editor",
      "Add guest management",
      "Create distribution tools",
      "Implement analytics tracking"
    ],
    descriptions: [
      "Develop a system for planning podcast episodes, including topic selection, research notes, and scheduling. Support templates and recurring segments.",
      "Implement a user-friendly interface for recording podcast episodes, with support for remote guests, multi-track recording, and live editing.",
      "Build an editor for creating and formatting show notes, including links, timestamps, and resources. Support collaboration and version history.",
      "Add tools for managing guest invitations, bios, and scheduling. Support automated reminders, consent forms, and guest feedback.",
      "Create distribution tools for publishing episodes to podcast platforms, social media, and websites. Support scheduling, syndication, and analytics.",
      "Implement analytics tracking for downloads, listener demographics, and engagement. Provide visual dashboards and exportable reports."
    ],
    resources: {
      "Web Audio API": "Audio recording and processing",
      "React.js": "Frontend framework",
      "Express.js": "Backend framework",
      "MongoDB": "Content database"
    }
  },

  developer: {
    title: "Code Project Manager",
    description: "An intelligent project management system for developers to organize their code, track issues, and collaborate with team members. The app streamlines the development workflow and improves productivity.",
    implementation: "The application will help developers manage their projects, track issues, and collaborate with team members. It will include tools for code review, documentation, and deployment management.",
    roadmap: [
      "Design project dashboard",
      "Implement issue tracking",
      "Create code review system",
      "Build documentation tools",
      "Add deployment management",
      "Implement team collaboration"
    ],
    descriptions: [
      "Develop a dashboard for managing development projects, including task lists, milestones, and progress tracking. Support project templates and quick links to repositories.",
      "Implement an issue tracking system for reporting, assigning, and resolving bugs or feature requests. Support labels, priorities, and notifications.",
      "Create a code review system for submitting, reviewing, and approving code changes. Support inline comments, approval workflows, and integration with version control.",
      "Build tools for creating and maintaining project documentation, including wikis, API references, and onboarding guides. Support search and versioning.",
      "Add deployment management features for automating builds, releases, and rollbacks. Support environment configuration and deployment logs.",
      "Implement team collaboration tools such as chat, file sharing, and activity feeds. Support permissions, mentions, and integrations with external tools."
    ],
    resources: {
      "GitHub API": "Version control integration",
      "React.js": "Frontend framework",
      "Node.js": "Backend runtime",
      "PostgreSQL": "Project database"
    }
  },

  teacher: {
    title: "Education Resource Manager",
    description: "A comprehensive education resource management system that helps teachers organize lessons, track student progress, and create engaging content. The app streamlines the teaching process and improves student engagement.",
    implementation: "The application will help teachers manage their lessons, track student progress, and create interactive content. It will include tools for assignment creation, grading, and progress tracking.",
    roadmap: [
      "Create lesson planning system",
      "Implement assignment manager",
      "Build grade tracking",
      "Add content creation tools",
      "Create progress reports",
      "Implement student feedback"
    ],
    descriptions: [
      "Develop a system for planning and organizing lessons, including objectives, materials, and activities. Support templates, sharing, and calendar integration.",
      "Implement an assignment manager for creating, distributing, and grading assignments. Support submission tracking, deadlines, and feedback.",
      "Build tools for tracking student grades, attendance, and participation. Support customizable grading schemes and visual progress reports.",
      "Add content creation tools for building interactive lessons, quizzes, and multimedia resources. Support collaboration and content libraries.",
      "Create tools for generating progress reports for students, parents, and administrators. Support export to PDF and integration with student information systems.",
      "Implement a feedback system for collecting and responding to student feedback. Support anonymous surveys, ratings, and follow-up actions."
    ],
    resources: {
      "Google Classroom API": "Education platform integration",
      "React.js": "Frontend framework",
      "Express.js": "Backend framework",
      "MongoDB": "Education content database"
    }
  },

  business: {
    title: "Business Operations Manager",
    description: "A comprehensive business management system that helps entrepreneurs track operations, manage finances, and analyze performance. The app streamlines business processes and improves decision-making.",
    implementation: "The application will help business owners manage operations, track finances, and analyze performance metrics. It will include tools for financial planning, inventory management, and reporting.",
    roadmap: [
      "Create operations dashboard",
      "Implement financial tracking",
      "Build inventory system",
      "Add performance analytics",
      "Create reporting tools",
      "Implement forecasting"
    ],
    descriptions: [
      "Develop a dashboard for monitoring business operations, including sales, expenses, and key performance indicators. Support real-time updates and customizable widgets.",
      "Implement financial tracking tools for managing income, expenses, and budgets. Support bank integration, invoicing, and financial reports.",
      "Build an inventory management system for tracking stock levels, orders, and suppliers. Support barcode scanning, alerts, and reorder automation.",
      "Add analytics tools for measuring business performance, identifying trends, and benchmarking against goals. Support visual dashboards and drill-down analysis.",
      "Create reporting tools for generating financial, operational, and compliance reports. Support scheduling, export, and sharing options.",
      "Implement forecasting tools for predicting sales, expenses, and inventory needs. Support scenario modeling and integration with analytics."
    ],
    resources: {
      "QuickBooks API": "Financial integration",
      "Vue.js": "Frontend framework",
      "Node.js": "Backend runtime",
      "PostgreSQL": "Business database"
    }
  },

  artist: {
    title: "Art Project Studio",
    description: "A comprehensive art project management system that helps artists organize their work, track commissions, and showcase their portfolio. The app streamlines the artistic workflow and client management.",
    implementation: "The application will help artists manage their projects, track commissions, and showcase their work. It will include tools for project tracking, client communication, and portfolio management.",
    roadmap: [
      "Design project tracker",
      "Implement commission system",
      "Create portfolio builder",
      "Add client management",
      "Build artwork archive",
      "Implement pricing calculator"
    ],
    descriptions: [
      "Develop a tracker for managing art projects, including deadlines, deliverables, and progress updates. Support project templates and notifications.",
      "Implement a commission management system for tracking client requests, quotes, and payments. Support contracts, revisions, and delivery tracking.",
      "Create a portfolio builder for showcasing artwork online. Support customizable layouts, galleries, and integration with social media.",
      "Add client management tools for tracking contacts, communication, and project history. Support reminders and follow-up actions.",
      "Build an archive for storing and organizing completed artworks. Support tagging, search, and high-resolution storage.",
      "Implement a pricing calculator for estimating project costs based on time, materials, and complexity. Support quotes and invoicing."
    ],
    resources: {
      "Cloudinary": "Image management",
      "React.js": "Frontend framework",
      "Express.js": "Backend framework",
      "MongoDB": "Project database"
    }
  },

  gamer: {
    title: "Game Stream Manager",
    description: "A comprehensive streaming management system that helps gamers organize their streams, engage with viewers, and track performance. The app streamlines the streaming workflow and improves viewer engagement.",
    implementation: "The application will help streamers manage their broadcasts, interact with viewers, and track analytics. It will include tools for stream scheduling, chat management, and performance tracking.",
    roadmap: [
      "Create stream dashboard",
      "Implement chat management",
      "Build overlay system",
      "Add analytics tracking",
      "Create highlight editor",
      "Implement viewer engagement"
    ],
    descriptions: [
      "Develop a dashboard for managing game streams, including scheduling, stream keys, and performance metrics. Support integration with streaming platforms.",
      "Implement chat management tools for moderating, filtering, and highlighting messages. Support custom commands, emotes, and moderation logs.",
      "Build a system for creating and managing stream overlays, including alerts, widgets, and branding. Support real-time updates and customization.",
      "Add analytics tracking for viewer count, chat activity, and stream performance. Provide visual dashboards and exportable reports.",
      "Create a highlight editor for clipping and sharing memorable stream moments. Support timeline editing, annotations, and social sharing.",
      "Implement tools for engaging viewers, such as polls, giveaways, and loyalty programs. Support chat-based interactions and reward systems."
    ],
    resources: {
      "Twitch API": "Streaming platform integration",
      "React.js": "Frontend framework",
      "Node.js": "Backend runtime",
      "MongoDB": "Stream data database"
    }
  },

  writer: {
    title: "Writing Project Manager",
    description: "A comprehensive writing project management system that helps writers organize their work, track progress, and manage deadlines. The app streamlines the writing process and improves productivity.",
    implementation: "The application will help writers manage their projects, track word counts, and set writing goals. It will include tools for manuscript organization, character development, and plot planning.",
    roadmap: [
      "Create project organizer",
      "Implement word counter",
      "Build character manager",
      "Add plot planning tools",
      "Create revision tracker",
      "Implement goal setting"
    ],
    descriptions: [
      "Develop a centralized dashboard where writers can create, manage, and organize multiple writing projects. This organizer should allow users to add new projects, categorize them by genre or status, set deadlines, and view an overview of all ongoing and completed works. Features may include project folders, color-coded tags, and quick access to recent documents.",
      "Integrate a real-time word and character counter within the writing editor. This tool should provide instant feedback on word count, character count, and reading time. Advanced features can include daily writing goals, progress tracking, and visualizations (such as charts) to motivate users and help them stay on track with their targets.",
      "Create a dedicated section for managing characters in a story. Writers should be able to add character profiles, including names, descriptions, backgrounds, relationships, and images. The character manager can also support linking characters to specific scenes or chapters, tracking character arcs, and visualizing relationships between characters.",
      "Introduce tools to help writers outline and structure their stories. This can include drag-and-drop scene cards, timeline views, and chapter breakdowns. Writers should be able to rearrange scenes, add notes, and visualize the overall plot structure. Additional features might include templates for common story structures (e.g., three-act, hero's journey).",
      "Implement a system for tracking revisions and edits across drafts. Writers should be able to save different versions of their work, compare changes between drafts, and restore previous versions if needed. The revision tracker can also highlight changes, provide edit histories, and allow for comments or notes on specific revisions.",
      "Allow writers to set and track personal writing goals, such as daily word counts, project deadlines, or chapter completion dates. The system should provide reminders, progress bars, and motivational messages. Integration with calendars and notifications can help keep writers accountable and motivated to achieve their writing objectives."
    ],
    resources: {
      "Draft.js": "Rich text editor",
      "React.js": "Frontend framework",
      "Express.js": "Backend framework",
      "PostgreSQL": "Writing project database"
    }
  },

  travel: {
    title: "Travel Planning Assistant",
    description: "A comprehensive travel planning system that helps travelers organize trips, track expenses, and document experiences. The app streamlines travel planning and improves the travel experience.",
    implementation: "The application will help travelers plan itineraries, track expenses, and document their journeys. It will include tools for route planning, budget tracking, and photo organization.",
    roadmap: [
      "Create trip planner",
      "Implement expense tracker",
      "Build route mapper",
      "Add photo organizer",
      "Create travel journal",
      "Implement recommendations"
    ],
    descriptions: [
      "Develop a planner for organizing trips, including destinations, accommodations, and activities. Support itinerary building, maps, and sharing.",
      "Implement an expense tracker for managing travel budgets, expenses, and receipts. Support currency conversion, categorization, and reporting.",
      "Build a route mapper for planning travel routes, including driving, walking, and public transit options. Support map integration and route optimization.",
      "Add tools for organizing and tagging travel photos. Support albums, geotagging, and sharing with travel companions.",
      "Create a digital travel journal for documenting experiences, notes, and memories. Support multimedia entries and export options.",
      "Implement a recommendation system for suggesting destinations, activities, and restaurants based on user preferences and past trips."
    ],
    resources: {
      "Google Maps API": "Location services",
      "React.js": "Frontend framework",
      "Node.js": "Backend runtime",
      "MongoDB": "Travel data database"
    }
  },

  stylist: {
    title: "Style Management Studio",
    description: "A comprehensive style management system that helps stylists organize looks, track client preferences, and manage their portfolio. The app streamlines the styling process and improves client satisfaction.",
    implementation: "The application will help stylists manage client wardrobes, create look books, and track styling sessions. It will include tools for outfit planning, inventory management, and client feedback.",
    roadmap: [
      "Create client manager",
      "Implement wardrobe system",
      "Build look book creator",
      "Add style calendar",
      "Create inventory tracker",
      "Implement feedback system"
    ],
    descriptions: [
      "Develop a client manager for tracking client profiles, preferences, and history. Support appointment scheduling and communication logs.",
      "Implement a wardrobe system for cataloging client clothing, accessories, and outfits. Support tagging, search, and outfit planning.",
      "Build a look book creator for assembling and sharing outfit ideas. Support templates, annotations, and client feedback.",
      "Add a style calendar for scheduling styling sessions, events, and reminders. Support recurring appointments and calendar integration.",
      "Create an inventory tracker for managing clothing and accessory stock. Support alerts for low stock and inventory reports.",
      "Implement a feedback system for collecting and responding to client feedback. Support ratings, testimonials, and follow-up actions."
    ],
    resources: {
      "Cloudinary": "Image management",
      "Vue.js": "Frontend framework",
      "Express.js": "Backend framework",
      "PostgreSQL": "Style database"
    }
  },

  motivator: {
    title: "Personal Growth Tracker",
    description: "A comprehensive personal development system that helps motivators track client progress, create action plans, and measure success. The app streamlines coaching and improves client outcomes.",
    implementation: "The application will help motivators manage client goals, track progress, and create action plans. It will include tools for goal setting, habit tracking, and progress visualization.",
    roadmap: [
      "Create goal tracker",
      "Implement habit system",
      "Build action planner",
      "Add progress metrics",
      "Create visualization tools",
      "Implement client feedback"
    ],
    descriptions: [
      "Develop a goal tracker for setting, tracking, and achieving personal or client goals. Support milestones, reminders, and progress visualization.",
      "Implement a habit system for building and tracking positive habits. Support streaks, habit reminders, and analytics.",
      "Build an action planner for breaking down goals into actionable steps. Support task lists, deadlines, and prioritization.",
      "Add tools for tracking progress metrics, such as completion rates, consistency, and outcomes. Support visual dashboards and reports.",
      "Create visualization tools for displaying progress, trends, and achievements. Support charts, graphs, and milestone celebrations.",
      "Implement a feedback system for collecting and responding to client feedback. Support surveys, testimonials, and improvement tracking."
    ],
    resources: {
      "Chart.js": "Data visualization",
      "React.js": "Frontend framework",
      "Node.js": "Backend runtime",
      "MongoDB": "Progress database"
    }
  },

  science: {
    title: "Research Project Manager",
    description: "A comprehensive research management system that helps scientists organize experiments, track data, and collaborate with team members. The app streamlines the research process and improves productivity.",
    implementation: "The application will help scientists manage research projects, track experimental data, and collaborate with colleagues. It will include tools for data collection, analysis, and visualization.",
    roadmap: [
      "Create project organizer",
      "Implement data tracker",
      "Build analysis tools",
      "Add visualization system",
      "Create collaboration tools",
      "Implement publication manager"
    ],
    descriptions: [
      "Develop a project organizer for managing research projects, including objectives, timelines, and team assignments. Support project templates and progress tracking.",
      "Implement a data tracker for collecting, storing, and analyzing experimental data. Support data import/export, validation, and versioning.",
      "Build analysis tools for processing and interpreting research data. Support statistical analysis, visualization, and reporting.",
      "Add a visualization system for creating charts, graphs, and interactive data displays. Support customization and export options.",
      "Create collaboration tools for sharing data, documents, and findings with team members. Support permissions, comments, and version control.",
      "Implement a publication manager for preparing, submitting, and tracking research publications. Support templates, submission tracking, and citation management."
    ],
    resources: {
      "Python": "Data analysis",
      "React.js": "Frontend framework",
      "Flask": "Backend framework",
      "PostgreSQL": "Research database"
    }
  },

  wellness: {
    title: "Wellness Journey Tracker",
    description: "A comprehensive wellness tracking system that helps practitioners monitor client progress, create treatment plans, and track outcomes. The app streamlines wellness coaching and improves client success.",
    implementation: "The application will help wellness practitioners manage client programs, track progress, and create personalized plans. It will include tools for goal setting, progress tracking, and outcome measurement.",
    roadmap: [
      "Create client manager",
      "Implement progress tracker",
      "Build treatment planner",
      "Add assessment tools",
      "Create reporting system",
      "Implement feedback collection"
    ],
    descriptions: [
      "Develop a client manager for tracking client profiles, goals, and progress. Support appointment scheduling, notes, and communication logs.",
      "Implement a progress tracker for monitoring client outcomes, milestones, and adherence to plans. Support visual dashboards and progress reports.",
      "Build a treatment planner for creating and managing personalized wellness plans. Support templates, scheduling, and plan adjustments.",
      "Add assessment tools for evaluating client health, fitness, and wellness. Support surveys, tests, and automated scoring.",
      "Create a reporting system for generating client progress and outcome reports. Support export, sharing, and integration with other systems.",
      "Implement a feedback collection system for gathering client feedback, testimonials, and suggestions. Support surveys, ratings, and follow-up actions."
    ],
    resources: {
      "Chart.js": "Progress visualization",
      "Vue.js": "Frontend framework",
      "Express.js": "Backend framework",
      "MongoDB": "Wellness database"
    }
  }
};

export default roadmapGuides; 