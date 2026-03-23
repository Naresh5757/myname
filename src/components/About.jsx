import React from 'react';
import { about, softSkills } from '../data/portfolioData';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => (
  <section className="about section-padding" id="about">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">01. About Me</span>
        <h2 className="section-title">Who Am I?</h2>
      </div>
      <div className="about-grid">
        <div className="about-avatar-wrap">
          <div className="about-avatar">
            {personalInfo.photo ? (
              <img src={personalInfo.photo} alt={personalInfo.name} className="avatar-img" />
            ) : (
              <span className="avatar-initials">BN</span>
            )}
            <div className="avatar-ring" />
            <div className="avatar-glow" />
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-num">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">4</span>
              <span className="stat-label">Years Study</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
        <div className="about-content">
          <p className="about-text">{about}</p>
          <div className="soft-skills">
            <h4>Soft Skills</h4>
            <div className="soft-skills-list">
              {softSkills.map(skill => (
                <span key={skill} className="soft-skill-pill">{skill}</span>
              ))}
            </div>
          </div>
          <div className="about-links">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-primary">GitHub ↗</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-outline">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
