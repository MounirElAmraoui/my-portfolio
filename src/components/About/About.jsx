import React from 'react'
import { Target, Lightbulb, Rocket, Code2 } from 'lucide-react'
import './about.css'

const About = () => {
  const strengths = [
    {
      icon: <Code2 size={32} />,
      title: "Clean Code",
      description: "J'accorde une importance capitale à l'écriture de code propre, maintenable et bien documenté."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Esprit d'analyse",
      description: "Capacité à décomposer des problèmes complexes en solutions simples et efficaces."
    },
    {
      icon: <Rocket size={32} />,
      title: "Autonomie",
      description: "Capable de prendre des initiatives et de mener des projets de bout en bout avec rigueur."
    },
    {
      icon: <Target size={32} />,
      title: "Orienté résultats",
      description: "Focus sur la livraison de valeur avec une attention particulière aux détails et à la qualité."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="reveal">
          <div className="section-header">
            <span className="section-label">À propos</span>
            <h2 className="section-title">
              Ce qui me <span className="gradient-text">définit</span>
            </h2>
            <p className="section-subtitle">
              Plus qu'un simple développeur, je suis un créateur de solutions digitales 
              qui allie technique et créativité
            </p>
          </div>

          <div className="about__content">
            <div className="about__text">
              <div className="about__intro">
                <p className="about__lead">
                  Étudiant en <span className="about__highlight">Génie Informatique</span> avec une 
                  passion dévorante pour le développement web moderne. Je combine une solide 
                  formation académique avec une veille technologique constante pour rester 
                  à la pointe des innovations.
                </p>
                <p>
                  Mon parcours m'a permis de développer une approche méthodique du développement 
                  tout en cultivant ma créativité. Je crois fermement que les meilleures applications 
                  naissent de l'alliance entre code de qualité et expérience utilisateur soignée.
                </p>
                <p>
                  Actuellement à la recherche d'opportunités pour évoluer vers un poste de 
                  <span className="about__highlight"> Développeur Full-Stack</span>, je suis prêt 
                  à m'investir pleinement dans des projets ambitieux qui me permettront de 
                  continuer à progresser tout en apportant une réelle valeur ajoutée.
                </p>
              </div>

              <div className="about__quote">
                <blockquote>
                  "Le code est comme l'humour. Quand on doit l'expliquer, c'est mauvais."
                  <cite>— Cory House</cite>
                </blockquote>
              </div>
            </div>

            <div className="about__strengths">
              {strengths.map((strength, idx) => (
                <div 
                  key={idx} 
                  className="about__strength-card"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="about__strength-icon">
                    {strength.icon}
                  </div>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About