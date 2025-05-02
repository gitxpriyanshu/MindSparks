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
    resources: {
      "Chart.js": "Progress visualization",
      "Vue.js": "Frontend framework",
      "Express.js": "Backend framework",
      "MongoDB": "Wellness database"
    }
  }
};

export default roadmapGuides; 