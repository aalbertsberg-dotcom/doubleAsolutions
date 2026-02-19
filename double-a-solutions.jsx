import React, { useState, useEffect } from 'react';
import { Mail, Phone, Code, Database, Cloud, Zap, CheckCircle, ArrowRight, Menu, X, Globe } from 'lucide-react';

const DoubleASolutions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState(''); // 'submitting', 'success', 'error'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mbdaajzd', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div style={{ 
      fontFamily: '"Outfit", "Segoe UI", sans-serif',
      background: '#0a0e27',
      color: '#e8edf4',
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .tech-grid {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        .glow-effect {
          position: relative;
        }

        .glow-effect::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes slideUp {
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .tech-border {
          position: relative;
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .tech-border::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: linear-gradient(45deg, rgba(6, 182, 212, 0.5), rgba(30, 58, 138, 0.5));
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
        }

        .tech-border:hover::before {
          opacity: 1;
        }

        .pulse-dot {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .nav-link {
          position: relative;
          color: #e8edf4;
          text-decoration: none;
          padding: 0.5rem 0;
          transition: color 0.3s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #06b6d4;
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: #06b6d4;
        }

        .btn-primary {
          background: linear-gradient(135deg, #06b6d4, #0284c7);
          color: white;
          border: none;
          padding: 0.875rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(6, 182, 212, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #06b6d4;
          border: 2px solid #06b6d4;
          padding: 0.875rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(6, 182, 212, 0.1);
          transform: translateY(-2px);
        }

        input, textarea {
          background: rgba(30, 58, 138, 0.2);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: #e8edf4;
          padding: 0.875rem;
          border-radius: 8px;
          width: 100%;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: #06b6d4;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
          
          .mobile-menu {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 250px;
            background: #0f1535;
            transform: translateX(100%);
            transition: transform 0.3s;
            z-index: 1000;
            padding: 2rem;
            box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
          }

          .mobile-menu.open {
            transform: translateX(0);
          }
          
          .btn-primary, .btn-secondary {
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
            width: 100%;
            max-width: 200px;
          }
          
          section {
            padding: 4rem 1rem !important;
          }
        }
        
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          
          .mobile-menu-btn {
            display: none !important;
          }
          
          .mobile-menu {
            display: none !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 2rem !important;
          }
          
          h2 {
            font-size: 1.75rem !important;
          }
          
          .btn-primary, .btn-secondary {
            font-size: 0.85rem;
            padding: 0.7rem 1.2rem;
          }
        }
      `}</style>

      {/* Background Grid */}
      <div className="tech-grid"></div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: scrolled ? 'rgba(10, 14, 39, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(6, 182, 212, 0.2)' : 'none',
        padding: '1.5rem 2rem',
        transition: 'all 0.3s',
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0c1e47', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M 100 20 L 170 60 L 170 140 L 100 180 L 30 140 L 30 60 Z" 
                    fill="url(#navGrad)" 
                    stroke="#06b6d4" 
                    strokeWidth="3" />
              <path d="M 100 35 L 155 65 L 155 135 L 100 165 L 45 135 L 45 65 Z" 
                    fill="none" 
                    stroke="#06b6d4" 
                    strokeWidth="1" 
                    opacity="0.3" />
              <text x="100" y="120" 
                    fontFamily="Arial, sans-serif" 
                    fontSize="70" 
                    fontWeight="bold" 
                    fill="#06b6d4" 
                    textAnchor="middle">AA</text>
              <circle cx="100" cy="20" r="4" fill="#06b6d4" />
              <circle cx="170" cy="60" r="4" fill="#06b6d4" />
              <circle cx="170" cy="140" r="4" fill="#06b6d4" />
            </svg>
            <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>Double-A Solutions</span>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
              <a href="#services" className="nav-link">Services</a>
              <a href="#products" className="nav-link">Products</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#resources" className="nav-link">Resources</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: '#06b6d4',
                cursor: 'pointer'
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '4rem' }}>
          <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#products" className="nav-link" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#resources" className="nav-link" onClick={() => setIsMenuOpen(false)}>Resources</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="glow-effect" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '900px' }} className="fade-in">
          <div style={{ 
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '50px',
            marginBottom: '2rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#06b6d4',
            fontFamily: '"JetBrains Mono", monospace'
          }}>
            <span className="pulse-dot" style={{ display: 'inline-block', width: '8px', height: '8px', background: '#06b6d4', borderRadius: '50%', marginRight: '0.5rem' }}></span>
            IT CONSULTING & SOLUTIONS
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            background: 'linear-gradient(135deg, #e8edf4, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            padding: '0 1rem'
          }}>
            IT That Actually Works.
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 4vw, 1.25rem)',
            color: '#94a3b8',
            marginBottom: '2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            padding: '0 1.5rem'
          }}>
            Your technical partner for security, infrastructure, and strategic IT planning. I help businesses navigate technology decisions with confidence and build systems that are reliable, secure, and built to last.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get Started <ArrowRight size={20} style={{ marginLeft: '0.5rem', display: 'inline' }} />
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
              View Services
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginTop: '4rem',
            maxWidth: '700px',
            margin: '4rem auto 0',
            padding: '0 1rem'
          }}>
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: 'M365', label: 'Certified Expert' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', animationDelay: `${i * 0.1}s` }} className="slide-up">
                <div style={{
                  fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                  fontWeight: '700',
                  color: '#06b6d4',
                  fontFamily: '"JetBrains Mono", monospace'
                }}>
                  {stat.number}
                </div>
                <div style={{ color: '#94a3b8', fontSize: 'clamp(0.7rem, 2vw, 0.875rem)', marginTop: '0.5rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '8rem 2rem',
        background: 'rgba(15, 21, 53, 0.5)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Enterprise Solutions
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Specialized Microsoft infrastructure services backed by real-world enterprise experience
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: <Cloud size={32} />,
                title: 'Microsoft 365 Consulting',
                description: 'Complete Microsoft 365 administration, tenant setup, migrations, and optimization. From Exchange Online to Teams, SharePoint to Azure AD - expert guidance for your cloud journey.',
                features: ['Tenant Management', 'Email Migration', 'Teams & SharePoint', 'Hybrid Configuration']
              },
              {
                icon: <Mail size={32} />,
                title: 'Email Systems & Security',
                description: 'Email infrastructure design, implementation, and security. Exchange Server, Exchange Online, mail flow optimization, and protection against threats.',
                features: ['Exchange Administration', 'Mail Flow & Security', 'Spam & Malware Protection', 'Email Archiving']
              },
              {
                icon: <Globe size={32} />,
                title: 'Website Design & Development',
                description: 'Professional website design, development, and maintenance. From landing pages to full business websites - modern, responsive, and optimized for your needs.',
                features: ['Custom Website Design', 'Responsive Development', 'Website Updates', 'Performance Optimization']
              },
              {
                icon: <Database size={32} />,
                title: 'IT Strategy & Advisory',
                description: 'Strategic IT planning, infrastructure assessments, and project management. Get expert advice on technology decisions, budgets, and implementation roadmaps.',
                features: ['Infrastructure Planning', 'Technology Assessment', 'Project Management', 'Budget Planning']
              },
              {
                icon: <Code size={32} />,
                title: 'Automation & Scripting',
                description: 'PowerShell automation for Active Directory, Microsoft 365, and system administration. Streamline operations, reduce errors, and save time with custom scripts.',
                features: ['PowerShell Development', 'AD Automation', 'Report Generation', 'Task Scheduling']
              }
            ].map((service, i) => (
              <div
                key={i}
                className="tech-border hover-lift"
                style={{
                  background: 'rgba(30, 58, 138, 0.1)',
                  padding: '2.5rem',
                  borderRadius: '16px',
                  animationDelay: `${i * 0.1}s`
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(2, 132, 199, 0.2))',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06b6d4',
                  marginBottom: '1.5rem'
                }}>
                  {service.icon}
                </div>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {service.title}
                </h3>
                
                <p style={{
                  color: '#94a3b8',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {service.features.map((feature, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: '#e8edf4',
                      fontSize: '0.875rem'
                    }}>
                      <CheckCircle size={16} style={{ color: '#06b6d4', flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Request a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={{
        padding: '8rem 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Tools & Resources
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Custom automation and tools to streamline your IT operations
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(30, 58, 138, 0.1))',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '16px',
            padding: '3rem',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <Zap size={48} style={{ color: '#06b6d4', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>
              Custom Solutions Available
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginBottom: '2rem' }}>
              Need custom PowerShell scripts, automation tools, or documentation templates? I can develop tailored solutions for your specific IT needs.
            </p>
            <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Discuss Your Needs
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '8rem 2rem',
        background: 'rgba(15, 21, 53, 0.5)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                Enterprise Expertise.<br/>Personal Service.
              </h2>
              <p style={{
                color: '#94a3b8',
                fontSize: '1.125rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                With 15 years of experience managing large-scale Microsoft environments, I offer independent IT consulting for businesses that need more than just "support." Whether it's strategic planning, security, or cloud implementation, I provide the technical leadership necessary to keep your business secure and efficient.
              </p>
              
              <div style={{
                background: 'rgba(6, 182, 212, 0.05)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#06b6d4',
                  marginBottom: '1rem'
                }}>
                  Meet the Expert
                </h3>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#e8edf4'
                }}>
                  Andy Aalbertsberg | Founder & Lead Consultant
                </p>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  marginBottom: '1rem'
                }}>
                  I'm a hands-on technical lead who believes IT should be a business driver, not a bottleneck. With over 15 years of experience in the Microsoft ecosystem—from small-scale migrations to enterprise-level infrastructure—I focus on delivering high-performance solutions that are secure, scalable, and easy to manage.
                </p>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '1rem',
                  lineHeight: '1.8'
                }}>
                  When I'm not hardening environments or optimizing cloud workflows, you'll usually find me at my triple-monitor setup, staying current with the latest tech trends or managing my own digital workspace with the same precision I bring to my clients.
                </p>
              </div>
              
              <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Work With Me
              </button>
            </div>

            <div style={{
              background: 'rgba(30, 58, 138, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '16px',
              padding: '2.5rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem' }}>
                Core Expertise
              </h3>
              {[
                'Microsoft 365 Administration',
                'Exchange Server & Exchange Online',
                'Active Directory & Azure AD',
                'Security & Compliance',
                'Website Design & Development',
                'Email Systems & Mail Flow',
                'PowerShell Scripting & Automation',
                'IT Strategy & Planning'
              ].map((skill, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: i % 2 === 0 ? 'rgba(6, 182, 212, 0.05)' : 'transparent',
                  borderRadius: '8px'
                }}>
                  <CheckCircle size={20} style={{ color: '#06b6d4', flexShrink: 0 }} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources/Blog Section */}
      <section id="resources" style={{
        padding: '8rem 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Resources & Insights
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Technical guides and documentation from real-world implementations
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(30, 58, 138, 0.1))',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '16px',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>
              Blog Coming Soon
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Technical guides, best practices, and insights from real-world IT projects and implementations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                'Microsoft 365 Best Practices',
                'Security & Compliance',
                'Email System Optimization',
                'IT Strategy Planning'
              ].map((topic, i) => (
                <div key={i} style={{
                  background: 'rgba(6, 182, 212, 0.1)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem'
                }}>
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '8rem 2rem',
        background: 'rgba(15, 21, 53, 0.5)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Ready to Modernize Your Infrastructure?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
              Whether you need a full Microsoft 365 migration, a security audit, or just a reliable technical partner, I'm here to help.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
            background: 'rgba(30, 58, 138, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '16px',
            padding: '3rem'
          }}>
            {formStatus === 'success' && (
              <div style={{
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid #06b6d4',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1.5rem',
                color: '#06b6d4',
                textAlign: 'center'
              }}>
                ✓ Thanks! I'll get back to you soon.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid #ef4444',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1.5rem',
                color: '#ef4444',
                textAlign: 'center'
              }}>
                Oops! Something went wrong. Please try again.
              </div>
            )}
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#e8edf4', fontWeight: '600' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#e8edf4', fontWeight: '600' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@company.com"
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#e8edf4', fontWeight: '600' }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project or infrastructure needs..."
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? 'Sending...' : "Let's Make IT Work"}
            </button>
          </form>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '3rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <Mail size={24} style={{ color: '#06b6d4', marginBottom: '0.5rem' }} />
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Email</div>
              <div style={{ fontWeight: '600', marginTop: '0.25rem' }}>contact@aalbertsberg.us</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Phone size={24} style={{ color: '#06b6d4', marginBottom: '0.5rem' }} />
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Phone</div>
              <div style={{ fontWeight: '600', marginTop: '0.25rem' }}>Available upon request</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        borderTop: '1px solid rgba(6, 182, 212, 0.2)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <svg width="32" height="32" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0c1e47', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M 100 20 L 170 60 L 170 140 L 100 180 L 30 140 L 30 60 Z" 
                    fill="url(#footerGrad)" 
                    stroke="#06b6d4" 
                    strokeWidth="3" />
              <path d="M 100 35 L 155 65 L 155 135 L 100 165 L 45 135 L 45 65 Z" 
                    fill="none" 
                    stroke="#06b6d4" 
                    strokeWidth="1" 
                    opacity="0.3" />
              <text x="100" y="120" 
                    fontFamily="Arial, sans-serif" 
                    fontSize="70" 
                    fontWeight="bold" 
                    fill="#06b6d4" 
                    textAnchor="middle">AA</text>
              <circle cx="100" cy="20" r="4" fill="#06b6d4" />
              <circle cx="170" cy="60" r="4" fill="#06b6d4" />
              <circle cx="170" cy="140" r="4" fill="#06b6d4" />
            </svg>
            <span style={{ fontSize: '1.25rem', fontWeight: '700' }}>Double-A Solutions</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
            © 2026 Double-A Solutions. Expert IT Consulting & Solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DoubleASolutions;