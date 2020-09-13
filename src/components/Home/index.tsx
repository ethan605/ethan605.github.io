import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/resume">Resume</Link>
  </div>
);

export default Home;
