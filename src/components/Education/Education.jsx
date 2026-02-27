import React from 'react'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import './Education.css'

const Education = () => {
  const educations = [
    {
      degree: "Diplôme d'Ingénieur - Génie Informatique",
      school: "École Nationale des Sciences Appliquées",
      location: "Maroc",
      period: "2021 - Présent",
      status: "En cours",
      description: "Formation d'excellence couvrant le développement logiciel, l'architecture des systèmes d'information, l'intelligence artificielle et la cybersécurité.",
      achievements: ["Major de promotion", "Projet de fin d'études en cours"],
      color: "#3b82f6"
    },
    {
      degree: "Classes Préparatoires aux Grandes Écoles",
      school: "Lycée Mohammed VI",
      location: "Maroc",
      period: "2019 - 2021",
      status: "Terminé",
      description: "CPGE MPSI/MP - Fondamentaux scientifiques rigoureux, méthodologie analytique et capacité de travail intensive.",
      achievements: ["Admis aux concours nationaux", "Mention Très Bien au bac"],
      color: "#8b5cf6"
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Qualifiant",
      location: "Maroc",
      period: "2019",
      status: "Terminé",
      description: "Spécialité Mathématiques avec option Sciences de l'Ingénieur.",
      achievements: ["Mention Très Bien", "Major de la région"],
      color: "#ec4899"
    }
  ];

  const certifications = [
    { name: "React - The Complete Guide", issuer: "Udemy", year: "2024" },
    { name: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2023" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="reveal">
          <div className="section-header">
            <span className="section-label">Parcours</span>
            <h2 className="section-title">
              Formation & <span className="gradient-text">Certifications</span>
            </h2>
          </div>

          <div className="education__content">
            <div className="education__main">
              {educations.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="education__item"
                  style={{ '--edu-color': edu.color }}
                >
                  <div className="education__timeline">
                    <div className="education__timeline-dot"></div>
                    {idx !== educations.length - 1 && <div className="education__timeline-line"></div>}
                  </div>
                  
                  <div className="education__card">
                    <div className="education__header">
                      <div className="education__icon">
                        <GraduationCap size={24} />
                      </div>
                      <div className="education__meta">
                        <span className={`education__status education__status--${edu.status === 'En cours' ? 'current' : 'past'}`}>
                          {edu.status}
                        </span>
                        <span className="education__period">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="education__degree">{edu.degree}</h3>
                    <p className="education__school">
                      <MapPin size={16} />
                      {edu.school}, {edu.location}
                    </p>
                    
                    <p className="education__description">{edu.description}</p>
                    
                    <div className="education__achievements">
                      {edu.achievements.map((achievement, i) => (
                        <span key={i} className="education__achievement">
                          <Award size={14} />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="education__sidebar">
              <h4>Certifications</h4>
              <div className="education__certs">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="education__cert">
                    <div className="education__cert-icon">🏆</div>
                    <div className="education__cert-info">
                      <span className="education__cert-name">{cert.name}</span>
                      <span className="education__cert-issuer">{cert.issuer} • {cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education