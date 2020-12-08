import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="component">
      <h1>Hope Fourie</h1>
      <nav>
        {/* add links to # navigations */}
        <Link>Projects</Link>
        <Link>Experience</Link>
        <Link>Contact</Link>
      </nav>
    </div>
  );
}
