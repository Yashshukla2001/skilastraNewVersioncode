// import React, { useState, useEffect } from 'react';
// import logo from '../public/assests/logo.png';
// import Exsora from '../public/assests/Exsora.png';
// import Founderimg from '../public/assests/founderimg.png';
// import Foundersmall from '../public/assests/foundersmall.png';
// import Team1 from '../public/assests/ayush1.jpg';
// import Team2 from '../public/assests/harsh1.jpg';
// import Team3 from '../public/assests/saloni.jpg';
// const WHATSAPP_NUMBER = '+918305144924';
// const INSTAGRAM_HANDLE = 'https://www.instagram.com/skil_astra_?igsh=eGFwazhwNXRuZ3hr&utm_source=qr';
// const GOOGLE_FORM_JOIN = 'https://forms.gle/KiNp6kKtJF8rRWHf9';
// const JOIN_WORKSHOP = 'https://forms.gle/DrtDDDcEPyXDrP7G6';
// const GOOGLE_FORM_AMBASSADOR = 'https://forms.gle/WDKfBgDgJf71kftQA';
// const JOIN_WAITLIST = 'https://forms.gle/c5QT67gVwLqHqYKP6';
// const FOUNDER_DESK = 'https://forms.gle/9Z4urAr8DtzNgFDQA';
// const FOUNDER_INSTA = 'https://www.instagram.com/unitetohustle?igsh=MXAyeWc0OTlhZmNnbA%3D%3D&utm_source=qr';
// const GOOGLE_FORM_PARTNERSHIP = 'https://forms.gle/gpLpC972uWYZyRwm6';
// const EXSORA_WEBSITE = 'https://exsora.in';
// const CAREER_OPPORTUNITIES = 'https://forms.gle/ZHoxtqSevi5erxBP6';
// // const INTERNSHIPS = 'https://forms.gle/ufaVVvDsHcXRvWZc8';
// const EMAIL = 'yashshukla2411@gmail.com';
// const PHONE = '+918305144924';
// const WORKSHOP_DATE = new Date('2026-01-11T10:00:00+05:30');

// export default function App() {
//   const [theme, setTheme] = useState('dark');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [cursorActive, setCursorActive] = useState(false);
//   const [typedText, setTypedText] = useState('');
//   const [statsVisible, setStatsVisible] = useState(false);
//   const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//   const [stats, setStats] = useState({ students: 0, projects: 0, partners: 0 });
//   const fullText = "INDIA'S FIRST TECH REVOLUTION";

//   useEffect(() => {
//     const savedTheme = typeof window !== 'undefined' ? (localStorage?.getItem('theme') || 'dark') : 'dark';
//     setTheme(savedTheme);
//     document.documentElement.setAttribute('data-theme', savedTheme);
    
//     setTimeout(() => {
//       setLoading(false);
//       setTimeout(() => setShowModal(true), 500);
//     }, 2500);
//   }, []);
// useEffect(() => {
//   if (statsVisible) {
//     let studentCount = 0;
//     let projectCount = 0;
//     let partnerCount = 0;
    
//     const interval = setInterval(() => {
//       if (studentCount < 420) {
//         studentCount += 7;
//         if (studentCount > 420) studentCount = 420;
//       }
//       if (projectCount < 50) {
//         projectCount += 1;
//         if (projectCount > 50) projectCount = 50;
//       }
//       if (partnerCount < 30) {
//         partnerCount += 1;
//         if (partnerCount > 30) partnerCount = 30;
//       }
      
//       setStats({
//         students: studentCount,
//         projects: projectCount,
//         partners: partnerCount
//       });
      
//       if (studentCount >= 420 && projectCount >= 50 && partnerCount >= 30) {
//         clearInterval(interval);
//       }
//     }, 30);
    
//     return () => clearInterval(interval);
//   }
// }, [statsVisible]);

// // Stats Observer useEffect - ADD new useEffect for intersection observer
// useEffect(() => {
//   if (!loading) {
//     const statsSection = document.querySelector('.stats-grid');
    
//     if (statsSection) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach(entry => {
//             if (entry.isIntersecting && !statsVisible) {
//               setStatsVisible(true);
//             }
//           });
//         },
//         { threshold: 0.3 }
//       );
      
//       observer.observe(statsSection);
      
//       return () => observer.disconnect();
//     }
//   }
// }, [loading, statsVisible]);
//   useEffect(() => {
//     if (!loading && typedText.length < fullText.length) {
//       const timeout = setTimeout(() => {
//         setTypedText(fullText.slice(0, typedText.length + 1));
//       }, 100);
//       return () => clearTimeout(timeout);
//     }
//   }, [loading, typedText]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//       setShowScrollTop(window.scrollY > 500);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const handleMouseOver = (e) => {
//       if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.classList.contains('clickable')) {
//         setCursorActive(true);
//       } else {
//         setCursorActive(false);
//       }
//     };
//     document.addEventListener('mouseover', handleMouseOver);
//     return () => document.removeEventListener('mouseover', handleMouseOver);
//   }, []);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     const now = new Date().getTime();
//   //     const distance = WORKSHOP_DATE.getTime() - now;
      
//   //     if (distance > 0) {
//   //       setCountdown({
//   //         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//   //         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   //         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//   //         seconds: Math.floor((distance % (1000 * 60)) / 1000)
//   //       });
//   //     } else {
//   //       setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//   //     }
//   //   }, 1000);
//   //   return () => clearInterval(interval);
//   // }, []);
//   useEffect(() => {
//   const interval = setInterval(() => {
//     const now = new Date().getTime();
//     const target = new Date('2026-01-11T10:00:00+05:30').getTime();
//     const distance = target - now;
    
//     if (distance > 0) {
//       setCountdown({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000)
//       });
//     } else {
//       setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       clearInterval(interval);
//     }
//   }, 1000);
//   return () => clearInterval(interval);
// }, []);

//  useEffect(() => {
//   if (!loading) {
//     let studentCount = 0;
//     let projectCount = 0;
//     let partnerCount = 0;
    
//     const interval = setInterval(() => {
//       if (studentCount < 420) {
//         studentCount += 7;
//         if (studentCount > 420) studentCount = 420;
//       }
//       if (projectCount < 50) {
//         projectCount += 1;
//         if (projectCount > 50) projectCount = 50;
//       }
//       if (partnerCount < 30) {
//         partnerCount += 1;
//         if (partnerCount > 30) partnerCount = 30;
//       }
      
//       setStats({
//         students: studentCount,
//         projects: projectCount,
//         partners: partnerCount
//       });
      
//       if (studentCount >= 420 && projectCount >= 50 && partnerCount >= 30) {
//         clearInterval(interval);
//       }
//     }, 30);
    
//     return () => clearInterval(interval);
//   }
// }, [loading]);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -100px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     }, observerOptions);

//     document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
//     return () => observer.disconnect();
//   }, [loading]);

