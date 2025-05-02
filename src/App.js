import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IdeaGenerator from './components/IdeaGenerator';
import CategorySelector from './components/CategorySelector';
import RoadmapGuide from './components/RoadmapGuide';
import './styles.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [generatedIdeas, setGeneratedIdeas] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    // Don't clear generated ideas when going back to categories
  };

  const handleIdeasGenerated = (ideas) => {
    setGeneratedIdeas(ideas);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={
            selectedCategory ? (
              <IdeaGenerator 
                category={selectedCategory} 
                onBackClick={handleBackClick}
                onIdeasGenerated={handleIdeasGenerated}
                persistedIdeas={generatedIdeas}
              />
            ) : (
              <CategorySelector onCategorySelect={handleCategorySelect} />
            )
          } />
          <Route path="/roadmap/:category" element={<RoadmapGuide />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
