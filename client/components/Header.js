import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <h1>Hope Fourie</h1>
      <nav>
        {/* add links to # navigations */}
        <Link className="link" to="projects">
          Projects
        </Link>
        <Link className="link" to="experience">
          Experience
        </Link>
        <Link className="link" to="footer">
          Contact
        </Link>
      </nav>
    </div>
  );
}