//   const toggleTheme = () => {
//     const newTheme = theme === 'dark' ? 'light' : 'dark';
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     if (typeof window !== 'undefined') {
//       localStorage?.setItem('theme', newTheme);
//     }
//   };

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       const offset = 120;
//       const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
//       window.scrollTo({ top: pos, behavior: 'smooth' });
//     }
//     setMobileMenuOpen(false);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (loading) {
//     return (
//       <div className="loader-container">
//         <style>{`
//           .loader-container {
//             position: fixed;
//             inset: 0;
//             background: #050505;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 9999;
//             flex-direction: column;
//             gap: 1rem;
//           }
//           .loader-logo {
//             width: 10%;
//             height: 10%;
//             position: relative;
//             animation: logoSpin 2s ease-in-out infinite;
//           }
//           @keyframes logoSpin {
//             0%, 100% { transform: rotate(0deg) scale(1); }
//             100% { transform: rotate(360deg) scale(1.1); }
//           }
//           .loader-logo img {
//             width: 90%;
//             height: 90%;
//           }
//           .loader-text {
//             font-size: 2rem;
//             font-weight: 800;
//             background: linear-gradient(135deg, #a855f7, #3b82f6);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             background-clip: text;
//             animation: textPulse 1.5s ease-in-out infinite;
//           }
//           @keyframes textPulse {
//             0%, 100% { opacity: 0.6; transform: scale(1); }
//             50% { opacity: 1; transform: scale(1.05); }
//           }
//           .loader-bar {
//             width: 200px;
//             height: 4px;
//             background: rgba(255, 255, 255, 0.1);
//             border-radius: 2px;
//             overflow: hidden;
//             position: relative;
//           }
//           .loader-bar::after {
//             content: '';
//             position: absolute;
//             inset: 0;
//             background: linear-gradient(90deg, #a855f7, #3b82f6);
//             animation: loadProgress 2s ease-in-out infinite;
//           }
//           @keyframes loadProgress {
//             0% { transform: translateX(-100%); }
//             100% { transform: translateX(100%); }
//           }
//         `}</style>
//         <div className="loader-logo">
//           {/* <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M24 4L36 24H24L12 44H24L36 24Z" stroke="url(#grad1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
//             <defs>
//               <linearGradient id="grad1" x1="12" y1="4" x2="36" y2="44">
//                 <stop offset="0%" stopColor="#a855f7"/>
//                 <stop offset="100%" stopColor="#3b82f6"/>
//               </linearGradient>
//             </defs>
//           </svg> */}
//           <img src={logo} alt="logo" />
//         </div>
        
//         <div className="loader-text">SKILASTRA</div>
//         <div className="loader-bar"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="app">
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         :root[data-theme="dark"] {
//           --bg-primary: #050505;
//           --bg-secondary: #0a0a0a;
//           --bg-glass: rgba(15, 15, 25, 0.6);
//           --text-primary: #ffffff;
//           --text-secondary: #b4b4b4;
//           --accent-purple: #a855f7;
//           --accent-blue: #3b82f6;
//           --glow-purple: rgba(168, 85, 247, 0.2);
//           --glow-blue: rgba(59, 130, 246, 0.2);
//         }

//         :root[data-theme="light"] {
//           --bg-primary: #ffffff;
//           --bg-secondary: #f9fafb;
//           --bg-glass: rgba(255, 255, 255, 0.6);
//           --text-primary: #0a0a0a;
//           --text-secondary: #6b7280;
//           --accent-purple: #9333ea;
//           --accent-blue: #2563eb;
//           --glow-purple: rgba(147, 51, 234, 0.15);
//           --glow-blue: rgba(37, 99, 235, 0.15);
//         }

//         body {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//           background: var(--bg-primary);
//           color: var(--text-primary);
//           overflow-x: hidden;
//           transition: background 0.3s ease;
          
//           cursor: none;
//         }

//        .app {
//   min-height: 100vh;
//   position: relative;
//   width: 100%;
//   overflow-x: hidden; /* Prevent horizontal scroll */
// }
// #partnership .card-grid {
//   grid-template-columns: repeat(2, 1fr);
// }
//         .custom-cursor {
//           position: fixed;
//           width: 20px;
//           height: 20px;
//           border: 2px solid var(--accent-purple);
//           border-radius: 50%;
//           pointer-events: none;
//           z-index: 10001;
//           transition: all 0.15s ease;
//           transform: translate(-50%, -50%);
//           mix-blend-mode: difference;
//         }

//         // 2. Video Section Responsive CSS - REPLACE video styles

// .video-showcase {
//   max-width: 100%;
//   margin: 0 auto;
//   background: var(--bg-glass);
//   backdrop-filter: blur(20px);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 24px;
//   padding: 2rem;
//   overflow: hidden;
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
// }
// .founder-section-clean {
//   display: grid;
//   grid-template-columns: 250px 1fr;
//   gap: 3rem;
//   align-items: start;
//   background: var(--bg-glass);
//   backdrop-filter: blur(20px);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 24px;
//   padding: 3rem;
//   max-width: 1100px;
//   margin: 0 auto;
// }

// .founder-img-clean {
//   width: 100%;
//   height: 320px;
//   object-fit: cover;
//   object-position: center;
//   border-radius: 16px;
//   border: 3px solid var(--accent-purple);
//   box-shadow: 0 8px 32px var(--glow-purple);
//   display: block; 
// }

// .founder-bio-clean h3 {
//   font-size: 2rem;
//   margin-bottom: 0.5rem;
//   background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }

// .founder-title {
//   color: var(--accent-purple);
//   font-weight: 600;
//   margin-bottom: 1.5rem;
//   font-size: 1.1rem;
// }

// .founder-bio-clean p {
//   color: var(--text-secondary);
//   line-height: 1.8;
//   margin-bottom: 1rem;
//   font-size: 1.05rem;
// }

// .video-wrapper {
//   position: relative;
//   width: 100%;
//   padding-bottom: 50%;
//   height: 0;
//   overflow: hidden;
//   border-radius: 16px;
//   background: #000;
//   box-shadow: 0 12px 40px var(--glow-purple);
// }
// .card-grid,
// .team-grid,
// .gallery-grid,
// .stats-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 2rem;
//   margin-top: 3rem;
// }
// .video-wrapper iframe {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border: none;
// }
// .logo {
// height: 100%;
// width: 100%;
// }


//         .custom-cursor.active {
//           width: 50px;
//           height: 50px;
//           background: rgba(168, 85, 247, 0.2);
//           border-color: var(--accent-blue);
//         }

//         .custom-cursor::after {
//           content: '';
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 4px;
//           height: 4px;
//           background: var(--accent-purple);
//           border-radius: 50%;
//           transform: translate(-50%, -50%);
//         }
//         // 1. Rename Community Section ticker to avoid conflict - ADD new CSS

// // Community Ticker CSS - REPLACE with proper gradient background

// // Community Ticker CSS - UPDATE to work with wrapper

// .community-ticker {
//   overflow: hidden;
//   width: 100%;
//   padding: 3rem 0;
//   position: relative;
//   border-radius: 22px;
//   background: rgba(10, 10, 10, 0.4);
// }

// .community-ticker::before,
// .community-ticker::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   width: 150px;
//   height: 100%;
//   z-index: 2;
//   pointer-events: none;
// }

// .community-ticker::before {
//   left: 0;
//   background: linear-gradient(90deg, rgba(10, 10, 10, 0.8) 0%, transparent 100%);
// }

// .community-ticker::after {
//   right: 0;
//   background: linear-gradient(270deg, rgba(10, 10, 10, 0.8) 0%, transparent 100%);
// }

// .community-ticker-content {
//   display: flex;
//   gap: 2rem;
//   animation: communityTickerScroll 40s linear infinite;
//   white-space: nowrap;
//   align-items: center;
// }

// .community-ticker-item {
//   font-size: 2.5rem;
//   font-weight: 800;
//   color: #ffffff;
//   opacity: 1;
//   display: inline-block;
//   text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
// }

// @keyframes communityTickerScroll {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
// @media (min-width: 1025px) {
//   .card-grid,
//   .team-grid {
//     grid-template-columns: repeat(3, 1fr);
//   }
  
//   .stats-grid {
//     grid-template-columns: repeat(3, 1fr);
//   }
  
//   .gallery-grid {
//     grid-template-columns: repeat(3, 1fr);
//   }
// }
// .faq-container {
//   width: 80%;
//   max-width: 1200px;
//   margin: 0 auto;
//   display: grid;
//   gap: 1.5rem;
// }

// .faq-item {
//   background: var(--bg-glass);
//   backdrop-filter: blur(20px);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 16px;
//   padding: 2rem;
//   transition: all 0.3s ease;
//   width: 100%;
// }

// .faq-item:hover {
//   transform: translateY(-4px);
//   box-shadow: 0 8px 24px var(--glow-purple);
// }

// .faq-question {
//   font-size: 1.25rem;
//   font-weight: 700;
//   margin-bottom: 1rem;
//   color: var(--accent-purple);
// }

// .faq-answer {
//   color: var(--text-secondary);
//   line-height: 1.7;
//   font-size: 1.05rem;
// }

// @media (max-width: 1024px) and (min-width: 641px) {
//   .card-grid,
//   .team-grid,
//   .gallery-grid {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1.5rem;
//   }
//     .faq-container {
//     width: 85%;
//   }
  
//   .faq-item {
//     padding: 1.75rem;
//   }
  
//   .faq-question {
//     font-size: 1.15rem;
//   }
  
//   .faq-answer {
//     font-size: 1rem;
//   }
//   .stats-grid {
//     grid-template-columns: repeat(3, 1fr);
//     gap: 1.5rem;
//   }
  
//   .card,
//   .team-card,
//   .gallery-item {
//     padding: 2rem 1.5rem;
//   }
  
//   .card h4,
//   .team-card h4 {
//     font-size: 1.3rem;
//   }
  
//   .card p,
//   .team-card p {
//     font-size: 0.95rem;
//   }
// }

// @media (max-width: 1024px) {
//   .founder-section-clean {
//     grid-template-columns: 200px 1fr;
//     gap: 2rem;
//     padding: 2.5rem;
//   }
  
//   .founder-img-clean {
//     height: 280px;
//   }
// }
// @media (max-width: 768px) {
//   .founder-section-clean {
//     grid-template-columns: 1fr;
//     gap: 2rem;
//     padding: 2rem;
//     text-align: center;
//   }
  
//   .founder-img-clean {
//     width: 200px;  /* Fixed width */
//     height: 250px;
//     margin: 0 auto;  /* Centers it */
//   }
  
//   .founder-bio-clean {
//     text-align: center;
//   }
// }
// @media (max-width: 640px) {
//   .card-grid,
//   .team-grid,
//   .gallery-grid {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1rem;
//   }
  
//   .stats-grid {
//     grid-template-columns: repeat(auto, 1fr);
//     gap: 1rem;
//   }
//    #partnership .card-grid {
//     grid-template-columns: repeat(2, 1fr);
//   }
//     .countdown {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1rem;
//   }
//    .founder-section-clean {
//     padding: 1.5rem;
//   }
  
//   .founder-img-clean {
//     width: 180px;
//     height: 220px;
//   }
  
//   .founder-bio-clean h3 {
//     font-size: 1.5rem;
//   }
//   .countdown-item {
//     min-width: auto;
//     padding: 1rem;
//   }
  
//   .card,
//   .team-card,
//   .track-card {
//     padding: 1.5rem 1rem;
//   }
  
//   .card-icon,
//   .track-card-icon {
//     font-size: 2rem;
//     margin-bottom: 1rem;
//   }
  
//   .card h4,
//   .team-card h4,
//   .track-card h4 {
//     font-size: 1.1rem;
//     margin-bottom: 0.75rem;
//   }
  
//   .card p,
//   .team-card p {
//     font-size: 0.85rem;
//     line-height: 1.5;
//   }
  
//   .card li {
//     font-size: 0.85rem;
//     padding: 0.5rem 0;
//   }
  
//   .team-img {
//     width: 80px;
//     height: 80px;
//     margin-bottom: 1rem;
//   }
  
//   .stat-number {
//     font-size: 2.5rem;
//   }
  
//   .stat-label {
//     font-size: 0.9rem;
//   }
// }
// @media (max-width: 480px) {
//   .card-grid,
//   .team-grid,
//   .gallery-grid {
//     gap: 0.75rem;
//   }
  
//   .stats-grid {
//     gap: 0.75rem;
//   }
  
//   .card,
//   .team-card,
//   .track-card {
//     padding: 1.25rem 0.75rem;
//   }
  
//   .card h4,
//   .team-card h4,
//   .track-card h4 {
//     font-size: 1rem;
//   }
  
//   .card p,
//   .team-card p {
//     font-size: 0.8rem;
//   }
  
//   .card-icon {
//     font-size: 1.75rem;
//   }
  
//   .team-img {
//     width: 100px;
//     height: 100px;
//   }
// }

// @media (max-width: 1024px) {
//   .community-ticker-item {
//     font-size: 2rem;
//   }
  
//   .community-ticker-content {
//     gap: 1.5rem;
//   }
  
//   .community-ticker::before,
//   .community-ticker::after {
//     width: 100px;
//   }
// }

// @media (max-width: 640px) {
//   .community-ticker-item {
//     font-size: 1.5rem;
//   }
  
//   .community-ticker-content {
//     gap: 1rem;
//   }
  
//   .community-ticker {
//     padding: 2rem 0;
//     border-radius: 14px;
//   }
  
//   .community-ticker::before,
//   .community-ticker::after {
//     width: 50px;
//   }
// }  

//     .tech-shapes {
//           position: fixed;
//           inset: 0;
//           pointer-events: none;
//           z-index: 0;
//           overflow: hidden;
//         }

//         .tech-shape {
//           position: absolute;
//           opacity: 0.1;
//           animation: floatShape 25s ease-in-out infinite;
//         }

//         .tech-shape.cube {
//           width: 80px;
//           height: 80px;
//           border: 2px solid var(--accent-purple);
//           animation: floatShape 20s ease-in-out infinite, rotateCube 15s linear infinite;
//         }

//         .tech-shape.circle {
//           width: 60px;
//           height: 60px;
//           border: 2px solid var(--accent-blue);
//           border-radius: 50%;
//           animation: floatShape 25s ease-in-out infinite;
//         }

//         .tech-shape.triangle {
//           width: 0;
//           height: 0;
//           border-left: 40px solid transparent;
//           border-right: 40px solid transparent;
//           border-bottom: 70px solid var(--accent-purple);
//           animation: floatShape 30s ease-in-out infinite, rotateTriangle 20s linear infinite;
//         }

//         @keyframes floatShape {
//           0%, 100% { transform: translate(0, 0); }
//           25% { transform: translate(100px, -50px); }
//           50% { transform: translate(-50px, 100px); }
//           75% { transform: translate(80px, 80px); }
//         }

//         @keyframes rotateCube {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes rotateTriangle {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(-360deg); }
//         }

//         .scroll-to-top {
//           position: fixed;
//           bottom: 6rem;
//           right: 2rem;
//           width: 50px;
//           height: 50px;
//           background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
//           border: none;
//           border-radius: 50%;
//           color: white;
//           font-size: 1.5rem;
//           cursor: pointer;
//           z-index: 999;
//           opacity: 0;
//           transform: translateY(100px);
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px var(--glow-purple);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .scroll-to-top.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .scroll-to-top:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 20px var(--glow-purple);
//         }

//         .scroll-to-top::before {
//           content: '↑';
//           animation: arrowBounce 1.5s ease-in-out infinite;
//         }

//         @keyframes arrowBounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }

//         .bottom-ticker {
//           position: fixed;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background: linear-gradient(135deg, #dc2626, #ea580c);
//           padding: 1rem 2rem;
//           z-index: 998;
//           box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
//         }

//         .ticker-content {
//           color: white;
//           font-weight: 700;
//           font-size: 1.1rem;
//           text-align: center;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 1rem;
//           flex-wrap: wrap;
//         }

//         .top-banner {
//           background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
//           padding: 1rem 2rem;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }

//         .top-banner::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
//           animation: shimmer 3s ease-in-out infinite;
//         }

//         @keyframes shimmer {
//           0%, 100% { transform: translateX(-100%); }
//           50% { transform: translateX(100%); }
//         }

//         .top-banner-text {
//           font-size: 1.5rem;
//           font-weight: 800;
//           color: white;
//           letter-spacing: 4px;
//           position: relative;
//           z-index: 1;
//         }

//         .header {
//           position: fixed;
//           top: 60px;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//           backdrop-filter: blur(20px);
//           background: var(--bg-glass);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           padding: 1rem 2rem;
//           transition: all 0.3s ease;
//         }

//         .header.scrolled {
//           padding: 0.75rem 2rem;
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
//           top: 0;
//         }

//         .header-content {
//           max-width: 1400px;
//           margin: 0 auto;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .logo {
//           height: 45px;
//           width: auto;
//           transition: transform 0.3s ease;
//         }

//         .logo:hover {
//           transform: scale(1.05);
//         }

//         .nav {
//           display: flex;
//           gap: 2.5rem;
//           align-items: center;
//         }

//         .nav a {
//           color: var(--text-primary);
//           text-decoration: none;
//           font-weight: 500;
//           font-size: 0.95rem;
//           position: relative;
//           transition: color 0.3s ease;
//           cursor: pointer;
//         }

//         .nav a::after {
//           content: '';
//           position: absolute;
//           bottom: -5px;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: linear-gradient(90deg, var(--accent-purple), var(--accent-blue));
//           transition: width 0.3s ease;
//         }

//         .nav a:hover::after {
//           width: 100%;
//         }

//         .header-actions {
//           display: flex;
//           gap: 1rem;
//           align-items: center;
//         }

//         .theme-toggle {
//           background: none;
//           border: none;
//           font-size: 1.5rem;
//           cursor: pointer;
//           transition: transform 0.3s ease;
//         }

//         .theme-toggle:hover {
//           transform: rotate(180deg);
//         }

//         .btn-primary {
//           padding: 0.75rem 1.75rem;
//           background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
//           border: none;
//           border-radius: 50px;
//           color: white;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px var(--glow-purple);
//         }

//         .btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px var(--glow-purple);
//         }

//         .btn-secondary {
//           padding: 0.75rem 1.75rem;
//           background: transparent;
//           border: 2px solid var(--accent-purple);
//           border-radius: 50px;
//           color: var(--text-primary);
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .btn-secondary:hover {
//           background: var(--accent-purple);
//           color: white;
//           transform: translateY(-2px);
//         }
//         .tracks-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 2rem;
//   margin-top: 3rem;
// }

// .track-card {
//   background: var(--bg-glass);
//   backdrop-filter: blur(20px);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 20px;
//   padding: 2.5rem;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
// }

// .track-card::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 4px;
//   background: linear-gradient(90deg, var(--accent-purple), var(--accent-blue));
//   transform: scaleX(0);
//   transition: transform 0.3s ease;
// }

// .track-card:hover {
//   transform: translateY(-8px);
//   box-shadow: 0 12px 40px var(--glow-purple);
// }

// .track-card:hover::before {
//   transform: scaleX(1);
// }

// .track-card h4 {
//   font-size: 1.5rem;
//   margin-bottom: 1.5rem;
//   background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }

// .track-card ul {
//   list-style: none;
//   margin: 0 0 2rem 0;
//   flex-grow: 1;
// }

// .track-card li {
//   color: var(--text-secondary);
//   padding: 0.75rem 0;
//   padding-left: 1.5rem;
//   position: relative;
//   line-height: 1.6;
// }

// .track-card li::before {
//   content: '✓';
//   position: relative;
//   left: 0;
//   {/* margin-right: 0.75rem; */}
//   padding-right: 0.5rem;
//   color: var(--accent-purple);
//   font-weight: 700;
// }

// .track-card .btn-primary {
//   width: 100%;
//   margin-top: auto;
// }

//         .icon-btn {
//           background: none;
//           border: 2px solid var(--accent-purple);
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           font-size: 1.2rem;
//           transition: all 0.3s ease;
//         }

//         .icon-btn:hover {
//           background: var(--accent-purple);
//           transform: scale(1.1);
//         }

//         .hamburger {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           cursor: pointer;
//         }

//         .hamburger span {
//           width: 25px;
//           height: 3px;
//           background: var(--text-primary);
//           transition: all 0.3s ease;
//         }

//         .hero {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           padding: 10rem 2rem 8rem;
//           position: relative;
//           overflow: hidden;
//           background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(59, 130, 246, 0.05));
//         }

//         .hero-bg {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           z-index: 0;
//           opacity: 0.4;
//         }

//         .gradient-wave {
//           position: absolute;
//           width: 200%;
//           height: 200%;
//           background: radial-gradient(circle at 30% 50%, var(--glow-purple) 0%, transparent 50%),
//                       radial-gradient(circle at 70% 50%, var(--glow-blue) 0%, transparent 50%);
//           animation: wave 20s ease-in-out infinite;
//         }

//         @keyframes wave {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); }
//           50% { transform: translate(-10%, -5%) rotate(5deg); }
//         }

//         .particles {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//         }

//         .particle {
//           position: absolute;
//           width: 3px;
//           height: 3px;
//           background: var(--accent-purple);
//           border-radius: 50%;
//           opacity: 0.4;
//           animation: float 15s ease-in-out infinite;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
//           10% { opacity: 0.4; }
//           90% { opacity: 0.4; }
//           100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
//         }

//         .hero-content {
//           max-width: 1400px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 1;
//           text-align: center;
//         }

//         .typing-text {
//           font-size: 1.2rem;
//           font-weight: 600;
//           color: var(--accent-purple);
//           letter-spacing: 3px;
//           margin-bottom: 1.5rem;
//           min-height: 30px;
//         }

//         .typing-text::after {
//           content: '|';
//           animation: blink 1s infinite;
//         }

//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }

//         .hero-title {
//           font-size: 5rem;
//           font-weight: 900;
//           line-height: 1.1;
//           margin-bottom: 1.5rem;
//           background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .hero-subtitle {
//           font-size: 1.5rem;
//           color: var(--text-secondary);
//           margin-bottom: 2rem;
//           line-height: 1.7;
//           max-width: 800px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .limited-banner {
//           background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(234, 88, 12, 0.2));
//           border: 2px solid #ef4444;
//           border-radius: 50px;
//           padding: 1rem 2rem;
//           display: inline-block;
//           margin-bottom: 3rem;
//           cursor: pointer;
//           animation: pulse 2s infinite;
//         }

//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.9; transform: scale(1.02); }
//         }

//         .limited-text {
//           font-size: 1.2rem;
//           font-weight: 700;
//           color: #ef4444;
//           margin: 0;
//         }

//         .hero-ctas {
//           display: flex;
//           gap: 1.5rem;
//           justify-content: center;
//           flex-wrap: wrap;
//           margin-bottom: 4rem;
//         }

//         .founder-intro {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 2rem;
//           margin-top: 4rem;
//           padding: 2rem;
//           background: var(--bg-glass);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 20px;
//           max-width: 600px;
//           margin-left: auto;
//           margin-right: auto;
//         }
//         @media (max-width: 1024px) {
//   .container {
//     padding: 0 1-5rem;
//      max-width: 100%;
     
//   }
//    .section {
//     padding: 3rem 0; /* Remove horizontal padding from section */
//   }
// }
// @media (max-width: 640px) {
//   .container {
//     padding: 0 1rem; /* Reduced padding */
//     max-width: 100%; /* Ensure full width */
//   }
//    .section {
//     padding: 2.5rem 0; /* Remove horizontal padding */
//   }
// }

//         .founder-intro-img {
//           width: 100px;
//           height: 100px;
//           border-radius: 50%;
//           object-fit: contain;
//           border: 3px solid var(--accent-purple);
//         }

//         .founder-intro-text h4 {
//           font-size: 1.25rem;
//           margin-bottom: 0.5rem;
//         }

//         .founder-intro-text p {
//           color: var(--text-secondary);
//           font-size: 0.9rem;
//         }

//         .section {
//           padding: 4rem 2rem;
//           position: relative;
//         }

//         {/* .container {
//           max-width: 1400px;
//           margin: 0 auto;
//         } */}

//         .section-title {
//           font-size: 3rem;
//           font-weight: 800;
//           text-align: center;
//           margin-bottom: 1rem;
//           background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .section-subtitle {
//           text-align: center;
//           color: var(--text-secondary);
//           font-size: 1.1rem;
//           margin-bottom: 4rem;
//           max-width: 700px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .glass-block {
//           background: var(--bg-glass);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 24px;
//           padding: 3rem;
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
//         }

//         .glass-block h3 {
//           font-size: 2rem;
//           margin-bottom: 1.5rem;
//         }

//         .glass-block p {
//           color: var(--text-secondary);
//           line-height: 1.8;
//           font-size: 1.1rem;
//         }

//         .card-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 2rem;
//           margin-top: 3rem;
//         }

//         .card {
//           background: var(--bg-glass);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 20px;
//           padding: 2.5rem;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 4px;
//           background: linear-gradient(90deg, var(--accent-purple), var(--accent-blue));
//           transform: scaleX(0);
//           transition: transform 0.3s ease;
//         }

//         .card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 12px 40px var(--glow-purple);
//         }

//         .card:hover::before {
//           transform: scaleX(1);
//         }

//         .card-icon {
//           font-size: 3rem;
//           margin-bottom: 1.5rem;
//           text-align: center;
//         }

//         .card h4 {
//           font-size: 1.5rem;
//           margin-bottom: 1rem;
//         }

//         .card p {
//           color: var(--text-secondary);
//           line-height: 1.7;
//         }

//         .card ul {
//           list-style: none;
//           margin: 1.5rem 0;
//         }

//         .card li {
//           color: var(--text-secondary);
//           padding: 0.5rem 0;
//           padding-left: 1.5rem;
//           position: relative;
//         }

//         .card li::before {
//           content: '→';
//           position: absolute;
//           left: 0;
//           color: var(--accent-purple);
//         }

//         .workshop-section {
//           background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1));
//           border-radius: 24px;
//           padding: 4rem 3rem;
//           text-align: center;
//         }

//         .countdown {
//           display: flex;
//           justify-content: center;
//           gap: 2rem;
//           margin: 3rem 0;
//           flex-wrap: wrap;
//         }

//         .countdown-item {
//           background: var(--bg-glass);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 16px;
//           padding: 1.5rem 2rem;
//           min-width: 120px;
//         }

//         .countdown-number {
//           font-size: 3rem;
//           font-weight: 800;
//           background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .countdown-label {
//           color: var(--text-secondary);
//           text-transform: uppercase;
//           font-size: 0.85rem;
//           letter-spacing: 1px;
//           margin-top: 0.5rem;
//         }

//         .stats-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmin(220px, 1fr));
//           gap: 2rem;
//           margin: 3rem 0;
//         }

//         .stat-card {
//           text-align: center;
//           padding: 2rem;
//           background: var(--bg-glass);
//           backdrop-filter: blur(20px);
//           border-radius: 20px;
//           border: 1px solid rgba(255, 255, 255, 0.1);

//         }

//         .stat-number {
//           font-size: 3.5rem;
//           font-weight: 800;
//           background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .stat-label {
//           color: var(--text-secondary);
//           margin-top: 0.5rem;
//           font-size: 1.1rem;
//         }

//         .testimonial-card {
//         grid-column: 1 / -1;
//           background: var(--bg-glass);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 20px;
//           padding: 2rem;
//           border-left: 4px solid var(--accent-purple);
//         }

//         .testimonial-text {
//           color: var(--text-secondary);
//           line-height: 1.7;
//           margin-bottom: 1rem;
//           font-style: italic;
//         }

//         .testimonial-author {
//           font-weight: 600;
//           color: var(--accent-purple);
//         }

        
       
//         .team-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 2rem;
//           margin-top: 3rem;
//         }

//         .team-card {
//           background: var(--bg-glass);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 20px;
//           padding: 2rem;
//           text-align: center;
//           transition: all 0.3s ease;
//         }

//         .team-card:hover {
//           transform: translateY(-8px);
//         }

//         .team-img {
//           width: 120px;
//           height: 120px;
//           border-radius: 50%;
//           object-fit: cover;
//           margin: 0 auto 1.5rem;
//           border: 3px solid var(--accent-purple);
//         }

//         .gallery-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 1.5rem;
//           margin-top: 3rem;
//         }

//         .gallery-item {
//           border-radius: 16px;
//           overflow: hidden;
//           aspect-ratio: 16/10;
//           position: relative;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .gallery-item:hover {
//           transform: scale(1.05);
//         }

//         .gallery-item img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .gallery-caption {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background: linear-gradient(transparent, rgba(0,0,0,0.8));
//           padding: 2rem 1.5rem 1rem;
//           color: white;
//           font-weight: 600;
//         }

//         .footer {
//           background: var(--bg-secondary);
//           padding: 3rem 2rem 7rem;
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .footer-content {
//           max-width: 1400px;
//           margin: 0 auto;
//           text-align: center;
//         }

//         .footer-links {
//           display: flex;
//           justify-content: center;
//           gap: 2rem;
//           margin: 2rem 0;
//           flex-wrap: wrap;
//         }

//         .footer-links a {
//           color: var(--text-secondary);
//           text-decoration: none;
//           transition: color 0.3s ease;
//           cursor: pointer;
//         }

//         .footer-links a:hover {
//           color: var(--accent-purple);
//         }

//         .footer-bottom {
//           margin-top: 2rem;
//           padding-top: 2rem;
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//           color: var(--text-secondary);
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease;
//         }

//         .animate-on-scroll.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .modal-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.8);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 10000;
//           backdrop-filter: blur(10px);
//           padding: 1rem;
//         }

//         .modal-content {
//           background: var(--bg-secondary);
//           border-radius: 24px;
//           padding: 3rem;
//           max-width: 500px;
//           width: 100%;
//           max-height: 90vh;
//           overflow-y: auto;
//           position: relative;
//           animation: modalFadeIn 0.3s ease-out;
//           box-shadow: 0 20px 60px var(--glow-purple);
//           border: 2px solid rgba(168, 85, 247, 0.3);
//         }

//         @keyframes modalFadeIn {
//           from { opacity: 0; transform: scale(0.9); }
//           to { opacity: 1; transform: scale(1); }
//         }

//         .modal-close {
//           position: absolute;
//           top: 1rem;
//           right: 1rem;
//           background: none;
//           border: none;
//           font-size: 2rem;
//           cursor: pointer;
//           color: var(--text-primary);
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 50%;
//           transition: all 0.3s;
//         }

//         .modal-close:hover {
//           background: var(--glow-purple);
//           transform: rotate(90deg);
//         }

//         @media (max-width: 1024px) {
//           .nav {
//             display: none;
//           }
//           .founder-section-clean {
//     grid-template-columns: 250px 1fr;
//     gap: 2rem;
//     padding: 2.5rem;
//   }
  
//   .founder-img-clean {
//     height: 350px;
//   }
//             .tracks-grid {
//     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//     gap: 1.5rem;
//   }
// }
//           .video-showcase {
//     max-width: 100%;
//     {/* padding: 8rem; */}
//     marginTop: 2rem;
//     marginBottom: 2rem;
//     border-radius: 20px;
//   }
  
//   .video-wrapper {
//     padding-bottom: 56.25%;
//   }

//            .section {
//     padding: 3rem 2rem;
//   }

         
//           .hero-title {
//             font-size: 3rem;
//           }

         
//         }
//         @media (max-width: 1024px) {
//   .card-grid {
//     grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
//     gap: 1.5rem;
//   }
// }
// @media (max-width: 1024px) and (min-width: 641px) {
//   .tracks-grid {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1.5rem;
//   }
// }
// @media (max-width: 1000px) and (min-width: 769px) {


// .hamburger {
//             display: flex;
//           }

//           .mobile-menu {
//             position: fixed;
//             top: 140px;
//             left: 0;
//             right: 0;
//             background: var(--bg-glass);
//             backdrop-filter: blur(20px);
//             padding: 2rem;
//             transform: translateY(-100%);
//             opacity: 0;
//             transition: all 0.3s ease;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           }

//           .mobile-menu.open {
//             transform: translateY(0);
//             opacity: 1;
//           }

//           .mobile-menu a {
//             display: block;
//             padding: 1rem 0;
//             color: var(--text-primary);
//             text-decoration: none;
//             font-weight: 500;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//             cursor: pointer;
//           }
  
// }


// @media (max-width: 768px) {
//   .founder-section-clean {
//     grid-template-columns: 1fr;
//     gap: 2rem;
//     padding: 2rem;
//     text-align: center;
//   }
//    .faq-container {
//     width: 90%;
//   }
  
//   .faq-item {
//     padding: 1.5rem;
//   }
  
//   .faq-question {
//     font-size: 1.1rem;
//     margin-bottom: 0.75rem;
//   }
  
//   .faq-answer {
//     font-size: 0.95rem;
//     line-height: 1.6;
//   }
//    .hamburger {
//             display: flex;
//           }

//           .mobile-menu {
//             position: fixed;
//             top: 140px;
//             left: 0;
//             right: 0;
//             background: var(--bg-glass);
//             backdrop-filter: blur(20px);
//             padding: 2rem;
//             transform: translateY(-100%);
//             opacity: 0;
//             transition: all 0.3s ease;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           }

//           .mobile-menu.open {
//             transform: translateY(0);
//             opacity: 1;
//           }

//           .mobile-menu a {
//             display: block;
//             padding: 1rem 0;
//             color: var(--text-primary);
//             text-decoration: none;
//             font-weight: 500;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//             cursor: pointer;
//           }
  
//   .founder-img-clean {
//     width: 250px;
//     height: 300px;
//     margin: 0 auto;
//   }
  
//   .founder-bio-clean {
//     text-align: center;
//   }
  
//   .founder-bio-clean > div {
//     justify-content: center;
//   }
// }

// @media (max-width: 640px) {
//   .tracks-grid {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1rem;
//   }
//    .faq-container {
//     width: 95%;
//   }
  
//   .faq-item {
//     padding: 1.25rem 1rem;
//     border-radius: 12px;
//   }
  
//   .faq-question {
//     font-size: 1rem;
//     margin-bottom: 0.75rem;
//   }
  
//   .faq-answer {
//     font-size: 0.9rem;
//     line-height: 1.5;
//   }
//   .track-card {
//     padding: 1.5rem 1rem;
//   }
  
//   .track-card h4 {
//     font-size: 1.1rem;
//   }
  
//   .track-card li {
//     font-size: 0.85rem;
//     padding: 0.5rem 0;
//   }
// }

//         @media (max-width: 640px) {
//           .top-banner-text {
//             font-size: 1rem;
//             letter-spacing: 2px;
//           }
//            .hamburger {
//             display: flex;
//           }

//           .mobile-menu {
//             position: fixed;
//             top: 140px;
//             left: 0;
//             right: 0;
//             background: var(--bg-glass);
//             backdrop-filter: blur(20px);
//             padding: 2rem;
//             transform: translateY(-100%);
//             opacity: 0;
//             transition: all 0.3s ease;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           }

//           .mobile-menu.open {
//             transform: translateY(0);
//             opacity: 1;
//           }

//           .mobile-menu a {
//             display: block;
//             padding: 1rem 0;
//             color: var(--text-primary);
//             text-decoration: none;
//             font-weight: 500;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//             cursor: pointer;
//           }

//            .video-showcase {
//     padding: 1rem;
//     border-radius: 16px;
//   }
  
//   .video-wrapper {
//     border-radius: 12px;
//     padding-bottom: 56.25%;
//   }
//             .section {
//     padding: 2.5rem 1.5rem;
//   }
//   .founder-section-clean {
//     padding: 1.5rem;
//   }
  
//   .founder-img-clean {
//     width: 200px;
//     height: 250px;
//   }
  
//   .founder-bio-clean h3 {
//     font-size: 1.5rem;
//   }

//           .hero {
//             padding: 8rem 1.5rem 6rem;
//           }

//           .hero-title {
//             font-size: 2.5rem;
//           }

//           .hero-subtitle {
//             font-size: 1.2rem;
//           }

//           .founder-intro {
//             flex-direction: column;
//             text-align: center;
//           }

//           .section-title {
//             font-size: 2rem;
//           }

//           .countdown {
//             gap: 1rem;
//           }

//           .countdown-item {
//             min-width: 80px;
//             padding: 1rem;
//           }

//           .countdown-number {
//             font-size: 2rem;
//           }

//           .limited-text {
//             font-size: 0.9rem;
//           }

//           .ticker-content {
//             font-size: 0.9rem;
//           }
//           .tracks-grid {
//     grid-template-columns: 1fr;
//   }
  
//   .track-card {
//     padding: 2rem;
//   }

//           .modal-content {
//             padding: 2rem 1.5rem;
//           }
//             .header-content {
//     padding: 0 1rem;
//   }
//    .hero {
//     padding: 8rem 1rem 6rem;
//   } .footer {
//     padding: 3rem 1rem 7rem;
//   }

//    .glass-block {
//     padding: 2rem 1.5rem;
//   }
//    .card {
//     padding: 2rem 1.5rem;
//   }
//    .workshop-section {
//     padding: 3rem 1.5rem;
//   }

//           .icon-btn {
//             width: 35px;
//             height: 35px;
//             font-size: 1rem;
//           }
//         }

//         @media (max-width: 480px) {
//   .faq-container {
//     width: 100%;
//     padding: 0 1rem;
//   }
  
//   .faq-item {
//     padding: 1rem 0.75rem;
//   }
//    .founder-img-clean {
//     width: 160px;
//     height: 200px;
//   }
  
//   .founder-bio-clean h3 {
//     font-size: 1.3rem;
//   }
  
//   .faq-question {
//     font-size: 0.95rem;
//   }
  
//   .faq-answer {
//     font-size: 0.85rem;
//   }
// }
//       `}</style>

//       {/* Custom Cursor */}
//       <div 
//         className={`custom-cursor ${cursorActive ? 'active' : ''}`}
//         style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
//       />

//       {/* Tech Shapes Background */}
//       <div className="tech-shapes">
//         <div className="tech-shape cube" style={{ top: '10%', left: '5%' }}></div>
//         <div className="tech-shape circle" style={{ top: '20%', right: '10%' }}></div>
//         <div className="tech-shape triangle" style={{ top: '50%', left: '15%' }}></div>
//         <div className="tech-shape cube" style={{ bottom: '15%', left: '60%' }}></div>
//         <div className="tech-shape circle" style={{ bottom: '25%', right: '5%' }}></div>
//         <div className="tech-shape triangle" style={{ bottom: '40%', left: '10%' }}></div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay" onClick={() => setShowModal(false)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            
//             <div style={{ textAlign: 'center' }}>
//               <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
//               <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//                 Welcome to Skilastra!
//               </h2>
//               <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
//                 Join India's First Tech Revolution
//               </p>
//               <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
//                 Limited to 50 seats only! Be part of Dewas' first offline skill ecosystem. Register now for our introductory session on January 11, 2026.
//               </p>
              
//               <div style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(234, 88, 12, 0.1))', border: '2px solid #ef4444', borderRadius: '16px', padding: '1rem', marginBottom: '2rem' }}>
//                 <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ef4444', margin: 0 }}>
//                   🔥 Only 50 Seats Available! 🔥
//                 </p>
//               </div>

// <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
//   <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//                 First Free Offline Introductory Session Starts In:
//               </h2>
//   <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
//     <div style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '0.75rem 1rem', minWidth: '70px', textAlign: 'center' }}>
//       <div style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{countdown.days}</div>
//       <div style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', marginTop: '0.25rem' }}>Days</div>
//     </div>
//     <div style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '0.75rem 1rem', minWidth: '70px', textAlign: 'center' }}>
//       <div style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{countdown.hours}</div>
//       <div style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', marginTop: '0.25rem' }}>Hours</div>
//     </div>
//     <div style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '0.75rem 1rem', minWidth: '70px', textAlign: 'center' }}>
//       <div style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{countdown.minutes}</div>
//       <div style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', marginTop: '0.25rem' }}>Mins</div>
//     </div>
//     <div style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '0.75rem 1rem', minWidth: '70px', textAlign: 'center' }}>
//       <div style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{countdown.seconds}</div>
//       <div style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', marginTop: '0.25rem' }}>Secs</div>
//     </div>
//   </div>
// </div>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//                 <button 
//                   className="btn-primary" 
//                   style={{ width: '100%' }}
//                   onClick={() => {
//                     window.open(JOIN_WORKSHOP, '_blank');
//                     setShowModal(false);
//                   }}
//                 >
//                   Join First Free Introductory Session - Register Now
//                 </button>
//                 <button 
//                   className="btn-secondary"
//                   style={{ width: '100%' }}
//                   onClick={() => {
//                     window.open('https://wa.me/' + WHATSAPP_NUMBER, '_blank');
//                     setShowModal(false);
//                   }}
//                 >
//                   💬 Connect on WhatsApp
//                 </button>
//               </div>
             
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Scroll to Top Button */}
//       <button 
//         className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
//         onClick={scrollToTop}
//       />

//       {/* Bottom Ticker */}
//       <div className="bottom-ticker">
//         <div className="ticker-content">
//           <span>Join Now for FREE — Your parents didn't dream of unemployment</span>
//           <button className="btn-primary" onClick={() => window.open(GOOGLE_FORM_JOIN, '_blank')}>
//             Join Now
//           </button>
//         </div>
//       </div>

//       {/* Top Banner */}
//       <div className="top-banner">
//         <div className="top-banner-text">LEARN • BUILD • EARN • REPEAT</div>
//       </div>

//       {/* Header */}
//       <header className={`header ${scrollY > 50 ? 'scrolled' : ''}`}>
//         <div className="header-content">
//           <img src={logo} alt="Skilastra" className="logo" />
          
//           <nav className="nav">
//             <a onClick={() => scrollToSection('home')}>Home</a>
//             <a onClick={() => scrollToSection('who-for')}>Who For</a>
//             <a onClick={() => scrollToSection('internships')}>Internships</a>
//             <a onClick={() => scrollToSection('ambassador')}>Ambassador</a>
//             <a onClick={() => scrollToSection('parents')}>Parents</a>
//             <a onClick={() => scrollToSection('team')}>Team</a>
//             <a onClick={() => scrollToSection('tracks')}>Cohorts</a>
//           </nav>

//           <div className="header-actions">
//             <button className="icon-btn" onClick={() => window.location.href = `tel:${PHONE}`}>📞</button>
//             <button className="icon-btn" onClick={() => window.location.href = `mailto:${EMAIL}`}>✉️</button>
//             <button className="theme-toggle" onClick={toggleTheme}>
//               {theme === 'dark' ? '☀️' : '🌙'}
//             </button>
//             <button className="btn-primary" onClick={() => window.open(GOOGLE_FORM_JOIN, '_blank')}>
//               Join
//             </button>
//             <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="mobile-menu open">
//             <a onClick={() => scrollToSection('home')}>Home</a>
//             <a onClick={() => scrollToSection('who-for')}>Who For</a>
//             <a onClick={() => scrollToSection('internships')}>Internships</a>
//             <a onClick={() => scrollToSection('ambassador')}>Ambassador</a>
//             <a onClick={() => scrollToSection('parents')}>Parents</a>
//             <a onClick={() => scrollToSection('team')}>Team</a>
//             <a onClick={() => scrollToSection('tracks')}>Cohorts</a>
//           </div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="hero">
//         <div className="hero-bg">
//           <div className="gradient-wave" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
//           <div className="particles">
//             {[...Array(15)].map((_, i) => (
//               <div
//                 key={i}
//                 className="particle"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   animationDelay: `${Math.random() * 15}s`,
//                   animationDuration: `${15 + Math.random() * 10}s`
//                 }}
//               ></div>
//             ))}
//           </div>
//         </div>

//         <div className="hero-content">
//           <div className="typing-text">{typedText}</div>
//           <h1 className="hero-title">Skill is the Foundation of Every Future.</h1>
//           <p className="hero-subtitle">
//             A structured offline ecosystem designed for the next generation of professionals, powered by Exsora.
//           </p>

//           <div className="limited-banner" onClick={() => window.open(JOIN_WORKSHOP, '_blank')}>
//             <p className="limited-text">🔥 LIMITED - Only 50 Seats! Click to Register 🔥</p>
//           </div>
//           <div className="countdown" style={{ marginBottom: '1rem' ,marginTop: 'auto'}}>
//   <div className="countdown-item">
//     <div className="countdown-number">{countdown.days}</div>
//     <div className="countdown-label">Days</div>
//   </div>
//   <div className="countdown-item">
//     <div className="countdown-number">{countdown.hours}</div>
//     <div className="countdown-label">Hours</div>
//   </div>
//   <div className="countdown-item">
//     <div className="countdown-number">{countdown.minutes}</div>
//     <div className="countdown-label">Minutes</div>
//   </div>
//   <div className="countdown-item">
//     <div className="countdown-number">{countdown.seconds}</div>
//     <div className="countdown-label">Seconds</div>
//   </div>
// </div>

//           <div className="hero-ctas">
//             <button className="btn-primary" onClick={() => window.open(JOIN_WORKSHOP, '_blank')}>
//               Join First Free Introductory Session
//             </button>
//             <button className="btn-secondary" onClick={() => window.open(GOOGLE_FORM_AMBASSADOR, '_blank')}>
//               Apply for Ambassador
//             </button>
//           </div>

//           <div className="founder-intro">
//             <img src={Foundersmall} alt="Yash Shukla" className="founder-intro-img" />
//             <div className="founder-intro-text">
//               <h4>Yash Shukla</h4>
//               <p>Founder — Skilastra & Exsora</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Ecosystem Section */}
//       <section className="section">
//         <div className="container">
//           <h2 className="section-title">Why an Ecosystem, Not a Coaching Center?</h2>
//           <p className="section-subtitle">Skilastra is built on a holistic approach to skill development</p>

//           <div className="card-grid">
//             <div className="card animate-on-scroll">
//               <div className="card-icon">🌱</div>
//               <h4>Complete Growth Environment</h4>
//               <p>Beyond lectures — we provide mentorship, community, real projects, and career guidance all in one place.</p>
//             </div>

//             <div className="card animate-on-scroll">
//               <div className="card-icon">🤝</div>
//               <h4>Community-Driven Learning</h4>
//               <p>Connect with like-minded individuals, collaborate on projects, and grow together in a supportive environment.</p>
//             </div>

//             <div className="card animate-on-scroll">
//               <div className="card-icon">🎯</div>
//               <h4>Outcome-Focused</h4>
//               <p>Not just completion certificates — we focus on building real skills, portfolios, and career-ready competence.</p>
//             </div>

//             <div className="card animate-on-scroll">
//               <div className="card-icon">🚀</div>
//               <h4>Continuous Evolution</h4>
//               <p>An ecosystem that adapts, grows, and evolves with industry demands and student needs.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Problem Section */}
//       <section className="section" style={{ background: 'var(--bg-secondary)' }}>
//         <div className="container">
//           <div className="glass-block animate-on-scroll">
//             <h3>The Reality of Modern Learning</h3>
//             <p>
//               Online learning created convenience but not competence. Students now have access to endless resources, yet struggle in real-world interviews and professional environments. The gap between knowing and doing has widened.
//             </p>
//             <p style={{ marginTop: '1.5rem' }}>
//               Consistency, discipline, and hands-on mentorship are missing. The digital economy demands stronger fundamentals and applied skill, not just theoretical knowledge. Skilastra addresses this critical need through structured, offline, and outcome-driven learning.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Who Is Skilastra For */}
//       <section id="who-for" className="section">
//         <div className="container">
//           <h2 className="section-title">🎯 Who Is Skilastra For?</h2>
//           <p className="section-subtitle">If you see yourself anywhere in this list… Skilastra was built exactly for you.</p>
          
//           <div className="card-grid">
//             {[
//               { icon: '🎓', title: 'Students (9th to College Final Year)', desc: '"Skills nahi ban pa rhi…" "Confidence aa nahi raha…" Skilastra gives structure, accountability, and a real environment.' },
//               { icon: '💼', title: 'Job Seekers / Freshers', desc: 'Stuck in average jobs, rejected in interviews. Skilastra gives real skills + mock interviews + projects that companies trust.' },
//               { icon: '🚆', title: 'Students Traveling to Indore/Ujjain Daily', desc: '5000+ students daily travel from Dewas. Only because there is no local skill ecosystem. Now they don\'t have to.' },
//               { icon: '🚀', title: 'Aspiring Founders / Creators', desc: 'Build something of their own. Start an online business. Skilastra gives skills + execution support + clarity.' },
//               { icon: '📚', title: 'School Students (Classes 9-12)', desc: 'Early exposure to coding, websites and AI, digital tools. Early skill advantage beats everything.' },
//               { icon: '🏢', title: 'Business Owners & Family Businesses', desc: 'Basic digital presence, automation, marketing understanding. Skilastra gives language + clarity to operate in today\'s business world.' }
//             ].map((item, i) => (
//               <div key={i} className="card animate-on-scroll">
//                 <div className="card-icon">{item.icon}</div>
//                 <h4>{item.title}</h4>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.3rem', fontWeight: 700, color: 'var(--accent-purple)' }}>
//             If you want to improve your future, career, skill or confidence — Skilastra is for you.
//           </div>
//         </div>
//       </section>

//       {/* Solution Framework */}
//       <section className="section" style={{ background: 'var(--bg-secondary)' }}>
//         <div className="container">
//           <h2 className="section-title">The Skilastra Framework</h2>
//           <p className="section-subtitle">Six pillars that transform potential into professional capability</p>

//           <div className="card-grid">
//             <div className="card animate-on-scroll">
//               <h4>Structured Offline Learning</h4>
//               <p>In-person sessions with fixed schedules, accountability systems, and real-time feedback loops that build discipline and consistency.</p>
//             </div>

//             <div className="card animate-on-scroll">
//               <h4>Real Project Execution</h4>
//               <p>Work on actual projects from day one. Build portfolios that demonstrate capability, not just completion certificates.</p>
//             </div>

//             <div className="card animate-on-scroll">
//               <h4>Modern Tech & Digital Skills</h4>
//               <p>Master AI tools, automation systems, and digital platforms that define the current professional landscape.</p>
//             </div>

//             <div className="card animate-on-scroll">
//               <h4>Communication & Confidence</h4>
//               <p>Develop articulation, presentation skills, and professional presence through structured practice and feedback.</p>
//             </div>

//             <div className="card animate-on-scroll">
//               <h4>Personal Mentorship</h4>
//               <p>Direct access to experienced mentors who provide career direction, strategic guidance, and personalized growth plans.</p>
//             </div>

//             <div className="card animate-on-scroll">
//               <h4>Career Acceleration</h4>
//               <p>Placement support, interview preparation, and connections to industry networks that accelerate professional growth.</p>
//             </div>
//           </div>
//         </div>
//       </section>
// <section id="tracks" className="section" style={{ background: 'var(--bg-secondary)' }}>
//   <div className="container">
//     <h2 className="section-title">Upcoming Cohorts</h2>
//     <p className="section-subtitle">Specialized pathways designed for market-ready skill development</p>
    
//     <div className="tracks-grid">
//       <div className="track-card animate-on-scroll">
//         <h4>AI & Automation</h4>
//         <ul>
//           <li>Prompt engineering & AI tools</li>
//           <li>Workflow automation systems</li>
//           <li>Data analysis & interpretation</li>
//           <li>AI-powered productivity</li>
//         </ul>
//         <button className="btn-primary" onClick={() => window.open(JOIN_WAITLIST, '_blank')}>
//           Join Waitlist
//         </button>
//       </div>
      
//       <div className="track-card animate-on-scroll">
//         <h4>Coding & Web Development</h4>
//         <ul>
//           <li>Full-stack development</li>
//           <li>Frontend frameworks & design</li>
//           <li>Backend systems & APIs</li>
//           <li>Real project deployment</li>
//         </ul>
//         <button className="btn-primary" onClick={() => window.open(JOIN_WAITLIST, '_blank')}>
//           Join Waitlist
//         </button>
//       </div>
      
//       <div className="track-card animate-on-scroll">
//         <h4>Digital Marketing & Branding</h4>
//         <ul>
//           <li>Content strategy & creation</li>
//           <li>Social media marketing</li>
//           <li>Brand positioning & identity</li>
//           <li>Analytics & growth metrics</li>
//         </ul>
//         <button className="btn-primary" onClick={() => window.open(JOIN_WAITLIST, '_blank')}>
//           Join Waitlist
//         </button>
//       </div>
      
//       <div className="track-card animate-on-scroll">
//         <h4>Communication & Career Skills</h4>
//         <ul>
//           <li>Professional communication</li>
//           <li>Interview preparation</li>
//           <li>Resume & portfolio building</li>
//           <li>Leadership & networking</li>
//         </ul>
//         <button className="btn-primary" onClick={() => window.open(JOIN_WAITLIST, '_blank')}>
//           Join Waitlist
//         </button>
//       </div>
//     </div>
//   </div>
// </section>
//       {/* Workshop Section */}
//       <section id="workshop" className="section">
//         <div className="container">
//           <div className="workshop-section animate-on-scroll">
//             <h2 className="section-title">Skilastra's First Free Offline Introductory Session</h2>
//             <p style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
//               11 January 2026 — Limited Availability
//             </p>

//             <div className="countdown">
//               <div className="countdown-item">
//                 <div className="countdown-number">{countdown.days}</div>
//                 <div className="countdown-label">Days</div>
//               </div>
//               <div className="countdown-item">
//                 <div className="countdown-number">{countdown.hours}</div>
//                 <div className="countdown-label">Hours</div>
//               </div>
//               <div className="countdown-item">
//                 <div className="countdown-number">{countdown.minutes}</div>
//                 <div className="countdown-label">Minutes</div>
//               </div>
//               <div className="countdown-item">
//                 <div className="countdown-number">{countdown.seconds}</div>
//                 <div className="countdown-label">Seconds</div>
//               </div>
//             </div>

//             <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
//               A hands-on session providing practical exposure to Skilastra's learning model. 
//               Experience real project work, interact with mentors and the founder, and understand 
//               how structured offline learning accelerates professional growth. Offline only.
//             </p>

//             <button className="btn-primary" onClick={() => window.open(JOIN_WORKSHOP, '_blank')}>
//               Reserve Your Seat
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Ambassador Program */}
//       <section id="ambassador" className="section" style={{ background: 'var(--bg-secondary)' }}>
//         <div className="container">
//           <h2 className="section-title">🎖 The Skilastra Ambassador Program</h2>
//           <p className="section-subtitle">The most powerful youth-led growth movement in Dewas</p>

//           <div className="glass-block animate-on-scroll" style={{ maxWidth: '900px', margin: '0 auto 3rem' }}>
//             <h3>Become a Skilastra Ambassador</h3>
//             <p style={{ marginBottom: '1.5rem' }}>
//               Represent Skilastra in your college and gain leadership exposure by learning from real 
//               startup operations. Build and manage student communities while developing your own 
//               professional capabilities.
//             </p>
//             <ul style={{ listStyle: 'none', marginBottom: '2rem', paddingLeft: 0 }}>
//               <li style={{ padding: '0.75rem 0', paddingLeft: '2rem', position: 'relative', color: 'var(--text-secondary)' }}>
//                 <span style={{ position: 'absolute', left: '0', color: 'var(--accent-purple)' }}>✓</span>
//                 Leadership experience in real operations
//               </li>
//               <li style={{ padding: '0.75rem 0', paddingLeft: '2rem', position: 'relative', color: 'var(--text-secondary)' }}>
//                 <span style={{ position: 'absolute', left: '0', color: 'var(--accent-purple)' }}>✓</span>
//                 Community building & management skills
//               </li>
//               <li style={{ padding: '0.75rem 0', paddingLeft: '2rem', position: 'relative', color: 'var(--text-secondary)' }}>
//                 <span style={{ position: 'absolute', left: '0', color: 'var(--accent-purple)' }}>✓</span>
//                 Direct mentorship from founder & team
//               </li>
//               <li style={{ padding: '0.75rem 0', paddingLeft: '2rem', position: 'relative', color: 'var(--text-secondary)' }}>
//                 <span style={{ position: 'absolute', left: '0', color: 'var(--accent-purple)' }}>✓</span>
//                 Official certification & recognition
//               </li>
//             </ul>
//             <button className="btn-primary" onClick={() => window.open(GOOGLE_FORM_AMBASSADOR, '_blank')}>
//               Apply Through Google Form
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* For Parents Section */}
//       <section id="parents" className="section">
//         <div className="container">
//           <h2 className="section-title">👨‍👩‍👧 For Parents</h2>
//           <p className="section-subtitle">Because parents don't want certificates — they want progress they can see</p>

//           <div className="card-grid">
//             {[
//               { icon: '🏢', title: 'Safe, Structured, Monitored', desc: 'Every class is supervised. Every activity has a purpose. Every student is tracked for progress. You always know where your child stands.' },
//               { icon: '📊', title: 'Weekly Reports for Parents', desc: 'You get updates on attendance, assignments, behaviour, communication improvements, skills learned, and overall progress. Parents never stay in the dark.' },
//               { icon: '💪', title: 'Not Just Skills — Confidence + Discipline', desc: 'We train your child to speak confidently, present clearly, think better, work in teams, handle pressure, and meet deadlines.' },
//               { icon: '💼', title: 'Real Projects Instead of Certificates', desc: 'Your child builds websites, presentations, brand designs, digital work, and startup ideas. You see real output — not just attendance.' },
//               { icon: '🚀', title: 'Future-Proof Skills', desc: 'Skilastra teaches skills that matter in 2025 and beyond: AI, Coding, Automation, Digital Marketing, Communication, Personal Branding.' },
//               { icon: '🏢', title: 'Backed by Exsora', desc: 'Parents trust us because Skilastra is powered by Exsora, a company working with real businesses, real clients, and real technology.' }
//             ].map((item, i) => (
//               <div key={i} className="card animate-on-scroll">
//                 <div className="card-icon">{item.icon}</div>
//                 <h4>{item.title}</h4>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))', borderRadius: '24px', padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: '3rem auto 0' }}>
//             <p style={{ fontSize: '1.3rem', fontWeight: 700, fontStyle: 'italic', color: 'var(--accent-purple)' }}>
//               "Skilastra gives your child the advantage that traditional education missed. A confident, skilled, future-ready version of themselves."
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Parent Testimonials */}
//       <section className="section" style={{ background: 'var(--bg-secondary)' }}>
//         <div className="container">
//           <h2 className="section-title">💬 Parent Testimonials</h2>
//           <div className="card-grid">
//             {[
//               { text: 'My daughter could not speak in front of even 2 people. After one month at Skilastra, she gave a presentation in front of a full classroom. For the first time, I saw confidence in her eyes.', name: 'Mrs. Shruti Joshi, Dewas' },
//               { text: 'We spent so much on online courses but she never completed anything. At Skilastra, she completes assignments, gets feedback, and learns real skills. This is the structure students truly need.', name: 'Mr. Anil Rajput' },
//               { text: 'My son was rejected in 6 interviews. Skilastra trained him on communication, confidence, and resume building. He finally cracked his first job interview in 45 days.', name: 'Mr. Manish Tiwari' },
//               { text: 'I wanted my son to learn something real beyond school. Coding, AI tools, communication — everything matters today. Skilastra made him tech-smart and responsible.', name: 'Mrs. Seema Rathore' },
//               { text: 'We finally found a place that guides without giving false promises. Here the focus is on skill and personality, not marks.', name: 'Mr. Rajesh Sahu' }
//             ].map((testimonial, i) => (
//               <div key={i} className="testimonial-card animate-on-scroll">
//                 <p className="testimonial-text">"{testimonial.text}"</p>
//                 <p className="testimonial-author">— {testimonial.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
      
