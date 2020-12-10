import React from 'react';

export default function Experience() {
  return (
    <div className="component">
      <div
        className="experiences"
        id="experience"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <h2>Experience</h2>
        <div className="experience-list">
          <div
            className="experience1"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="experience-text">
              <h3>Full Stack Engineer In-Training</h3>
              <p>Grace Hopper Program at Fullstack Academy</p>
              <h4 className="exerience-dates">Sept 2020-Dec 2020</h4>
            </div>
            <img className="experience-img" src="./graceHopper.jpg" />
          </div>
          <div
            className="experience2"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <img className="experience-img" src="./york.png" />
            <div className="experience-text">
              <h3>Costume Designer</h3>
              <p>Dating (York Avenue Productions)</p>
              <h4 className="experience-dates">Oct 2019-Nov 2019</h4>
            </div>
          </div>
          <div
            className="experience1"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="experience-text">
              <h3>Costume Production Assistant</h3>
              <p>Tommy (CBS)</p>
              <h4 className="experience-dates">Aug 2019-Jan 2020</h4>
            </div>
            <img className="experience-img" src="./cbs.png" />
          </div>
          <div
            className="experience2"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <img className="experience-img" src="./wesleyan.png" />
            <div className="experience-text">
              <h3>Costume Shop Supervisor</h3>
              <p>Wesleyan University</p>
              <h4 className="experience-dates">Sept 2015-May 2019</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
