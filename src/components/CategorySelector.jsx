import React from 'react';

const categories = [
  {
    id: 'youtuber',
    title: 'YouTube Creator',
    description: 'Content ideas for video creators',
    icon: '📹'
  },
  {
    id: 'instagram',
    title: 'Instagram Influencer',
    description: 'Post and story ideas for the gram',
    icon: '📱'
  },
  {
    id: 'gym',
    title: 'Fitness Influencer',
    description: 'Workout and health content ideas',
    icon: '💪'
  },
  {
    id: 'blogger',
    title: 'Blogger',
    description: 'Writing and article ideas',
    icon: '✍️'
  },
  {
    id: 'designer',
    title: 'Designer',
    description: 'Creative design project ideas',
    icon: '🎨'
  },
  {
    id: 'photographer',
    title: 'Photographer',
    description: 'Photography projects and concepts',
    icon: '📸'
  },
  {
    id: 'chef',
    title: 'Food Creator',
    description: 'Recipe and food content ideas',
    icon: '🍳'
  },
  {
    id: 'musician',
    title: 'Musician',
    description: 'Music creation and performance ideas',
    icon: '🎵'
  },
  {
    id: 'podcaster',
    title: 'Podcaster',
    description: 'Podcast episode and series concepts',
    icon: '🎙️'
  },
  {
    id: 'developer',
    title: 'Developer',
    description: 'Coding projects and technical content',
    icon: '💻'
  },
  {
    id: 'teacher',
    title: 'Educator',
    description: 'Educational content and course ideas',
    icon: '🧠'
  },
  {
    id: 'business',
    title: 'Entrepreneur',
    description: 'Business and startup concepts',
    icon: '💼'
  },
  {
    id: 'artist',
    title: 'Visual Artist',
    description: 'Fine art and illustration projects',
    icon: '🖌️'
  },
  {
    id: 'gamer',
    title: 'Gaming Creator',
    description: 'Gaming content and streaming ideas',
    icon: '🎮'
  },
  {
    id: 'writer',
    title: 'Fiction Writer',
    description: 'Story and creative writing prompts',
    icon: '📚'
  },
  {
    id: 'travel',
    title: 'Travel Creator',
    description: 'Travel guides and adventure content',
    icon: '✈️'
  },
  {
    id: 'stylist',
    title: 'Fashion Stylist',
    description: 'Fashion and styling concepts',
    icon: '👗'
  },
  {
    id: 'motivator',
    title: 'Motivational Speaker',
    description: 'Inspiration and personal growth content',
    icon: '🔥'
  },
  {
    id: 'science',
    title: 'Science Communicator',
    description: 'Science education and explanation ideas',
    icon: '🔬'
  },
  {
    id: 'wellness',
    title: 'Wellness Coach',
    description: 'Health and wellness guidance content',
    icon: '🧘'
  }
];

const CategorySelector = ({ onCategorySelect }) => {
  return (
    <div className="category-selector">
      <h1 className="app-title">MindSparks: Idea Generator</h1>
      <p className="app-subtitle">Select your creator type to get personalized ideas</p>
      
      <div className="category-grid">
        {categories.map(category => (
          <div 
            key={category.id} 
            className="category-card" 
            onClick={() => onCategorySelect(category.id)}
          >
            <div className="category-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector; 