// <section className="section">
//   <div className="container">
//     <h2 className="section-title">❓ Frequently Asked Questions</h2>
//     <div className="faq-container">
//       {[
//         { q: 'Skilastra kya coaching hai?', a: 'Nahi. Skilastra is a skill ecosystem. Yaha syllabus nahi — skill + confidence + real project sikhaya jata hai.' },
//         { q: 'Kya yaha online classes hoti hain?', a: 'No. 100% offline. Real conversation, real practice, real learning.' },
//         { q: 'Kya beginner students join kar sakte hain?', a: 'Bilkul. Hum basics se start karte hain — coding, digital tools, communication sab step-by-step.' },
//         { q: 'Yaha ka environment safe hai?', a: 'Yes — monitored classrooms, mentor supervision, and a disciplined environment.' },
//         { q: 'Kya parents ko progress pata chalta hai?', a: 'Yes. Weekly reports + mentor feedback + monthly review.' },
//         { q: 'Kya yaha certificate milta hai?', a: 'Yes, but certificate is secondary. Focus is portfolio + projects + confidence.' }
//       ].map((faq, i) => (
//         <div key={i} className="faq-item animate-on-scroll">
//           <div className="faq-question">{faq.q}</div>
//           <div className="faq-answer">{faq.a}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Partner Section */}
//       <section className="section" style={{ background: 'var(--bg-secondary)' }}>
//         <div className="container">
//           <h2 className="section-title">🤝 Partner With Skilastra</h2>
//           <p className="section-subtitle">Empowering Workplaces, Classrooms & Communities With Future-Ready Skills</p>

//           <div className="card-grid">
//             {[
//               { icon: '🏫', title: 'Schools (9th–12th)', desc: 'Tech + Digital Literacy Workshops' },
//               { icon: '🎓', title: 'Colleges', desc: 'Skill Development + Career Readiness Programs' },
//               { icon: '🏢', title: 'Companies & Startups', desc: 'Team Training, Automation & AI Workshops' },
//               { icon: '🏬', title: 'Local Businesses', desc: 'Business Digitalisation & Marketing Training' }
//             ].map((partner, i) => (
//               <div key={i} className="card animate-on-scroll">
//                 <div className="card-icon">{partner.icon}</div>
//                 <h4>{partner.title}</h4>
//                 <p>{partner.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div style={{ textAlign: 'center', marginTop: '3rem' }}>
//             <button className="btn-primary" onClick={() => window.open(GOOGLE_FORM_PARTNERSHIP, '_blank')}>
//               📩 Apply For Workshop / Partnership
//             </button>
//           </div>
//         </div>
//       </section>
    
// {/* Showcase Video Section */}
// {/* <section className="section">
//   <div className="container">
//     <h2 className="section-title">Experience Skilastra</h2>
//     <p className="section-subtitle">Watch how we transform potential into professional capability</p>
    
//     <div className="video-showcase animate-on-scroll">
//       <div className="video-wrapper">
//         <iframe 
//           src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
//           title="Skilastra Showcase"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>
//     </div>
//   </div>
// </section> */}

//       {/* Facilities Section */}
//       {/* <section className="section">
//         <div className="container">
//           <h2 className="section-title">Our Facilities</h2>
//           <p className="section-subtitle">Modern infrastructure designed for focused learning</p>

//           <div className="gallery-grid">
//             <div className="gallery-item animate-on-scroll">
//               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" alt="Modern Classroom" />
//               <div className="gallery-caption">Modern Classrooms</div>
//             </div>

//             <div className="gallery-item animate-on-scroll">
//               <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" alt="Learning Space" />
//               <div className="gallery-caption">Collaborative Spaces</div>
//             </div>

//             <div className="gallery-item animate-on-scroll">
//               <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop" alt="Tech Lab" />
//               <div className="gallery-caption">Tech-Enabled Labs</div>
//             </div>

//             <div className="gallery-item animate-on-scroll">
//               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Workshop" />
//               <div className="gallery-caption">Workshop Sessions</div>
//             </div>

//             <div className="gallery-item animate-on-scroll">
//               <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop" alt="Project Room" />
//               <div className="gallery-caption">Project Workspaces</div>
//             </div>

//             <div className="gallery-item animate-on-scroll">
//               <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" alt="Community Area" />
//               <div className="gallery-caption">Community Hub</div>
//             </div>
//           </div>
//         </div>
//       </section> */}



// {/* Community Section */}
// <section className="section" style={{ background: 'var(--bg-secondary)' }}>
//   <div className="container">
//     <h2 className="section-title">Join The Movement</h2>
//     <p className="section-subtitle">Be part of India's first tech revolution in Dewas</p>
    
//     <div style={{ 
//       background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)', 
//       borderRadius: '24px',
//       padding: '0.5rem',
//       overflow: 'hidden',
//       maxWidth: '100%',
//       width: '100%'
//     }}>
//       <div className="community-ticker">
//         <div className="community-ticker-content">
//           {[...Array(10)].map((_, i) => (
//             <React.Fragment key={i}>
//               <span className="community-ticker-item">Skill</span>
//               <span className="community-ticker-item">•</span>
//               <span className="community-ticker-item">Growth</span>
//               <span className="community-ticker-item">•</span>
//               <span className="community-ticker-item">Direction</span>
//               <span className="community-ticker-item">•</span>
//               <span className="community-ticker-item">Innovation</span>
//               <span className="community-ticker-item">•</span>
//               <span className="community-ticker-item">Leadership</span>
//               <span className="community-ticker-item">•</span>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
    
//     <div style={{ textAlign: 'center', marginTop: '3rem' }}>
//       <a href="https://forms.gle/Ck5YWPrsKpSVqKSC9" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
//         Join The Community
//       </a>
//     </div>
//   </div>
// </section>
// <section id="founder" className="section">
//   <div className="container">
//     <h2 className="section-title">Founder</h2>
//     <div className="founder-section-clean animate-on-scroll">
//       <img 
//         src={Founderimg} 
//         alt="Yash Shukla - Founder" 
//         className="founder-img-clean"
//       />
      
//       <div className="founder-bio-clean">
//         <h3>Yash Shukla</h3>
//         <p className="founder-title">Founder — Skilastra & Exsora</p>
//         <p>
//           Yash Shukla is the founder of Skilastra and Exsora, with over four years of experience
//           in technology, product design, automation systems, and startup leadership.
//         </p>
//         <p>
//           His vision is to build a structured skill ecosystem for India's next-generation talent,
//           bridging the gap between academic knowledge and market readiness through practical,
//           outcome-driven learning experiences.
//         </p>
//         <p>
//           Through Exsora, Yash has built scalable systems and strategies for businesses, and now
//           brings that expertise to developing tomorrow's professionals through Skilastra.
//         </p>
//         <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
//           <button className="btn-primary" onClick={() => window.open(FOUNDER_INSTA, '_blank')}>
//             Connect on Instagram
//           </button>
//           <button className="btn-secondary" onClick={() => window.open(FOUNDER_DESK, '_blank')}>
//             Book Consultation
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//       {/* Team Section */}
//       <section id="team" className="section" style={{ background: 'var(--bg-secondary)' }}>
//         <div className="container">
//           <h2 className="section-title">Our Team</h2>
//           <p className="section-subtitle">Experienced professionals dedicated to your growth</p>

//           <div className="team-grid">
//             <div className="team-card animate-on-scroll">
//               <img src={Foundersmall} alt="Yash Shukla" className="team-img" />
//               <h4>Yash Shukla</h4>
//               <p>Founder & CEO</p>
//             </div>

//             <div className="team-card animate-on-scroll">
//               <img src={Team3} alt="Team Member" className="team-img" />
//               <h4>Saloni Satpute</h4>
//               <p>Digital Marketing Expert</p>
//             </div>

//             <div className="team-card animate-on-scroll">
//               <img src={Team1} alt="Team Member" className="team-img" />
//               <h4>Ayush Hiwase</h4>
//               <p>AI & Automation Specialist</p>
//             </div>

//             <div className="team-card animate-on-scroll">
//               <img src={Team2} alt="Team Member" className="team-img" />
//               <h4>Harsh Gupta</h4>
//               <p>Development Expert</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="section">
//         <div className="container">
//           <div className="stats-grid">
//             <div className="stat-card animate-on-scroll">
//               <div className="stat-number">{stats.students}+</div>
//               <div className="stat-label">Students Impacted</div>
//             </div>
//             <div className="stat-card animate-on-scroll">
//               <div className="stat-number">{stats.projects}+</div>
//               <div className="stat-label">Projects Executed</div>
//             </div>
//             <div className="stat-card animate-on-scroll">
//               <div className="stat-number">{stats.partners}+</div>
//               <div className="stat-label">Partner Ecosystem Members</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Exsora Section */}
//       <section id="internships" className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
//         <div className="container">
//           <h2 className="section-title">Built & Backed by Exsora</h2>
//           <p className="section-subtitle">
//             Skilastra is powered by Exsora's expertise in technology, automation, product strategy, and business execution.
//             Explore various internship opportunities at Exsora to gain real-world experience and work on impactful projects.
//           </p>

//           <div style={{ margin: '3rem 0' }}>
//             <img src={Exsora} alt="Exsora" style={{ height: '80px' }} />
//           </div>
//           <div className="hero-ctas">
//           <button className="btn-primary" onClick={() => window.open(CAREER_OPPORTUNITIES, '_blank')}>
//             Apply for Internships & Careers Opportunities.
//           </button>
//            <button className="btn-secondary" onClick={() => window.open(EXSORA_WEBSITE, '_blank')}>
//             Visit Exsora For More Opportunities
//             </button>
//             {/* <button className="btn-primary" onClick={() => window.open(INTERNSHIPS, '_blank')}>
//             More Career Opportunities
//           </button> */}
//             </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section">
//         <div className="container">
//           <h2 className="section-title">Get in Touch</h2>
//           <p className="section-subtitle">Start your journey with Skilastra</p>
//           <div className="card-grid">
//             {[
//               { title: 'WhatsApp', text: 'Connect instantly for queries, enrollment, or consultation', action: () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank'), btn: 'Message Us' },
//               { title: 'Instagram', text: `Follow for updates, insights, and community highlights`, action: () =>  window.open(INSTAGRAM_HANDLE, '_blank'), btn: 'Follow Us' },
               
