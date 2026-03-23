import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="projects section-padding" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03. Projects</span>
          <h2 className="section-title">What I've Built</h2>
        </div>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div
              className={`project-card glass-card ${active === i ? 'flipped' : ''}`}
              key={proj.name}
              style={{ '--accent': proj.color }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="project-card-inner">
                {/* Front */}
                <div className="project-front">
                  <div className="project-emoji">{proj.emoji}</div>
                  <h3 className="project-name">{proj.name}</h3>
                  <p className="project-desc">{proj.description}</p>
                  <div className="project-tech">
                    {proj.tech.map(t => (
                      <span className="tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  {proj.liveLink && (
                    <a href={proj.liveLink} target="_blank" rel="noreferrer" className="project-link-btn" onClick={e => e.stopPropagation()}>
                      Live Demo ↗
                    </a>
                  )}
                </div>
                {/* Back */}
                <div className="project-back">
                  <h4>Key Highlights</h4>
                  <ul className="highlights-list">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                  {proj.liveLink && (
                    <a href={proj.liveLink} target="_blank" rel="noreferrer" className="project-link-btn back-btn" onClick={e => e.stopPropagation()}>
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="project-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
