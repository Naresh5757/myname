import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current?.classList.add('scrolled');
      } else {
        navRef.current?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-brand" onClick={() => scrollTo('hero')}>
        <span className="brand-bracket">&lt;</span>
        <span className="brand-name">BN</span>
        <span className="brand-bracket">/&gt;</span>
      </div>
      <ul className="nav-links">
        {['about', 'skills', 'projects', 'education', 'contact'].map((item) => (
          <li key={item}>
            <button className="nav-link" onClick={() => scrollTo(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <a href={`mailto:${personalInfo.email}`} className="nav-cta">Hire Me</a>
    </nav>
  );
};

export default Navbar;
