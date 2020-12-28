import React from 'react';

export default function Footer() {
  return (
    <div className="footer" id="contact">
      {/* insert font awesome w links to github, linkedin, and email */}
      <a href="https://github.com/hopefourie">
        <i className="fab fa-github"></i>
      </a>
      <a href="mailto:hopefourie@gmail.com">
        <i className="fas fa-envelope"></i>
      </a>
      <a href="https://www.linkedin.com/in/hopefourie/">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
}
