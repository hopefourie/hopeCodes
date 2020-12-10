import React from 'react';

export default function Intro() {
  return (
    <div className="component">
      <div
        className="intro"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <div className="intro-text">
          <h2>Hello! I'm Hope Fourie, a full stack software engineer.</h2>
          <p>
            I originally studied design theory and execution at Wesleyan
            University, and used this knowledge to pursue a career in costume
            design for TV and film. I loved being creative at work, but I missed
            being analytical. When I started learning JS for the first time, I
            knew I had found what I was looking for. I love the creative problem
            solving aspect of coding.
          </p>
          <p>
            After a 17-week immersive coding bootcamp at Fullstack Academy, I am
            looking a job that links my design experience with my new
            engineering skills. I am excited to work on projects that I enjoyed
            creating and that are making others’ lives better.
          </p>
          <p>
            JavaScript | HTML5 | CSS | ReactJS | Redux | Express | PostgreSQL
          </p>
        </div>
        <img src="./headshot.jpg" className="headshot" />
      </div>
    </div>
  );
}
