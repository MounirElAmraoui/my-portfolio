import React from 'react'
import { Briefcase, Clock, MapPin, Calendar } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      type: "stage",
      title: "Stage Développeur Web",
      company: "À venir",
      location: "Recherche active",
      period: "2024",
      description: "Je suis actuellement à la recherche d'un stage de fin d'études pour mettre en pratique mes compétences et contribuer à des projets concrets.",
      skills: ["React", "Node.js", "Agile"],
      color: "#3b82f6"
    }
  ];

  const opportunities = [
    "Stage de fin d'études (4-6 mois)",
    "Alternance en développement web",
    "Projet freelance",
    "Collaboration open source"
  ];

  return (
    <section className="experience">
      <div className="container">
        <div className="reveal">
          <div className="section-header">
            <span className="section-label">Expérience</span>
            <h2 className="section-title">
              Mon <span className="gradient-text">Parcours Pro</span>
            </h2>
            <p className="section-subtitle">
              En construction... mais prêt à relever de nouveaux défis !
            </p>
          </div>

          <div className="experience__content">
            <div className="experience__timeline">
              {experiences.map((exp, idx) => (
                <div key={idx} className="experience__item" style={{ '--exp-color': exp.color }}>
                  <div className="experience__marker">
                    <Briefcase size={20} />
                  </div>
                  
                  <div className="experience__card">
                    <div className="experience__header">
                      <h3>{exp.title}</h3>
                      <span className="experience__badge">{exp.type}</span>
                    </div>
                    
                    <div className="experience__company">
                      <span className="experience__company-name">{exp.company}</span>
                      <span className="experience__divider">•</span>
                      <span className="experience__location">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                    
                    <div className="experience__period">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    
                    <p className="experience__description">{exp.description}</p>
                    
                    <div className="experience__skills">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="experience__skill">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="experience__future">
                <div className="experience__future-icon">
                  <Clock size={24} />
                </div>
                <div className="experience__future-content">
                  <h4>Votre entreprise ici ?</h4>
                  <p>Je suis ouvert aux opportunités et prêt à m'investir dans votre équipe.</p>
                </div>
              </div>
            </div>

            <div className="experience__opportunities">
              <h4>Opportunités recherchées</h4>
              <ul>
                {opportunities.map((opp, idx) => (
                  <li key={idx}>
                    <span className="experience__check">✓</span>
                    {opp}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="btn btn-primary experience__cta">
                Proposer une opportunité
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience