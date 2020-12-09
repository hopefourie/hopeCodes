import React from 'react';

export default function Projects() {
  return (
    <div className="component">
      <div className="projects">
        <h2>Projects</h2>
        <div className="projects-list">
          <div className="project">
            <div className="project-text">
              <h3>RegEx Spaceship</h3>
              <p>
                A web-based multiplayer game that tests players' knowledge of
                Regular Expression syntax while exploring a 2D spaceship. With a
                base of Node.js and HTML, my team and I implemented socket.io to
                create and manage web sockets, allowing players to interact with
                each other in real time. We also used Express and PostgreSQL to
                organize multiple simultaneous games within a database.
              </p>
            </div>
            {/* add img path */}
            <img />
          </div>
          <div className="project">
            {/* add img path */}
            <img />
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
          <div className="project">
            <div className="project-text">
              <h3>Newt's Quest</h3>
              <p>
                A web-based platform game in which players use keyboard controls
                to venture throughout a magical 2D world as Newt the gnome,
                fighting goblins and collecting fireflies. With a base of
                Node.js and HTML, I implemented the Phaser 3 API to design a
                multi-scene game. I also used Express, PostgreSQL and Redux to
                allow players to submit scores to a database.
              </p>
            </div>
            {/* add img path */}
            <img />
          </div>
        </div>
      </div>
    </div>
  );
}