//               { title: 'Location', text: 'Dewas, Madhya Pradesh - Offline sessions & community hub', action: () => window.open(EXSORA_WEBSITE, '_blank'), btn: 'Visit Exsora' }
//             ].map((contact, i) => (
//               <div key={i} className="card animate-on-scroll" style={{ textAlign: 'center' }}>
//                 <h4>{contact.title}</h4>
//                 <p style={{ marginBottom: '1.5rem' }}>{contact.text}</p>
//                 <button className="btn-primary" onClick={contact.action}>{contact.btn}</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           {/* <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjQgNEwzNiAyNEgyNEwxMiA0NEgyNEwzNiAyNFoiIHN0cm9rZT0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMTIiIHkxPSI0IiB4Mj0iMzYiIHkyPSI0NCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNhODU1ZjciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM2I4MmY2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KPC9zdmc+" alt="Skilastra" style={{ height: '40px', marginBottom: '2rem' }} /> */}
// <img src={logo} alt="Skilastra" className="logo" />
//           <div className="footer-links">
//             <a onClick={() => scrollToSection('home')}>Home</a>
//             <a onClick={() => scrollToSection('who-for')}>Who For</a>
//             <a onClick={() => scrollToSection('internships')}>Internships</a>
//             <a onClick={() => scrollToSection('ambassador')}>Ambassador</a>
//             <a onClick={() => scrollToSection('parents')}>Parents</a>
//             <a onClick={() => scrollToSection('team')}>Team</a>
//             <a onClick={() => scrollToSection('tracks')}>Cohorts</a>
//           </div>

//           <div className="footer-bottom">
//             <p>© {new Date().getFullYear()} Skilastra. All rights reserved.</p>
//             <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>An Initiative by Exsora</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import logo from '../public/assests/logo.png';
import Exsora from '../public/assests/Exsora.png';
import Founderimg from '../public/assests/founderimg.png';
import Foundersmall from '../public/assests/foundersmall.png';
import Team1 from '../public/assests/Team1.jpg';
import Team2 from '../public/assests/Team2.jpg';
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
const EMAIL = 'yashshukla2411@gmail.com';
const PHONE = '+918305144924';
const WORKSHOP_DATE = new Date('2026-01-11T10:00:00+05:30');

// GTM & Meta Pixel IDs - REPLACE WITH YOUR ACTUAL IDs
const GTM_ID = 'GTM-PGVLXM85'; // Replace with your GTM ID
const META_PIXEL_ID = '881981747625384'; // Replace with your Meta Pixel ID

// GTM & Meta Pixel Helper Functions
const pushToDataLayer = (event, data = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
};

const trackMetaPixel = (event, data = {}) => {
  if (window.fbq) {
    window.fbq('track', event, data);
  }
};

const trackEvent = (eventName, data = {}) => {
  pushToDataLayer(eventName, data);
  trackMetaPixel(eventName, data);
};

// Landing Page Component
// const LandingPage = () => {
//   const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const target = new Date('2026-01-11T10:00:00+05:30').getTime();
//       const distance = target - now;
      
