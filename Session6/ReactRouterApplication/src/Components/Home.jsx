import React from 'react';
import '../Style/Home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome to Our Application</h1>
      <p>
        This is a demo application built with React Router, showcasing different routing capabilities and API integrations.
      </p>
      <p>
        Use the sidebar navigation to explore different sections of the application:
      </p>
      <ul>
        <li><strong>Browse our <span className="highlight">Users</span></strong> directory with data from JSONPlaceholder</li>
        <li><strong>Explore inspirational <span className="highlight">Quotes</span></strong> from the DummyJSON API</li>
        <li><strong>Visit our <span className="highlight">Contact</span></strong> page to get in touch</li>
      </ul>
      <div className="infoBox">
        <h3>Getting Started</h3>
        <p>
          <span className="blueText">
            Click on any link in the sidebar to navigate through the application and explore its features.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
