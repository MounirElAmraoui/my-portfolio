import React, { useEffect } from 'react'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import Profile from './components/profile/Profile'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from "./components/projects/Projects";
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


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