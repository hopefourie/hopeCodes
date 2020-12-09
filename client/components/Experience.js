import React from 'react';

export default function Experience() {
  return (
    <div className="component">
      <div className="experiences">
        <h2>Experience</h2>
        <div className="experience">
          <p className="experience-dates">Sept 2020-Dec 2020</p>
          <div className="experience-titles">
            <h3>Full Stack Engineer In-Training</h3>
            <h2>Grace Hopper Program at Fullstack Academy</h2>
          </div>
        </div>
        <div className="experience">
          <div className="experience-titles">
            <h3>Costume Designer</h3>
            <h2>Dating (York Avenue Productions)</h2>
          </div>
          <p className="experience-dates">Oct 2019-Nov 2019</p>
        </div>
        <div className="experience">
          <p className="experience-dates">Aug 2019-Jan 2020</p>
          <div className="experience-titles">
            <h3>Costume Production Assistant</h3>
            <h2>Tommy (CBS)</h2>
          </div>
        </div>
        <div className="experience">
          <div className="experience-titles">
            <h3>Costume Shop Supervisor</h3>
            <h2>Wesleyan University</h2>
          </div>
          <p className="experience-dates">Sept 2015-May 2019</p>
        </div>
      </div>
    </div>
  );
}
