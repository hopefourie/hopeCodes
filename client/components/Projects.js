import React from 'react';

export default function Projects() {
  return (
    <div className="component">
      <div
        className="projects"
        id="projects"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
        data-aos-once="true"
      >
        <h2>Projects</h2>
        <div className="projects-list">
          <div
            className="project"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-once="true"
          >
            <img className="project-img" src="./regexSpaceship.png" />
            <div className="project-text">
              <h3>RegEx Spaceship</h3>
              <p>
                A web-based multiplayer game that tests players' knowledge of
                Regular Expression syntax while exploring a 2D spaceship. With a
                base of Node.js and HTML, my team and I implemented socket.io to
                create and manage multiple game rooms in which players can
                interact with each other in real time. We also used Express and
                PostgreSQL to store and distribute the tasks players received
                within the game.
              </p>
            </div>
          </div>
          <div
            className="project"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="project-text2">
              <h3>Newt's Quest</h3>
              <p>
                A web-based platform game in which players use keyboard controls
                to venture throughout a magical 2D world as Newt the gnome,
                fighting goblins and collecting fireflies. With a base of
                Node.js, HTML, and React I implemented the Phaser 3 API to
                design a multi-scene game. I also used Express, PostgreSQL and
                Redux to allow players to submit scores to a database.
              </p>
            </div>
            <img className="project-img" src="./newtsQuest.png" />
          </div>
          <div
            className="project"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <img className="project-img" src="./noodleEmporium.png" />
            <div className="project-text">
              <h3>M+J Noodle Emporium</h3>
              <p>
                A mock e-commerce site where users can log in, browse a
                selection of noodles, add to their cart, and checkout their
                selected products. With a base of Node.js, HTML5, and CSS, I
                implemented Google OAuth to allow users to sign in using their
                Google credentials. I also used React, Redux, Express, and
                PostgreSQL to create and manage the checkout component, ensuring
                that the user sessions and database are updated in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
