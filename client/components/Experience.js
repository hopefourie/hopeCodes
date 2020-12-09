import React from 'react';

export default function Experience() {
  return (
    <div className="component">
      <div className="experiences">
        <h2>Experience</h2>
        <div className="experience-list">
          <div className="experience1">
            <div className="experience-text">
              <h3>Full Stack Engineer In-Training</h3>
              <h4>Grace Hopper Program at Fullstack Academy</h4>
              <p className="experience-dates">Sept 2020-Dec 2020</p>
            </div>
            <img className="experience-img" src="./graceHopper.jpg"/>
          </div>
          <div className="experience2">
          <img className="experience-img" src="./nbc.png"/>
            <div className="experience-text">
              <h3>Costume Designer</h3>
              <h4>Dating (York Avenue Productions)</h4>
              <p className="experience-dates">Oct 2019-Nov 2019</p>
            </div>

          </div>
          <div className="experience1">
            <div className="experience-text">
              <h3>Costume Production Assistant</h3>
              <h4>Tommy (CBS)</h4>
            </div>
            <p className="experience-dates">Aug 2019-Jan 2020</p>
          </div>
          <div className="experience2">
            <div className="experience-text">
              <h3>Costume Shop Supervisor</h3>
              <h4>Wesleyan University</h4>
            </div>
            <p className="experience-dates">Sept 2015-May 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
}
