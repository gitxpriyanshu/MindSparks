import React, { useState, useEffect } from 'react';
import IdeaCard from './IdeaCard';
import ideaData from '../ideaData';

const IdeaGenerator = ({ category, onBackClick, onIdeasGenerated, persistedIdeas }) => {
  const [currentIdeas, setCurrentIdeas] = useState(persistedIdeas);
  const [recentlyUsedIndexes, setRecentlyUsedIndexes] = useState([]);
  
  // Get the ideas for the selected category
  const categoryIdeas = ideaData[category] || [];

  // When category changes, reset ideas if they're from a different category
  useEffect(() => {
    if (persistedIdeas.length > 0 && persistedIdeas[0].category !== categoryIdeas[0]?.category) {
      setCurrentIdeas([]);
      onIdeasGenerated([]);
    } else {
      setCurrentIdeas(persistedIdeas);
    }
  }, [category]);
  
  const generateRandomIdeas = () => {
    if (categoryIdeas.length === 0) {
      setCurrentIdeas([]);
      onIdeasGenerated([]);
      return;
    }
    
    const newIdeas = [];
    // Keep track of indexes used in this batch to avoid duplicates within the same 3 ideas
    const usedIndexesInThisBatch = [];
    
    // Maximum number of recently used indexes to remember (to avoid repetition)
    const maxRecentIndexes = Math.min(categoryIdeas.length - 3, 9);
    
    // Get 3 random ideas
    for (let i = 0; i < 3; i++) {
      let randomIndex;
      let attempts = 0;
      const maxAttempts = 10; // Maximum attempts to find a non-recent idea
      
      do {
        randomIndex = Math.floor(Math.random() * categoryIdeas.length);
        attempts++;
        // Break the loop if we've tried too many times to avoid infinite loop
        if (attempts > maxAttempts) break;
      } while (
        // Avoid using the same index twice in the current batch
        usedIndexesInThisBatch.includes(randomIndex) || 
        // Try to avoid using recently shown indexes if possible
        (recentlyUsedIndexes.includes(randomIndex) && attempts < maxAttempts)
      );
      
      // Add the idea and mark index as used in this batch
      newIdeas.push(categoryIdeas[randomIndex]);
      usedIndexesInThisBatch.push(randomIndex);
    }
    
    // Update recently used indexes by adding new ones and keeping only the most recent
    const updatedRecentIndexes = [...usedIndexesInThisBatch, ...recentlyUsedIndexes].slice(0, maxRecentIndexes);
    
    setCurrentIdeas(newIdeas);
    setRecentlyUsedIndexes(updatedRecentIndexes);
    onIdeasGenerated(newIdeas); // Notify parent of new ideas
  };

  const categoryTitles = {
    youtuber: 'YouTube Creator',
    instagram: 'Instagram Influencer',
    gym: 'Fitness Influencer',
    blogger: 'Blogger',
    designer: 'Designer',
    photographer: 'Photographer',
    chef: 'Food Creator',
    musician: 'Musician',
    podcaster: 'Podcaster',
    developer: 'Developer',
    teacher: 'Educator',
    business: 'Entrepreneur',
    artist: 'Visual Artist',
    gamer: 'Gaming Creator',
    writer: 'Fiction Writer',
    travel: 'Travel Creator',
    stylist: 'Fashion Stylist',
    motivator: 'Motivational Speaker',
    science: 'Science Communicator',
    wellness: 'Wellness Coach'
  };

  return (
    <div className="idea-generator">
      <h1 className="app-title">MindSparks: Idea Generator</h1>
      <h2 className="category-title">{categoryTitles[category] || category}</h2>
      <p className="app-subtitle">Click the button below to generate random content ideas</p>
      
      <button onClick={generateRandomIdeas} className="generate-button">Generate 3 Ideas</button>
      <button onClick={onBackClick} className="back-button">Back to Categories</button>
      
      <div className="idea-cards-container">
        {currentIdeas.length > 0 ? (
          currentIdeas.map((idea, index) => (
            <IdeaCard key={index} idea={idea} />
          ))
        ) : (
          <div className="no-ideas-message">
            <p>Click the button to generate ideas for your content!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaGenerator; 