//       if (distance > 0) {
//         setCountdown({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000)
//         });
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleCTAClick = (ctaId) => {
//     trackEvent('LP_CTA_Click', {
//       ctaId,
//       ctaLocation: ctaId === 'lp-cta-hero' ? 'Hero Section' : ctaId === 'lp-cta-bottom' ? 'Bottom Section' : 'Sticky Bar'
//     });
//     window.open(JOIN_WORKSHOP, '_blank');
//   };

//   return (
//     <div className="lp-container">
//       {/* STICKY CTA BAR */}
//       <div className="lp-sticky-bar">
//         <span>🔥 Only 50 Seats Left!</span>
//         <button 
//           id="lp-cta-sticky"
//           data-cta="sticky"
//           className="btn-primary"
//           onClick={() => handleCTAClick('lp-cta-sticky')}
//         >
//           Register Now - FREE
//         </button>
//       </div>

//       {/* HERO SECTION */}
//       <section className="lp-hero" id="lp-hero" data-section="lp-hero">
//         <div className="lp-hero-particles">
//           {[...Array(20)].map((_, i) => (
//             <div key={i} className="lp-particle" style={{
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${10 + Math.random() * 10}s`
//             }}></div>
//           ))}
//         </div>

//         <div className="lp-hero-content">
//           <div className="lp-badge">🎓 India's First Tech Revolution</div>
          
//           <h1 className="lp-title">
//             Transform Your Future with <span className="lp-gradient-text">Skilastra</span>
//           </h1>
          
//           <p className="lp-subtitle">
//             Join Dewas' first structured offline skill ecosystem. Learn AI, coding, and digital skills that companies actually need.
//           </p>

//           <div className="lp-urgency-box">
//             <div className="lp-urgency-icon">⚡</div>
//             <div>
//               <div className="lp-urgency-title">FREE Introductory Session</div>
//               <div className="lp-urgency-date">January 11, 2026 • Only 50 Seats</div>
//             </div>
//           </div>

//           {/* COUNTDOWN */}
//           <div className="lp-countdown">
//             {[
//               { label: 'Days', value: countdown.days },
//               { label: 'Hours', value: countdown.hours },
//               { label: 'Minutes', value: countdown.minutes },
//               { label: 'Seconds', value: countdown.seconds }
//             ].map((item, i) => (
//               <div key={i} className="lp-countdown-item">
//                 <div className="lp-countdown-number">{item.value}</div>
//                 <div className="lp-countdown-label">{item.label}</div>
//               </div>
//             ))}
//           </div>

//           <button 
//             id="lp-cta-hero"
//             data-cta="hero"
//             className="lp-cta-primary"
//             onClick={() => handleCTAClick('lp-cta-hero')}
//           >
//             <span>Claim Your FREE Seat Now</span>
//             <span className="lp-cta-arrow">→</span>
//           </button>

//           <div className="lp-trust-indicators">
//             <div className="lp-trust-item">
//               <span className="lp-trust-number">420+</span>
//               <span className="lp-trust-label">Students</span>
//             </div>
//             <div className="lp-trust-item">
//               <span className="lp-trust-number">50+</span>
//               <span className="lp-trust-label">Projects</span>
//             </div>
//             <div className="lp-trust-item">
//               <span className="lp-trust-number">30+</span>
//               <span className="lp-trust-label">Partners</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROBLEM-SOLUTION SECTION */}
//       <section className="lp-section" id="lp-problem" data-section="lp-problem">
//         <div className="lp-container-inner">
//           <h2 className="lp-section-title">Why Traditional Learning Fails</h2>
          
//           <div className="lp-cards-grid">
//             {[
//               { icon: '🎯', title: 'No Real Skills', desc: 'Certificates without capability. Theory without practice.' },
//               { icon: '💼', title: 'Job Market Gap', desc: 'Companies need skills. Students have degrees.' },
//               { icon: '📱', title: 'Online Illusion', desc: 'Endless courses. Zero completion. No accountability.' },
//               { icon: '🚀', title: 'Dewas Disadvantage', desc: '5000+ students travel daily. No local ecosystem.' }
//             ].map((card, i) => (
//               <div key={i} className="lp-card lp-card-hover">
//                 <div className="lp-card-icon">{card.icon}</div>
//                 <h3>{card.title}</h3>
//                 <p>{card.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SOLUTION SECTION */}
//       <section className="lp-section lp-section-alt" id="lp-solution" data-section="lp-solution">
//         <div className="lp-container-inner">
//           <h2 className="lp-section-title">The Skilastra Solution</h2>
          
//           <div className="lp-feature-showcase">
//             {[
//               { 
//                 icon: '🏢', 
//                 title: 'Structured Offline Learning',
//                 points: ['Fixed schedules', 'Real mentorship', 'Accountability system']
//               },
//               { 
//                 icon: '💻', 
//                 title: 'Real Project Execution',
//                 points: ['Build portfolios', 'Industry projects', 'Practical experience']
//               },
//               { 
//                 icon: '🎓', 
//                 title: 'Modern Tech Skills',
//                 points: ['AI & Automation', 'Web Development', 'Digital Marketing']
//               }
//             ].map((feature, i) => (
//               <div key={i} className="lp-feature-card">
//                 <div className="lp-feature-icon">{feature.icon}</div>
//                 <h3>{feature.title}</h3>
//                 <ul>
//                   {feature.points.map((point, j) => (
//                     <li key={j}>✓ {point}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SOCIAL PROOF */}
//       <section className="lp-section" id="lp-testimonials" data-section="lp-testimonials">
//         <div className="lp-container-inner">
//           <h2 className="lp-section-title">What Students & Parents Say</h2>
          
//           <div className="lp-testimonials">
//             {[
//               { text: 'My daughter gained confidence she never had. First time I saw her present in front of 50 people.', author: 'Mrs. Shruti Joshi' },
//               { text: 'Cracked my first job interview after Skilastra training. The communication skills changed everything.', author: 'Rohit, Student' },
//               { text: 'Finally, a place that focuses on real skills, not just marks.', author: 'Mr. Rajesh Sahu' }
//             ].map((test, i) => (
//               <div key={i} className="lp-testimonial">
//                 <p className="lp-testimonial-text">"{test.text}"</p>
//                 <p className="lp-testimonial-author">— {test.author}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA SECTION */}
//       <section className="lp-section lp-cta-section" id="lp-cta-bottom-section" data-section="lp-cta">
//         <div className="lp-container-inner">
//           <div className="lp-final-cta-box">
//             <h2 className="lp-final-title">Your Future Starts January 11, 2026</h2>
//             <p className="lp-final-subtitle">
//               Join the FREE introductory session. Experience real learning. Meet the founder. See the ecosystem.
//             </p>

//             <div className="lp-urgency-banner">
//               🔥 Only 50 Seats Available • Already 30+ Registered
//             </div>

//             <button 
//               id="lp-cta-bottom"
//               data-cta="bottom"
//               className="lp-cta-primary lp-cta-large"
//               onClick={() => handleCTAClick('lp-cta-bottom')}
//             >
//               <span>Register Now - Absolutely FREE</span>
//               <span className="lp-cta-arrow">→</span>
//             </button>

//             <div className="lp-guarantee">
//               ✓ No payment required • ✓ Limited seats • ✓ Offline only
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER MINI */}
//       <div className="lp-footer">
//         <p>© 2025 Skilastra • An Initiative by Exsora</p>
//         <a href="#/" className="lp-footer-link">← Back to Home</a>
//       </div>
//     </div>
//   );
// };
// const LandingPage = () => {
//   const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const target = new Date('2026-01-11T10:00:00+05:30').getTime();
//       const distance = target - now;
      
//       if (distance > 0) {
//         setCountdown({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000)
//         });
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % 3);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleCTAClick = (ctaId) => {
//     trackEvent('LP_CTA_Click', {
//       ctaId,
//       ctaLocation: ctaId === 'lp-cta-hero' ? 'Hero Section' : ctaId === 'lp-cta-bottom' ? 'Bottom Section' : 'Sticky Bar'
//     });
//     window.open(JOIN_WORKSHOP, '_blank');
//   };

//   const features = [
//     { icon: '🎯', title: 'No Real Skills', desc: 'Certificates without capability. Theory without practice.', color: '#ef4444' },
//     { icon: '💼', title: 'Job Market Gap', desc: 'Companies need skills. Students have degrees.', color: '#f59e0b' },
//     { icon: '📱', title: 'Online Illusion', desc: 'Endless courses. Zero completion. No accountability.', color: '#8b5cf6' },
//     { icon: '🚀', title: 'Dewas Disadvantage', desc: '5000+ students travel daily. No local ecosystem.', color: '#3b82f6' }
//   ];

//   const solutions = [
//     { 
//       icon: '🏢', 
//       title: 'Structured Offline Learning',
//       points: ['Fixed schedules', 'Real mentorship', 'Accountability system'],
//       gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
//     },
//     { 
//       icon: '💻', 
//       title: 'Real Project Execution',
//       points: ['Build portfolios', 'Industry projects', 'Practical experience'],
//       gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
//     },
//     { 
//       icon: '🎓', 
//       title: 'Modern Tech Skills',
//       points: ['AI & Automation', 'Web Development', 'Digital Marketing'],
//       gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
//     }
//   ];

//   const testimonials = [
//     { text: 'My daughter gained confidence she never had. First time I saw her present in front of 50 people.', author: 'Mrs. Shruti Joshi', role: 'Parent' },
//     { text: 'Cracked my first job interview after Skilastra training. The communication skills changed everything.', author: 'Rohit', role: 'Student' },
//     { text: 'Finally, a place that focuses on real skills, not just marks.', author: 'Mr. Rajesh Sahu', role: 'Parent' }
//   ];

//   return (
//     <div className="lp-container">
//       {/* FLOATING GRADIENT BLOBS */}
//       <div className="lp-gradient-blobs">
//         <div 
//           className="lp-blob lp-blob-1" 
//           style={{ 
//             transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` 
//           }}
//         ></div>
//         <div 
//           className="lp-blob lp-blob-2" 
//           style={{ 
//             transform: `translate(${-mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)` 
//           }}
//         ></div>
//         <div 
//           className="lp-blob lp-blob-3" 
//           style={{ 
//             transform: `translate(${mousePosition.x * 0.04}px, ${-mousePosition.y * 0.04}px)` 
//           }}
//         ></div>
//       </div>

//       {/* ANIMATED STICKY BAR */}
//       <div className="lp-sticky-bar-modern">
//         <div className="lp-sticky-content">
//           <div className="lp-sticky-pulse"></div>
//           <span className="lp-sticky-text">🔥 Only 50 Seats Left!</span>
//           <button 
//             id="lp-cta-sticky"
//             data-cta="sticky"
//             className="lp-sticky-btn"
//             onClick={() => handleCTAClick('lp-cta-sticky')}
//           >
//             Register Now
//             <span className="lp-sticky-arrow">→</span>
//           </button>
//         </div>
//       </div>

//       {/* HERO SECTION - ENHANCED */}
//       <section className="lp-hero-modern" id="lp-hero" data-section="lp-hero">
//         {/* 3D Particles */}
//         <div className="lp-particles-3d">
//           {[...Array(30)].map((_, i) => (
//             <div
//               key={i}
//               className="lp-particle-3d"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${15 + Math.random() * 10}s`
//               }}
//             ></div>
//           ))}
//         </div>

//         {/* Grid Background */}
//         <div className="lp-grid-bg"></div>

//         <div className="lp-hero-content-modern">
//           {/* Animated Badge */}
//           <div className="lp-badge-modern">
//             <span className="lp-badge-shimmer"></span>
//             <span className="lp-badge-text">🎓 India's First Tech Revolution</span>
//           </div>
          
//           {/* 3D Title */}
//           <h1 className="lp-title-3d">
//             Transform Your Future with
//             <span className="lp-title-highlight">
//               <span className="lp-title-gradient">Skilastra</span>
//               <span className="lp-title-glow"></span>
//             </span>
//           </h1>
          
//           <p className="lp-subtitle-modern">
//             Join Dewas' first structured offline skill ecosystem. Learn AI, coding, and digital skills that companies actually need.
//           </p>

//           {/* Animated Stats Bar */}
//           <div className="lp-stats-bar">
//             <div className="lp-stat-item">
//               <div className="lp-stat-icon">👥</div>
//               <div className="lp-stat-content">
//                 <div className="lp-stat-number">420+</div>
//                 <div className="lp-stat-label">Students</div>
//               </div>
//             </div>
//             <div className="lp-stat-divider"></div>
//             <div className="lp-stat-item">
//               <div className="lp-stat-icon">🚀</div>
//               <div className="lp-stat-content">
//                 <div className="lp-stat-number">50+</div>
//                 <div className="lp-stat-label">Projects</div>
//               </div>
//             </div>
//             <div className="lp-stat-divider"></div>
//             <div className="lp-stat-item">
//               <div className="lp-stat-icon">🤝</div>
//               <div className="lp-stat-content">
//                 <div className="lp-stat-number">30+</div>
//                 <div className="lp-stat-label">Partners</div>
//               </div>
//             </div>
//           </div>

//           {/* Urgency Card with Animation */}
//           <div className="lp-urgency-card-modern">
//             <div className="lp-urgency-pulse"></div>
//             <div className="lp-urgency-icon-modern">⚡</div>
//             <div className="lp-urgency-content">
//               <div className="lp-urgency-title-modern">FREE Introductory Session</div>
//               <div className="lp-urgency-date-modern">January 11, 2026 • Only 50 Seats</div>
//             </div>
//           </div>

//           {/* Glassmorphism Countdown */}
//           <div className="lp-countdown-modern">
//             {[
//               { label: 'Days', value: countdown.days, color: '#a855f7' },
//               { label: 'Hours', value: countdown.hours, color: '#3b82f6' },
//               { label: 'Minutes', value: countdown.minutes, color: '#ec4899' },
//               { label: 'Seconds', value: countdown.seconds, color: '#f59e0b' }
//             ].map((item, i) => (
//               <div key={i} className="lp-countdown-card-modern">
//                 <div className="lp-countdown-glow" style={{ background: item.color }}></div>
//                 <div className="lp-countdown-number-modern" style={{ color: item.color }}>
//                   {item.value}
//                 </div>
//                 <div className="lp-countdown-label-modern">{item.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* 3D CTA Button */}
//           <button 
//             id="lp-cta-hero"
//             data-cta="hero"
//             className="lp-cta-3d"
//             onClick={() => handleCTAClick('lp-cta-hero')}
//           >
//             <span className="lp-cta-bg"></span>
//             <span className="lp-cta-text">
//               <span className="lp-cta-icon">🎯</span>
//               Claim Your FREE Seat Now
//               <span className="lp-cta-arrow-modern">→</span>
//             </span>
//             <span className="lp-cta-shine"></span>
//           </button>

//           {/* Social Proof Ticker */}
//           <div className="lp-social-proof">
//             <div className="lp-social-avatars">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className="lp-avatar" style={{ zIndex: 10 - i }}>
//                   <div className="lp-avatar-inner">{String.fromCharCode(65 + i)}</div>
//                 </div>
//               ))}
//             </div>
//             <div className="lp-social-text">
//               <span className="lp-social-count">30+ students</span> registered in last 24 hours
//             </div>
//           </div>
//         </div>

//         {/* Floating Elements */}
//         <div className="lp-floating-elements">
//           <div className="lp-float-circle lp-float-1">AI</div>
//           <div className="lp-float-circle lp-float-2">Code</div>
//           <div className="lp-float-circle lp-float-3">Design</div>
//           <div className="lp-float-circle lp-float-4">Growth</div>
//         </div>
//       </section>

//       {/* PROBLEM SECTION - CARDS WITH HOVER EFFECTS */}
//       <section className="lp-section-modern" id="lp-problem" data-section="lp-problem">
//         <div className="lp-container-inner">
//           <div className="lp-section-header">
//             <span className="lp-section-tag">The Problem</span>
//             <h2 className="lp-section-title-modern">Why Traditional Learning Fails</h2>
//             <p className="lp-section-desc">The education system isn't keeping up with the modern world</p>
//           </div>
          
//           <div className="lp-cards-masonry">
//             {features.map((card, i) => (
//               <div key={i} className="lp-card-modern" style={{ animationDelay: `${i * 0.1}s` }}>
//                 <div className="lp-card-glow" style={{ background: card.color }}></div>
//                 <div className="lp-card-shine"></div>
//                 <div className="lp-card-icon-modern" style={{ background: `${card.color}20`, color: card.color }}>
//                   {card.icon}
//                 </div>
//                 <h3 className="lp-card-title-modern">{card.title}</h3>
//                 <p className="lp-card-desc-modern">{card.desc}</p>
//                 <div className="lp-card-border" style={{ background: card.color }}></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SOLUTION SECTION - ANIMATED CARDS */}
//       <section className="lp-section-modern lp-section-dark" id="lp-solution" data-section="lp-solution">
//         <div className="lp-container-inner">
//           <div className="lp-section-header">
//             <span className="lp-section-tag">The Solution</span>
//             <h2 className="lp-section-title-modern">The Skilastra Approach</h2>
//             <p className="lp-section-desc">A complete transformation system designed for real results</p>
//           </div>
          
//           <div className="lp-solution-grid">
//             {solutions.map((solution, i) => (
//               <div key={i} className="lp-solution-card" style={{ animationDelay: `${i * 0.15}s` }}>
//                 <div className="lp-solution-bg" style={{ background: solution.gradient }}></div>
//                 <div className="lp-solution-icon-modern">{solution.icon}</div>
//                 <h3 className="lp-solution-title">{solution.title}</h3>
//                 <ul className="lp-solution-list">
//                   {solution.points.map((point, j) => (
//                     <li key={j} className="lp-solution-item">
//                       <span className="lp-solution-check">✓</span>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="lp-solution-shine"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS - CAROUSEL */}
//       <section className="lp-section-modern" id="lp-testimonials" data-section="lp-testimonials">
//         <div className="lp-container-inner">
//           <div className="lp-section-header">
//             <span className="lp-section-tag">Success Stories</span>
//             <h2 className="lp-section-title-modern">What Students & Parents Say</h2>
//             <p className="lp-section-desc">Real transformations, real results</p>
//           </div>
          
//           <div className="lp-testimonial-carousel">
//             {testimonials.map((test, i) => (
//               <div 
//                 key={i} 
//                 className={`lp-testimonial-modern ${i === activeTestimonial ? 'active' : ''}`}
//               >
//                 <div className="lp-testimonial-quote">"</div>
//                 <p className="lp-testimonial-text-modern">{test.text}</p>
//                 <div className="lp-testimonial-author-modern">
//                   <div className="lp-testimonial-avatar">
//                     {test.author.charAt(0)}
//                   </div>
//                   <div className="lp-testimonial-info">
//                     <div className="lp-testimonial-name">{test.author}</div>
//                     <div className="lp-testimonial-role">{test.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
            
//             {/* Carousel Dots */}
//             <div className="lp-carousel-dots">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   className={`lp-carousel-dot ${i === activeTestimonial ? 'active' : ''}`}
//                   onClick={() => setActiveTestimonial(i)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA - MEGA SECTION */}
//       <section className="lp-section-modern lp-cta-mega" id="lp-cta-bottom-section" data-section="lp-cta">
//         <div className="lp-cta-rays"></div>
//         <div className="lp-container-inner">
//           <div className="lp-cta-box-mega">
//             <div className="lp-cta-badge-mega">
//               <span className="lp-cta-badge-pulse"></span>
//               LIMITED TIME OFFER
//             </div>

//             <h2 className="lp-cta-title-mega">
//               Your Future Starts
//               <span className="lp-cta-highlight-mega">January 11, 2026</span>
//             </h2>
            
//             <p className="lp-cta-subtitle-mega">
//               Join the FREE introductory session. Experience real learning. Meet the founder. See the ecosystem.
//             </p>

//             <div className="lp-urgency-banner-mega">
//               <span className="lp-urgency-icon-mega">🔥</span>
//               <span>Only 50 Seats Available • Already 30+ Registered</span>
//             </div>

//             <button 
//               id="lp-cta-bottom"
//               data-cta="bottom"
//               className="lp-cta-mega-btn"
//               onClick={() => handleCTAClick('lp-cta-bottom')}
//             >
//               <span className="lp-cta-mega-bg"></span>
//               <span className="lp-cta-mega-text">
//                 <span className="lp-cta-mega-icon">🚀</span>
//                 Register Now - Absolutely FREE
//                 <span className="lp-cta-mega-arrow">→</span>
//               </span>
//               <span className="lp-cta-mega-glow"></span>
//             </button>

//             <div className="lp-guarantee-modern">
//               <div className="lp-guarantee-item">✓ No payment required</div>
//               <div className="lp-guarantee-divider">•</div>
//               <div className="lp-guarantee-item">✓ Limited seats</div>
//               <div className="lp-guarantee-divider">•</div>
//               <div className="lp-guarantee-item">✓ Offline only</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <div className="lp-footer-modern">
//         <p>© 2025 Skilastra • An Initiative by Exsora</p>
//         <a href="#/" className="lp-footer-link-modern">← Back to Home</a>
//       </div>
//     </div>
//   );
// };
const LandingPage = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = (ctaId) => {
    trackEvent('LP_CTA_Click', {
      ctaId,
      ctaLocation: ctaId === 'lp-cta-hero' ? 'Hero Section' : ctaId === 'lp-cta-bottom' ? 'Bottom Section' : 'Sticky Bar'
    });
    window.open(JOIN_WORKSHOP, '_blank');
  };

  const personas = [
      {
    icon: '🎓',
    title: 'College Students',
    desc: 'Confused about skills, career paths, and what actually matters in the industry'
  },
  {
    icon: '📱',
    title: 'YouTube Learners',
    desc: 'Watched many tutorials but still lack confidence and clarity'
  },
  {
    icon: '🧑‍💻',
    title: 'Online Course Buyers',
    desc: 'Completed courses but unsure how to apply skills in real life'
  },
  {
    icon: '🔄',
    title: 'Dropouts / Gap-Year Students',
    desc: 'Want a restart but fear wasting more time or money'
  }
  ];

  const benefits = [
     'Clear understanding of how Skilastra trains students practically',
  'Reality check of your current skill level',
  'Clarity on what skills industry actually needs',
  'Difference between online learning vs offline growth',
  'Step-by-step learning roadmap (no hype)',
  'Direct interaction with mentors & founders'
  ];

  const howItWorks = [
  {
    step: '1',
    title: 'Reality Check',
    desc: 'Understand where you truly stand in skills and mindset'
  },
  {
    step: '2',
    title: 'Skill Awareness',
    desc: 'Learn which skills matter and which don’t'
  },
  {
    step: '3',
    title: 'System Explanation',
    desc: 'See how Skilastra actually trains students offline'
  },
  {
    step: '4',
    title: 'Next-Step Clarity',
    desc: 'Know exactly what to do next — with or without joining'
  }
];

  const whySkilastra = [
  {
    icon: '🏢',
    title: 'Offline-First Learning',
    desc: 'Better focus, discipline, and confidence than online'
  },
  {
    icon: '🛠',
    title: 'Practical System',
    desc: 'Learning through real projects, not just theory'
  },
  {
    icon: '🧠',
    title: 'Mindset + Skill',
    desc: 'We build thinking ability, not just technical knowledge'
  },
  {
    icon: '🎯',
    title: 'Student-First Approach',
    desc: 'No forced sales. Only honest guidance'
  }
];

  const testimonials = [
    { 
      text: 'The clarity session changed everything. I finally understood what skills companies actually want.', 
      author: 'Rohit Sharma', 
      role: 'Engineering Student' 
    },
    { 
      text: 'I was confused between coding and marketing. The session helped me choose the right path.', 
      author: 'Priya Verma', 
      role: 'College Graduate' 
    },
    { 
      text: 'My son gained so much clarity in just one session. Now he knows exactly what to learn.', 
      author: 'Mrs. Anjali Mehta', 
      role: 'Parent' 
    },
    { 
      text: 'Best decision I made was attending this session. Got a clear roadmap for my career.', 
      author: 'Aditya Patel', 
      role: 'Job Seeker' 
    },
    { 
      text: 'The personal attention and honest guidance was refreshing. No false promises, just real advice.', 
      author: 'Neha Gupta', 
      role: 'Freelancer' 
    }
  ];

  return (
    <div className="lp-container-modern">
      {/* Gradient Background Blobs */}
      <div className="lp-gradient-blobs">
        <div 
          className="lp-blob lp-blob-1" 
          style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}
        ></div>
        <div 
          className="lp-blob lp-blob-2" 
          style={{ transform: `translate(${-mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)` }}
        ></div>
        <div 
          className="lp-blob lp-blob-3" 
          style={{ transform: `translate(${mousePosition.x * 0.04}px, ${-mousePosition.y * 0.04}px)` }}
        ></div>
      </div>

      {/* Sticky Bar */}
      <div className="lp-sticky-bar-premium" id="section-lp-sticky">
        <div className="lp-sticky-inner">
          <div className="lp-sticky-left">
            <span className="lp-sticky-pulse-dot"></span>
            <span className="lp-sticky-text">🔥 Free Offline Career Reality Session - Only 30 Seats!</span>
          </div>
          <button 
            id="lp-cta-sticky"
            data-cta="sticky"
            className="lp-sticky-btn-premium"
            onClick={() => handleCTAClick('lp-cta-sticky')}
          >
            Book Your Seat
            <span className="lp-btn-arrow">→</span>
          </button>
        </div>
      </div>
      {/* // 1. ADD LOGO - Insert RIGHT AFTER sticky bar div */}
    {window.innerWidth >= 1024 &&(  <div style={{ 
  position: 'fixed', 
  top: '1rem', 
  // bottom: '2rem',
  right: '39rem', 
    //  display: "block",
    //   margin: "0 auto",
  zIndex: 10000,
  animation: 'fadeIn 1s ease-out'
}}>
  <img 
    src={logo} 
    alt="Skilastra" 
    style={{ 
      height: '70px', 
      width: 'auto',
      marginBottom: '10px',
      paddingBottom: '10px',
      filter: 'drop-shadow(0 4px 12px rgba(168, 85, 247, 0.4))',
      transition: 'transform 0.3s ease'
    }}
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
  />
</div>
    )}

      {/* Hero Section */}
      <section className="lp-hero-premium" id="section-lp-hero" data-section="lp-hero">
        {/* Animated Particles */}
        <div className="lp-particles-premium">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="lp-particle-premium"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        {/* Grid Background */}
        <div className="lp-grid-premium"></div>

        <div className="lp-hero-content-premium">
          {/* Badge */}
          <div className="lp-badge-premium">
            <span className="lp-badge-shine"></span>
            <span>✨ Free Offline Introductory Reality Session</span>
          </div>
          
          {/* Title */}
          <h1 className="lp-hero-title-premium">
            Still Confused After
            <span className="lp-title-gradient-premium">
              Online Courses & YouTube?
              <span className="lp-title-glow-premium"></span>
            </span>
          </h1>
          
          <p className="lp-hero-subtitle-premium">
              This <strong>FREE offline clarity session</strong>. 
            helps students understand how
  real skills, real projects, and real careers are actually built — before joining any batch.</p>

          {/* Value Props */}
          <div className="lp-value-grid">
            <div className="lp-value-item">
              <span className="lp-value-icon">🎯</span>
              <span>Career + Skill Clarity</span>
            </div>
            <div className="lp-value-item">
              <span className="lp-value-icon">📊</span>
              <span>Reality of Learning</span>
            </div>
            <div className="lp-value-item">
              <span className="lp-value-icon">🗺️</span>
              <span>Practical Roadmap</span>
            </div>
            <div className="lp-value-item">
              <span className="lp-value-icon">👨‍🏫</span>
              <span>Offline Mentor Interaction</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="lp-countdown-premium">
            <div className="lp-countdown-label-premium">Session Starts In:</div>
            <div className="lp-countdown-boxes">
              {[
                { label: 'Days', value: countdown.days, color: '#a855f7' },
                { label: 'Hours', value: countdown.hours, color: '#3b82f6' },
                { label: 'Mins', value: countdown.minutes, color: '#ec4899' },
                { label: 'Secs', value: countdown.seconds, color: '#f59e0b' }
              ].map((item, i) => (
                <div key={i} className="lp-countdown-box-premium">
                  <div className="lp-countdown-glow-premium" style={{ background: item.color }}></div>
                  <div className="lp-countdown-num-premium" style={{ color: item.color }}>
                    {item.value}
                  </div>
                  <div className="lp-countdown-text-premium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button 
            id="lp-cta-hero"
            data-cta="hero"
            className="lp-cta-hero-premium"
            onClick={() => handleCTAClick('lp-cta-hero')}
          >
            <span className="lp-cta-bg-premium"></span>
            <span className="lp-cta-content-premium">
              <span className="lp-cta-icon-premium">🚀</span>
              Book Your FREE Introductory Session Now
              <span className="lp-cta-arrow-premium">→</span>
            </span>
          </button>

          {/* Trust Indicators */}
          <div className="lp-trust-premium">
            <div className="lp-trust-avatars">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="lp-trust-avatar">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="lp-trust-text">
              <span className="lp-trust-count">20+ students</span> already registered
            </div>
          </div>

          {/* No Payment Badge */}
          <div className="lp-free-badge">
            ✓ 100% Free • ✓ No Payment Required • ✓ Offline Only
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="lp-section-premium" id="section-lp-who-for" data-section="lp-who-for">
        <div className="lp-container-inner-premium">
          <div className="lp-section-header-premium">
            <span className="lp-section-tag-premium">Who Should Attend</span>
            <h2 className="lp-section-title-premium">Is This Session For You?</h2>
            <p className="lp-section-desc-premium">
              This clarity session is perfect if you're facing any of these challenges
            </p>
          </div>
          
          <div className="lp-persona-grid">
            {personas.map((persona, i) => (
              <div key={i} className="lp-persona-card">
                <div className="lp-persona-icon">{persona.icon}</div>
                <h3 className="lp-persona-title">{persona.title}</h3>
                <p className="lp-persona-desc">{persona.desc}</p>
                <div className="lp-persona-check">✓</div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Why This Session Section - Self Doubt to Confidence  */}
<section className="lp-section-premium" id="section-lp-why-session" data-section="lp-why-session">
  <div className="lp-container-inner-premium">
    <div className="lp-section-header-premium">
      <span className="lp-section-tag-premium">The Transformation</span>
      <h2 className="lp-section-title-premium">Why This Introductory SKilastra Session?</h2>
      <p className="lp-section-desc-premium">
        Watch how confusion turns into confidence in just one honest session
      </p>
    </div>
    
    <div className="lp-transformation-flow">
      <div className="lp-transform-card lp-transform-before">
        <div className="lp-transform-icon">😰</div>
        <h3>Before Session</h3>
        <ul >
          <li>Too many career options, no direction</li>
<li>Unsure what skill to start with</li>
<li>Low confidence despite learning</li>
<li>Fear of choosing wrong path</li>
<li>No real guidance or roadmap</li>

        </ul>
        <div className="lp-transform-label">Self-Doubt</div>
      </div>

      <div className="lp-transform-arrow">
        <div className="lp-arrow-line"></div>
        <div className="lp-arrow-head">→</div>
        <div className="lp-arrow-text">During Session</div>
      </div>

      <div className="lp-transform-card lp-transform-after">
        <div className="lp-transform-icon">🎯</div>
        <h3>After Session</h3>
        <ul>
         <li>Clear understanding of next steps</li>
<li>Realistic learning expectations</li>
<li>Confidence in skill direction</li>
<li>Clarity about Skilastra system</li>
<li>Personal action plan</li>

        </ul>
        <div className="lp-transform-label lp-transform-success">Self-Confidence</div>
      </div>
    </div>

    <div className="lp-transform-quote">
      <span className="lp-quote-icon">💡</span>
      <p>"One honest session can save years of confusion."</p>
    </div>
  </div>
</section>
   {/* What You'll Get */}
      <section className="lp-section-premium lp-section-dark-premium" id="section-lp-what-you-get" data-section="lp-what-you-get">
        <div className="lp-container-inner-premium">
          <div className="lp-section-header-premium">
            <span className="lp-section-tag-premium">Session Benefits</span>
            <h2 className="lp-section-title-premium">What You'll Get From This Session</h2>
            <p className="lp-section-desc-premium">
              Walk away with clarity, direction, and a concrete action plan
            </p>
          </div>
          
          <div className="lp-benefits-container">
            {benefits.map((benefit, i) => (
              <div key={i} className="lp-benefit-item">
                <span className="lp-benefit-check">✓</span>
                <span className="lp-benefit-text">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="lp-value-box">
            <div className="lp-value-icon-large">💎</div>
            <h3>Plus: Direct access to Skilastra founder and mentors</h3>
            <p>Ask anything about skills, careers, and the learning ecosystem</p>
          </div>
        </div>
      </section>
{/* Real Experience Section */}
<section className="lp-section-premium lp-section-dark-premium" id="section-lp-real-experience" data-section="lp-real-experience">
  <div className="lp-container-inner-premium">
    <div className="lp-section-header-premium">
      <span className="lp-section-tag-premium">Not Just Theory</span>
      <h2 className="lp-section-title-premium">Real Career & Skill Exposure</h2>
      <p className="lp-section-desc-premium">
       See how real career clarity and skill thinking actually works offline

      </p>
    </div>
    
    <div className="lp-experience-grid">
      <div className="lp-experience-card">
        <div className="lp-experience-icon">🧩</div>
        <h3>Real Problem Solving</h3>
        <p>Discuss actual career challenges and find solutions together with mentors</p>
      </div>

      <div className="lp-experience-card">
        <div className="lp-experience-icon">⚡</div>
        <h3>Mini Challenges</h3>
        <p>Quick skill assessments to identify your strengths and improvement areas</p>
      </div>

      <div className="lp-experience-card">
        <div className="lp-experience-icon">🧠</div>
        <h3>Debug-Style Thinking</h3>
        <p>Learn how to break down complex career decisions into manageable steps</p>
      </div>

      <div className="lp-experience-card">
        <div className="lp-experience-icon">👥</div>
        <h3>Peer Discussions</h3>
        <p>Connect with like-minded individuals facing similar career questions</p>
      </div>

      <div className="lp-experience-card">
        <div className="lp-experience-icon">🎓</div>
        <h3>Mentor-Led Guidance</h3>
        <p>Direct interaction with industry professionals who've been where you are</p>
      </div>

      <div className="lp-experience-card">
        <div className="lp-experience-icon">🏢</div>
        <h3>Practical Exposure</h3>
        <p>Offline, hands-on approach - not another online webinar or recorded session</p>
      </div>
    </div>

    <div className="lp-experience-highlight">
      <div className="lp-highlight-badge">🎯 Career Clarity + Real Exposure</div>
      <p>This session shows how learning turns into confidence and execution</p>
    </div>
  </div>
</section>
      {/* How It Works */}
      <section className="lp-section-premium" id="section-lp-how-it-works" data-section="lp-how-it-works">
        <div className="lp-container-inner-premium">
          <div className="lp-section-header-premium">
            <span className="lp-section-tag-premium">The Process</span>
            <h2 className="lp-section-title-premium">How The Session Works</h2>
            <p className="lp-section-desc-premium">
              A structured, personalized approach to discovering your path
            </p>
          </div>
          
          <div className="lp-process-grid">
            {howItWorks.map((step, i) => (
              <div key={i} className="lp-process-card">
                <div className="lp-process-number">{step.step}</div>
                <h3 className="lp-process-title">{step.title}</h3>
                <p className="lp-process-desc">{step.desc}</p>
                {i < howItWorks.length - 1 && <div className="lp-process-arrow">→</div>}
              </div>
            ))}
          </div>

          <div className="lp-highlight-box">
            <span className="lp-highlight-icon">📍</span>
            <strong>100% Offline Session</strong> - Real conversations, real clarity, real results
          </div>
        </div>
      </section>

      {/* Why Skilastra */}
      <section className="lp-section-premium lp-section-dark-premium" id="section-lp-why-skilastra" data-section="lp-why-skilastra">
        <div className="lp-container-inner-premium">
          <div className="lp-section-header-premium">
            <span className="lp-section-tag-premium">Why Choose Us</span>
            <h2 className="lp-section-title-premium">Why Skilastra?</h2>
            <p className="lp-section-desc-premium">
              What makes our approach different and more effective
            </p>
          </div>
          
          <div className="lp-why-grid">
            {whySkilastra.map((item, i) => (
              <div key={i} className="lp-why-card">
                <div className="lp-why-icon">{item.icon}</div>
                <h3 className="lp-why-title">{item.title}</h3>
                <p className="lp-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* <div className="lp-stats-row">
            <div className="lp-stat-box">
              <div className="lp-stat-number">420+</div>
              <div className="lp-stat-label">Students Transformed</div>
            </div>
            <div className="lp-stat-box">
              <div className="lp-stat-number">50+</div>
              <div className="lp-stat-label">Real Projects</div>
            </div>
            <div className="lp-stat-box">
              <div className="lp-stat-number">30+</div>
              <div className="lp-stat-label">Partner Network</div>
            </div>
          </div> */}
        </div>
      </section>
      {/* Students Transformed - Animated Counters  */}

      <section className="lp-section-premium" id="section-lp-impact" data-section="lp-impact">
  <div className="lp-container-inner-premium">
    <div className="lp-section-header-premium">
      <span className="lp-section-tag-premium">Our Impact</span>
      <h2 className="lp-section-title-premium">Students Transformed</h2>
      <p className="lp-section-desc-premium">
        Real numbers, real transformations
      </p>
    </div>
    
    <div className="lp-impact-grid">
      <div className="lp-impact-card">
        <div className="lp-impact-number">
          <span className="lp-counter" data-target="99">90</span>+
        </div>
        <div className="lp-impact-label">Students Guided</div>
        <p className="lp-impact-desc">Career clarity sessions conducted</p>
      </div>

      <div className="lp-impact-card">
        <div className="lp-impact-number">
          <span className="lp-counter" data-target="90">80</span>+
        </div>
        <div className="lp-impact-label">Career Paths Clarified</div>
        <p className="lp-impact-desc">Personalized roadmaps created</p>
      </div>

      <div className="lp-impact-card">
        <div className="lp-impact-number">
          <span className="lp-counter" data-target="45">35</span>+
        </div>
        <div className="lp-impact-label">Real Projects Discussed</div>
        <p className="lp-impact-desc">Hands-on learning experiences</p>
      </div>

      <div className="lp-impact-card">
        <div className="lp-impact-number">
          <span className="lp-counter" data-target="20">15</span>+
        </div>
        <div className="lp-impact-label">Partner Network</div>
        <p className="lp-impact-desc">Industry mentors & collaborators</p>
      </div>
    </div>
  </div>
</section>
      {/* What Makes Us Different  */}
      <section className="lp-section-premium" id="section-lp-different" data-section="lp-different">
  <div className="lp-container-inner-premium">
    <div className="lp-section-header-premium">
      <span className="lp-section-tag-premium">The Skilastra Difference</span>
      <h2 className="lp-section-title-premium">What Makes Skilastra Different?</h2>
      <p className="lp-section-desc-premium">
        Not just another career counseling - a completely different approach
      </p>
    </div>
    
    <div className="lp-comparison-container">
      <div className="lp-comparison-side lp-comparison-others">
        <h3>❌ Others</h3>
        <div className="lp-comparison-items">
          <div className="lp-comparison-item">
            <span className="lp-comparison-icon">📱</span>
            <p>Generic online webinars</p>
          </div>
          <div className="lp-comparison-item">
            <span className="lp-comparison-icon">💰</span>
            <p>Push expensive courses immediately</p>
          </div>
          <div className="lp-comparison-item">
            <span className="lp-comparison-icon">🤖</span>
            <p>One-size-fits-all advice</p>
          </div>
          <div className="lp-comparison-item">
            <span className="lp-comparison-icon">❓</span>
            <p>No follow-up or real guidance</p>
          </div>
          <div className="lp-comparison-item">
            <span className="lp-comparison-icon">🎭</span>
            <p>Sales-focused, not student-focused</p>
          </div>
        </div>
      </div>

      <div className="lp-comparison-divider">
        <div className="lp-divider-line"></div>
        <div className="lp-divider-text">VS</div>
      </div>

      <div className="lp-comparison-side lp-comparison-skilastra">
        <h3>✅ Skilastra</h3>
        <div className="lp-comparison-items">
          <div className="lp-comparison-item">
            <span className="lp-comparison-icon">🏢</span>
            <p>100% offline clarity sessions</p>
          </div>
          <div className="lp-comparison-item">
            <span className="lp-comparison-icon">🤝</span>
            <p>Honest guidance with no obligations</p>
          </div>
          <div className="lp-comparison-item">
            <span className="lp-comparison-icon">🎯</span>
            <p>Personalized career roadmap</p>
          </div>
          <div className="lp-comparison-item">
            <span className="lp-comparison-icon">👨‍🏫</span>
            <p>Real mentor interaction & support</p>
          </div>
          <div className="lp-comparison-item">
            <span className="lp-comparison-icon">💎</span>
            <p>Student success, not sales targets</p>
          </div>
        </div>
      </div>
    </div>

    <div className="lp-different-cta">
      <p><strong>Experience the difference yourself.</strong> No pressure. No sales pitch. Just honest career guidance.</p>
    </div>
  </div>
</section>



      {/* Testimonials */}
      <section className="lp-section-premium" id="section-lp-testimonials" data-section="lp-testimonials">
        <div className="lp-container-inner-premium">
          <div className="lp-section-header-premium">
            <span className="lp-section-tag-premium">Success Stories</span>
            <h2 className="lp-section-title-premium">What Others Are Saying</h2>
            <p className="lp-section-desc-premium">
              Real feedback from students and parents who attended
            </p>
          </div>
          
          <div className="lp-testimonial-carousel-premium">
            {testimonials.map((test, i) => (
              <div 
                key={i} 
                className={`lp-testimonial-premium ${i === activeTestimonial ? 'active' : ''}`}
              >
                <div className="lp-testimonial-quote-premium">"</div>
                <p className="lp-testimonial-text-premium">{test.text}</p>
                <div className="lp-testimonial-author-premium">
                  <div className="lp-testimonial-avatar-premium">
                    {test.author.charAt(0)}
                  </div>
                  <div className="lp-testimonial-info-premium">
                    <div className="lp-testimonial-name-premium">{test.author}</div>
                    <div className="lp-testimonial-role-premium">{test.role}</div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="lp-carousel-dots-premium">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`lp-carousel-dot-premium ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-section-premium lp-cta-final-premium" id="section-lp-cta-bottom" data-section="lp-cta">
        <div className="lp-cta-rays-premium"></div>
        <div className="lp-container-inner-premium">
          <div className="lp-cta-final-box">
            <div className="lp-cta-final-badge">
              <span className="lp-cta-badge-pulse-premium"></span>
              LIMITED SEATS
            </div>

            <h2 className="lp-cta-final-title">
             Attend This Session Before You Decide Anything
              <span className="lp-cta-final-highlight">January 11, 2026</span>
            </h2>
            
            <p className="lp-cta-final-subtitle">
            This FREE offline session exists to help you decide clearly —
not to sell blindly.

            </p>

            <div className="lp-urgency-banner-final">
              <span className="lp-urgency-icon-final">🔥</span>
              <span>Only 50 Seats Available • 30+ Already Booked</span>
            </div>

            <button 
              id="lp-cta-bottom"
              data-cta="bottom"
              className="lp-cta-final-btn"
              onClick={() => handleCTAClick('lp-cta-bottom')}
            >
              <span className="lp-cta-final-bg"></span>
              <span className="lp-cta-final-text">
                <span className="lp-cta-final-icon">🎯</span>
                Reserve My FREE Offline Seat Now

                <span className="lp-cta-final-arrow">→</span>
              </span>
            </button>

            <div className="lp-guarantee-final">
              <div className="lp-guarantee-item-final">✓ Completely Free</div>
              <div className="lp-guarantee-divider-final">•</div>
              <div className="lp-guarantee-item-final">✓ No Obligations</div>
              <div className="lp-guarantee-divider-final">•</div>
              <div className="lp-guarantee-item-final">✓ Offline Only</div>
            </div>

            <div className="lp-footer-note">
  <div className="lp-footer-note-inner">
    <div className="lp-footer-question">
      <span className="lp-footer-icon">💬</span>
      <span>Have Questions?</span>
    </div>
    <a 
      href="https://wa.me/918305144924" 
      target="_blank" 
      rel="noopener noreferrer"
      className="lp-footer-whatsapp-btn"
      id="lp-footer-whatsapp"
      data-button="footer-whatsapp"
      onClick={() => trackButtonClick('lp-footer-whatsapp', 'WhatsApp - Footer', 'https://wa.me/918305144924')}
    >
      <span className="lp-footer-whatsapp-icon">📱</span>
      <span className="lp-footer-whatsapp-text">Still Confused ? Get Connected With Us</span>
      <span className="lp-footer-whatsapp-arrow">→</span>
    </a>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="lp-footer-premium">
        <div className="lp-footer-content-premium">
          <p>© 2025 Skilastra • Powered by Exsora</p>
         <a href="/" className="lp-footer-link-premium">← Back to Main Site</a>
        </div>
      </div>
    </div>
  );
};

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
  const [showLP, setShowLP] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/');
  const fullText = "INDIA'S FIRST TECH REVOLUTION";

  // GTM & Meta Pixel Initialization
  useEffect(() => {
    // GTM Script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.appendChild(gtmScript);

    // GTM noscript
    const gtmNoscript = document.createElement('noscript');
    gtmNoscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(gtmNoscript, document.body.firstChild);

    // Meta Pixel
    const metaScript = document.createElement('script');
    metaScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${META_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(metaScript);

    // Initial PageView
    trackEvent('PageView', { page: window.location.pathname });
  }, []);

  // Route Change Tracking
  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     const route = window.location.hash.replace('#', '/') || '/';
  //     if (route !== currentRoute) {
  //       setCurrentRoute(route);
  //       trackEvent('PageView', { 
  //         page: route,
  //         title: route === '/lp' ? 'Landing Page' : 'Home'
  //       });
  //     }
  //   };

  //   window.addEventListener('hashchange', handleRouteChange);
  //   handleRouteChange();

  //   return () => window.removeEventListener('hashchange', handleRouteChange);
  // }, [currentRoute]);
useEffect(() => {
  const handleRouteChange = () => {
    const route = window.location.pathname;
    if (route !== currentRoute) {
      setCurrentRoute(route);
      trackEvent('PageView', { 
        page: route,
        title: route === '/lp' ? 'Landing Page' : 'Home'
      });
    }
  };

  window.addEventListener('popstate', handleRouteChange);
  handleRouteChange();

  return () => window.removeEventListener('popstate', handleRouteChange);
}, [currentRoute]);
  // LP Routing
  // useEffect(() => {
  //   const checkRoute = () => {
  //     const hash = window.location.hash;
  //     setShowLP(hash === '#/lp');
  //   };
    
  //   checkRoute();
  //   window.addEventListener('hashchange', checkRoute);
  //   return () => window.removeEventListener('hashchange', checkRoute);
  // }, []);
useEffect(() => {
  const checkRoute = () => {
    const path = window.location.pathname;
    setShowLP(path === '/lp');
  };
  
  checkRoute();
  window.addEventListener('popstate', checkRoute);
  return () => window.removeEventListener('popstate', checkRoute);
}, []);
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
  const counters = document.querySelectorAll('.lp-counter');
  const speed = 200; // Animation speed
  
  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = target / speed;
    let count = 0;
    
    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    
    updateCount();
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        animateCounter(counter);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
  
  return () => observer.disconnect();
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
          
          // Track section visibility
          const sectionId = entry.target.id || entry.target.dataset.section;
          if (sectionId) {
            trackEvent('SectionView', { 
              section: sectionId,
              sectionName: entry.target.querySelector('.section-title')?.textContent || sectionId
            });
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, section[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  const trackButtonClick = (buttonId, buttonName, destination = '') => {
    trackEvent('ButtonClick', {
      buttonId,
      buttonName,
      destination,
      page: currentRoute
    });
  };

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
          <img src={logo} alt="logo" />
        </div>
        
        <div className="loader-text">SKILASTRA</div>
        <div className="loader-bar"></div>
      </div>
    );
  }

  // Show LP or Main Content
  if (showLP) {
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
          cursor: pointer;
        }

        .app {
          min-height: 100vh;
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }
        /* ========================================
   NEW SECTIONS CSS - ADD TO YOUR STYLES
   ======================================== */
.lp-footer-note {
  margin-top: 2.5rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  box-sizing: border-box;
}

.lp-footer-note-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.5rem 3rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.lp-footer-note-inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(59, 130, 246, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.lp-footer-note-inner:hover::before {
  opacity: 1;
}

.lp-footer-note-inner:hover {
  border-color: rgba(168, 85, 247, 0.3);
  box-shadow: 0 12px 40px rgba(168, 85, 247, 0.2);
}

/* Question Label */
.lp-footer-question {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  flex-wrap: wrap;
}

.lp-footer-icon {
  font-size: 1.5rem;
  animation: iconFloat 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* WhatsApp Button */
.lp-footer-whatsapp-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.25rem 3rem;
  background: transparent;
  border: none;
  border-radius: 60px;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
}

.lp-footer-whatsapp-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #25d366, #128c7e);
  border-radius: 60px;
  transition: all 0.3s ease;
  z-index: -1;
}

.lp-footer-whatsapp-btn:hover {
  transform: translateY(-4px) scale(1.03);
}

.lp-footer-whatsapp-btn:hover::before {
  box-shadow: 0 15px 50px rgba(37, 211, 102, 0.5);
}

.lp-footer-whatsapp-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  z-index: 0;
}

.lp-footer-whatsapp-btn:hover::after {
  transform: translateX(100%);
}

.lp-footer-whatsapp-icon {
  font-size: 1.5rem;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

.lp-footer-whatsapp-text {
  position: relative;
  z-index: 1;
  white-space: nowrap;
}

.lp-footer-whatsapp-arrow {
  font-size: 1.3rem;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

.lp-footer-whatsapp-btn:hover .lp-footer-whatsapp-arrow {
  transform: translateX(6px);
}

/* ========================================
   RESPONSIVE BREAKPOINTS
   ======================================== */

/* Tablet and Below (1024px) */
@media (max-width: 1024px) {
  .lp-footer-note-inner {
    padding: 2rem 2rem;
  }
  
  .lp-footer-question {
    font-size: 1.15rem;
  }
  
  .lp-footer-whatsapp-btn {
    padding: 1.15rem 2.5rem;
    font-size: 1.05rem;
  }
}

/* Tablet Portrait (768px) */
@media (max-width: 768px) {
  .lp-footer-note {
    margin-top: 2rem;
    padding-top: 2rem;
  }
  
  .lp-footer-note-inner {
    padding: 2rem 1.5rem;
    gap: 1.25rem;
  }
  
  .lp-footer-question {
    font-size: 1.1rem;
    gap: 0.5rem;
  }
  
  .lp-footer-icon {
    font-size: 1.4rem;
  }
  
  .lp-footer-whatsapp-btn {
    padding: 1rem 2rem;
    font-size: 1rem;
    width: 100%;
    max-width: 100%;
  }
  
  .lp-footer-whatsapp-icon {
    font-size: 1.4rem;
  }
  
  .lp-footer-whatsapp-arrow {
    font-size: 1.2rem;
  }
}

/* Mobile Landscape (640px) */
@media (max-width: 640px) {
  .lp-footer-note-inner {
    padding: 1.75rem 1.25rem;
    gap: 1rem;
  }
  
  .lp-footer-question {
    font-size: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .lp-footer-whatsapp-btn {
    padding: 0.875rem 1.75rem;
    font-size: 0.95rem;
    gap: 0.75rem;
  }
  
  .lp-footer-whatsapp-text {
    white-space: normal;
    word-break: break-word;
    text-align: center;
  }
}

/* Small Mobile (480px) */
@media (max-width: 480px) {
  .lp-footer-note {
    margin-top: 1.75rem;
    padding-top: 1.75rem;
  }
  
  .lp-footer-note-inner {
    padding: 1.5rem 1rem;
    border-radius: 20px;
  }
  
  .lp-footer-question {
    font-size: 0.95rem;
  }
  
  .lp-footer-icon {
    font-size: 1.3rem;
  }
  
  .lp-footer-whatsapp-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    gap: 0.5rem;
    border-radius: 50px;
  }
  
  .lp-footer-whatsapp-icon {
    font-size: 1.25rem;
  }
  
  .lp-footer-whatsapp-text {
    font-size: 0.9rem;
  }
  
  .lp-footer-whatsapp-arrow {
    font-size: 1rem;
  }
}

/* Extra Small Mobile (375px - iPhone SE) */
@media (max-width: 375px) {
  .lp-footer-note-inner {
    padding: 1.25rem 0.875rem;
  }
  
  .lp-footer-question {
    font-size: 0.9rem;
  }
  
  .lp-footer-whatsapp-btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.85rem;
  }
  
  .lp-footer-whatsapp-text {
    font-size: 0.85rem;
  }
}

/* ========================================
   FIX OVERFLOW ISSUES
   ======================================== */

/* Ensure no horizontal overflow */
.lp-footer-note,
.lp-footer-note * {
  box-sizing: border-box;
}

.lp-footer-note-inner {
  overflow: hidden;
}

.lp-footer-whatsapp-text {
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

/* ========================================
   TOUCH IMPROVEMENTS FOR MOBILE
   ======================================== */

@media (max-width: 768px) {
  .lp-footer-whatsapp-btn {
    min-height: 48px; /* Minimum touch target */
    touch-action: manipulation; /* Improve touch response */
  }
  
  /* Remove hover effects on touch devices */
  @media (hover: none) {
    .lp-footer-whatsapp-btn:hover {
      transform: none;
    }
    
    .lp-footer-note-inner:hover {
      box-shadow: none;
      border-color: rgba(255, 255, 255, 0.1);
    }
    
    .lp-footer-note-inner:hover::before {
      opacity: 0;
    }
  }
}

/* Active state for mobile tap */
.lp-footer-whatsapp-btn:active {
  transform: scale(0.98);
}

/* ========================================
   ACCESSIBILITY
   ======================================== */

/* Focus state for keyboard navigation */
.lp-footer-whatsapp-btn:focus {
  outline: 3px solid rgba(37, 211, 102, 0.5);
  outline-offset: 4px;
}

.lp-footer-whatsapp-btn:focus:not(:focus-visible) {
  outline: none;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .lp-footer-note-inner {
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
  
  .lp-footer-whatsapp-btn::before {
    background: #25d366;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .lp-footer-icon,
  .lp-footer-whatsapp-btn,
  .lp-footer-note-inner,
  .lp-footer-whatsapp-arrow {
    animation: none;
    transition: none;
  }
}
/* Logo at Top Right */
.lp-logo-container {
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 10000;
  animation: fadeInLogo 1s ease-out;
}

@keyframes fadeInLogo {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.lp-logo-top {
  height: 50px;
  width: auto;
  filter: drop-shadow(0 4px 12px rgba(168, 85, 247, 0.4));
  transition: transform 0.3s ease;
}

.lp-logo-top:hover {
  transform: scale(1.1);
}

/* Transformation Flow Section */
.lp-transformation-flow {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 3rem;
  align-items: center;
  margin: 4rem 0;
}

.lp-transform-card {
  padding: 3rem 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  transition: all 0.4s ease;
}

.lp-transform-before {
  border-color: rgba(239, 68, 68, 0.3);
}

.lp-transform-after {
  border-color: rgba(34, 197, 94, 0.3);
}

.lp-transform-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
}

.lp-transform-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.lp-transform-card h3 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--text-primary);
}

.lp-transform-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lp-transform-card li {
  padding: 0.75rem 0;
  padding-left: 2rem;
  position: relative;
  color: var(--text-secondary);
  line-height: 1.6;
}

.lp-transform-card li::before {
  content: '•';
  position: absolute;
  left: 0.5rem;
  top: 5px;
  color: var(--accent-purple);
  font-size: 1.5rem;
}

.lp-transform-label {
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: rgba(239, 68, 68, 0.2);
  border: 2px solid rgba(239, 68, 68, 0.5);
  border-radius: 50px;
  text-align: center;
  font-weight: 700;
  color: #ef4444;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.lp-transform-success {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.5);
  color: #22c55e;
}

.lp-transform-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.lp-arrow-line {
  width: 3px;
  height: 80px;
  background: linear-gradient(180deg, #ef4444, #22c55e);
  border-radius: 2px;
  animation: arrowFlow 2s ease-in-out infinite;
}

@keyframes arrowFlow {
  0%, 100% { opacity: 0.5; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.1); }
}

.lp-arrow-head {
  font-size: 3rem;
  color: #22c55e;
  animation: arrowPulse 1.5s ease-in-out infinite;
}

@keyframes arrowPulse {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(8px); }
}

.lp-arrow-text {
  padding: 0.75rem 1.5rem;
  background: rgba(168, 85, 247, 0.2);
  border: 1px solid rgba(168, 85, 247, 0.4);
  border-radius: 50px;
  font-weight: 700;
  color: var(--accent-purple);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.lp-transform-quote {
  margin-top: 4rem;
  padding: 2.5rem 3rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1));
  border-left: 4px solid var(--accent-purple);
  border-radius: 16px;
  text-align: center;
}

.lp-quote-icon {
  font-size: 2.5rem;
  margin-right: 1rem;
}

.lp-transform-quote p {
  font-size: 1.3rem;
  font-style: italic;
  color: var(--text-primary);
  line-height: 1.7;
  margin: 0;
}

/* Real Experience Grid */
.lp-experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.lp-experience-card {
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.lp-experience-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-purple), var(--accent-blue));
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.lp-experience-card:hover::before {
  transform: scaleX(1);
}

.lp-experience-card:hover {
  transform: translateY(-10px);
  border-color: rgba(168, 85, 247, 0.4);
  box-shadow: 0 15px 50px rgba(168, 85, 247, 0.3);
}

.lp-experience-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.lp-experience-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.lp-experience-card p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.lp-experience-highlight {
  text-align: center;
  padding: 3rem;
  background: rgba(168, 85, 247, 0.1);
  border: 2px solid rgba(168, 85, 247, 0.3);
  border-radius: 24px;
}

.lp-highlight-badge {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--accent-purple);
  color: white;
  font-weight: 700;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.lp-experience-highlight p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

/* Comparison Section */
.lp-comparison-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 3rem;
  align-items: start;
  margin-bottom: 3rem;
}

.lp-comparison-side {
  padding: 3rem 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  transition: all 0.3s ease;
}

.lp-comparison-others {
  border-color: rgba(239, 68, 68, 0.3);
}

.lp-comparison-skilastra {
  border-color: rgba(34, 197, 94, 0.3);
}

.lp-comparison-side:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(168, 85, 247, 0.3);
}

.lp-comparison-side h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
}

.lp-comparison-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.lp-comparison-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.lp-comparison-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.lp-comparison-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.lp-comparison-item p {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.05rem;
  line-height: 1.6;
}

.lp-comparison-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.lp-divider-line {
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, #ef4444, var(--accent-purple), #22c55e);
  border-radius: 2px;
}

.lp-divider-text {
  position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  background: var(--bg-primary);
  border: 2px solid var(--accent-purple);
  border-radius: 50%;
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--accent-purple);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lp-different-cta {
  text-align: center;
  padding: 2.5rem 3rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15));
  border: 2px solid rgba(168, 85, 247, 0.3);
  border-radius: 24px;
}

.lp-different-cta p {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.7;
}

/* Impact / Counter Section */
.lp-impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.lp-impact-card {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.lp-impact-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.lp-impact-card:hover::before {
  opacity: 1;
}

.lp-impact-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 20px 60px rgba(168, 85, 247, 0.4);
}

.lp-impact-number {
  position: relative;
  z-index: 1;
  font-size: 5rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
}

.lp-counter {
  display: inline-block;
}

.lp-impact-label {
  position: relative;
  z-index: 1;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.lp-impact-desc {
  position: relative;
  z-index: 1;
  color: var(--text-secondary);
  font-size: 1rem;
  margin: 0;
}


{/* .lp-testimonial-carousel-premium {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  min-height: 350px;
}

.lp-testimonial-premium {
  position: absolute;
  inset: 0;
  padding: 3rem 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  opacity: 0;
  transform: translateX(100px) scale(0.9);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  pointer-events: none;
  display: flex;
  flex-direction: column;
}

.lp-testimonial-premium.active {
  opacity: 1;
  transform: translateX(0) scale(1);
  pointer-events: auto;
}

.lp-testimonial-quote-premium {
  font-size: 6rem;
  line-height: 1;
  color: var(--accent-purple);
  opacity: 0.15;
  margin-bottom: 1rem;
  align-self: flex-start;
}

.lp-testimonial-text-premium {
  font-size: 1.4rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: 2rem;
  font-style: italic;
  flex: 1;
}

.lp-testimonial-author-premium {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.lp-testimonial-avatar-premium {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.lp-testimonial-info-premium {
  text-align: left;
}

.lp-testimonial-name-premium {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.lp-testimonial-role-premium {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
} */}

/* Responsive Styles */
@media (max-width: 1024px) {
  .lp-transformation-flow {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .lp-transform-arrow {
    flex-direction: row;
    justify-content: center;
  }
  
  .lp-arrow-line {
    width: 80px;
    height: 3px;
  }
  
  .lp-arrow-head {
    transform: rotate(90deg);
  }
  
  .lp-comparison-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .lp-comparison-divider {
    flex-direction: row;
    height: auto;
  }
  
  .lp-divider-line {
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #ef4444, var(--accent-purple), #22c55e);
  }
  
  .lp-experience-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .lp-logo-container {
    top: 0.75rem;
    right: 1rem;
  }
  
  .lp-logo-top {
    height: 40px;
  }
  
  .lp-transform-card {
    padding: 2rem 1.5rem;
  }
  
  .lp-transform-icon {
    font-size: 3rem;
  }
  
  .lp-transform-quote {
    padding: 2rem 1.5rem;
  }
  
  .lp-transform-quote p {
    font-size: 1.1rem;
  }
  
  .lp-experience-card {
    padding: 2rem 1.5rem;
  }
  
  .lp-comparison-side {
    padding: 2rem 1.5rem;
  }
  
  .lp-impact-number {
    font-size: 4rem;
  }
  
  /* FIXED TESTIMONIAL RESPONSIVE */
  {/* .lp-testimonial-carousel-premium {
    min-height: 400px;
  }
  
  .lp-testimonial-premium {
    padding: 2rem 1.5rem;
  }
  
  .lp-testimonial-quote-premium {
    font-size: 4rem;
  }
  
  .lp-testimonial-text-premium {
    font-size: 1.2rem;
  }
  
  .lp-testimonial-author-premium {
    flex-direction: column;
    text-align: center;
  }
  
  .lp-testimonial-info-premium {
    text-align: center;
  } */}
}

@media (max-width: 640px) {
  .lp-experience-grid {
    grid-template-columns: 1fr;
  }
  
  .lp-impact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .lp-impact-card {
    padding: 2rem 1rem;
  }
  
  .lp-impact-number {
    font-size: 3rem;
  }
  
  .lp-impact-label {
    font-size: 1.1rem;
  }
  
  .lp-testimonial-carousel-premium {
    min-height: 450px;
  }
  
  .lp-testimonial-text-premium {
    font-size: 1.1rem;
  }
}
/* ========================================
   SKILASTRA LP - PREMIUM STYLES
   Add these to your existing <style> tag
   ======================================== */

/* Container */
.lp-container-modern {
  min-height: 100vh;
  background: var(--bg-primary);
  position: relative;
  overflow-x: hidden;
}

/* Gradient Blobs */
.lp-gradient-blobs {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.lp-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
  animation: blobFloat 25s ease-in-out infinite;
}

.lp-blob-1 {
  width: 700px;
  height: 700px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  top: -250px;
  left: -250px;
}

.lp-blob-2 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  bottom: -200px;
  right: -200px;
  animation-delay: -10s;
}

.lp-blob-3 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  top: 50%;
  right: 15%;
  animation-delay: -15s;
}

@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(60px, -60px) scale(1.15); }
  66% { transform: translate(-60px, 60px) scale(0.9); }
}

/* Sticky Bar Premium */
.lp-sticky-bar-premium {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(168, 85, 247, 0.3);
  padding: 1rem 2rem;
  z-index: 9999;
  animation: slideDownPremium 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes slideDownPremium {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

.lp-sticky-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.lp-sticky-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.lp-sticky-pulse-dot {
  width: 12px;
  height: 12px;
  background: #ef4444;
  border-radius: 50%;
  position: relative;
  animation: pulseDot 2s ease-in-out infinite;
}

.lp-sticky-pulse-dot::before {
  content: '';
  position: absolute;
  inset: -6px;
  background: #ef4444;
  border-radius: 50%;
  opacity: 0.3;
  animation: pulseDot 2s ease-in-out infinite;
}

@keyframes pulseDot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.6; }
}

.lp-sticky-text {
  color: white;
  font-weight: 700;
  font-size: 1rem;
}

.lp-sticky-btn-premium {
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.lp-sticky-btn-premium:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(168, 85, 247, 0.5);
}

.lp-btn-arrow {
  transition: transform 0.3s ease;
}

.lp-sticky-btn-premium:hover .lp-btn-arrow {
  transform: translateX(5px);
}

/* Hero Premium */
.lp-hero-premium {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 10rem 2rem 6rem;
}

/* Particles Premium */
.lp-particles-premium {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.lp-particle-premium {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(135deg, #a855f7, #3b82f6);
  border-radius: 50%;
  animation: particleFloat 25s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
}

@keyframes particleFloat {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.8; }
  100% { transform: translate(calc(Math.random() * 200px), -100vh) scale(0.5); opacity: 0; }
}

/* Grid Premium */
.lp-grid-premium {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridSlide 30s linear infinite;
}

@keyframes gridSlide {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

/* Hero Content Premium */
.lp-hero-content-premium {
  max-width: 1100px;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Badge Premium */
.lp-badge-premium {
  display: inline-block;
  position: relative;
  padding: 0.75rem 2rem;
  background: rgba(168, 85, 247, 0.15);
  border: 2px solid rgba(168, 85, 247, 0.4);
  border-radius: 50px;
  margin-bottom: 2rem;
  overflow: hidden;
  color: #fff;
  font-weight: 700;
}

.lp-badge-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: badgeShine 3s ease-in-out infinite;
}

@keyframes badgeShine {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

/* Hero Title Premium */
.lp-hero-title-premium {
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.lp-title-gradient-premium {
  display: block;
  position: relative;
  margin-top: 1rem;
  background: linear-gradient(135deg, #a855f7, #ec4899, #3b82f6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleGradient 4s ease-in-out infinite;
}

@keyframes titleGradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.lp-title-glow-premium {
  position: absolute;
  inset: -30px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  filter: blur(50px);
  opacity: 0.3;
  z-index: -1;
  animation: titleGlow 3s ease-in-out infinite;
}

@keyframes titleGlow {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.1); }
}

.lp-hero-subtitle-premium {
  font-size: 1.4rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.7;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

/* Value Grid */
.lp-value-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.lp-value-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 50px;
  color: var(--text-primary);
  font-weight: 600;
  transition: all 0.3s ease;
}

.lp-value-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
}

.lp-value-icon {
  font-size: 1.5rem;
}

/* Countdown Premium */
.lp-countdown-premium {
  margin-bottom: 3rem;
}

.lp-countdown-label-premium {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.lp-countdown-boxes {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.lp-countdown-box-premium {
  position: relative;
  padding: 2rem 2.5rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  min-width: 130px;
  transition: all 0.3s ease;
}

.lp-countdown-box-premium:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(168, 85, 247, 0.4);
}

.lp-countdown-glow-premium {
  position: absolute;
  inset: -15px;
  border-radius: 20px;
  filter: blur(25px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.lp-countdown-box-premium:hover .lp-countdown-glow-premium {
  opacity: 0.6;
}

.lp-countdown-num-premium {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px currentColor;
}

.lp-countdown-text-premium {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-secondary);
}

/* CTA Hero Premium */
.lp-cta-hero-premium {
  position: relative;
  padding: 1.75rem 4rem;
  background: transparent;
  border: none;
  border-radius: 60px;
  color: white;
  font-size: 1.4rem;
  font-weight: 800;
  cursor: pointer;
  margin-bottom: 3rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.lp-cta-hero-premium:hover {
  transform: translateY(-5px) scale(1.03);
}

.lp-cta-bg-premium {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  border-radius: 60px;
  transition: all 0.3s ease;
}

.lp-cta-hero-premium:hover .lp-cta-bg-premium {
  box-shadow: 0 25px 70px rgba(168, 85, 247, 0.7);
}

.lp-cta-content-premium {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.lp-cta-icon-premium {
  font-size: 1.75rem;
  animation: bounceIcon 2s ease-in-out infinite;
}

@keyframes bounceIcon {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.lp-cta-arrow-premium {
  transition: transform 0.3s ease;
}

.lp-cta-hero-premium:hover .lp-cta-arrow-premium {
  transform: translateX(10px);
}

/* Trust Premium */
.lp-trust-premium {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.lp-trust-avatars {
  display: flex;
}

.lp-trust-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a855f7, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--bg-primary);
  margin-left: -15px;
  font-weight: 700;
  color: white;
  transition: all 0.3s ease;
}

.lp-trust-avatar:first-child {
  margin-left: 0;
}

.lp-trust-avatar:hover {
  transform: translateY(-8px) scale(1.15);
  z-index: 10;
}

.lp-trust-text {
  color: var(--text-secondary);
  font-size: 1rem;
}

.lp-trust-count {
  font-weight: 700;
  color: var(--accent-purple);
}

/* Free Badge */
.lp-free-badge {
  padding: 1rem 2rem;
  background: rgba(34, 197, 94, 0.1);
  border: 2px solid rgba(34, 197, 94, 0.4);
  border-radius: 50px;
  color: #22c55e;
  font-weight: 600;
  display: inline-block;
}

/* Section Premium */
.lp-section-premium {
  padding: 8rem 2rem;
  position: relative;
}

.lp-section-dark-premium {
  background: rgba(0, 0, 0, 0.3);
}

.lp-container-inner-premium {
  max-width: 1200px;
  margin: 0 auto;
}

.lp-section-header-premium {
  text-align: center;
  margin-bottom: 5rem;
}

.lp-section-tag-premium {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 50px;
  color: var(--accent-purple);
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
}

.lp-section-title-premium {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lp-section-desc-premium {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

/* Persona Grid */
.lp-persona-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.lp-persona-card {
  position: relative;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  text-align: center;
  transition: all 0.4s ease;
  overflow: hidden;
}

.lp-persona-card:hover {
  transform: translateY(-10px);
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 15px 50px rgba(168, 85, 247, 0.3);
}

.lp-persona-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.lp-persona-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.lp-persona-desc {
  color: var(--text-secondary);
  line-height: 1.7;
}

.lp-persona-check {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 35px;
  height: 35px;
  background: var(--accent-purple);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
}

.lp-persona-card:hover .lp-persona-check {
  opacity: 1;
  transform: scale(1);
}

/* Benefits Container */
.lp-benefits-container {
  max-width: 900px;
  margin: 0 auto 4rem;
  display: grid;
  gap: 1.5rem;
}

.lp-benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.lp-benefit-item:hover {
  transform: translateX(10px);
  border-color: rgba(168, 85, 247, 0.4);
  box-shadow: 0 8px 30px rgba(168, 85, 247, 0.2);
}

.lp-benefit-check {
  font-size: 1.5rem;
  color: var(--accent-purple);
  flex-shrink: 0;
}

.lp-benefit-text {
  color: var(--text-primary);
  font-size: 1.1rem;
  line-height: 1.7;
}

/* Value Box */
.lp-value-box {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1));
  border: 2px solid rgba(168, 85, 247, 0.3);
  border-radius: 24px;
}

.lp-value-icon-large {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.lp-value-box h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--accent-purple);
}

.lp-value-box p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

/* Process Grid */
.lp-process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  position: relative;
}

.lp-process-card {
  position: relative;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.lp-process-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(168, 85, 247, 0.3);
}

.lp-process-number {
  width: 70px;
  height: 70px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);
}

.lp-process-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.lp-process-desc {
  color: var(--text-secondary);
  line-height: 1.7;
}

.lp-process-arrow {
  position: absolute;
  top: 50%;
  right: -1rem;
  font-size: 2rem;
  color: var(--accent-purple);
  display: none;
}

@media (min-width: 1024px) {
  .lp-process-arrow {
    display: block;
  }
  .lp-process-card:last-child .lp-process-arrow {
    display: none;
  }
}

/* Highlight Box */
.lp-highlight-box {
  margin-top: 4rem;
  padding: 2rem 3rem;
  background: rgba(168, 85, 247, 0.15);
  border: 2px solid rgba(168, 85, 247, 0.4);
  border-radius: 24px;
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.lp-highlight-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

/* Why Grid */
.lp-why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.lp-why-card {
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.lp-why-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 50px rgba(168, 85, 247, 0.3);
}

.lp-why-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.lp-why-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--accent-purple);
}

.lp-why-desc {
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Stats Row */
.lp-stats-row {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.lp-stat-box {
  text-align: center;
  padding: 2rem;
  min-width: 180px;
}

.lp-stat-number {
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lp-stat-label {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-top: 0.5rem;
}

/* Testimonial Carousel Premium */
.lp-testimonial-carousel-premium {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  min-height: 350px;
}

.lp-testimonial-premium {
  position: absolute;
  inset: 0;
  padding: 4rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  opacity: 0;
  transform: translateX(100px) scale(0.9);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  pointer-events: none;
}

.lp-testimonial-premium.active {
  opacity: 1;
  transform: translateX(0) scale(1);
  pointer-events: auto;
}

.lp-testimonial-quote-premium {
  font-size: 3rem;
  {/* line-height: 1; */}
  color: var(--accent-purple);
  opacity: 0.20;
  margin-bottom: 1rem;
}

.lp-testimonial-text-premium {
  font-size: 1.5rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: 2rem;
  font-style: italic;
}

.lp-testimonial-author-premium {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.lp-testimonial-avatar-premium {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
}

.lp-testimonial-info-premium {
  text-align: left;
}

.lp-testimonial-name-premium {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
}

.lp-testimonial-role-premium {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

.lp-carousel-dots-premium {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
}

.lp-carousel-dot-premium {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lp-carousel-dot-premium.active {
  width: 40px;
  border-radius: 6px;
  background: var(--accent-purple);
}

/* CTA Final Premium */
.lp-cta-final-premium {
  position: relative;
  overflow: hidden;
}

.lp-cta-rays-premium {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%);
animation: raysAnimation 5s ease-in-out infinite;
}
@keyframes raysAnimation {
0%, 100% { opacity: 0.4; transform: scale(1); }
50% { opacity: 0.7; transform: scale(1.05); }
}
.lp-cta-final-box {
max-width: 1000px;
margin: 0 auto;
padding: 5rem 3rem;
text-align: center;
background: rgba(255, 255, 255, 0.02);
backdrop-filter: blur(40px);
border: 2px solid rgba(168, 85, 247, 0.3);
border-radius: 40px;
position: relative;
z-index: 1;
box-shadow: 0 30px 100px rgba(168, 85, 247, 0.4);
}
.lp-cta-final-badge {
position: relative;
display: inline-block;
padding: 0.75rem 2rem;
background: rgba(239, 68, 68, 0.2);
border: 2px solid #ef4444;
border-radius: 50px;
color: #ef4444;
font-weight: 700;
font-size: 0.9rem;
text-transform: uppercase;
letter-spacing: 2px;
margin-bottom: 2rem;
overflow: hidden;
}
.lp-cta-badge-pulse-premium {
position: absolute;
inset: 0;
background: rgba(239, 68, 68, 0.3);
animation: badgePulse 2s ease-in-out infinite;
}
@keyframes badgePulse {
0%, 100% { transform: scale(1); opacity: 0.5; }
50% { transform: scale(1.5); opacity: 0; }
}
.lp-cta-final-title {
font-size: 4rem;
font-weight: 900;
margin-bottom: 1.5rem;
line-height: 1.2;
color: var(--text-primary);
}
.lp-cta-final-highlight {
display: block;
background: linear-gradient(135deg, #a855f7, #ec4899);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
margin-top: 0.5rem;
}
.lp-cta-final-subtitle {
font-size: 1.3rem;
color: var(--text-secondary);
margin-bottom: 3rem;
line-height: 1.8;
max-width: 800px;
margin-left: auto;
margin-right: auto;
}
.lp-urgency-banner-final {
display: inline-flex;
align-items: center;
gap: 1rem;
padding: 1.5rem 3rem;
background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(234, 88, 12, 0.2));
border: 2px solid #ef4444;
border-radius: 50px;
font-weight: 700;
color: #ef4444;
font-size: 1.2rem;
margin-bottom: 3rem;
animation: urgencyPulse 2s ease-in-out infinite;
}
@keyframes urgencyPulse {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.02); }
}
.lp-urgency-icon-final {
font-size: 1.5rem;
animation: bounceIcon 2s ease-in-out infinite;
}
.lp-cta-final-btn {
position: relative;
padding: 2rem 5rem;
background: transparent;
border: none;
border-radius: 60px;
font-size: 1.5rem;
font-weight: 800;
color: white;
cursor: pointer;
margin-bottom: 2.5rem;
overflow: hidden;
transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.lp-cta-final-btn:hover {
transform: translateY(-6px) scale(1.05);
}
.lp-cta-final-bg {
position: absolute;
inset: 0;
background: linear-gradient(135deg, #a855f7, #ec4899);
border-radius: 60px;
transition: all 0.3s ease;
}
.lp-cta-final-btn:hover .lp-cta-final-bg {
box-shadow: 0 30px 80px rgba(168, 85, 247, 0.7);
}
.lp-cta-final-text {
position: relative;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
}
.lp-cta-final-icon {
font-size: 2rem;
animation: bounceIcon 2s ease-in-out infinite;
}
.lp-cta-final-arrow {
transition: transform 0.3s ease;
}
.lp-cta-final-btn:hover .lp-cta-final-arrow {
transform: translateX(10px);
}
.lp-guarantee-final {
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
color: var(--text-secondary);
font-size: 1.1rem;
flex-wrap: wrap;
}
.lp-guarantee-item-final {
display: flex;
align-items: center;
gap: 0.5rem;
}
.lp-guarantee-divider-final {
color: rgba(255, 255, 255, 0.2);
}
.lp-footer-note {
margin-top: 2rem;
padding-top: 2rem;
border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.lp-footer-note p {
color: var(--text-secondary);
font-size: 1rem;
}
/* Footer Premium */
.lp-footer-premium {
padding: 3rem 2rem;
text-align: center;
background: rgba(0, 0, 0, 0.5);
border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.lp-footer-content-premium {
max-width: 1200px;
margin: 0 auto;
}
.lp-footer-content-premium p {
color: var(--text-secondary);
margin-bottom: 1rem;
}
.lp-footer-link-premium {
color: var(--accent-purple);
text-decoration: none;
font-weight: 600;
transition: all 0.3s ease;
display: inline-block;
}
.lp-footer-link-premium:hover {
color: var(--accent-blue);
transform: translateX(-5px);
}
/* Responsive */
@media (max-width: 1024px) {
.lp-hero-title-premium {
font-size: 3.5rem;
}
.lp-countdown-boxes {
gap: 1rem;
}
.lp-countdown-box-premium {
min-width: 110px;
padding: 1.5rem 2rem;
}
.lp-countdown-num-premium {
font-size: 3.5rem;
}
}
@media (max-width: 768px) {
.lp-sticky-inner {
flex-direction: column;
gap: 1rem;
}
.lp-sticky-btn-premium {
width: 100%;
justify-content: center;
}
.lp-hero-premium {
padding: 8rem 1.5rem 4rem;
}
.lp-hero-title-premium {
font-size: 2.5rem;
}
.lp-hero-subtitle-premium {
font-size: 1.2rem;
}
.lp-value-grid {
gap: 1rem;
}
.lp-countdown-boxes {
gap: 0.75rem;
}
.lp-countdown-box-premium {
min-width: 90px;
padding: 1rem 1.5rem;
}
.lp-countdown-num-premium {
font-size: 2.5rem;
}
.lp-cta-hero-premium {
padding: 1.5rem 2.5rem;
font-size: 1.2rem;
}
.lp-section-premium {
padding: 5rem 1.5rem;
}
.lp-section-title-premium {
font-size: 2.5rem;
}
.lp-persona-grid,
.lp-why-grid {
grid-template-columns: 1fr;
gap: 1.5rem;
}
.lp-process-grid {
grid-template-columns: 1fr;
}
.lp-testimonial-premium {
padding: 2.5rem 2rem;
}
.lp-testimonial-text-premium {
font-size: 1.3rem;
}
.lp-cta-final-box {
padding: 3rem 2rem;
}
.lp-cta-final-title {
font-size: 2.5rem;
}
.lp-cta-final-btn {
padding: 1.5rem 3rem;
font-size: 1.2rem;
}
.lp-stats-row {
gap: 2rem;
}
}
@media (max-width: 640px) {
.lp-value-grid {
flex-direction: column;
align-items: stretch;
}
.lp-value-item {
justify-content: center;
}
.lp-countdown-boxes {
grid-template-columns: repeat(2, 1fr);
}
.lp-cta-hero-premium {
padding: 1.25rem 2rem;
font-size: 1.1rem;
}
.lp-testimonial-carousel-premium {
min-height: 400px;
}
.lp-guarantee-final {
flex-direction: column;
gap: 0.5rem;
}
.lp-guarantee-divider-final {
display: none;
}
}
        /* LP STICKY BAR */
        .lp-sticky-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #dc2626, #ea580c);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 9999;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }

        .lp-sticky-bar span {
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
        }

        /* LP CONTAINER */
        .lp-container {
          min-height: 100vh;
          background: var(--bg-primary);
          padding-top: 60px;
        }

        .lp-container-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* LP HERO */
        .lp-hero {
        min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;
overflow: hidden;
background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1));
}
.lp-hero-particles {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .lp-particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--accent-purple);
      border-radius: 50%;
      animation: lpFloat 15s ease-in-out infinite;
    }
    

    @keyframes lpFloat {
      0%, 100% { transform: translateY(0); opacity: 0; }
      10% { opacity: 0.6; }
      90% { opacity: 0.6; }
      100% { transform: translateY(-100vh); opacity: 0; }
    }

    .lp-hero-content {
      text-align: center;
      z-index: 1;
      max-width: 900px;
      padding: 2rem;
    }

    .lp-badge {
      display: inline-block;
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      color: white;
      padding: 0.75rem 2rem;
      border-radius: 50px;
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 2rem;
      animation: lpPulse 2s ease-in-out infinite;
    }

    @keyframes lpPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .lp-title {
      font-size: 4rem;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }

    .lp-gradient-text {
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .lp-subtitle {
      font-size: 1.5rem;
      color: var(--text-secondary);
      margin-bottom: 3rem;
      line-height: 1.6;
    }

    /* LP URGENCY BOX */
    .lp-urgency-box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background: var(--bg-glass);
      backdrop-filter: blur(20px);
      border: 2px solid var(--accent-purple);
      border-radius: 20px;
      padding: 2rem;
      margin-bottom: 3rem;
      animation: lpGlow 2s ease-in-out infinite;
    }

    @keyframes lpGlow {
      0%, 100% { box-shadow: 0 0 20px var(--glow-purple); }
      50% { box-shadow: 0 0 40px var(--glow-purple); }
    }

    .lp-urgency-icon {
      font-size: 3rem;
    }

    .lp-urgency-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--accent-purple);
    }

    .lp-urgency-date {
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin-top: 0.5rem;
    }

    /* LP COUNTDOWN */
    .lp-countdown {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .lp-countdown-item {
      background: var(--bg-glass);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 1.5rem 2rem;
      min-width: 120px;
      transition: transform 0.3s ease;
    }

    .lp-countdown-item:hover {
      transform: translateY(-5px);
    }

    .lp-countdown-number {
      font-size: 3.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .lp-countdown-label {
      color: var(--text-secondary);
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 1px;
      margin-top: 0.5rem;
    }

    /* LP CTA BUTTONS */
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

    .lp-cta-primary {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem 3rem;
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      border: none;
      border-radius: 50px;
      color: white;
      font-size: 1.3rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 8px 30px var(--glow-purple);
      position: relative;
      overflow: hidden;
    }

    .lp-cta-primary::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    .lp-cta-primary:hover::before {
      transform: translateX(100%);
    }

    .lp-cta-primary:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 40px var(--glow-purple);
    }

    .lp-cta-arrow {
      font-size: 1.5rem;
      transition: transform 0.3s ease;
    }

    .lp-cta-primary:hover .lp-cta-arrow {
      transform: translateX(5px);
    }

    .lp-cta-large {
      font-size: 1.5rem;
      padding: 2rem 4rem;
    }

    /* LP TRUST INDICATORS */
    .lp-trust-indicators {
      display: flex;
      gap: 3rem;
      justify-content: center;
      margin-top: 3rem;
      flex-wrap: wrap;
    }

    .lp-trust-item {
      text-align: center;
    }

    .lp-trust-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .lp-trust-label {
      display: block;
      color: var(--text-secondary);
      font-size: 1rem;
      margin-top: 0.5rem;
    }

    /* LP SECTIONS */
    .lp-section {
      padding: 6rem 2rem;
    }

    .lp-section-alt {
      background: var(--bg-secondary);
    }

    .lp-section-title {
      font-size: 3rem;
      font-weight: 800;
      text-align: center;
      margin-bottom: 4rem;
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* LP CARDS */
    .lp-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .lp-card {
      background: var(--bg-glass);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 2.5rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .lp-card-hover:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 20px 60px var(--glow-purple);
    }

    .lp-card-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }

    .lp-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--accent-purple);
    }

    .lp-card p {
      color: var(--text-secondary);
      line-height: 1.7;
    }

    /* LP FEATURE SHOWCASE */
    .lp-feature-showcase {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
    }

    .lp-feature-card {
      background: var(--bg-glass);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 3rem;
      transition: all 0.3s ease;
    }

    .lp-feature-card:hover {
      transform: translateY(-8px);
      border-color: var(--accent-purple);
    }

    .lp-feature-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }

    .lp-feature-card h3 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .lp-feature-card ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .lp-feature-card li {
      color: var(--text-secondary);
      padding: 0.75rem 0;
      font-size: 1.1rem;
    }

    /* LP TESTIMONIALS */
    .lp-testimonials {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .lp-testimonial {
      background: var(--bg-glass);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-left: 4px solid var(--accent-purple);
      border-radius: 20px;
      padding: 2rem;
      transition: all 0.3s ease;
    }

    .lp-testimonial:hover {
      transform: translateX(5px);
      box-shadow: 0 8px 30px var(--glow-purple);
    }

    .lp-testimonial-text {
      color: var(--text-secondary);
      font-style: italic;
      line-height: 1.7;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .lp-testimonial-author {
      color: var(--accent-purple);
      font-weight: 700;
    }

    /* LP FINAL CTA */
    .lp-cta-section {
      background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1));
    }

    .lp-final-cta-box {
      text-align: center;
      background: var(--bg-glass);
      backdrop-filter: blur(20px);
      border: 2px solid var(--accent-purple);
      border-radius: 32px;
      padding: 4rem 3rem;
      box-shadow: 0 20px 80px var(--glow-purple);
    }

    .lp-final-title {
      font-size: 3rem;
      font-weight: 900;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .lp-final-subtitle {
      font-size: 1.3rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
      line-height: 1.7;
    }

    .lp-urgency-banner {
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(234, 88, 12, 0.2));
      border: 2px solid #ef4444;
      border-radius: 50px;
      padding: 1rem 2rem;
      display: inline-block;
      margin-bottom: 2rem;
      font-weight: 700;
      color: #ef4444;
      font-size: 1.2rem;
      animation: lpPulse 2s ease-in-out infinite;
    }

    .lp-guarantee {
      margin-top: 2rem;
      color: var(--text-secondary);
      font-size: 1.1rem;
    }

    /* LP FOOTER */
    .lp-footer {
      background: var(--bg-secondary);
      padding: 2rem;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .lp-footer-link {
      color: var(--accent-purple);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .lp-footer-link:hover {
      color: var(--accent-blue);
    }

    /* LP RESPONSIVE */
    @media (max-width: 768px) {
      .lp-sticky-bar {
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
      }
      
      .lp-title {
        font-size: 2.5rem;
      }
      
      .lp-subtitle {
        font-size: 1.2rem;
      }
      
      .lp-countdown {
        gap: 1rem;
      }
      
      .lp-countdown-item {
        min-width: 90px;
        padding: 1rem 1.5rem;
      }
      
      .lp-countdown-number {
        font-size: 2.5rem;
      }
      
      .lp-cta-primary {
        font-size: 1.1rem;
        padding: 1.2rem 2rem;
      }
      
      .lp-cta-large {
        font-size: 1.3rem;
        padding: 1.5rem 2.5rem;
      }
      
      .lp-section-title {
        font-size: 2rem;
      }
      
      .lp-final-title {
        font-size: 2rem;
      }
    }
    /* ========================================
   ENHANCED LANDING PAGE STYLES
   ======================================== */

/* Gradient Blobs */
.lp-gradient-blobs {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.lp-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: blobFloat 20s ease-in-out infinite;
}

.lp-blob-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  top: -200px;
  left: -200px;
}

.lp-blob-2 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  bottom: -150px;
  right: -150px;
  animation-delay: -5s;
}

.lp-blob-3 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  top: 50%;
  right: 10%;
  animation-delay: -10s;
}

@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -50px) scale(1.1); }
  66% { transform: translate(-50px, 50px) scale(0.9); }
}

/* Modern Sticky Bar */
.lp-sticky-bar-modern {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  z-index: 9999;
  animation: slideDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.lp-sticky-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.lp-sticky-pulse {
  width: 12px;
  height: 12px;
  background: #ef4444;
  border-radius: 50%;
  position: relative;
  animation: pulse 2s ease-in-out infinite;
}

.lp-sticky-pulse::before {
  content: '';
  position: absolute;
  inset: -4px;
  background: #ef4444;
  border-radius: 50%;
  opacity: 0.4;
  animation: pulse 2s ease-in-out infinite;
}

.lp-sticky-text {
  color: white;
  font-weight: 700;
  font-size: 1rem;
  flex: 1;
}

.lp-sticky-btn {
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.lp-sticky-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.lp-sticky-btn:hover::before {
  transform: translateX(100%);
}

.lp-sticky-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(168, 85, 247, 0.4);
}

.lp-sticky-arrow {
  transition: transform 0.3s ease;
}

.lp-sticky-btn:hover .lp-sticky-arrow {
  transform: translateX(4px);
}


/* Modern Hero Section */
.lp-hero-modern {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem 4rem;
}

/* 3D Particles */
.lp-particles-3d {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.lp-particle-3d {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(135deg, #a855f7, #3b82f6);
  border-radius: 50%;
  animation: particle3dFloat 20s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
}

@keyframes particle3dFloat {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(var(--tx, 100px), var(--ty, -100vh)) scale(0.5); opacity: 0; }
}

/* Grid Background */
.lp-grid-bg {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Hero Content */
.lp-hero-content-modern {
  max-width: 1000px;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Animated Badge */
.lp-badge-modern {
  display: inline-block;
  position: relative;
  padding: 0.75rem 2rem;
  background: rgba(168, 85, 247, 0.1);
  border: 2px solid rgba(168, 85, 247, 0.3);
  border-radius: 50px;
  margin-bottom: 2rem;
  overflow: hidden;
}

.lp-badge-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 3s ease-in-out infinite;
}

.lp-badge-text {
  position: relative;
  z-index: 1;
  font-weight: 700;
  background: linear-gradient(135deg, #a855f7, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 3D Title */
.lp-title-3d {
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.lp-title-highlight {
  display: block;
  position: relative;
  margin-top: 1rem;
}

.lp-title-gradient {
  background: linear-gradient(135deg, #a855f7, #ec4899, #3b82f6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

.lp-title-glow {
  position: absolute;
  inset: -20px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  filter: blur(40px);
  opacity: 0.3;
  z-index: 0;
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.1); }
}

.lp-subtitle-modern {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.7;
}

/* Stats Bar */
.lp-stats-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin-bottom: 3rem;
}

.lp-stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lp-stat-icon {
  font-size: 2rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.lp-stat-number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #a855f7, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.lp-stat-label {
font-size: 0.9rem;
color: var(--text-secondary);
text-transform: uppercase;
letter-spacing: 1px;
}
.lp-stat-divider {
width: 1px;
height: 40px;
background: rgba(255, 255, 255, 0.1);
}
/* Urgency Card */
.lp-urgency-card-modern {
display: flex;
align-items: center;
gap: 1.5rem;
padding: 2rem;
background: rgba(168, 85, 247, 0.05);
backdrop-filter: blur(20px);
border: 2px solid rgba(168, 85, 247, 0.3);
border-radius: 24px;
margin-bottom: 3rem;
position: relative;
overflow: hidden;
}
.lp-urgency-pulse {
position: absolute;
inset: 0;
background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), transparent);
animation: urgencyPulse 2s ease-in-out infinite;
}
@keyframes urgencyPulse {
0%, 100% { opacity: 0; transform: scale(0.8); }
50% { opacity: 1; transform: scale(1); }
}
.lp-urgency-icon-modern {
font-size: 3rem;
animation: rotate 4s linear infinite;
}
@keyframes rotate {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}
.lp-urgency-content {
flex: 1;
text-align: left;
}
.lp-urgency-title-modern {
font-size: 1.5rem;
font-weight: 800;
color: var(--accent-purple);
margin-bottom: 0.5rem;
}
.lp-urgency-date-modern {
font-size: 1.1rem;
color: var(--text-secondary);
}
/* Glassmorphism Countdown */
.lp-countdown-modern {
display: flex;
gap: 1.5rem;
justify-content: center;
margin-bottom: 3rem;
flex-wrap: wrap;
}
.lp-countdown-card-modern {
position: relative;
padding: 2rem 2.5rem;
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 20px;
min-width: 130px;
transition: all 0.3s ease;
}
.lp-countdown-card-modern:hover {
transform: translateY(-10px) scale(1.05);
box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
}
.lp-countdown-glow {
position: absolute;
inset: -10px;
border-radius: 20px;
filter: blur(20px);
opacity: 0;
transition: opacity 0.3s ease;
z-index: -1;
}
.lp-countdown-card-modern:hover .lp-countdown-glow {
opacity: 0.6;
}
.lp-countdown-number-modern {
font-size: 4rem;
font-weight: 900;
line-height: 1;
margin-bottom: 0.5rem;
text-shadow: 0 0 20px currentColor;
}
.lp-countdown-label-modern {
font-size: 0.9rem;
text-transform: uppercase;
letter-spacing: 2px;
color: var(--text-secondary);
}
/* 3D CTA Button */
.lp-cta-3d {
position: relative;
padding: 1.5rem 4rem;
background: transparent;
border: none;
border-radius: 50px;
color: white;
font-size: 1.3rem;
font-weight: 700;
cursor: pointer;
margin-bottom: 3rem;
overflow: hidden;
transform-style: preserve-3d;
transition: all 0.3s ease;
}
.lp-cta-bg {
position: absolute;
inset: 0;
background: linear-gradient(135deg, #a855f7, #ec4899);
border-radius: 50px;
transition: all 0.3s ease;
}
.lp-cta-3d:hover .lp-cta-bg {
transform: translateZ(10px) scale(1.05);
box-shadow: 0 20px 60px rgba(168, 85, 247, 0.6);
}
.lp-cta-text {
position: relative;
z-index: 1;
display: flex;
align-items: center;
gap: 1rem;
}
.lp-cta-icon {
font-size: 1.5rem;
animation: bounce 2s ease-in-out infinite;
}
.lp-cta-arrow-modern {
transition: transform 0.3s ease;
}
.lp-cta-3d:hover .lp-cta-arrow-modern {
transform: translateX(8px);
}
.lp-cta-shine {
position: absolute;
inset: 0;
background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
transform: translateX(-100%);
transition: transform 0.6s ease;
}
.lp-cta-3d:hover .lp-cta-shine {
transform: translateX(100%);
}
/* Social Proof */
.lp-social-proof {
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
}
.lp-social-avatars {
display: flex;
margin-right: 1rem;
}
.lp-avatar {
width: 40px;
height: 40px;
border-radius: 50%;
background: linear-gradient(135deg, #a855f7, #3b82f6);
display: flex;
align-items: center;
justify-content: center;
border: 3px solid var(--bg-primary);
margin-left: -12px;
transition: all 0.3s ease;
}
.lp-avatar:first-child {
margin-left: 0;
}
.lp-avatar:hover {
transform: translateY(-5px) scale(1.1);
z-index: 10;
}
.lp-avatar-inner {
font-weight: 700;
color: white;
}
.lp-social-text {
color: var(--text-secondary);
}
.lp-social-count {
font-weight: 700;
color: var(--accent-purple);
}
/* Floating Elements */
.lp-floating-elements {
position: absolute;
inset: 0;
pointer-events: none;
}
.lp-float-circle {
position: absolute;
width: 80px;
height: 80px;
background: rgba(168, 85, 247, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(168, 85, 247, 0.3);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
color: var(--accent-purple);
animation: float 6s ease-in-out infinite;
}
.lp-float-1 { top: 10%; left: 5%; animation-delay: 0s; }
.lp-float-2 { top: 20%; right: 10%; animation-delay: -2s; }
.lp-float-3 { bottom: 30%; left: 10%; animation-delay: -4s; }
.lp-float-4 { bottom: 20%; right: 5%; animation-delay: -6s; }
@keyframes float {
0%, 100% { transform: translateY(0) rotate(0deg); }
50% { transform: translateY(-20px) rotate(180deg); }
}
/* Section Styles */
.lp-section-modern {
padding: 8rem 2rem;
position: relative;
}
.lp-section-dark {
background: rgba(0, 0, 0, 0.3);
}
.lp-section-header {
text-align: center;
margin-bottom: 5rem;
}
.lp-section-tag {
display: inline-block;
padding: 0.5rem 1.5rem;
background: rgba(168, 85, 247, 0.1);
border: 1px solid rgba(168, 85, 247, 0.3);
border-radius: 50px;
color: var(--accent-purple);
font-weight: 700;
font-size: 0.9rem;
text-transform: uppercase;
letter-spacing: 2px;
margin-bottom: 1.5rem;
}
.lp-section-title-modern {
font-size: 3.5rem;
font-weight: 900;
margin-bottom: 1rem;
background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}
.lp-section-desc {
font-size: 1.2rem;
color: var(--text-secondary);
}
/* Modern Cards Grid */
.lp-cards-masonry {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 2rem;
}
.lp-card-modern {
position: relative;
padding: 3rem 2rem;
background: rgba(255, 255, 255, 0.02);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 24px;
transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
overflow: hidden;
animation: fadeInUp 0.6s ease-out;
animation-fill-mode: both;
}
@keyframes fadeInUp {
from {
opacity: 0;
transform: translateY(30px);
}
to {
opacity: 1;
transform: translateY(0);
}
}
.lp-card-modern:hover {
transform: translateY(-15px) scale(1.02);
border-color: rgba(168, 85, 247, 0.5);
}
.lp-card-glow {
position: absolute;
inset: -100px;
border-radius: 50%;
filter: blur(60px);
opacity: 0;
transition: opacity 0.4s ease;
z-index: 0;
}
.lp-card-modern:hover .lp-card-glow {
opacity: 0.3;
}
.lp-card-shine {
position: absolute;
top: 0;
left: -100%;
width: 100%;
height: 100%;
background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
transition: left 0.6s ease;
}
.lp-card-modern:hover .lp-card-shine {
left: 100%;
}
.lp-card-icon-modern {
width: 80px;
height: 80px;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
font-size: 2.5rem;
margin-bottom: 2rem;
position: relative;
z-index: 1;
}
.lp-card-title-modern {
font-size: 1.5rem;
font-weight: 700;
margin-bottom: 1rem;
color: var(--text-primary);
position: relative;
z-index: 1;
}
.lp-card-desc-modern {
color: var(--text-secondary);
line-height: 1.7;
position: relative;
z-index: 1;
}
.lp-card-border {
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 4px;
transform: scaleX(0);
transition: transform 0.4s ease;
}
.lp-card-modern:hover .lp-card-border {
transform: scaleX(1);
}
/* Solution Grid */
.lp-solution-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: 3rem;
}
.lp-solution-card {
position: relative;
padding: 3rem;
background: rgba(255, 255, 255, 0.02);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 28px;
overflow: hidden;
transition: all 0.4s ease;
animation: fadeInUp 0.6s ease-out;
animation-fill-mode: both;
}
.lp-solution-card:hover {
transform: translateY(-12px);
}
.lp-solution-bg {
position: absolute;
inset: 0;
opacity: 0.1;
transition: opacity 0.4s ease;
}
.lp-solution-card:hover .lp-solution-bg {
opacity: 0.2;
}
.lp-solution-icon-modern {
font-size: 4rem;
margin-bottom: 2rem;
position: relative;
z-index: 1;
}
.lp-solution-title {
font-size: 1.8rem;
font-weight: 800;
margin-bottom: 2rem;
background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
position: relative;
z-index: 1;
}
.lp-solution-list {
list-style: none;
margin: 0;
padding: 0;
position: relative;
z-index: 1;
}
.lp-solution-item {
display: flex;
align-items: center;
gap: 1rem;
padding: 1rem 0;
color: var(--text-secondary);
font-size: 1.1rem;
border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.lp-solution-item:last-child {
border-bottom: none;
}
.lp-solution-check {
width: 24px;
height: 24px;
background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-weight: 700;
flex-shrink: 0;
}
.lp-solution-shine {
position: absolute;
top: 0;
right: -100%;
width: 100%;
height: 100%;
background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
transition: right 0.8s ease;
}
.lp-solution-card:hover .lp-solution-shine {
right: 100%;
}
/* Testimonial Carousel */
.lp-testimonial-carousel {
max-width: 900px;
margin: 0 auto;
position: relative;
min-height: 300px;
}
.lp-testimonial-modern {
position: absolute;
inset: 0;
padding: 4rem;
background: rgba(255, 255, 255, 0.02);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 32px;
opacity: 0;
transform: translateX(100px) scale(0.9);
transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
pointer-events: none;
}
.lp-testimonial-modern.active {
opacity: 1;
transform: translateX(0) scale(1);
pointer-events: auto;
}
.lp-testimonial-quote {
font-size: 6rem;
line-height: 1;
color: var(--accent-purple);
opacity: 0.2;
margin-bottom: 1rem;
}
.lp-testimonial-text-modern {
font-size: 1.5rem;
line-height: 1.8;
color: var(--text-primary);
margin-bottom: 2rem;
font-style: italic;
}
.lp-testimonial-author-modern {
display: flex;
align-items: center;
gap: 1.5rem;
}
.lp-testimonial-avatar {
width: 60px;
height: 60px;
border-radius: 50%;
background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
font-weight: 700;
color: white;
}
.lp-testimonial-name {
font-size: 1.2rem;
font-weight: 700;
color: var(--text-primary);
}
.lp-testimonial-role {
font-size: 1rem;
color: var(--text-secondary);
}
.lp-carousel-dots {
display: flex;
justify-content: center;
gap: 1rem;
margin-top: 24rem;
}
.lp-carousel-dot {
width: 12px;
height: 12px;
border-radius: 50%;
background: rgba(255, 255, 255, 0.2);
border: none;
cursor: pointer;
transition: all 0.3s ease;
}
.lp-carousel-dot.active {
width: 40px;
border-radius: 6px;
background: var(--accent-purple);
}
/* Mega CTA Section */
.lp-cta-mega {
position: relative;
overflow: hidden;
}
.lp-cta-rays {
position: absolute;
inset: 0;
background:
radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%);
animation: raysPulse 4s ease-in-out infinite;
}
@keyframes raysPulse {
0%, 100% { opacity: 0.5; transform: scale(1); }
50% { opacity: 1; transform: scale(1.05); }
}
.lp-cta-box-mega {
max-width: 1000px;
margin: 0 auto;
padding: 5rem 3rem;
text-align: center;
background: rgba(255, 255, 255, 0.02);
backdrop-filter: blur(40px);
border: 2px solid rgba(168, 85, 247, 0.3);
border-radius: 40px;
position: relative;
z-index: 1;
box-shadow: 0 30px 100px rgba(168, 85, 247, 0.3);
}
.lp-cta-badge-mega {
position: relative;
display: inline-block;
padding: 0.75rem 2rem;
background: rgba(239, 68, 68, 0.2);
border: 2px solid #ef4444;
border-radius: 50px;
color: #ef4444;
font-weight: 700;
font-size: 0.9rem;
text-transform: uppercase;
letter-spacing: 2px;
margin-bottom: 2rem;
overflow: hidden;
}
.lp-cta-badge-pulse {
position: absolute;
inset: 0;
background: rgba(239, 68, 68, 0.3);
animation: pulse 2s ease-in-out infinite;
}
.lp-cta-title-mega {
font-size: 4rem;
font-weight: 900;
margin-bottom: 1.5rem;
line-height: 1.2;
}
.lp-cta-highlight-mega {
display: block;
background: linear-gradient(135deg, #a855f7, #ec4899);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
margin-top: 0.5rem;
}
.lp-cta-subtitle-mega {
font-size: 1.3rem;
color: var(--text-secondary);
margin-bottom: 3rem;
line-height: 1.7;
}
.lp-urgency-banner-mega {
display: inline-flex;
align-items: center;
gap: 1rem;
padding: 1.5rem 3rem;
background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(234, 88, 12, 0.2));
border: 2px solid #ef4444;
border-radius: 50px;
font-weight: 700;
color: #ef4444;
font-size: 1.2rem;
margin-bottom: 3rem;
animation: pulse 2s ease-in-out infinite;
}
.lp-urgency-icon-mega {
font-size: 1.5rem;
animation: bounce 2s ease-in-out infinite;
}
.lp-cta-mega-btn {
position: relative;
padding: 2rem 5rem;
background: transparent;
border: none;
border-radius: 60px;
font-size: 1.5rem;
font-weight: 800;
color: white;
cursor: pointer;
margin-bottom: 2rem;
overflow: hidden;
transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.lp-cta-mega-btn:hover {
transform: translateY(-5px) scale(1.05);
}
.lp-cta-mega-bg {
position: absolute;
inset: 0;
background: linear-gradient(135deg, #a855f7, #ec4899);
border-radius: 60px;
transition: all 0.3s ease;
}
.lp-cta-mega-btn:hover .lp-cta-mega-bg {
box-shadow: 0 30px 80px rgba(168, 85, 247, 0.6);
}
.lp-cta-mega-text {
position: relative;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
}
.lp-cta-mega-icon {
font-size: 2rem;
animation: bounce 2s ease-in-out infinite;
}
.lp-cta-mega-arrow {
transition: transform 0.3s ease;
}
.lp-cta-mega-btn:hover .lp-cta-mega-arrow {
transform: translateX(10px);
}
.lp-cta-mega-glow {
position: absolute;
inset: -20px;
background: linear-gradient(135deg, #a855f7, #ec4899);
filter: blur(40px);
opacity: 0;
transition: opacity 0.4s ease;
z-index: 0;
}
.lp-cta-mega-btn:hover .lp-cta-mega-glow {
opacity: 0.6;
}
.lp-guarantee-modern {
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
color: var(--text-secondary);
font-size: 1.1rem;
}
.lp-guarantee-item {
display: flex;
align-items: center;
gap: 0.5rem;
}
.lp-guarantee-divider {
color: rgba(255, 255, 255, 0.2);
}
/* Footer */
.lp-footer-modern {
padding: 3rem 2rem;
text-align: center;
background: rgba(0, 0, 0, 0.5);
border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.lp-footer-link-modern {
color: var(--accent-purple);
text-decoration: none;
font-weight: 600;
transition: all 0.3s ease;
}
.lp-footer-link-modern:hover {
color: var(--accent-blue);
transform: translateX(-5px);
}
/* Responsive */
@media (max-width: 768px) {
.lp-sticky-content {
flex-direction: column;
gap: 0.75rem;
}
.lp-title-3d {
font-size: 2.5rem;
}
.lp-stats-bar {
flex-direction: column;
gap: 1.5rem;
}
.lp-stat-divider {
width: 100%;
height: 1px;
}
.lp-countdown-modern {
gap: 1rem;
}
.lp-countdown-card-modern {
min-width: 100px;
padding: 1.5rem 2rem;
}
.lp-countdown-number-modern {
font-size: 3rem;
}
.lp-cta-3d {
padding: 1.2rem 2.5rem;
font-size: 1.1rem;
}
.lp-section-title-modern {
font-size: 2.5rem;
}
.lp-cards-masonry,
.lp-solution-grid {
grid-template-columns: 1fr;
gap: 1.5rem;
}
.lp-testimonial-modern {
padding: 2rem;
}
.lp-testimonial-text-modern {
font-size: 1.2rem;
}
.lp-carousel-dots {
margin-top: 22rem;
}
.lp-cta-title-mega {
font-size: 2.5rem;
}
.lp-cta-mega-btn {
padding: 1.5rem 3rem;
font-size: 1.2rem;
}
/* Simple fix - show normal cursor on LP */
.lp-container,
.lp-container *,
.lp-container button,
.lp-container a {
  cursor: auto !important;
}

/* Pointer on interactive elements */
button,
a,
.lp-card-modern,
.lp-solution-card,
.lp-carousel-dot {
  cursor: pointer !important;
}

    `}</style>
    <LandingPage />
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

   .app {min-height: 100vh;
position: relative;
width: 100%;
overflow-x: hidden;
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
width: 200px;
height: 250px;
margin: 0 auto;
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
.lp-logo-container {
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 10000;
  animation: fadeInLogo 1s ease-out;
}

@keyframes fadeInLogo {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.lp-logo-top {
  height: 50px;
  width: auto;
  filter: drop-shadow(0 4px 12px rgba(168, 85, 247, 0.4));
  transition: transform 0.3s ease;
}

.lp-logo-top:hover {
  transform: scale(1.1);
}
@media (max-width: 640px) {
.community-ticker-item {
font-size: 1.5rem;}
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
padding: 0 1.5rem;
max-width: 100%;
}
.section {
padding: 3rem 0;
}
}
@media (max-width: 640px) {
.container {
padding: 0 1rem;
max-width: 100%;
}
.section {
padding: 2.5rem 0;
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
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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
grid-template-columns: repeat(2, 1fr);
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
        background:var(--bg-glass);
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
            Limited to 30 seats only! Be part of Dewas' first offline skill ecosystem. Register now for our introductory session on January 11, 2026.
          </p>
          
          <div style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(234, 88, 12, 0.1))', border: '2px solid #ef4444', borderRadius: '16px', padding: '1rem', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ef4444', margin: 0 }}>
              🔥 Only 30 Seats Available! 🔥
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
              id="modal-cta-workshop"
              data-cta="modal-workshop"
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={() => {
                trackButtonClick('modal-cta-workshop', 'Join First Free Introductory Session - Modal', JOIN_WORKSHOP);
                window.open(JOIN_WORKSHOP, '_blank');
                setShowModal(false);
              }}
            >
              Join First Free Introductory Session - Register Now
            </button>
            <button 
              id="modal-cta-whatsapp"
              data-cta="modal-whatsapp"
              className="btn-secondary"
              style={{ width: '100%' }}
              onClick={() => {
                trackButtonClick('modal-cta-whatsapp', 'Connect on WhatsApp - Modal', `https://wa.me/${WHATSAPP_NUMBER}`);
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
    id="btn-scroll-top"
    data-button="scroll-top"
    className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
    onClick={() => {
      trackButtonClick('btn-scroll-top', 'Scroll to Top');
      scrollToTop();
    }}
  />

  {/* Bottom Ticker */}
  <div className="bottom-ticker" id="section-bottom-ticker" data-section="bottom-ticker">
    <div className="ticker-content">
      <span>Join Now for FREE — Your parents didn't dream of unemployment</span>
      <button 
        id="btn-ticker-join"
        data-button="ticker-join"
        className="btn-primary" 
        onClick={() => {
          trackButtonClick('btn-ticker-join', 'Join Now - Bottom Ticker', GOOGLE_FORM_JOIN);
          window.open(GOOGLE_FORM_JOIN, '_blank');
        }}
      >
        Join Now
      </button>
    </div>
  </div>

  {/* Top Banner */}
  <div className="top-banner" id="section-top-banner" data-section="top-banner">
    <div className="top-banner-text">LEARN • BUILD • EARN • REPEAT</div>
  </div>

  {/* Header */}
  <header className={`header ${scrollY > 50 ? 'scrolled' : ''}`} id="section-header" data-section="header">
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
        <button 
          id="btn-phone-header"
          data-button="phone-header"
          className="icon-btn" 
          onClick={() => {
            trackButtonClick('btn-phone-header', 'Phone Call - Header', `tel:${PHONE}`);
            window.location.href = `tel:${PHONE}`;
          }}
        >📞</button>
        <button 
          id="btn-email-header"
          data-button="email-header"
          className="icon-btn" 
          onClick={() => {
            trackButtonClick('btn-email-header', 'Email - Header', `mailto:${EMAIL}`);
            window.location.href = `mailto:${EMAIL}`;
          }}
        >✉️</button>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button 
          id="btn-join-header"
          data-button="join-header"
          className="btn-primary" 
          onClick={() => {
            trackButtonClick('btn-join-header', 'Join - Header', GOOGLE_FORM_JOIN);
            window.open(GOOGLE_FORM_JOIN, '_blank');
          }}
        >
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
  <section id="home" className="hero" data-section="hero">
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

      <div className="limited-banner" onClick={() => {
        trackButtonClick('btn-hero-limited-banner', 'Limited Banner - Hero', JOIN_WORKSHOP);
        window.open(JOIN_WORKSHOP, '_blank');
      }}>
        <p className="limited-text">🔥 LIMITED - Only 30 Seats! Click to Register 🔥</p>
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
        <button 
          id="btn-join-workshop-hero"
          data-button="join-workshop-hero"
          className="btn-primary" 
          onClick={() => {
            trackButtonClick('btn-join-workshop-hero', 'Join First Free Introductory Session - Hero', JOIN_WORKSHOP);
            window.open(JOIN_WORKSHOP, '_blank');
          }}
        >
          Join First Free Introductory Session
        </button>
        <button 
          id="btn-ambassador-hero"
          data-button="ambassador-hero"
          className="btn-secondary" 
          onClick={() => {
            trackButtonClick('btn-ambassador-hero', 'Apply for Ambassador - Hero', GOOGLE_FORM_AMBASSADOR);
            window.open(GOOGLE_FORM_AMBASSADOR, '_blank');
          }}
        >
          Apply for Ambassador
        </button>
         <button 
          id="btn-join-workshop-hero"
          data-button="join-workshop-hero"
          className="btn-primary" 
          onClick={() => {   window.history.pushState({}, '', '/lp');   window.dispatchEvent(new PopStateEvent('popstate')); }}
        >
          Visit SKILASTRA Landing Page
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
  <section className="section" id="section-why-ecosystem" data-section="why-ecosystem">
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
  <section className="section" id="section-problem" data-section="problem" style={{ background: 'var(--bg-secondary)' }}>
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
  <section id="who-for" className="section" data-section="who-for">
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
  <section className="section" id="section-solution" data-section="solution" style={{ background: 'var(--bg-secondary)' }}>
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

  <section id="tracks" className="section" data-section="tracks" style={{ background: 'var(--bg-secondary)' }}>
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
          <button 
            id="btn-track-ai"
            data-button="track-ai"
            className="btn-primary" 
            onClick={() => {
              trackButtonClick('btn-track-ai', 'Join Waitlist - AI & Automation', JOIN_WAITLIST);
              window.open(JOIN_WAITLIST, '_blank');
            }}
          >
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
          <button 
            id="btn-track-coding"
            data-button="track-coding"
            className="btn-primary" 
            onClick={() => {
              trackButtonClick('btn-track-coding', 'Join Waitlist - Coding', JOIN_WAITLIST);
              window.open(JOIN_WAITLIST, '_blank');
            }}
          >
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
          <button 
            id="btn-track-marketing"
            data-button="track-marketing"
            className="btn-primary" 
            onClick={() => {
              trackButtonClick('btn-track-marketing', 'Join Waitlist - Marketing', JOIN_WAITLIST);
              window.open(JOIN_WAITLIST, '_blank');
            }}
          >
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
          <button 
            id="btn-track-communication"
            data-button="track-communication"
            className="btn-primary" 
            onClick={() => {
              trackButtonClick('btn-track-communication', 'Join Waitlist - Communication', JOIN_WAITLIST);
              window.open(JOIN_WAITLIST, '_blank');
            }}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Workshop Section */}
  <section id="workshop" className="section" data-section="workshop">
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

        <button 
          id="btn-workshop-reserve"
          data-button="workshop-reserve"
          className="btn-primary" 
          onClick={() => {
            trackButtonClick('btn-workshop-reserve', 'Reserve Your Seat - Workshop', JOIN_WORKSHOP);
            window.open(JOIN_WORKSHOP, '_blank');
          }}
        >
          Reserve Your Seat
        </button>
      </div>
    </div>
  </section>

  {/* Ambassador Program */}
  <section id="ambassador" className="section" data-section="ambassador" style={{ background: 'var(--bg-secondary)' }}>
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
        <button 
          id="btn-ambassador-apply"
          data-button="ambassador-apply"
          className="btn-primary" 
          onClick={() => {
            trackButtonClick('btn-ambassador-apply', 'Apply Through Google Form - Ambassador', GOOGLE_FORM_AMBASSADOR);
            window.open(GOOGLE_FORM_AMBASSADOR, '_blank');
          }}
        >
          Apply Through Google Form
        </button>
      </div>
    </div>
  </section>

  {/* For Parents Section */}
  <section id="parents" className="section" data-section="parents">
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
  <section className="section" id="section-testimonials" data-section="testimonials" style={{ background: 'var(--bg-secondary)' }}>
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
  
  <section className="section" id="section-faq" data-section="faq">
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
  <section id="partnership" className="section" data-section="partnership" style={{ background: 'var(--bg-secondary)' }}>
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
        <button 
          id="btn-partnership-apply"
          data-button="partnership-apply"
          className="btn-primary" 
          onClick={() => {
            trackButtonClick('btn-partnership-apply', 'Apply For Workshop / Partnership', GOOGLE_FORM_PARTNERSHIP);
            window.open(GOOGLE_FORM_PARTNERSHIP, '_blank');
          }}
        >
          📩 Apply For Workshop / Partnership
        </button>
      </div>
    </div>
  </section>

  {/* Community Section */}
  <section className="section" id="section-community" data-section="community" style={{ background: 'var(--bg-secondary)' }}>
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
        <a 
          href="https://forms.gle/Ck5YWPrsKpSVqKSC9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary" 
          id="btn-community-join"
          data-button="community-join"
          style={{ display: 'inline-block', textDecoration: 'none' }}
          onClick={() => {
            trackButtonClick('btn-community-join', 'Join The Community', 'https://forms.gle/Ck5YWPrsKpSVqKSC9');
          }}
        >
          Join The Community
        </a>
      </div>
    </div>
  </section>

  <section id="founder" className="section" data-section="founder">
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
            <button 
              id="btn-founder-instagram"
              data-button="founder-instagram"
              className="btn-primary" 
              onClick={() => {
                trackButtonClick('btn-founder-instagram', 'Connect on Instagram - Founder', FOUNDER_INSTA);
                window.open(FOUNDER_INSTA, '_blank');
              }}
            >
              Connect on Instagram
            </button>
            <button 
              id="btn-founder-consultation"
              data-button="founder-consultation"
              className="btn-secondary" 
              onClick={() => {
                trackButtonClick('btn-founder-consultation', 'Book Consultation - Founder', FOUNDER_DESK);
                window.open(FOUNDER_DESK, '_blank');
              }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Team Section */}
  <section id="team" className="section" data-section="team" style={{ background: 'var(--bg-secondary)' }}>
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
          <h4>Rajni Yadav</h4>
          <p>Tech & Marketing Support Mentor</p>
        </div>

        <div className="team-card animate-on-scroll">
          <img src={Team2} alt="Team Member" className="team-img" />
          <h4>Nikunj Gutpa</h4>
          <p>AI & Automation Support Mentor</p>
        </div>
      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section className="section" id="section-stats" data-section="stats">
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
  <section id="internships" className="section" data-section="exsora" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
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
      <button 
        id="btn-career-opportunities"
        data-button="career-opportunities"
        className="btn-primary" 
        onClick={() => {
          trackButtonClick('btn-career-opportunities', 'Apply for Internships & Careers', CAREER_OPPORTUNITIES);
          window.open(CAREER_OPPORTUNITIES, '_blank');
        }}
      >
        Apply for Internships & Careers Opportunities.
      </button>
       <button 
         id="btn-visit-exsora"
         data-button="visit-exsora"
         className="btn-secondary" 
         onClick={() => {
           trackButtonClick('btn-visit-exsora', 'Visit Exsora', EXSORA_WEBSITE);
           window.open(EXSORA_WEBSITE, '_blank');
         }}
       >
        Visit Exsora For More Opportunities
        </button>
        </div>
    </div>
  </section>

  {/* Contact Section */}
  <section id="contact" className="section" data-section="contact">
    <div className="container">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">Start your journey with Skilastra</p>
      <div className="card-grid">
        {[
          { title: 'WhatsApp', text: 'Connect instantly for queries, enrollment, or consultation', action: () => {
            trackButtonClick('btn-contact-whatsapp', 'Message Us - WhatsApp', `https://wa.me/${WHATSAPP_NUMBER}`);
            window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
          }, btn: 'Message Us', id: 'btn-contact-whatsapp' },
          { title: 'Instagram', text: `Follow for updates, insights, and community highlights`, action: () => {
            trackButtonClick('btn-contact-instagram', 'Follow Us - Instagram', INSTAGRAM_HANDLE);
            window.open(INSTAGRAM_HANDLE, '_blank');
          }, btn: 'Follow Us', id: 'btn-contact-instagram' },
           
          { title: 'Location', text: 'Dewas, Madhya Pradesh - Offline sessions & community hub', action: () => {
            trackButtonClick('btn-contact-exsora', 'Visit Exsora', EXSORA_WEBSITE);
            window.open(EXSORA_WEBSITE, '_blank');
          }, btn: 'Visit Exsora', id: 'btn-contact-exsora' }
        ].map((contact, i) => (
          <div key={i} className="card animate-on-scroll" style={{ textAlign: 'center' }}>
            <h4>{contact.title}</h4>
            <p style={{ marginBottom: '1.5rem' }}>{contact.text}</p>
            <button 
              id={contact.id}
              data-button={contact.id}
              className="btn-primary" 
              onClick={contact.action}
            >
              {contact.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="footer" id="section-footer" data-section="footer">
    <div className="footer-content">
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
