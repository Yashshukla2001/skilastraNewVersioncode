import React, { useState, useEffect } from 'react';
import logo from '../public/assests/logo.png';
import Exsora from '../public/assests/Exsora.png';
import Founderimg from '../public/assests/founderimg.png';
import Foundersmall from '../public/assests/foundersmall.png';
import Team1 from '../public/assests/ayush1.jpg';
import Team2 from '../public/assests/harsh1.jpg';
import Team3 from '../public/assests/saloni.jpg';
const WHATSAPP_NUMBER = '+918305144924';
const INSTAGRAM_HANDLE = 'https://www.instagram.com/skil_astra_?igsh=eGFwazhwNXRuZ3hr&utm_source=qr';
const GOOGLE_FORM_JOIN = 'https://forms.gle/KiNp6kKtJF8rRWHf9';
const JOIN_WORKSHOP = 'https://forms.gle/DrtDDDcEPyXDrP7G6';
const GOOGLE_FORM_AMBASSADOR = 'https://forms.gle/WDKfBgDgJf71kftQA';
const JOIN_WAITLIST = 'https://forms.gle/c5QT67gVwLqHqYKP6';
const FOUNDER_DESK = 'https://forms.gle/9Z4urAr8DtzNgFDQA';
const FOUNDER_INSTA = 'https://www.instagram.com/unitetohustle?igsh=MXAyeWc0OTlhZmNnbA%3D%3D&utm_source=qr';
const GOOGLE_FORM_PARTNERSHIP = 'https://forms.gle/gpLpC972uWYZyRwm6';
const EXSORA_WEBSITE = 'https://exsora.in';
const CAREER_OPPORTUNITIES = 'https://forms.gle/ZHoxtqSevi5erxBP6';
// const INTERNSHIPS = 'https://forms.gle/ufaVVvDsHcXRvWZc8';
const EMAIL = 'yashshukla2411@gmail.com';
const PHONE = '+918305144924';
const WORKSHOP_DATE = new Date('2026-01-11T10:00:00+05:30');

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [statsVisible, setStatsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [stats, setStats] = useState({ students: 0, projects: 0, partners: 0 });
  const fullText = "INDIA'S FIRST TECH REVOLUTION";

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? (localStorage?.getItem('theme') || 'dark') : 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowModal(true), 500);
    }, 2500);
  }, []);
