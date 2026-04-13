import React, { useEffect, useState } from 'react'
import { Code, Mail, ChevronDown, Sparkles } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Background elements */}
      <div className="hero__bg">
        <div className="hero__gradient"></div>
        <div className="hero__grid"></div>
        <div className="hero__particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="hero__particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating orbs */}
      <div 
        className="hero__orb hero__orb--1"
        style={{
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
        }}
      />
      <div 
        className="hero__orb hero__orb--2"
        style={{
          transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)`
        }}
      />
      
      <div className="hero__content">
        <div className="hero__badge animate-fade-in-down">
          <Sparkles size={16} />
          <span>Disponible pour opportunités</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__greeting animate-fade-in-up delay-100">Bonjour, je suis</span>
          <span 
            className="hero__name animate-fade-in-up delay-200"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            }}
          >
            El Amraoui Mounir
          </span>
          <span className="hero__role animate-fade-in-up delay-300">
            <span className="hero__role-text">Futur Ingénieur</span>
            <span className="hero__role-highlight">Informatique</span>
          </span>
        </h1>

        <p className="hero__description animate-fade-in-up delay-400">
          Passionné par le développement web moderne et l'innovation technologique. 
          Je crée des expériences digitales performantes et élégantes.
        </p>

        <div className="hero__stats animate-fade-in-up delay-500">
          <div className="hero__stat">
            <span className="hero__stat-number">3+</span>
            <span className="hero__stat-label">Années d'études</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">5+</span>
            <span className="hero__stat-label">Projets réalisés</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Passion</span>
          </div>
        </div>
        
        <div className="hero__buttons animate-fade-in-up delay-600">
          <a href="#projects" className="btn btn-primary hero__btn">
            <Code size={20} />
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn-secondary hero__btn">
            <Mail size={20} />
            Me contacter
          </a>
        </div>

        <div className="hero__tech-stack animate-fade-in-up delay-700">
          <span className="hero__tech-label">Tech Stack</span>
          <div className="hero__tech-icons">
            {['React', 'Node.js', 'JavaScript', 'Python'].map((tech, i) => (
              <span key={tech} className="hero__tech-item" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll animate-float">
        <a href="#profile" className="hero__scroll-link">
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel"></div>
          </div>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  )
}

export default Hero