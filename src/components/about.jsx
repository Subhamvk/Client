// About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
      <Link to="/"> Home </Link>
    </div>
  );
};

export default About;
