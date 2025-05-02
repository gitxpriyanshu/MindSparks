import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import roadmapGuides from '../roadmaps';

const RoadmapGuide = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Resource links mapping
  const resourceLinks = {
    // APIs and Services
    'YouTube Data API': 'https://developers.google.com/youtube/v3',
    'Instagram Graph API': 'https://developers.facebook.com/docs/instagram-api/',
    'TensorFlow.js': 'https://www.tensorflow.org/js',
    'Firebase': 'https://firebase.google.com/',
    'Google Maps API': 'https://developers.google.com/maps',
    'Twitch API': 'https://dev.twitch.tv/docs/api/',
    'GitHub API': 'https://docs.github.com/en/rest',
    'Google Classroom API': 'https://developers.google.com/classroom',
    'QuickBooks API': 'https://developer.intuit.com/app/developer/qbo/docs/api/accounting/v3/overview',
    'USDA Food Database API': 'https://fdc.nal.usda.gov/api-guide.html',
    'Web Audio API': 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',

    // Frameworks and Libraries
    'React.js': 'https://reactjs.org/',
    'Vue.js': 'https://vuejs.org/',
    'Next.js': 'https://nextjs.org/',
    'Express.js': 'https://expressjs.com/',
    'Node.js': 'https://nodejs.org/',
    'React Native': 'https://reactnative.dev/',
    'Chart.js': 'https://www.chartjs.org/',
    'Draft.js': 'https://draftjs.org/',
    'Sharp.js': 'https://sharp.pixelplumbing.com/',
    'Flask': 'https://flask.palletsprojects.com/',

    // Cloud Services
    'MongoDB': 'https://www.mongodb.com/',
    'PostgreSQL': 'https://www.postgresql.org/',
    'AWS S3': 'https://aws.amazon.com/s3/',
    'Cloud Storage': 'https://cloud.google.com/storage',
    'Cloudinary': 'https://cloudinary.com/',

    // Development Tools
    'Python': 'https://www.python.org/',
    'Figma API': 'https://www.figma.com/developers/api'
  };

  // The category from the URL should match the roadmap keys directly now
  const guide = roadmapGuides[category];

  if (!guide) {
    return (
      <div className="roadmap-guide">
        <div className="back-button">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}>Back to Ideas</a>
        </div>
        <div className="no-roadmap">
          <h2>No roadmap available for this category.</h2>
          <p>Please select a different category from the ideas page.</p>
        </div>
      </div>
    );
  }

  const getResourceLink = (resourceName) => {
    // Return the predefined link if it exists
    if (resourceLinks[resourceName]) {
      return resourceLinks[resourceName];
    }

    // Generate a search URL for unknown resources
    const searchQuery = encodeURIComponent(`${resourceName} documentation`);
    return `https://www.google.com/search?q=${searchQuery}`;
  };

  return (
    <div className="roadmap-guide">
      <div className="back-button">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}>Back to Ideas</a>
      </div>
      
      <h1>{guide.title}</h1>
      
      <section className="description">
        <h2>Description</h2>
        <p>{guide.description}</p>
      </section>

      <section className="implementation">
        <h2>Implementation Guide</h2>
        <p>{guide.implementation}</p>
      </section>

      <section className="roadmap">
        <h2>Roadmap</h2>
        <ol>
          {guide.roadmap.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <div className="resource-grid">
          {Object.entries(guide.resources).map(([resource, description], index) => (
            <div key={index} className="resource-card">
              <h3>
                <a 
                  href={getResourceLink(resource)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  {resource}
                  <span className="external-link-icon">↗</span>
                </a>
              </h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoadmapGuide; 