import React, { useState } from 'react'
import { MapPin, Calendar, Mail, Download, User, Briefcase, GraduationCap, Heart } from 'lucide-react'
import './Profile.css'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: <User size={18} /> },
    { id: 'background', label: 'Parcours', icon: <GraduationCap size={18} /> },
    { id: 'interests', label: 'Centres d\'intérêt', icon: <Heart size={18} /> },
  ];

  const profileData = {
    fullName: "El Amraoui Mounir",
    title: "Étudiant en Génie Informatique",
    location: "Maroc",
    email: "mounir.el.amraoui186@gmail.com",
    birthDate: "2002",
    languages: ["Français (B2)", "Arabe (Langue maternelle)", "Anglais (B1)"],
    availability: "Disponible pour stage",
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="profile__overview animate-fade-in">
            <div className="profile__info-grid">
              <div className="profile__info-item">
                <MapPin size={20} />
                <div>
                  <span className="profile__info-label">Localisation</span>
                  <span className="profile__info-value">{profileData.location}</span>
                </div>
              </div>
              <div className="profile__info-item">
                <Calendar size={20} />
                <div>
                  <span className="profile__info-label">Âge</span>
                  <span className="">20 ans</span>
                </div>
              </div>
              <div className="profile__info-item">
                <Mail size={20} />
                <div>
                  <span clasprofile__info-valuesName="profile__info-label">Email</span>
                  <a className='profile__info-value' href="mailto:mounir.el.amraoui186@gmail.com">
                    Email 2
                  </a>
                </div>
              </div>
              <div className="profile__info-item">
                <Briefcase size={20} />
                <div>
                  <span className="profile__info-label">Statut</span>
                  <span className="profile__info-value profile__info-value--available">
                    <span className="profile__status-dot"></span>
                    {profileData.availability}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="profile__bio">
              <h4>Ma vision</h4>
              <p>
                En tant qu'étudiant passionné par l'informatique, je crois fermement que la technologie 
                doit être au service de l'humain. Mon objectif est de devenir un développeur capable 
                de créer des solutions innovantes qui résolvent des problèmes concrets et améliorent 
                le quotidien des utilisateurs.
              </p>
            </div>
          </div>
        );
      
      case 'background':
        return (
          <div className="profile__background animate-fade-in">
            <div className="profile__timeline">
              <div className="profile__timeline-item">
                <div className="profile__timeline-marker"></div>
              </div>
              <div className="profile__timeline-item">
                <div className="profile__timeline-marker"></div>
                <div className="profile__timeline-content">
                  <span className="profile__timeline-date">2019 - 2021</span>
                  <h4>Classes Préparatoires intégré de l'ENSAT</h4>
                  <p> Fondamentaux scientifiques rigoureux et méthodologie de travail.</p>
                </div>
              </div>
              <div className="profile__timeline-item">
                <div className="profile__timeline-marker"></div>
                <div className="profile__timeline-content">
                  <span className="profile__timeline-date">2019</span>
                  <h4>Baccalauréat Scientifique</h4>
                  <p>Mention Très Bien - Spécialité science physique en bnou Zaydoun </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'interests':
        return (
          <div className="profile__interests animate-fade-in">
            <div className="profile__interests-grid">
              <div className="profile__interest-card">
                <div className="profile__interest-icon">💻</div>
                <h4>Dev. Web Moderne</h4>
                <p>Passionné par les nouvelles technologies frontend et l'expérience utilisateur</p>
              </div>
              <div className="profile__interest-card">
                <div className="profile__interest-icon">🤖</div>
                <h4>Intelligence Artificielle</h4>
                <p>Fasciné par le machine learning et ses applications pratiques</p>
              </div>
              <div className="profile__interest-card">
                <div className="profile__interest-icon">📚</div>
                <h4>Veille Technologique</h4>
                <p>Toujours à l'affût des dernières innovations et bonnes pratiques</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="profile" className="profile">
      <div className="container">
        <div className="reveal">
          <div className="section-header">
            <span className="section-label">Profil</span>
            <h2 className="section-title">
              Qui suis-<span className="gradient-text">je</span> ?
            </h2>
          </div>


          <div className="profile__container glass-card">
            <div className="profile__sidebar">
              <div className="profile__avatar-container">
                <div className="profile__avatar">
                  <div className="profile__avatar-ring">
                  <img id="profile " src="https://media.licdn.com/dms/image/v2/D5603AQG6I2SJYqbKtQ/profile-displayphoto-scale_400_400/B56Zwesln.HAAg-/0/1770041532486?e=1773878400&v=beta&t=V8kZp6GDAI6b9RrxKviedR5kQJY8mxP5gTHq62JF7hg" alt="Profile " />
                  </div>
                </div>
                <div className="profile__badge-verified">✓</div>
              </div>
              
              <h3 className="profile__name">{profileData.fullName}</h3>
              <p className="profile__title">{profileData.title}</p>
              
              <div className="profile__languages">
                <h5>Langues</h5>
                <div className="profile__language-tags">
                  {profileData.languages.map((lang, i) => (
                    <span key={i} className="profile__language-tag">{lang}</span>
                  ))}
                </div>
              </div>

              <a href="/cv.pdf" className="profile__download-btn" download>
                <Download size={18} />
                Télécharger CV
              </a>
            </div>

            <div className="profile__main">
              <div className="profile__tabs">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`profile__tab ${activeTab === tab.id ? 'profile__tab--active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="profile__content">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile