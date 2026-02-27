import React, { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import './Navigation.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Détection de la section active
      const sections = ['hero', 'profile', 'about', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Accueil', href: '#hero', id: 'hero' },
    { name: 'Profil', href: '#profile', id: 'profile' },
    { name: 'À propos', href: '#about', id: 'about' },
    { name: 'Compétences', href: '#skills', id: 'skills' },
    { name: 'Projets', href: '#projects', id: 'projects' },
    { name: 'Formation', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navigation ${scrolled ? 'navigation--scrolled' : ''}`}>
      <div className="navigation__container">
        <a href="#hero" className="navigation__logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <Code2 size={28} />
          <span>EM</span>
        </a>
        
        <div className="navigation__desktop">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`navigation__link ${activeSection === link.id ? 'navigation__link--active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
              {activeSection === link.id && <span className="navigation__indicator" />}
            </a>
          ))}
        </div>

        <button 
          className="navigation__mobile-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`navigation__hamburger ${isOpen ? 'navigation__hamburger--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <div className={`navigation__mobile ${isOpen ? 'navigation__mobile--open' : ''}`}>
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            className={`navigation__mobile-link ${activeSection === link.id ? 'navigation__mobile-link--active' : ''}`}
            onClick={(e) => handleNavClick(e, link.href)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navigation