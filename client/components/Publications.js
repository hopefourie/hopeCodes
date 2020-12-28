import React from 'react';
import { Link } from 'react-router-dom';

export default function Publications() {
  return (
    <div className="component">
      <div
        className="publications"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <h2>Publications</h2>
        <div className="publications-list">
          <div
            className="publication"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="publication-text">
              <a
                className="article"
                href="https://hopefourie.medium.com/successfully-integrating-phaser-3-into-your-react-redux-app-part-1-bade7feb460"
              >
                Successfully Integrating Phaser 3 into your React/Redux App
                (Part 1)
              </a>
              <p>Medium</p>
            </div>
          </div>
          <div
            className="publication"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="publication-text">
              <a
                className="article"
                href="https://hopefourie.medium.com/successfully-integrating-phaser-3-into-your-react-redux-app-part-2-e89f74d767eb"
              >
                Successfully Integrating Phaser 3 into your React/Redux App
                (Part 2)
              </a>
              <p>Medium</p>
            </div>
          </div>
          <div
            className="publication"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="publication-text">
              <a
                className="article"
                href="https://hopefourie.medium.com/successfully-integrating-phaser-3-into-your-react-redux-app-part-3-28628c7b4d4"
              >
                Successfully Integrating Phaser 3 into your React/Redux App
                (Part 3)
              </a>
              <p>Medium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
