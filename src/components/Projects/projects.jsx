import React, { useState } from 'react'
import { Github, ExternalLink, Globe, Cpu, Layers } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Engineering Career Club",
      category: "web",
      description: "Plateforme complète développée pour présenter un club universitaire dédié au développement professionnel. Le site permet de découvrir les formations, conférences et programmes d'accompagnement carrière proposés aux étudiants en ingénierie.",
      technologies: ["React.js"],
      github: "https://github.com/MounirElAmraoui",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7431387412737527808/?originTrackingId=GBHRkoqvcbn4f%2FOexBGpnw%3D%3D",
      image: "career",
      featured: true,
      stats: { views: "", likes: 41 }
    },
    {
      id: 2,
      title: "TaskMaster Pro",
      category: "app",
      description: "Application de gestion de tâches avec tableau Kanban, drag & drop, et synchronisation en temps réel. Interface intuitive et animations fluides pour une expérience utilisateur optimale.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/MounirElAmraoui",
      demo: "#",
      image: "task",
      featured: false,
      stats: { views: "800", likes: 32 }
    },
    {
      id: 3,
      title: "DataViz Dashboard",
      category: "data",
      description: "Tableau de bord interactif pour la visualisation de données complexes. Graphiques dynamiques, filtres avancés et export de rapports en temps réel.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      github: "https://github.com/MounirElAmraoui",
      demo: "#",
      image: "data",
      featured: false,
      stats: { views: "600", likes: 28 }
    },
    {
      id: 4,
      title: "Projet à venir",
      category: "web",
      description: "Espace réservé pour un futur projet innovant. En cours de développement... Suivez mon GitHub pour être tenu au courant !",
      technologies: ["À déterminer"],
      github: "#",
      demo: "#",
      image: "placeholder",
      comingSoon: true,
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous', icon: <Layers size={16} /> },
    { id: 'web', label: 'Web', icon: <Globe size={16} /> },
    { id: 'app', label: 'Applications', icon: <Cpu size={16} /> },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter || p.comingSoon);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="reveal">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">
              Mes <span className="gradient-text">Réalisations</span>
            </h2>
            <p className="section-subtitle">
              Découvrez une sélection de mes projets les plus récents et significatifs
            </p>
          </div>

          <div className="projects__filters">
            {filters.map(f => (
              <button
                key={f.id}
                className={`projects__filter ${filter === f.id ? 'projects__filter--active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.icon}
                {f.label}
              </button>
            ))}
          </div>

          <div className="projects__grid">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id}
                className={`projects__card ${project.featured ? 'projects__card--featured' : ''} ${project.comingSoon ? 'projects__card--soon' : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="projects__image">
                  <div className="projects__pattern"></div>
                  {project.comingSoon ? (
                    <Cpu size={48} className="projects__icon projects__icon--muted" />
                  ) : (
                    <Globe size={48} className="projects__icon" />
                  )}
                  
                  {project.featured && (
                    <span className="projects__badge projects__badge--featured">★ Featured</span>
                  )}
                  {project.comingSoon && (
                    <span className="projects__badge projects__badge--soon">Bientôt</span>
                  )}

                  {!project.comingSoon && hoveredProject === project.id && (
                    <div className="projects__overlay">
                      <a href={project.demo} className="projects__overlay-btn">
                        <ExternalLink size={20} />
                        Voir la démo
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="projects__content">
                  <div className="projects__header">
                    <h3 className="projects__title">{project.title}</h3>
                    {!project.comingSoon && (
                      <div className="projects__stats">
                        <span>👁 {project.stats.views}</span>
                        <span>♥ {project.stats.likes}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="projects__description">
                    {project.description}
                  </p>
                  
                  <div className="projects__tags">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="projects__tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="projects__links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      <Github size={18} />
                      <span>Code source</span>
                    </a>
                    {!project.comingSoon && (
                      <a 
                        href={project.demo}
                        className="projects__link projects__link--primary"
                      >
                        <ExternalLink size={18} />
                        <span>Live demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="projects__more">
            <a href="https://github.com/MounirElAmraoui" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Github size={20} />
              Voir plus sur GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects