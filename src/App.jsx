import React, { useEffect } from 'react'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



function App() {
  useEffect(() => {
    // Intersection Observer pour les animations au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Ajouter animation stagger aux enfants si présent
          const staggerChildren = entry.target.querySelectorAll('.stagger-child');
          staggerChildren.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-fade-in-up');
              child.style.opacity = '1';
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Navigation />
      <main>
        <Hero />
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
      
    </div>
  )
}

export default App