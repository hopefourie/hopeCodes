import React from 'react';
import { Link } from 'react-router-dom';

let destination = 0;
let marginY = 0;
let speed = 15;
let scroller = null;

function scrollTo(elementId) {
  destination = document.getElementById(elementId).offsetTop;
  scroller = setTimeout(() => {
    scrollTo(elementId);
  }, 1);
  marginY += speed;
  if (marginY >= destination) {
    clearTimeout(scroller);
  }
  window.scroll(0, marginY);
}

export default function Header() {
  return (
    <div className="header" data-aos="fade-down" data-aos-duration="2000">
      <h1>Hope Fourie</h1>
      <nav>
        <a
          className="link"
          onClick={() => scrollTo('projects')}
          href="#projects"
        >
          Projects
        </a>
        <a
          className="link"
          onClick={() => scrollTo('experience')}
          href="#experience"
        >
          Experience
        </a>
        <a className="link" onClick={() => scrollTo('contact')} href="#contact">
          Contact
        </a>
      </nav>
    </div>
  );
}
