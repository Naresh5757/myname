import React from 'react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => (
  <section className="skills section-padding" id="skills">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">02. Skills</span>
        <h2 className="section-title">Tech Stack</h2>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card glass-card" key={group.category}>
            <div className="skill-card-header">
              <span className="skill-icon">{group.icon}</span>
              <h3 className="skill-category">{group.category}</h3>
            </div>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="skill-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
