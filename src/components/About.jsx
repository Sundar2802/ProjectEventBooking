import { Link } from "react-router-dom"
import React from 'react';

export default function About (){
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our React application.</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};
