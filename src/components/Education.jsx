import React from 'react';
import { education } from '../data/portfolioData';
import './Education.css';

const Education = () => (
  <section className="education section-padding" id="education">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">04. Education</span>
        <h2 className="section-title">Academic Background</h2>
      </div>
      <div className="education-timeline">
        {education.map((edu, i) => (
          <div className="edu-card glass-card" key={i}>
            <div className="edu-dot" />
            <div className="edu-content">
              <div className="edu-period">{edu.period}</div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-field">{edu.field}</h4>
              <p className="edu-institution">🏛️ {edu.institution}</p>
              <div className="edu-cgpa">
                <span className="cgpa-label">CGPA</span>
                <span className="cgpa-value">{edu.cgpa}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
