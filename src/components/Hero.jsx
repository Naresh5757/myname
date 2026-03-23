import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.color = Math.random() > 0.5 ? '#6366f1' : '#8b5cf6';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x, dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = '#6366f1';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <div className="hero-badge">Available for Work 🚀</div>
        <h1 className="hero-name">
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </h1>
        <h2 className="hero-title">{personalInfo.title}</h2>
        <p className="hero-tagline">{personalInfo.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary">
            View My Work
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-outline">
            GitHub ↗
          </a>
        </div>
        <div className="hero-socials">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-pill">LinkedIn</a>
          <span className="social-pill">{personalInfo.location} 📍</span>
          <a href={`mailto:${personalInfo.email}`} className="social-pill">{personalInfo.email}</a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll Down</span>
        <div className="scroll-dot" />
      </div>
    </section>
  );
};

export default Hero;