useEffect(() => {
  if (statsVisible) {
    let studentCount = 0;
    let projectCount = 0;
    let partnerCount = 0;
    
    const interval = setInterval(() => {
      if (studentCount < 420) {
        studentCount += 7;
        if (studentCount > 420) studentCount = 420;
      }
      if (projectCount < 50) {
        projectCount += 1;
        if (projectCount > 50) projectCount = 50;
      }
      if (partnerCount < 30) {
        partnerCount += 1;
        if (partnerCount > 30) partnerCount = 30;
      }
      
      setStats({
        students: studentCount,
        projects: projectCount,
        partners: partnerCount
      });
      
      if (studentCount >= 420 && projectCount >= 50 && partnerCount >= 30) {
        clearInterval(interval);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }
}, [statsVisible]);

// Stats Observer useEffect - ADD new useEffect for intersection observer
useEffect(() => {
  if (!loading) {
    const statsSection = document.querySelector('.stats-grid');
    
    if (statsSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !statsVisible) {
              setStatsVisible(true);
            }
          });
        },
        { threshold: 0.3 }
      );
      
      observer.observe(statsSection);
      
      return () => observer.disconnect();
    }
  }
}, [loading, statsVisible]);
  useEffect(() => {
    if (!loading && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [loading, typedText]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.classList.contains('clickable')) {
        setCursorActive(true);
      } else {
        setCursorActive(false);
      }
    };
    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = WORKSHOP_DATE.getTime() - now;
      
  //     if (distance > 0) {
  //       setCountdown({
  //         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
  //         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  //         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  //         seconds: Math.floor((distance % (1000 * 60)) / 1000)
  //       });
  //     } else {
  //       setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const target = new Date('2026-01-11T10:00:00+05:30').getTime();
    const distance = target - now;
    
    if (distance > 0) {
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      clearInterval(interval);
    }
  }, 1000);
  return () => clearInterval(interval);
}, []);

 useEffect(() => {
  if (!loading) {
    let studentCount = 0;
    let projectCount = 0;
    let partnerCount = 0;
    
    const interval = setInterval(() => {
      if (studentCount < 420) {
        studentCount += 7;
        if (studentCount > 420) studentCount = 420;
      }
      if (projectCount < 50) {
        projectCount += 1;
        if (projectCount > 50) projectCount = 50;
      }
      if (partnerCount < 30) {
        partnerCount += 1;
        if (partnerCount > 30) partnerCount = 30;
      }
      
      setStats({
        students: studentCount,
        projects: projectCount,
        partners: partnerCount
      });
      
      if (studentCount >= 420 && projectCount >= 50 && partnerCount >= 30) {
        clearInterval(interval);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }
}, [loading]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    if (typeof window !== 'undefined') {
      localStorage?.setItem('theme', newTheme);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="loader-container">
        <style>{`
          .loader-container {
            position: fixed;
            inset: 0;
            background: #050505;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            flex-direction: column;
            gap: 1rem;
          }
          .loader-logo {
            width: 10%;
            height: 10%;
            position: relative;
            animation: logoSpin 2s ease-in-out infinite;
          }
          @keyframes logoSpin {
            0%, 100% { transform: rotate(0deg) scale(1); }
            100% { transform: rotate(360deg) scale(1.1); }
          }
          .loader-logo img {
            width: 90%;
            height: 90%;
          }
          .loader-text {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #a855f7, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: textPulse 1.5s ease-in-out infinite;
          }
          @keyframes textPulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          .loader-bar {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            position: relative;
          }
          .loader-bar::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, #a855f7, #3b82f6);
            animation: loadProgress 2s ease-in-out infinite;
          }
          @keyframes loadProgress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
        <div className="loader-logo">
          {/* <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L36 24H24L12 44H24L36 24Z" stroke="url(#grad1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="grad1" x1="12" y1="4" x2="36" y2="44">
                <stop offset="0%" stopColor="#a855f7"/>
                <stop offset="100%" stopColor="#3b82f6"/>
              </linearGradient>
            </defs>
          </svg> */}
          <img src={logo} alt="logo" />
        </div>
        
        <div className="loader-text">SKILASTRA</div>
        <div className="loader-bar"></div>
      </div>
    );
  }

  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root[data-theme="dark"] {
          --bg-primary: #050505;
          --bg-secondary: #0a0a0a;
          --bg-glass: rgba(15, 15, 25, 0.6);
          --text-primary: #ffffff;
          --text-secondary: #b4b4b4;
          --accent-purple: #a855f7;
          --accent-blue: #3b82f6;
          --glow-purple: rgba(168, 85, 247, 0.2);
          --glow-blue: rgba(59, 130, 246, 0.2);
        }

        :root[data-theme="light"] {
          --bg-primary: #ffffff;
          --bg-secondary: #f9fafb;
          --bg-glass: rgba(255, 255, 255, 0.6);
          --text-primary: #0a0a0a;
          --text-secondary: #6b7280;
          --accent-purple: #9333ea;
          --accent-blue: #2563eb;
          --glow-purple: rgba(147, 51, 234, 0.15);
          --glow-blue: rgba(37, 99, 235, 0.15);
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          overflow-x: hidden;
          transition: background 0.3s ease;
          
          cursor: none;
        }

       .app {
  min-height: 100vh;
  position: relative;
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal scroll */
}
#partnership .card-grid {
  grid-template-columns: repeat(2, 1fr);
}
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid var(--accent-purple);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10001;
          transition: all 0.15s ease;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;
        }

        // 2. Video Section Responsive CSS - REPLACE video styles

.video-showcase {
  max-width: 100%;
  margin: 0 auto;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
.founder-section-clean {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;
  align-items: start;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

.founder-img-clean {
  width: 100%;
  height: 320px;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
  border: 3px solid var(--accent-purple);
  box-shadow: 0 8px 32px var(--glow-purple);
  display: block; 
}

.founder-bio-clean h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.founder-title {
  color: var(--accent-purple);
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.founder-bio-clean p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  height: 0;
  overflow: hidden;
  border-radius: 16px;
  background: #000;
  box-shadow: 0 12px 40px var(--glow-purple);
}
.card-grid,
.team-grid,
.gallery-grid,
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.logo {
height: 100%;
width: 100%;
}


        .custom-cursor.active {
          width: 50px;
          height: 50px;
          background: rgba(168, 85, 247, 0.2);
          border-color: var(--accent-blue);
        }

        .custom-cursor::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: var(--accent-purple);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        // 1. Rename Community Section ticker to avoid conflict - ADD new CSS

// Community Ticker CSS - REPLACE with proper gradient background

// Community Ticker CSS - UPDATE to work with wrapper

.community-ticker {
  overflow: hidden;
  width: 100%;
  padding: 3rem 0;
  position: relative;
  border-radius: 22px;
  background: rgba(10, 10, 10, 0.4);
}

.community-ticker::before,
.community-ticker::after {
  content: '';
  position: absolute;
  top: 0;
  width: 150px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.community-ticker::before {
  left: 0;
  background: linear-gradient(90deg, rgba(10, 10, 10, 0.8) 0%, transparent 100%);
}

.community-ticker::after {
  right: 0;
  background: linear-gradient(270deg, rgba(10, 10, 10, 0.8) 0%, transparent 100%);
}

.community-ticker-content {
  display: flex;
  gap: 2rem;
  animation: communityTickerScroll 40s linear infinite;
  white-space: nowrap;
  align-items: center;
}

.community-ticker-item {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  opacity: 1;
  display: inline-block;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
}

@keyframes communityTickerScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@media (min-width: 1025px) {
  .card-grid,
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.faq-container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
}

.faq-item {
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  width: 100%;
}

.faq-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--glow-purple);
}

.faq-question {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--accent-purple);
}

.faq-answer {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1.05rem;
}

@media (max-width: 1024px) and (min-width: 641px) {
  .card-grid,
  .team-grid,
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
    .faq-container {
    width: 85%;
  }
  
  .faq-item {
    padding: 1.75rem;
  }
  
  .faq-question {
    font-size: 1.15rem;
  }
  
  .faq-answer {
    font-size: 1rem;
  }
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  .card,
  .team-card,
  .gallery-item {
    padding: 2rem 1.5rem;
  }
  
  .card h4,
  .team-card h4 {
    font-size: 1.3rem;
  }
  
  .card p,
  .team-card p {
    font-size: 0.95rem;
  }
}

@media (max-width: 1024px) {
  .founder-section-clean {
    grid-template-columns: 200px 1fr;
    gap: 2rem;
    padding: 2.5rem;
  }
  
  .founder-img-clean {
    height: 280px;
  }
}
@media (max-width: 768px) {
  .founder-section-clean {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    text-align: center;
  }
  
  .founder-img-clean {
    width: 200px;  /* Fixed width */
    height: 250px;
    margin: 0 auto;  /* Centers it */
  }
  
  .founder-bio-clean {
    text-align: center;
  }
}
@media (max-width: 640px) {
  .card-grid,
  .team-grid,
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto, 1fr);
    gap: 1rem;
  }
   #partnership .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
    .countdown {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
   .founder-section-clean {
    padding: 1.5rem;
  }
  
  .founder-img-clean {
    width: 180px;
    height: 220px;
  }
  
  .founder-bio-clean h3 {
    font-size: 1.5rem;
  }
  .countdown-item {
    min-width: auto;
    padding: 1rem;
  }
  
  .card,
  .team-card,
  .track-card {
    padding: 1.5rem 1rem;
  }
  
  .card-icon,
  .track-card-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .card h4,
  .team-card h4,
  .track-card h4 {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
  
  .card p,
  .team-card p {
    font-size: 0.85rem;
    line-height: 1.5;
  }
  
  .card li {
    font-size: 0.85rem;
    padding: 0.5rem 0;
  }
  
  .team-img {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
}
@media (max-width: 480px) {
  .card-grid,
  .team-grid,
  .gallery-grid {
    gap: 0.75rem;
  }
  
  .stats-grid {
    gap: 0.75rem;
  }
  
  .card,
  .team-card,
  .track-card {
    padding: 1.25rem 0.75rem;
  }
  
  .card h4,
  .team-card h4,
  .track-card h4 {
    font-size: 1rem;
  }
  
  .card p,
  .team-card p {
    font-size: 0.8rem;
  }
  
  .card-icon {
    font-size: 1.75rem;
  }
  
  .team-img {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 1024px) {
  .community-ticker-item {
    font-size: 2rem;
  }
  
  .community-ticker-content {
    gap: 1.5rem;
  }
  
  .community-ticker::before,
  .community-ticker::after {
    width: 100px;
  }
}

@media (max-width: 640px) {
  .community-ticker-item {
    font-size: 1.5rem;
  }
  
  .community-ticker-content {
    gap: 1rem;
  }
  
  .community-ticker {
    padding: 2rem 0;
    border-radius: 14px;
  }
  
  .community-ticker::before,
  .community-ticker::after {
    width: 50px;
  }
}  

    .tech-shapes {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .tech-shape {
          position: absolute;
          opacity: 0.1;
          animation: floatShape 25s ease-in-out infinite;
        }

        .tech-shape.cube {
          width: 80px;
          height: 80px;
          border: 2px solid var(--accent-purple);
          animation: floatShape 20s ease-in-out infinite, rotateCube 15s linear infinite;
        }

        .tech-shape.circle {
          width: 60px;
          height: 60px;
          border: 2px solid var(--accent-blue);
          border-radius: 50%;
          animation: floatShape 25s ease-in-out infinite;
        }

        .tech-shape.triangle {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid var(--accent-purple);
          animation: floatShape 30s ease-in-out infinite, rotateTriangle 20s linear infinite;
        }

        @keyframes floatShape {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(100px, -50px); }
          50% { transform: translate(-50px, 100px); }
          75% { transform: translate(80px, 80px); }
        }

        @keyframes rotateCube {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotateTriangle {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .scroll-to-top {
          position: fixed;
          bottom: 6rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 999;
          opacity: 0;
          transform: translateY(100px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px var(--glow-purple);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scroll-to-top.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px var(--glow-purple);
        }

        .scroll-to-top::before {
          content: '↑';
          animation: arrowBounce 1.5s ease-in-out infinite;
        }

        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .bottom-ticker {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #dc2626, #ea580c);
          padding: 1rem 2rem;
          z-index: 998;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
        }

        .ticker-content {
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .top-banner {
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
          padding: 1rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .top-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        .top-banner-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          letter-spacing: 4px;
          position: relative;
          z-index: 1;
        }

        .header {
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(20px);
          background: var(--bg-glass);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 2rem;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          padding: 0.75rem 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          top: 0;
        }

        .header-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          height: 45px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav a {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-blue));
          transition: width 0.3s ease;
        }

        .nav a:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .theme-toggle {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .theme-toggle:hover {
          transform: rotate(180deg);
        }

        .btn-primary {
          padding: 0.75rem 1.75rem;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
          border: none;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px var(--glow-purple);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px var(--glow-purple);
        }

        .btn-secondary {
          padding: 0.75rem 1.75rem;
          background: transparent;
          border: 2px solid var(--accent-purple);
          border-radius: 50px;
          color: var(--text-primary);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: var(--accent-purple);
          color: white;
          transform: translateY(-2px);
        }
        .tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.track-card {
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.track-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-purple), var(--accent-blue));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.track-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px var(--glow-purple);
}

.track-card:hover::before {
  transform: scaleX(1);
}

.track-card h4 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.track-card ul {
  list-style: none;
  margin: 0 0 2rem 0;
  flex-grow: 1;
}

.track-card li {
  color: var(--text-secondary);
  padding: 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
}

.track-card li::before {
  content: '✓';
  position: relative;
  left: 0;
  {/* margin-right: 0.75rem; */}
  padding-right: 0.5rem;
  color: var(--accent-purple);
  font-weight: 700;
}

.track-card .btn-primary {
  width: 100%;
  margin-top: auto;
}

        .icon-btn {
          background: none;
          border: 2px solid var(--accent-purple);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .icon-btn:hover {
          background: var(--accent-purple);
          transform: scale(1.1);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          transition: all 0.3s ease;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 10rem 2rem 8rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(59, 130, 246, 0.05));
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          opacity: 0.4;
        }

        .gradient-wave {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 50%, var(--glow-purple) 0%, transparent 50%),
                      radial-gradient(circle at 70% 50%, var(--glow-blue) 0%, transparent 50%);
          animation: wave 20s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10%, -5%) rotate(5deg); }
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: var(--accent-purple);
          border-radius: 50%;
          opacity: 0.4;
          animation: float 15s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .typing-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--accent-purple);
          letter-spacing: 3px;
          margin-bottom: 1.5rem;
          min-height: 30px;
        }

        .typing-text::after {
          content: '|';
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-title {
          font-size: 5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .limited-banner {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(234, 88, 12, 0.2));
          border: 2px solid #ef4444;
          border-radius: 50px;
          padding: 1rem 2rem;
          display: inline-block;
          margin-bottom: 3rem;
          cursor: pointer;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }

        .limited-text {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ef4444;
          margin: 0;
        }

        .hero-ctas {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }

        .founder-intro {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-top: 4rem;
          padding: 2rem;
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 1024px) {
  .container {
    padding: 0 1-5rem;
     max-width: 100%;
     
  }
   .section {
    padding: 3rem 0; /* Remove horizontal padding from section */
  }
}
@media (max-width: 640px) {
  .container {
    padding: 0 1rem; /* Reduced padding */
    max-width: 100%; /* Ensure full width */
  }
   .section {
    padding: 2.5rem 0; /* Remove horizontal padding */
  }
}

        .founder-intro-img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: contain;
          border: 3px solid var(--accent-purple);
        }

        .founder-intro-text h4 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .founder-intro-text p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .section {
          padding: 4rem 2rem;
          position: relative;
        }

        {/* .container {
          max-width: 1400px;
          margin: 0 auto;
        } */}

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 4rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .glass-block {
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .glass-block h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .glass-block p {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.1rem;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .card {
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-blue));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px var(--glow-purple);
        }

        .card:hover::before {
          transform: scaleX(1);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .card h4 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .card p {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .card ul {
          list-style: none;
          margin: 1.5rem 0;
        }

        .card li {
          color: var(--text-secondary);
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
        }

        .card li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-purple);
        }

        .workshop-section {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1));
          border-radius: 24px;
          padding: 4rem 3rem;
          text-align: center;
        }

        .countdown {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 3rem 0;
          flex-wrap: wrap;
        }

        .countdown-item {
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem 2rem;
          min-width: 120px;
        }

        .countdown-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .countdown-label {
          color: var(--text-secondary);
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1px;
          margin-top: 0.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmin(220px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);

        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: var(--text-secondary);
          margin-top: 0.5rem;
          font-size: 1.1rem;
        }

        .testimonial-card {
        grid-column: 1 / -1;
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          border-left: 4px solid var(--accent-purple);
        }

        .testimonial-text {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
          font-style: italic;
        }

        .testimonial-author {
          font-weight: 600;
          color: var(--accent-purple);
        }

        
       
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .team-card {
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
        }

        .team-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 1.5rem;
          border: 3px solid var(--accent-purple);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .gallery-item {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 16/10;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.05);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          padding: 2rem 1.5rem 1rem;
          color: white;
          font-weight: 600;
        }

        .footer {
          background: var(--bg-secondary);
          padding: 3rem 2rem 7rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-links a:hover {
          color: var(--accent-purple);
        }

        .footer-bottom {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          backdrop-filter: blur(10px);
          padding: 1rem;
        }

        .modal-content {
          background: var(--bg-secondary);
          border-radius: 24px;
          padding: 3rem;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: modalFadeIn 0.3s ease-out;
          box-shadow: 0 20px 60px var(--glow-purple);
          border: 2px solid rgba(168, 85, 247, 0.3);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .modal-close:hover {
          background: var(--glow-purple);
          transform: rotate(90deg);
        }

        @media (max-width: 1024px) {
          .nav {
            display: none;
          }
          .founder-section-clean {
    grid-template-columns: 250px 1fr;
    gap: 2rem;
    padding: 2.5rem;
  }
  
  .founder-img-clean {
    height: 350px;
  }
            .tracks-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}
          .video-showcase {
    max-width: 100%;
    {/* padding: 8rem; */}
    marginTop: 2rem;
    marginBottom: 2rem;
    border-radius: 20px;
  }
  
  .video-wrapper {
    padding-bottom: 56.25%;
  }

           .section {
    padding: 3rem 2rem;
  }

         
          .hero-title {
            font-size: 3rem;
          }

         
        }
        @media (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
    gap: 1.5rem;
  }
}
@media (max-width: 1024px) and (min-width: 641px) {
  .tracks-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}
@media (max-width: 1000px) and (min-width: 769px) {


.hamburger {
            display: flex;
          }

          .mobile-menu {
            position: fixed;
            top: 140px;
            left: 0;
            right: 0;
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .mobile-menu.open {
            transform: translateY(0);
            opacity: 1;
          }

          .mobile-menu a {
            display: block;
            padding: 1rem 0;
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 500;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            cursor: pointer;
          }
  
}


@media (max-width: 768px) {
  .founder-section-clean {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    text-align: center;
  }
   .faq-container {
    width: 90%;
  }
  
  .faq-item {
    padding: 1.5rem;
  }
  
  .faq-question {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
  
  .faq-answer {
    font-size: 0.95rem;
    line-height: 1.6;
  }
   .hamburger {
            display: flex;
          }

          .mobile-menu {
            position: fixed;
            top: 140px;
            left: 0;
            right: 0;
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .mobile-menu.open {
            transform: translateY(0);
            opacity: 1;
          }

          .mobile-menu a {
            display: block;
            padding: 1rem 0;
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 500;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            cursor: pointer;
          }
  
  .founder-img-clean {
    width: 250px;
    height: 300px;
    margin: 0 auto;
  }
  
  .founder-bio-clean {
    text-align: center;
  }
  
  .founder-bio-clean > div {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .tracks-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
   .faq-container {
    width: 95%;
  }
  
  .faq-item {
    padding: 1.25rem 1rem;
    border-radius: 12px;
  }
  
  .faq-question {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
  
  .faq-answer {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .track-card {
    padding: 1.5rem 1rem;
  }
  
  .track-card h4 {
    font-size: 1.1rem;
  }
  
  .track-card li {
    font-size: 0.85rem;
    padding: 0.5rem 0;
  }
}

        @media (max-width: 640px) {
          .top-banner-text {
            font-size: 1rem;
            letter-spacing: 2px;
          }
           .hamburger {
            display: flex;
          }

          .mobile-menu {
            position: fixed;
            top: 140px;
            left: 0;
            right: 0;
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .mobile-menu.open {
            transform: translateY(0);
            opacity: 1;
          }

          .mobile-menu a {
            display: block;
            padding: 1rem 0;
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 500;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            cursor: pointer;
          }

           .video-showcase {
    padding: 1rem;
    border-radius: 16px;
  }
  
  .video-wrapper {
    border-radius: 12px;
    padding-bottom: 56.25%;
  }
            .section {
    padding: 2.5rem 1.5rem;
  }
  .founder-section-clean {
    padding: 1.5rem;
  }
  
  .founder-img-clean {
    width: 200px;
    height: 250px;
  }
  
  .founder-bio-clean h3 {
    font-size: 1.5rem;
  }

          .hero {
            padding: 8rem 1.5rem 6rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .founder-intro {
            flex-direction: column;
            text-align: center;
          }

          .section-title {
            font-size: 2rem;
          }

          .countdown {
            gap: 1rem;
          }

          .countdown-item {
            min-width: 80px;
            padding: 1rem;
          }

          .countdown-number {
            font-size: 2rem;
          }

          .limited-text {
            font-size: 0.9rem;
          }

          .ticker-content {
            font-size: 0.9rem;
          }
          .tracks-grid {
    grid-template-columns: 1fr;
  }
  
  .track-card {
    padding: 2rem;
  }

          .modal-content {
            padding: 2rem 1.5rem;
          }
            .header-content {
    padding: 0 1rem;
  }
   .hero {
    padding: 8rem 1rem 6rem;
  } .footer {
    padding: 3rem 1rem 7rem;
  }

   .glass-block {
    padding: 2rem 1.5rem;
  }
   .card {
    padding: 2rem 1.5rem;
  }
   .workshop-section {
    padding: 3rem 1.5rem;
  }

          .icon-btn {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
  .faq-container {
    width: 100%;
    padding: 0 1rem;
  }
  
  .faq-item {
    padding: 1rem 0.75rem;
  }
   .founder-img-clean {
    width: 160px;
    height: 200px;
  }
  
  .founder-bio-clean h3 {
    font-size: 1.3rem;
  }
  
  .faq-question {
    font-size: 0.95rem;
  }
  
  .faq-answer {
    font-size: 0.85rem;
  }
}
      `}</style>

      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${cursorActive ? 'active' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Tech Shapes Background */}
      <div className="tech-shapes">
        <div className="tech-shape cube" style={{ top: '10%', left: '5%' }}></div>
        <div className="tech-shape circle" style={{ top: '20%', right: '10%' }}></div>
        <div className="tech-shape triangle" style={{ top: '50%', left: '15%' }}></div>
        <div className="tech-shape cube" style={{ bottom: '15%', left: '60%' }}></div>
        <div className="tech-shape circle" style={{ bottom: '25%', right: '5%' }}></div>
        <div className="tech-shape triangle" style={{ bottom: '40%', left: '10%' }}></div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Welcome to Skilastra!
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
                Join India's First Tech Revolution
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Limited to 50 seats only! Be part of Dewas' first offline skill ecosystem. Register now for our introductory session on January 11, 2026.
              </p>
              
              <div style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(234, 88, 12, 0.1))', border: '2px solid #ef4444', borderRadius: '16px', padding: '1rem', marginBottom: '2rem' }}>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ef4444', margin: 0 }}>
                  🔥 Only 50 Seats Available! 🔥
                </p>
              </div>

<div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
  <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                First Free Offline Introductory Session Starts In:
              </h2>
  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
    <div style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '0.75rem 1rem', minWidth: '70px', textAlign: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{countdown.days}</div>
      <div style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', marginTop: '0.25rem' }}>Days</div>
    </div>
    <div style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '0.75rem 1rem', minWidth: '70px', textAlign: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{countdown.hours}</div>
      <div style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', marginTop: '0.25rem' }}>Hours</div>
    </div>
    <div style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '0.75rem 1rem', minWidth: '70px', textAlign: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{countdown.minutes}</div>
      <div style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', marginTop: '0.25rem' }}>Mins</div>
    </div>
    <div style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '0.75rem 1rem', minWidth: '70px', textAlign: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{countdown.seconds}</div>
      <div style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', marginTop: '0.25rem' }}>Secs</div>
    </div>
  </div>
</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button 
                  className="btn-primary" 
                  style={{ width: '100%' }}
                  onClick={() => {
                    window.open(JOIN_WORKSHOP, '_blank');
                    setShowModal(false);
                  }}
                >
                  Join First Free Introductory Session - Register Now
                </button>
                <button 
                  className="btn-secondary"
                  style={{ width: '100%' }}
                  onClick={() => {
                    window.open('https://wa.me/' + WHATSAPP_NUMBER, '_blank');
                    setShowModal(false);
                  }}
                >
                  💬 Connect on WhatsApp
                </button>
              </div>
             
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      />

      {/* Bottom Ticker */}
      <div className="bottom-ticker">
        <div className="ticker-content">
          <span>Join Now for FREE — Your parents didn't dream of unemployment</span>
          <button className="btn-primary" onClick={() => window.open(GOOGLE_FORM_JOIN, '_blank')}>
            Join Now
          </button>
        </div>
      </div>

      {/* Top Banner */}
      <div className="top-banner">
        <div className="top-banner-text">LEARN • BUILD • EARN • REPEAT</div>
      </div>

      {/* Header */}
      <header className={`header ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="header-content">
          <img src={logo} alt="Skilastra" className="logo" />
          
          <nav className="nav">
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('who-for')}>Who For</a>
            <a onClick={() => scrollToSection('internships')}>Internships</a>
            <a onClick={() => scrollToSection('ambassador')}>Ambassador</a>
            <a onClick={() => scrollToSection('parents')}>Parents</a>
            <a onClick={() => scrollToSection('team')}>Team</a>
            <a onClick={() => scrollToSection('tracks')}>Cohorts</a>
          </nav>

          <div className="header-actions">
            <button className="icon-btn" onClick={() => window.location.href = `tel:${PHONE}`}>📞</button>
            <button className="icon-btn" onClick={() => window.location.href = `mailto:${EMAIL}`}>✉️</button>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="btn-primary" onClick={() => window.open(GOOGLE_FORM_JOIN, '_blank')}>
              Join
            </button>
            <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu open">
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('who-for')}>Who For</a>
            <a onClick={() => scrollToSection('internships')}>Internships</a>
            <a onClick={() => scrollToSection('ambassador')}>Ambassador</a>
            <a onClick={() => scrollToSection('parents')}>Parents</a>
            <a onClick={() => scrollToSection('team')}>Team</a>
            <a onClick={() => scrollToSection('tracks')}>Cohorts</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="gradient-wave" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
          <div className="particles">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 15}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="hero-content">
          <div className="typing-text">{typedText}</div>
          <h1 className="hero-title">Skill is the Foundation of Every Future.</h1>
          <p className="hero-subtitle">
            A structured offline ecosystem designed for the next generation of professionals, powered by Exsora.
          </p>

          <div className="limited-banner" onClick={() => window.open(JOIN_WORKSHOP, '_blank')}>
            <p className="limited-text">🔥 LIMITED - Only 50 Seats! Click to Register 🔥</p>
          </div>
          <div className="countdown" style={{ marginBottom: '1rem' ,marginTop: 'auto'}}>
  <div className="countdown-item">
    <div className="countdown-number">{countdown.days}</div>
    <div className="countdown-label">Days</div>
  </div>
  <div className="countdown-item">
    <div className="countdown-number">{countdown.hours}</div>
    <div className="countdown-label">Hours</div>
  </div>
  <div className="countdown-item">
    <div className="countdown-number">{countdown.minutes}</div>
    <div className="countdown-label">Minutes</div>
  </div>
  <div className="countdown-item">
    <div className="countdown-number">{countdown.seconds}</div>
    <div className="countdown-label">Seconds</div>
  </div>
</div>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => window.open(JOIN_WORKSHOP, '_blank')}>
              Join First Free Introductory Session
            </button>
            <button className="btn-secondary" onClick={() => window.open(GOOGLE_FORM_AMBASSADOR, '_blank')}>
              Apply for Ambassador
            </button>
          </div>

          <div className="founder-intro">
            <img src={Foundersmall} alt="Yash Shukla" className="founder-intro-img" />
            <div className="founder-intro-text">
              <h4>Yash Shukla</h4>
              <p>Founder — Skilastra & Exsora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ecosystem Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why an Ecosystem, Not a Coaching Center?</h2>
          <p className="section-subtitle">Skilastra is built on a holistic approach to skill development</p>

          <div className="card-grid">
            <div className="card animate-on-scroll">
              <div className="card-icon">🌱</div>
              <h4>Complete Growth Environment</h4>
              <p>Beyond lectures — we provide mentorship, community, real projects, and career guidance all in one place.</p>
            </div>

            <div className="card animate-on-scroll">
              <div className="card-icon">🤝</div>
              <h4>Community-Driven Learning</h4>
              <p>Connect with like-minded individuals, collaborate on projects, and grow together in a supportive environment.</p>
            </div>

            <div className="card animate-on-scroll">
              <div className="card-icon">🎯</div>
              <h4>Outcome-Focused</h4>
              <p>Not just completion certificates — we focus on building real skills, portfolios, and career-ready competence.</p>
            </div>

            <div className="card animate-on-scroll">
              <div className="card-icon">🚀</div>
              <h4>Continuous Evolution</h4>
              <p>An ecosystem that adapts, grows, and evolves with industry demands and student needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="glass-block animate-on-scroll">
            <h3>The Reality of Modern Learning</h3>
            <p>
              Online learning created convenience but not competence. Students now have access to endless resources, yet struggle in real-world interviews and professional environments. The gap between knowing and doing has widened.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              Consistency, discipline, and hands-on mentorship are missing. The digital economy demands stronger fundamentals and applied skill, not just theoretical knowledge. Skilastra addresses this critical need through structured, offline, and outcome-driven learning.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is Skilastra For */}
      <section id="who-for" className="section">
        <div className="container">
          <h2 className="section-title">🎯 Who Is Skilastra For?</h2>
          <p className="section-subtitle">If you see yourself anywhere in this list… Skilastra was built exactly for you.</p>
          
          <div className="card-grid">
            {[
              { icon: '🎓', title: 'Students (9th to College Final Year)', desc: '"Skills nahi ban pa rhi…" "Confidence aa nahi raha…" Skilastra gives structure, accountability, and a real environment.' },
              { icon: '💼', title: 'Job Seekers / Freshers', desc: 'Stuck in average jobs, rejected in interviews. Skilastra gives real skills + mock interviews + projects that companies trust.' },
              { icon: '🚆', title: 'Students Traveling to Indore/Ujjain Daily', desc: '5000+ students daily travel from Dewas. Only because there is no local skill ecosystem. Now they don\'t have to.' },
              { icon: '🚀', title: 'Aspiring Founders / Creators', desc: 'Build something of their own. Start an online business. Skilastra gives skills + execution support + clarity.' },
              { icon: '📚', title: 'School Students (Classes 9-12)', desc: 'Early exposure to coding, websites and AI, digital tools. Early skill advantage beats everything.' },
              { icon: '🏢', title: 'Business Owners & Family Businesses', desc: 'Basic digital presence, automation, marketing understanding. Skilastra gives language + clarity to operate in today\'s business world.' }
            ].map((item, i) => (
              <div key={i} className="card animate-on-scroll">
                <div className="card-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.3rem', fontWeight: 700, color: 'var(--accent-purple)' }}>
            If you want to improve your future, career, skill or confidence — Skilastra is for you.
          </div>
        </div>
      </section>

      {/* Solution Framework */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">The Skilastra Framework</h2>
          <p className="section-subtitle">Six pillars that transform potential into professional capability</p>

          <div className="card-grid">
            <div className="card animate-on-scroll">
              <h4>Structured Offline Learning</h4>
              <p>In-person sessions with fixed schedules, accountability systems, and real-time feedback loops that build discipline and consistency.</p>
            </div>

            <div className="card animate-on-scroll">
              <h4>Real Project Execution</h4>
              <p>Work on actual projects from day one. Build portfolios that demonstrate capability, not just completion certificates.</p>
            </div>

            <div className="card animate-on-scroll">
              <h4>Modern Tech & Digital Skills</h4>
              <p>Master AI tools, automation systems, and digital platforms that define the current professional landscape.</p>
            </div>

            <div className="card animate-on-scroll">
              <h4>Communication & Confidence</h4>
              <p>Develop articulation, presentation skills, and professional presence through structured practice and feedback.</p>
            </div>

            <div className="card animate-on-scroll">
              <h4>Personal Mentorship</h4>
              <p>Direct access to experienced mentors who provide career direction, strategic guidance, and personalized growth plans.</p>
            </div>

            <div className="card animate-on-scroll">
              <h4>Career Acceleration</h4>
              <p>Placement support, interview preparation, and connections to industry networks that accelerate professional growth.</p>
            </div>
          </div>
        </div>
      </section>
<section id="tracks" className="section" style={{ background: 'var(--bg-secondary)' }}>
  <div className="container">
    <h2 className="section-title">Upcoming Cohorts</h2>
    <p className="section-subtitle">Specialized pathways designed for market-ready skill development</p>
    
    <div className="tracks-grid">
      <div className="track-card animate-on-scroll">
        <h4>AI & Automation</h4>
        <ul>
          <li>Prompt engineering & AI tools</li>
          <li>Workflow automation systems</li>
          <li>Data analysis & interpretation</li>
          <li>AI-powered productivity</li>
        </ul>
        <button className="btn-primary" onClick={() => window.open(JOIN_WAITLIST, '_blank')}>
          Join Waitlist
        </button>
      </div>
      
      <div className="track-card animate-on-scroll">
        <h4>Coding & Web Development</h4>
        <ul>
          <li>Full-stack development</li>
          <li>Frontend frameworks & design</li>
          <li>Backend systems & APIs</li>
          <li>Real project deployment</li>
        </ul>
        <button className="btn-primary" onClick={() => window.open(JOIN_WAITLIST, '_blank')}>
          Join Waitlist
        </button>
      </div>
      
      <div className="track-card animate-on-scroll">
        <h4>Digital Marketing & Branding</h4>
        <ul>
          <li>Content strategy & creation</li>
          <li>Social media marketing</li>
          <li>Brand positioning & identity</li>
          <li>Analytics & growth metrics</li>
        </ul>
        <button className="btn-primary" onClick={() => window.open(JOIN_WAITLIST, '_blank')}>
          Join Waitlist
        </button>
      </div>
      
      <div className="track-card animate-on-scroll">
        <h4>Communication & Career Skills</h4>
        <ul>
          <li>Professional communication</li>
          <li>Interview preparation</li>
          <li>Resume & portfolio building</li>
          <li>Leadership & networking</li>
        </ul>
        <button className="btn-primary" onClick={() => window.open(JOIN_WAITLIST, '_blank')}>
          Join Waitlist
        </button>
      </div>
    </div>
  </div>
</section>
      {/* Workshop Section */}
      <section id="workshop" className="section">
        <div className="container">
          <div className="workshop-section animate-on-scroll">
            <h2 className="section-title">Skilastra's First Free Offline Introductory Session</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              11 January 2026 — Limited Availability
            </p>

            <div className="countdown">
              <div className="countdown-item">
                <div className="countdown-number">{countdown.days}</div>
                <div className="countdown-label">Days</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{countdown.hours}</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{countdown.minutes}</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{countdown.seconds}</div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
              A hands-on session providing practical exposure to Skilastra's learning model. 
              Experience real project work, interact with mentors and the founder, and understand 
              how structured offline learning accelerates professional growth. Offline only.
            </p>

            <button className="btn-primary" onClick={() => window.open(JOIN_WORKSHOP, '_blank')}>
              Reserve Your Seat
            </button>
          </div>
        </div>
      </section>

      {/* Ambassador Program */}
      <section id="ambassador" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">🎖 The Skilastra Ambassador Program</h2>
          <p className="section-subtitle">The most powerful youth-led growth movement in Dewas</p>

          <div className="glass-block animate-on-scroll" style={{ maxWidth: '900px', margin: '0 auto 3rem' }}>
            <h3>Become a Skilastra Ambassador</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Represent Skilastra in your college and gain leadership exposure by learning from real 
              startup operations. Build and manage student communities while developing your own 
              professional capabilities.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '2rem', paddingLeft: 0 }}>
              <li style={{ padding: '0.75rem 0', paddingLeft: '2rem', position: 'relative', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: '0', color: 'var(--accent-purple)' }}>✓</span>
                Leadership experience in real operations
              </li>
              <li style={{ padding: '0.75rem 0', paddingLeft: '2rem', position: 'relative', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: '0', color: 'var(--accent-purple)' }}>✓</span>
                Community building & management skills
              </li>
              <li style={{ padding: '0.75rem 0', paddingLeft: '2rem', position: 'relative', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: '0', color: 'var(--accent-purple)' }}>✓</span>
                Direct mentorship from founder & team
              </li>
              <li style={{ padding: '0.75rem 0', paddingLeft: '2rem', position: 'relative', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: '0', color: 'var(--accent-purple)' }}>✓</span>
                Official certification & recognition
              </li>
            </ul>
            <button className="btn-primary" onClick={() => window.open(GOOGLE_FORM_AMBASSADOR, '_blank')}>
              Apply Through Google Form
            </button>
          </div>
        </div>
      </section>

      {/* For Parents Section */}
      <section id="parents" className="section">
        <div className="container">
          <h2 className="section-title">👨‍👩‍👧 For Parents</h2>
          <p className="section-subtitle">Because parents don't want certificates — they want progress they can see</p>

          <div className="card-grid">
            {[
              { icon: '🏢', title: 'Safe, Structured, Monitored', desc: 'Every class is supervised. Every activity has a purpose. Every student is tracked for progress. You always know where your child stands.' },
              { icon: '📊', title: 'Weekly Reports for Parents', desc: 'You get updates on attendance, assignments, behaviour, communication improvements, skills learned, and overall progress. Parents never stay in the dark.' },
              { icon: '💪', title: 'Not Just Skills — Confidence + Discipline', desc: 'We train your child to speak confidently, present clearly, think better, work in teams, handle pressure, and meet deadlines.' },
              { icon: '💼', title: 'Real Projects Instead of Certificates', desc: 'Your child builds websites, presentations, brand designs, digital work, and startup ideas. You see real output — not just attendance.' },
              { icon: '🚀', title: 'Future-Proof Skills', desc: 'Skilastra teaches skills that matter in 2025 and beyond: AI, Coding, Automation, Digital Marketing, Communication, Personal Branding.' },
              { icon: '🏢', title: 'Backed by Exsora', desc: 'Parents trust us because Skilastra is powered by Exsora, a company working with real businesses, real clients, and real technology.' }
            ].map((item, i) => (
              <div key={i} className="card animate-on-scroll">
                <div className="card-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))', borderRadius: '24px', padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: '3rem auto 0' }}>
            <p style={{ fontSize: '1.3rem', fontWeight: 700, fontStyle: 'italic', color: 'var(--accent-purple)' }}>
              "Skilastra gives your child the advantage that traditional education missed. A confident, skilled, future-ready version of themselves."
            </p>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">💬 Parent Testimonials</h2>
          <div className="card-grid">
            {[
              { text: 'My daughter could not speak in front of even 2 people. After one month at Skilastra, she gave a presentation in front of a full classroom. For the first time, I saw confidence in her eyes.', name: 'Mrs. Shruti Joshi, Dewas' },
              { text: 'We spent so much on online courses but she never completed anything. At Skilastra, she completes assignments, gets feedback, and learns real skills. This is the structure students truly need.', name: 'Mr. Anil Rajput' },
              { text: 'My son was rejected in 6 interviews. Skilastra trained him on communication, confidence, and resume building. He finally cracked his first job interview in 45 days.', name: 'Mr. Manish Tiwari' },
              { text: 'I wanted my son to learn something real beyond school. Coding, AI tools, communication — everything matters today. Skilastra made him tech-smart and responsible.', name: 'Mrs. Seema Rathore' },
              { text: 'We finally found a place that guides without giving false promises. Here the focus is on skill and personality, not marks.', name: 'Mr. Rajesh Sahu' }
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card animate-on-scroll">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      
<section className="section">
  <div className="container">
    <h2 className="section-title">❓ Frequently Asked Questions</h2>
    <div className="faq-container">
      {[
        { q: 'Skilastra kya coaching hai?', a: 'Nahi. Skilastra is a skill ecosystem. Yaha syllabus nahi — skill + confidence + real project sikhaya jata hai.' },
        { q: 'Kya yaha online classes hoti hain?', a: 'No. 100% offline. Real conversation, real practice, real learning.' },
        { q: 'Kya beginner students join kar sakte hain?', a: 'Bilkul. Hum basics se start karte hain — coding, digital tools, communication sab step-by-step.' },
        { q: 'Yaha ka environment safe hai?', a: 'Yes — monitored classrooms, mentor supervision, and a disciplined environment.' },
        { q: 'Kya parents ko progress pata chalta hai?', a: 'Yes. Weekly reports + mentor feedback + monthly review.' },
        { q: 'Kya yaha certificate milta hai?', a: 'Yes, but certificate is secondary. Focus is portfolio + projects + confidence.' }
      ].map((faq, i) => (
        <div key={i} className="faq-item animate-on-scroll">
          <div className="faq-question">{faq.q}</div>
          <div className="faq-answer">{faq.a}</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Partner Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">🤝 Partner With Skilastra</h2>
          <p className="section-subtitle">Empowering Workplaces, Classrooms & Communities With Future-Ready Skills</p>

          <div className="card-grid">
            {[
              { icon: '🏫', title: 'Schools (9th–12th)', desc: 'Tech + Digital Literacy Workshops' },
              { icon: '🎓', title: 'Colleges', desc: 'Skill Development + Career Readiness Programs' },
              { icon: '🏢', title: 'Companies & Startups', desc: 'Team Training, Automation & AI Workshops' },
              { icon: '🏬', title: 'Local Businesses', desc: 'Business Digitalisation & Marketing Training' }
            ].map((partner, i) => (
              <div key={i} className="card animate-on-scroll">
                <div className="card-icon">{partner.icon}</div>
                <h4>{partner.title}</h4>
                <p>{partner.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn-primary" onClick={() => window.open(GOOGLE_FORM_PARTNERSHIP, '_blank')}>
              📩 Apply For Workshop / Partnership
            </button>
          </div>
        </div>
      </section>
    
{/* Showcase Video Section */}
{/* <section className="section">
  <div className="container">
    <h2 className="section-title">Experience Skilastra</h2>
    <p className="section-subtitle">Watch how we transform potential into professional capability</p>
    
    <div className="video-showcase animate-on-scroll">
      <div className="video-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Skilastra Showcase"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
</section> */}

      {/* Facilities Section */}
      {/* <section className="section">
        <div className="container">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">Modern infrastructure designed for focused learning</p>

          <div className="gallery-grid">
            <div className="gallery-item animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" alt="Modern Classroom" />
              <div className="gallery-caption">Modern Classrooms</div>
            </div>

            <div className="gallery-item animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" alt="Learning Space" />
              <div className="gallery-caption">Collaborative Spaces</div>
            </div>

            <div className="gallery-item animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop" alt="Tech Lab" />
              <div className="gallery-caption">Tech-Enabled Labs</div>
            </div>

            <div className="gallery-item animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Workshop" />
              <div className="gallery-caption">Workshop Sessions</div>
            </div>

            <div className="gallery-item animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop" alt="Project Room" />
              <div className="gallery-caption">Project Workspaces</div>
            </div>

            <div className="gallery-item animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" alt="Community Area" />
              <div className="gallery-caption">Community Hub</div>
            </div>
          </div>
        </div>
      </section> */}



{/* Community Section */}
<section className="section" style={{ background: 'var(--bg-secondary)' }}>
  <div className="container">
    <h2 className="section-title">Join The Movement</h2>
    <p className="section-subtitle">Be part of India's first tech revolution in Dewas</p>
    
    <div style={{ 
      background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)', 
      borderRadius: '24px',
      padding: '0.5rem',
      overflow: 'hidden',
      maxWidth: '100%',
      width: '100%'
    }}>
      <div className="community-ticker">
        <div className="community-ticker-content">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="community-ticker-item">Skill</span>
              <span className="community-ticker-item">•</span>
              <span className="community-ticker-item">Growth</span>
              <span className="community-ticker-item">•</span>
              <span className="community-ticker-item">Direction</span>
              <span className="community-ticker-item">•</span>
              <span className="community-ticker-item">Innovation</span>
              <span className="community-ticker-item">•</span>
              <span className="community-ticker-item">Leadership</span>
              <span className="community-ticker-item">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
    
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <a href="https://forms.gle/Ck5YWPrsKpSVqKSC9" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
        Join The Community
      </a>
    </div>
  </div>
</section>
<section id="founder" className="section">
  <div className="container">
    <h2 className="section-title">Founder</h2>
    <div className="founder-section-clean animate-on-scroll">
      <img 
        src={Founderimg} 
        alt="Yash Shukla - Founder" 
        className="founder-img-clean"
      />
      
      <div className="founder-bio-clean">
        <h3>Yash Shukla</h3>
        <p className="founder-title">Founder — Skilastra & Exsora</p>
        <p>
          Yash Shukla is the founder of Skilastra and Exsora, with over four years of experience
          in technology, product design, automation systems, and startup leadership.
        </p>
        <p>
          His vision is to build a structured skill ecosystem for India's next-generation talent,
          bridging the gap between academic knowledge and market readiness through practical,
          outcome-driven learning experiences.
        </p>
        <p>
          Through Exsora, Yash has built scalable systems and strategies for businesses, and now
          brings that expertise to developing tomorrow's professionals through Skilastra.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => window.open(FOUNDER_INSTA, '_blank')}>
            Connect on Instagram
          </button>
          <button className="btn-secondary" onClick={() => window.open(FOUNDER_DESK, '_blank')}>
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Team Section */}
      <section id="team" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Experienced professionals dedicated to your growth</p>

          <div className="team-grid">
            <div className="team-card animate-on-scroll">
              <img src={Foundersmall} alt="Yash Shukla" className="team-img" />
              <h4>Yash Shukla</h4>
              <p>Founder & CEO</p>
            </div>

            <div className="team-card animate-on-scroll">
              <img src={Team3} alt="Team Member" className="team-img" />
              <h4>Saloni Satpute</h4>
              <p>Digital Marketing Expert</p>
            </div>

            <div className="team-card animate-on-scroll">
              <img src={Team1} alt="Team Member" className="team-img" />
              <h4>Ayush Hiwase</h4>
              <p>AI & Automation Specialist</p>
            </div>

            <div className="team-card animate-on-scroll">
              <img src={Team2} alt="Team Member" className="team-img" />
              <h4>Harsh Gupta</h4>
              <p>Development Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card animate-on-scroll">
              <div className="stat-number">{stats.students}+</div>
              <div className="stat-label">Students Impacted</div>
            </div>
            <div className="stat-card animate-on-scroll">
              <div className="stat-number">{stats.projects}+</div>
              <div className="stat-label">Projects Executed</div>
            </div>
            <div className="stat-card animate-on-scroll">
              <div className="stat-number">{stats.partners}+</div>
              <div className="stat-label">Partner Ecosystem Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Exsora Section */}
      <section id="internships" className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Built & Backed by Exsora</h2>
          <p className="section-subtitle">
            Skilastra is powered by Exsora's expertise in technology, automation, product strategy, and business execution.
            Explore various internship opportunities at Exsora to gain real-world experience and work on impactful projects.
          </p>

          <div style={{ margin: '3rem 0' }}>
            <img src={Exsora} alt="Exsora" style={{ height: '80px' }} />
          </div>
          <div className="hero-ctas">
          <button className="btn-primary" onClick={() => window.open(CAREER_OPPORTUNITIES, '_blank')}>
            Apply for Internships & Careers Opportunities.
          </button>
           <button className="btn-secondary" onClick={() => window.open(EXSORA_WEBSITE, '_blank')}>
            Visit Exsora For More Opportunities
            </button>
            {/* <button className="btn-primary" onClick={() => window.open(INTERNSHIPS, '_blank')}>
            More Career Opportunities
          </button> */}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Start your journey with Skilastra</p>
          <div className="card-grid">
            {[
              { title: 'WhatsApp', text: 'Connect instantly for queries, enrollment, or consultation', action: () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank'), btn: 'Message Us' },
              { title: 'Instagram', text: `Follow for updates, insights, and community highlights`, action: () =>  window.open(INSTAGRAM_HANDLE, '_blank'), btn: 'Follow Us' },
               
              { title: 'Location', text: 'Dewas, Madhya Pradesh - Offline sessions & community hub', action: () => window.open(EXSORA_WEBSITE, '_blank'), btn: 'Visit Exsora' }
            ].map((contact, i) => (
              <div key={i} className="card animate-on-scroll" style={{ textAlign: 'center' }}>
                <h4>{contact.title}</h4>
                <p style={{ marginBottom: '1.5rem' }}>{contact.text}</p>
                <button className="btn-primary" onClick={contact.action}>{contact.btn}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjQgNEwzNiAyNEgyNEwxMiA0NEgyNEwzNiAyNFoiIHN0cm9rZT0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMTIiIHkxPSI0IiB4Mj0iMzYiIHkyPSI0NCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNhODU1ZjciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM2I4MmY2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KPC9zdmc+" alt="Skilastra" style={{ height: '40px', marginBottom: '2rem' }} /> */}
<img src={logo} alt="Skilastra" className="logo" />
          <div className="footer-links">
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('who-for')}>Who For</a>
            <a onClick={() => scrollToSection('internships')}>Internships</a>
            <a onClick={() => scrollToSection('ambassador')}>Ambassador</a>
            <a onClick={() => scrollToSection('parents')}>Parents</a>
            <a onClick={() => scrollToSection('team')}>Team</a>
            <a onClick={() => scrollToSection('tracks')}>Cohorts</a>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Skilastra. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>An Initiative by Exsora</p>
          </div>
        </div>
      </footer>
    </div>
  );
}