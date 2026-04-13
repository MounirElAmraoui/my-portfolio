import React, { useState } from 'react'
import { Mail, Phone, Linkedin, Github, Send, MapPin, Clock } from 'lucide-react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Création du lien mailto avec les données du formulaire
    const subject = encodeURIComponent(formData.subject || "Nouveau message de contact");
    const body = encodeURIComponent(
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Redirection vers le client mail par défaut
    window.location.href = `mailto:mounir.el.amraoui186@gmail.com?subject=${subject}&body=${body}`;
    
    // Simulation d'envoi pour l'interface
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contacts = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "mounir.el.amraoui186@gmail.com",
      href: "mailto:mounir.el.amraoui186@gmail.com",
      color: "#3b82f6"
    },
    {
      icon: <Phone size={24} />,
      label: "Téléphone",
      value: "+212 6 35 50 55 18",
      href: "tel:+212635505518",
      color: "#10b981"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Mounir El Amraoui",
      href: "https://www.linkedin.com/in/mounir-el-amraoui-42b3203aa/",
      color: "#0a66c2"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "@MounirElAmraoui",
      href: "https://github.com/MounirElAmraoui",
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__bg"></div>
      <div className="container">
        <div className="reveal">
          <div className="section-header">
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Travaillons <span className="gradient-text">ensemble</span>
            </h2>
            <p className="section-subtitle">
              Vous avez un projet en tête ou une opportunité à me proposer ? 
              Discutons-en !
            </p>
          </div>

          <div className="contact__content">
            <div className="contact__info">
              <div className="contact__cards">
                {contacts.map((contact, idx) => (
                  <a 
                    key={idx}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact__card"
                    style={{ '--contact-color': contact.color }}
                  >
                    <div className="contact__card-icon">
                      {contact.icon}
                    </div>
                    <div className="contact__card-info">
                      <span className="contact__card-label">{contact.label}</span>
                      <span className="contact__card-value">{contact.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact__availability">
                <div className="contact__availability-header">
                  <Clock size={20} />
                  <h4>Disponibilité</h4>
                </div>
                <p>
                  Je suis actuellement disponible pour des missions freelance, 
                  des stages ou des collaborations sur des projets innovants.
                </p>
                <div className="contact__location">
                  <MapPin size={16} />
                  <span>Basé au Maroc, ouvert au remote international</span>
                </div>
              </div>
            </div>

            <div className="contact__form-wrapper">
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3>Envoyez-moi un message</h3>
                
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre opportunité..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`contact__submit ${isSubmitting ? 'contact__submit--loading' : ''} ${submitted ? 'contact__submit--success' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="contact__spinner"></span>
                  ) : submitted ? (
                    <>Message envoyé !</>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact