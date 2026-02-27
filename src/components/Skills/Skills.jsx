import React, { useState } from 'react'
import { Code, Globe, Terminal, Database, Palette, Server } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      color: "#3b82f6",
      skills: [
        { name: "React.js", level: 85, description: "Hooks, Context, Redux Toolkit" },
        { name: "JavaScript (ES6+)", level: 90, description: "Async/Await, Modules, DOM" },
        { name: "HTML5 / CSS3", level: 92, description: "Sémantique, Flexbox, Grid" },
        { name: "Tailwind CSS", level: 88, description: "Responsive, Custom config" },
        { name: "TypeScript", level: 70, description: "Types, Interfaces, Generics" }
      ]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      color: "#8b5cf6",
      skills: [
        { name: "Node.js", level: 75, description: "Express, API REST" },
        { name: "Python", level: 80, description: "Scripts, Data processing" },
        { name: "SQL", level: 78, description: "MySQL, PostgreSQL" },
        { name: "MongoDB", level: 65, description: "NoSQL, Mongoose" }
      ]
    },
    {
      title: "Outils & DevOps",
      icon: <Terminal size={24} />,
      color: "#06b6d4",
      skills: [
        { name: "Git & GitHub", level: 88, description: "Workflow, CI/CD basics" },
        { name: "VS Code", level: 95, description: "Extensions, Debugging" },
        { name: "Docker", level: 60, description: "Containers, Images" },
        { name: "Figma", level: 75, description: "UI Design, Prototypage" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Palette size={24} />,
      color: "#ec4899",
      skills: [
        { name: "Résolution de problèmes", level: 90 },
        { name: "Travail en équipe", level: 88 },
        { name: "Communication", level: 85 },
        { name: "Gestion du temps", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="reveal">
          <div className="section-header">
            <span className="section-label">Expertise</span>
            <h2 className="section-title">
              Mes <span className="gradient-text">Compétences</span>
            </h2>
            <p className="section-subtitle">
              Un arsenal technologique moderne pour donner vie à vos projets les plus ambitieux
            </p>
          </div>

          <div className="skills__grid">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="skills__category"
                style={{ '--category-color': category.color }}
              >
                <div className="skills__header">
                  <div className="skills__icon" style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <h3 className="skills__title">{category.title}</h3>
                </div>
                
                <div className="skills__list">
                  {category.skills.map((skill, skillIdx) => (
                    <div 
                      key={skillIdx} 
                      className="skills__item"
                      onMouseEnter={() => setHoveredSkill(`${idx}-${skillIdx}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="skills__info">
                        <span className="skills__name">{skill.name}</span>
                        <span className="skills__percent">{skill.level}%</span>
                      </div>
                      
                      <div className="skills__progress-bg">
                        <div 
                          className="skills__progress-bar"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: category.color
                          }}
                        />
                      </div>
                      
                      {skill.description && hoveredSkill === `${idx}-${skillIdx}` && (
                        <div className="skills__description">
                          {skill.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills__learning">
            <h4>En cours d'apprentissage</h4>
            <div className="skills__learning-tags">
              <span className="skills__learning-tag">Next.js</span>
              <span className="skills__learning-tag">GraphQL</span>
              <span className="skills__learning-tag">AWS</span>
              <span className="skills__learning-tag">Three.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills