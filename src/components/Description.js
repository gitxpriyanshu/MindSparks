import React from 'react';
import { FaDumbbell, FaChartLine, FaAppleAlt } from 'react-icons/fa';

const Description = () => {
  return (
    <section className="description-section">
      <h2 className="description-title">Description</h2>
      
      <div className="description-content">
        <p>A comprehensive fitness tracking system that helps users monitor workouts, track progress, and achieve their fitness goals. The app provides personalized workout plans and nutrition guidance tailored to your specific needs and preferences.</p>
      </div>

      <div className="description-features">
        <div className="feature-card">
          <div className="feature-icon">
            <FaDumbbell />
          </div>
          <h3 className="feature-title">Workout Tracking</h3>
          <p className="feature-description">
            Log and monitor your exercises, sets, reps, and weights. Get detailed insights into your training history and performance metrics. Create custom workout routines or choose from pre-designed templates.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaChartLine />
          </div>
          <h3 className="feature-title">Progress Monitoring</h3>
          <p className="feature-description">
            Track your fitness journey with comprehensive progress charts and analytics. Monitor weight changes, body measurements, personal records, and achievement milestones. Set goals and receive progress updates.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaAppleAlt />
          </div>
          <h3 className="feature-title">Nutrition Guidance</h3>
          <p className="feature-description">
            Get personalized meal plans and nutrition advice based on your goals. Track daily calorie intake, macronutrients, and water consumption. Access a database of healthy recipes and meal prep ideas.
          </p>
        </div>
      </div>

      <div className="description-cta">
        <p className="cta-text">Ready to start your fitness journey?</p>
        <a href="#get-started" className="cta-button">Get Started Now</a>
      </div>
    </section>
  );
};

export default Description; 