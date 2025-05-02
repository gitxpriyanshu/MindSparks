const ideaData = {
  youtuber: [
    { title: "Day in the Life Vlog", description: "Create a vlog showing your daily routine and behind-the-scenes of content creation.", category: "YouTube" },
    { title: "Tutorial Series", description: "Start a multi-part tutorial series teaching viewers a specific skill in your niche.", category: "YouTube" },
    { title: "Reaction Video", description: "React to trending content or news in your industry with your unique perspective.", category: "YouTube" },
    { title: "Collaboration Challenge", description: "Partner with another creator for a challenge video that combines both your audiences.", category: "YouTube" },
    { title: "Product Review", description: "Review the latest products in your niche with honest opinions and demonstrations.", category: "YouTube" },
    { title: "Q&A Session", description: "Answer questions from your audience in a dynamic and engaging format.", category: "YouTube" },
    { title: "Behind the Scenes", description: "Show the process behind creating your most popular content and the challenges you face.", category: "YouTube" },
    { title: "Top 10 Countdown", description: "Create a countdown of the best products, tips, or resources in your area of expertise.", category: "YouTube" },
    { title: "Channel Trailer", description: "Design an engaging channel trailer that captures your personality and content style.", category: "YouTube" },
    { title: "Interview Series", description: "Interview interesting people in your industry or niche to provide different perspectives.", category: "YouTube" },
    { title: "Mystery Box Challenge", description: "Open a mystery box related to your niche and create content with the items inside.", category: "YouTube" },
    { title: "Documentary Style Video", description: "Create a short documentary-style video exploring an interesting topic in your field.", category: "YouTube" }
  ],
  instagram: [
    { title: "Aesthetic Photo Series", description: "Create a series of visually cohesive posts around a specific color scheme or theme.", category: "Instagram" },
    { title: "Behind-the-Scenes Story", description: "Share the process of creating your content through a day of Instagram stories.", category: "Instagram" },
    { title: "Carousel Tutorial", description: "Use Instagram's carousel feature to create a step-by-step guide or transformation.", category: "Instagram" },
    { title: "Trend Participation", description: "Put your unique spin on a current Instagram trend or challenge.", category: "Instagram" },
    { title: "User-Generated Content", description: "Feature content from your followers who have used your products or followed your advice.", category: "Instagram" },
    { title: "Instagram Live Q&A", description: "Host a live session answering questions and interacting with followers in real-time.", category: "Instagram" },
    { title: "Day-to-Day Transformation", description: "Document a personal challenge or transformation over a 30-day period.", category: "Instagram" },
    { title: "Location Feature", description: "Showcase a beautiful or interesting location with tips for visitors.", category: "Instagram" },
    { title: "Influencer Collaboration", description: "Partner with another influencer for a content swap or joint project.", category: "Instagram" },
    { title: "Instagram Guide Creation", description: "Create an Instagram Guide compiling your best posts on a specific topic.", category: "Instagram" },
    { title: "Visual Quote Series", description: "Design a series of visually appealing quote posts related to your niche.", category: "Instagram" },
    { title: "Product Flatlay", description: "Create aesthetically pleasing flatlay photographs featuring products in your niche.", category: "Instagram" }
  ],
  gym: [
    { title: "Workout Challenge", description: "Create a 7-day workout challenge that targets a specific muscle group or fitness goal.", category: "Fitness" },
    { title: "Form Correction Guide", description: "Demonstrate common exercise mistakes and how to fix them for better results.", category: "Fitness" },
    { title: "Meal Prep Ideas", description: "Share a full day of eating with macros and easy meal prep ideas for fitness enthusiasts.", category: "Fitness" },
    { title: "Home Workout Series", description: "Design a no-equipment workout routine that can be done anywhere.", category: "Fitness" },
    { title: "Transformation Story", description: "Share your fitness journey or highlight a client's successful transformation.", category: "Fitness" },
    { title: "Supplement Review", description: "Discuss the pros and cons of popular fitness supplements with evidence-based information.", category: "Fitness" },
    { title: "Exercise Variations", description: "Showcase different variations of a popular exercise to target muscles differently.", category: "Fitness" },
    { title: "Workout Split Guide", description: "Create a comprehensive guide to different workout splits and their benefits.", category: "Fitness" },
    { title: "Fitness Myth Debunking", description: "Address common fitness myths with scientific evidence and expert opinions.", category: "Fitness" },
    { title: "Recovery Techniques", description: "Demonstrate effective recovery techniques to maximize workout results.", category: "Fitness" },
    { title: "Gym Equipment Tutorial", description: "Create a beginner-friendly guide to using common gym equipment correctly.", category: "Fitness" },
    { title: "Mobility Routine", description: "Design a mobility routine that improves flexibility and prevents injuries.", category: "Fitness" }
  ],
  blogger: [
    { title: "Ultimate Guide Post", description: "Create a comprehensive guide that covers everything about a specific topic in your niche.", category: "Writing" },
    { title: "Personal Experience Essay", description: "Write a reflective piece about a personal experience that taught you something valuable.", category: "Writing" },
    { title: "Roundup Article", description: "Compile a list of the best resources, tools, or tips related to your blog's focus.", category: "Writing" },
    { title: "Myth Debunking Post", description: "Address common misconceptions in your industry with facts and research.", category: "Writing" },
    { title: "Expert Interview", description: "Interview a thought leader in your field and share their insights with your audience.", category: "Writing" },
    { title: "Case Study", description: "Analyze a successful example in your niche and break down what made it work.", category: "Writing" }
  ],
  designer: [
    { title: "Design Challenge", description: "Redesign a popular brand's logo or website with your own creative approach.", category: "Design" },
    { title: "Style Guide Creation", description: "Create a comprehensive style guide for a fictional brand from scratch.", category: "Design" },
    { title: "UI Animation", description: "Design a micro-interaction or animation that enhances user experience.", category: "Design" },
    { title: "Conceptual Packaging", description: "Design innovative packaging for an everyday product that stands out on shelves.", category: "Design" },
    { title: "Typography Experiment", description: "Create a design that showcases creative typography as the main visual element.", category: "Design" },
    { title: "Process Breakdown", description: "Document your design process from initial concept to final deliverable.", category: "Design" }
  ],
  photographer: [
    { title: "Color Scheme Photo Walk", description: "Take a photo walk focusing only on subjects of a specific color or color palette.", category: "Photography" },
    { title: "Golden Hour Portrait Series", description: "Create a portrait series shot exclusively during the golden hour lighting.", category: "Photography" },
    { title: "Everyday Object Macro Series", description: "Photograph macro shots of common household items to reveal unseen details.", category: "Photography" },
    { title: "Single Location Challenge", description: "Shoot 10 unique compositions in a single location to push your creativity.", category: "Photography" },
    { title: "Motion Techniques", description: "Experiment with panning, long exposure, or other motion photography techniques.", category: "Photography" },
    { title: "Conceptual Self-Portrait", description: "Create a self-portrait that represents an emotion or concept visually.", category: "Photography" }
  ],
  chef: [
    { title: "One Ingredient Challenge", description: "Create three different dishes featuring one star ingredient in different ways.", category: "Food" },
    { title: "Fusion Recipe", description: "Develop a recipe that combines elements from two different cuisines.", category: "Food" },
    { title: "Meal Prep Guide", description: "Create a complete meal prep plan with shopping list and prep instructions.", category: "Food" },
    { title: "Food Photography Guide", description: "Share tips and setups for taking better photos of your culinary creations.", category: "Food" },
    { title: "Budget Gourmet", description: "Create a gourmet meal for four people on a tight budget with cost breakdown.", category: "Food" },
    { title: "Kitchen Hack Series", description: "Demonstrate time-saving techniques and tricks in the kitchen.", category: "Food" }
  ],
  musician: [
    { title: "Cover Song Reimagined", description: "Create a cover of a popular song in a completely different genre or style.", category: "Music" },
    { title: "Sampling Challenge", description: "Create a track using only samples from unconventional sources (like household sounds).", category: "Music" },
    { title: "Instrument Tutorial", description: "Create a beginner-friendly tutorial for learning a specific technique on your instrument.", category: "Music" },
    { title: "60-Minute Song", description: "Challenge yourself to write and record a complete song in just one hour.", category: "Music" },
    { title: "Music Theory Lesson", description: "Break down the music theory behind a popular song in an accessible way.", category: "Music" },
    { title: "Behind the Song", description: "Share the creative process behind one of your original compositions.", category: "Music" }
  ],
  podcaster: [
    { title: "Expert Interview Series", description: "Interview three experts with different perspectives on a controversial topic.", category: "Podcast" },
    { title: "Deep Dive Episode", description: "Create an in-depth exploration of a niche topic with research and multiple sources.", category: "Podcast" },
    { title: "Listener Q&A", description: "Dedicate an episode to answering questions submitted by your listeners.", category: "Podcast" },
    { title: "On-Location Recording", description: "Record an episode outside the studio in a location relevant to your topic.", category: "Podcast" },
    { title: "Historical Event Breakdown", description: "Narrate and analyze a historical event relevant to your podcast's theme.", category: "Podcast" },
    { title: "Industry Roundtable", description: "Host a discussion with multiple guests about current trends in your industry.", category: "Podcast" }
  ],
  developer: [
    { title: "Code Refactoring Guide", description: "Show before and after examples of refactoring code with explanation of improvements.", category: "Development" },
    { title: "Weekend Project Tutorial", description: "Create a complete tutorial for a project that can be built in a weekend.", category: "Development" },
    { title: "API Integration Guide", description: "Walk through integrating a popular API into a sample application.", category: "Development" },
    { title: "Performance Optimization", description: "Demonstrate techniques to improve performance of a slow application.", category: "Development" },
    { title: "Open Source Contribution", description: "Document your process of contributing to an open source project.", category: "Development" },
    { title: "Code Review Breakdown", description: "Analyze a piece of code and provide detailed feedback as a learning experience.", category: "Development" }
  ],
  teacher: [
    { title: "Interactive Lesson Plan", description: "Design an engaging lesson that incorporates hands-on activities and technology.", category: "Education" },
    { title: "Concept Visualization", description: "Create visual aids that explain a complex concept in a simple, memorable way.", category: "Education" },
    { title: "Student-Led Project", description: "Design a project framework where students take ownership of their learning process.", category: "Education" },
    { title: "Assessment Alternative", description: "Develop a creative alternative to traditional testing that measures understanding.", category: "Education" },
    { title: "Digital Learning Resource", description: "Create an interactive digital resource for a challenging topic in your field.", category: "Education" },
    { title: "Cross-Subject Integration", description: "Design a lesson that meaningfully connects multiple subject areas around a theme.", category: "Education" }
  ],
  business: [
    { title: "Niche Market Analysis", description: "Research and analyze an emerging niche market with growth potential.", category: "Business" },
    { title: "Product Launch Strategy", description: "Create a comprehensive plan for launching a new product or service.", category: "Business" },
    { title: "Case Study Breakdown", description: "Analyze a successful business strategy with actionable takeaways.", category: "Business" },
    { title: "Productivity System", description: "Design a productivity system tailored for entrepreneurs or small teams.", category: "Business" },
    { title: "Business Model Canvas", description: "Complete a business model canvas for an innovative business concept.", category: "Business" },
    { title: "Subscription Service Idea", description: "Develop a concept for a subscription service in an underserved market.", category: "Business" }
  ],
  artist: [
    { title: "Mixed Media Experiment", description: "Create an artwork combining at least three different artistic mediums.", category: "Art" },
    { title: "Emotion Series", description: "Paint or draw a series that visually represents different emotions.", category: "Art" },
    { title: "Found Object Art", description: "Create a sculpture or collage using only items found in your home.", category: "Art" },
    { title: "Daily Sketch Challenge", description: "Complete a small sketch every day for a week based on different prompts.", category: "Art" },
    { title: "Style Mashup", description: "Combine two contrasting artistic styles in one cohesive artwork.", category: "Art" },
    { title: "Process Documentation", description: "Document and share your artistic process from concept to completion.", category: "Art" }
  ],
  gamer: [
    { title: "Game Challenge Run", description: "Complete a popular game with self-imposed limitations or rules.", category: "Gaming" },
    { title: "Game Analysis", description: "Break down the mechanics, storytelling, or design elements of a game.", category: "Gaming" },
    { title: "Beginner's Guide", description: "Create a comprehensive getting-started guide for a complex game.", category: "Gaming" },
    { title: "Gaming Setup Tour", description: "Showcase your gaming setup with tips for optimizing the gaming experience.", category: "Gaming" },
    { title: "Mod Spotlight", description: "Explore and demonstrate interesting mods that transform a popular game.", category: "Gaming" },
    { title: "Multiplayer Tournament", description: "Organize a tournament for your community with commentary and prizes.", category: "Gaming" }
  ],
  writer: [
    { title: "Genre Fusion Story", description: "Write a short story that combines elements from two different genres.", category: "Fiction" },
    { title: "Character Study", description: "Create a detailed profile of a complex character with a unique background.", category: "Fiction" },
    { title: "Setting Description Challenge", description: "Write a vivid description of a setting using all five senses.", category: "Fiction" },
    { title: "Dialogue Exercise", description: "Write a scene using only dialogue to convey the story and emotions.", category: "Fiction" },
    { title: "Flash Fiction Series", description: "Create a series of interconnected flash fiction pieces under 500 words each.", category: "Fiction" },
    { title: "Writing Prompt Challenge", description: "Write a story based on a random prompt in a genre outside your comfort zone.", category: "Fiction" }
  ],
  travel: [
    { title: "Hidden Gems Guide", description: "Create a guide to lesser-known attractions in a popular destination.", category: "Travel" },
    { title: "Day Trip Itinerary", description: "Design a detailed one-day itinerary for exploring an interesting location.", category: "Travel" },
    { title: "Budget Travel Challenge", description: "Document how to experience a destination on a limited budget with tips and hacks.", category: "Travel" },
    { title: "Local Food Tour", description: "Create a guide to experiencing a location through its unique cuisine and food culture.", category: "Travel" },
    { title: "Photography Location Scout", description: "Compile the best spots for taking stunning photos in a specific area.", category: "Travel" },
    { title: "Cultural Experience Deep Dive", description: "Document an immersive cultural experience and what you learned from it.", category: "Travel" }
  ],
  stylist: [
    { title: "Capsule Wardrobe Guide", description: "Create a versatile capsule wardrobe for a specific season or lifestyle.", category: "Fashion" },
    { title: "Style Challenge", description: "Style one key piece in five completely different ways for various occasions.", category: "Fashion" },
    { title: "Trend Adaptation", description: "Show how to adapt current fashion trends for different body types and personal styles.", category: "Fashion" },
    { title: "Thrift Flip Series", description: "Transform thrifted items into stylish, contemporary pieces.", category: "Fashion" },
    { title: "Accessory Masterclass", description: "Demonstrate how accessories can completely transform basic outfits.", category: "Fashion" },
    { title: "Sustainable Fashion Guide", description: "Create a guide to building a more sustainable and ethical wardrobe.", category: "Fashion" }
  ],
  motivator: [
    { title: "Habit Building Framework", description: "Develop a practical framework for building positive habits that stick.", category: "Motivation" },
    { title: "Overcoming Failure Story", description: "Share a personal story of overcoming failure with actionable lessons.", category: "Motivation" },
    { title: "Mindset Shift Exercise", description: "Create an exercise that helps people reframe negative thought patterns.", category: "Motivation" },
    { title: "Morning Routine Design", description: "Design an energizing morning routine that sets people up for success.", category: "Motivation" },
    { title: "Goal Setting Workshop", description: "Develop a structured approach to setting and achieving meaningful goals.", category: "Motivation" },
    { title: "Productivity Challenge", description: "Create a 5-day challenge to help people maximize their productivity.", category: "Motivation" }
  ],
  science: [
    { title: "Everyday Science Explanation", description: "Explain the science behind common phenomena in simple, engaging terms.", category: "Science" },
    { title: "DIY Experiment Guide", description: "Create a guide for conducting a fascinating science experiment at home.", category: "Science" },
    { title: "Science History Spotlight", description: "Explore an important moment in scientific history and its modern relevance.", category: "Science" },
    { title: "Misconception Correction", description: "Address and correct common scientific misconceptions with evidence.", category: "Science" },
    { title: "Future Technology Exploration", description: "Research and explain an emerging technology and its potential impact.", category: "Science" },
    { title: "Interdisciplinary Connection", description: "Explore how two different scientific fields connect and influence each other.", category: "Science" }
  ],
  wellness: [
    { title: "Stress Management Toolkit", description: "Compile effective techniques for managing stress in daily life.", category: "Wellness" },
    { title: "Sleep Improvement Guide", description: "Create a comprehensive guide to improving sleep quality naturally.", category: "Wellness" },
    { title: "Mindfulness Practice Series", description: "Design a series of guided mindfulness practices for different situations.", category: "Wellness" },
    { title: "Holistic Self-Care Routine", description: "Develop a balanced self-care routine addressing physical, mental, and emotional needs.", category: "Wellness" },
    { title: "Digital Detox Plan", description: "Create a structured plan for reducing digital overwhelm and screen time.", category: "Wellness" },
    { title: "Nutrition Simplification", description: "Simplify nutrition concepts into practical, easy-to-follow guidelines.", category: "Wellness" }
  ]
};

export default ideaData; 