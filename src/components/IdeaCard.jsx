import React from 'react';
import { useNavigate } from 'react-router-dom';

const IdeaCard = ({ idea }) => {
  const navigate = useNavigate();

  if (!idea) {
    return null;
  }

  const categoryMap = {
    'YouTube': 'youtuber',
    'Instagram': 'instagram',
    'Fitness': 'gym',
    'Writing': 'blogger',
    'Design': 'designer',
    'Photography': 'photographer',
    'Food': 'chef',
    'Music': 'musician',
    'Podcast': 'podcaster',
    'Development': 'developer',
    'Education': 'teacher',
    'Business': 'business',
    'Art': 'artist',
    'Gaming': 'gamer',
    'Fiction': 'writer',
    'Travel': 'travel',
    'Fashion': 'stylist',
    'Motivation': 'motivator',
    'Science': 'science',
    'Wellness': 'wellness'
  };

  const handleRoadmapClick = () => {
    const roadmapCategory = categoryMap[idea.category] || idea.category.toLowerCase();
    navigate(`/roadmap/${roadmapCategory}`);
  };

  return (
    <div className="idea-card">
      <div className="idea-header">
        <span className="category-label">{idea.category}</span>
      </div>
      <div className="idea-content">
        <div className="idea-front">
          <h3>{idea.title}</h3>
        </div>
        <div className="idea-back">
          <p>{idea.description}</p>
        </div>
      </div>
      <div className="idea-footer">
        <button onClick={handleRoadmapClick} className="roadmap-button">
          Let's go to the Roadmap Page
        </button>
      </div>
    </div>
  );
};

export default IdeaCard; 