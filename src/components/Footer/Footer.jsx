import React from 'react'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__logo">El Amraoui Mounir</h3>
            <p className="footer__tagline">Futur Ingénieur Informatique</p>
            <p className="footer__description">
              Développeur passionné créant des expériences web modernes et performantes.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__section">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#hero">Accueil</a></li>
                <li><a href="#profile">Profil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Projets</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:mounir.el.amraoui186@gmail.com">Email</a></li>
                <li><a href="tel:+212635505518">Téléphone</a></li>
                <li><a href="#contact">Formulaire</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4>Réseaux</h4>
              <div className="footer__social">
                <a href="https://github.com/MounirElAmraoui" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mounir-el-amraoui-42b3203aa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:mounir.el.amraoui186@gmail.com" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} El Amraoui Mounir. Fait avec 
            <Heart size={14} className="footer__heart" /> 
            et beaucoup de café.
          </p>
          
          <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Retour en haut">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer