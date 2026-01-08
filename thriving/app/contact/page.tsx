'use client';

import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We’ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Contact & Social Data
  const contactMethods = [
    { icon: '📧', title: 'Email', value: 'info@thrivingladies.org', href: 'mailto:info@thrivingladies.org', color: '#3498db' },
    { icon: '📱', title: 'WhatsApp', value: '+256 XXX XXX XXX', href: 'https://wa.me/256XXXXXXXXX', color: '#25D366' },
    { icon: '💬', title: 'Telegram', value: '@thrivingladies_ug', href: 'https://t.me/thrivingladies_ug', color: '#0088cc' },
    { icon: '📍', title: 'Office', value: 'Kampala, Uganda', href: '#', color: '#e74c3c' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/thrivingladies', icon: 'in', color: '#0A66C2' },
    { name: 'Instagram', url: 'https://instagram.com/thrivingladies_ug', icon: 'ig', color: '#E1306C' },
    { name: 'X (Twitter)', url: 'https://twitter.com/thrivingladies', icon: 'x', color: '#000000' },
    { name: 'Facebook', url: 'https://facebook.com/thrivingladiesfoundation', icon: 'fb', color: '#1877F2' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/donate' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
  ];

  // --- Inline Styles ---
  const pageStyle: React.CSSProperties = {
    fontFamily: inter.style.fontFamily,
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
  };

  const heroStyle: React.CSSProperties = {
    position: 'relative',
    height: '50vh',
    minHeight: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    backgroundImage: '/image.png',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const heroOverlay: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6))',
    zIndex: 1,
  };

  const heroContent: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    padding: '0 20px',
    maxWidth: '800px',
  };

  const sectionStyle: React.CSSProperties = {
    padding: '80px 20px',
    flex: 1,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
  };

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    containerStyle.gridTemplateColumns = '1fr';
  }

  const headingStyle: React.CSSProperties = {
    fontSize: '2.4rem',
    fontWeight: 700,
    marginBottom: '40px',
    color: '#1a202c',
    textAlign: 'center',
  };

  const formCardStyle: React.CSSProperties = {
    background: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '22px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    fontSize: '1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    fontFamily: inter.style.fontFamily,
  };

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    minHeight: '160px',
    resize: 'vertical' as const,
    paddingTop: '12px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '14px 32px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600' as const,
    cursor: 'pointer',
    transition: 'background 0.3s',
  };

  const infoCardStyle: React.CSSProperties = {
    background: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  };

  const contactItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '16px 0',
    borderBottom: '1px solid #edf2f7',
  };

  const iconBoxStyle = (color: string): React.CSSProperties => ({
    minWidth: '50px',
    height: '50px',
    borderRadius: '14px',
    background: `${color}15`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    color: color,
  });

  const contactContentStyle: React.CSSProperties = {
    flex: 1,
  };

  const contactTitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: 600 as const,
    marginBottom: '6px',
    color: '#2d3748',
  };

  const contactValueStyle: React.CSSProperties = {
    color: '#4a5568',
    fontSize: '1rem',
    lineHeight: 1.5,
  };

  const linkStyle: React.CSSProperties = {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 500 as const,
  };

  const socialSectionStyle: React.CSSProperties = {
    marginTop: '30px',
    paddingTop: '30px',
    borderTop: '1px solid #edf2f7',
  };

  const socialTitleStyle: React.CSSProperties = {
    fontSize: '1.3rem',
    fontWeight: 600 as const,
    marginBottom: '20px',
    color: '#2d3748',
  };

  const socialIconsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap' as const,
  };

  const socialIconStyle = (color: string): React.CSSProperties => ({
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: `${color}10`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color,
    fontSize: '1.2rem',
    textDecoration: 'none',
    transition: 'transform 0.2s',
  });

  // --- Footer Styles ---
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#0f172a',
    color: '#cbd5e1',
    paddingTop: '60px',
    paddingBottom: '40px',
  };

  const footerContainer: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '40px',
  };

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    footerContainer.gridTemplateColumns = '1fr';
    footerContainer.gap = '30px';
  }

  const footerSectionTitle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '20px',
    color: 'white',
  };

  const footerLinkStyle: React.CSSProperties = {
    display: 'block',
    color: '#94a3b8',
    textDecoration: 'none',
    marginBottom: '10px',
    fontSize: '1rem',
    transition: 'color 0.2s',
  };

  const footerLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#3498db';
  };

  const footerBottomStyle: React.CSSProperties = {
    borderTop: '1px solid #334155',
    paddingTop: '24px',
    marginTop: '40px',
    textAlign: 'center' as const,
    fontSize: '0.9rem',
    color: '#94a3b8',
  };

  return (
    <div style={pageStyle}>
      {/* Hero */}
      <section style={heroStyle}>
        <div style={heroOverlay} />
        <div style={heroContent}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '16px' }}>
            Let’s Build a Better Uganda Together
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            We’re here to listen, collaborate, and create lasting change.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          {/* Form */}
          <div style={formCardStyle}>
            <h2 style={{ ...headingStyle, textAlign: 'left', marginBottom: '30px', fontSize: '2rem' }}>
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} style={formStyle}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
                onFocus={(e) => (e.target.style.borderColor = '#3498db')}
                onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
                onFocus={(e) => (e.target.style.borderColor = '#3498db')}
                onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                style={inputStyle}
                required
                onFocus={(e) => (e.target.style.borderColor = '#3498db')}
                onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={textareaStyle}
                required
                onFocus={(e) => (e.target.style.borderColor = '#3498db')}
                onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
              />
              <button
                type="submit"
                style={buttonStyle}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#2980b9')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#3498db')}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div style={infoCardStyle}>
            <h2 style={{ ...headingStyle, textAlign: 'left', marginBottom: '30px', fontSize: '2rem' }}>
              Connect With Us
            </h2>
            {contactMethods.map((method, i) => (
              <div key={i} style={contactItemStyle}>
                <div style={iconBoxStyle(method.color)}>{method.icon}</div>
                <div style={contactContentStyle}>
                  <div style={contactTitleStyle}>{method.title}</div>
                  <div style={contactValueStyle}>
                    {method.href.startsWith('http') || method.href.startsWith('mailto') ? (
                      <a href={method.href} style={linkStyle} target="_blank" rel="noopener noreferrer">
                        {method.value}
                      </a>
                    ) : (
                      method.value
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div style={socialSectionStyle}>
              <h3 style={socialTitleStyle}>Follow Our Journey</h3>
              <div style={socialIconsStyle}>
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialIconStyle(social.color)}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    {social.icon === 'in' && 'in'}
                    {social.icon === 'ig' && 'ig'}
                    {social.icon === 'x' && '𝕏'}
                    {social.icon === 'fb' && 'f'}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footerStyle}>
        <div style={footerContainer}>
          {/* About */}
          <div>
            <h3 style={footerSectionTitle}>Thriving Ladies Foundation</h3>
            <p style={{ lineHeight: 1.7, color: '#cbd5e1', marginBottom: '20px' }}>
              Empowering girls, women, and youth in Uganda through health dignity, education, and vocational training to break cycles of poverty.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    fontSize: '1.3rem',
                    textDecoration: 'none',
                  }}
                >
                  {social.icon === 'in' && 'in'}
                  {social.icon === 'ig' && 'ig'}
                  {social.icon === 'x' && '𝕏'}
                  {social.icon === 'fb' && 'f'}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={footerSectionTitle}>Quick Links</h3>
            {quickLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                style={footerLinkStyle}
                onMouseEnter={footerLinkHover}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 style={footerSectionTitle}>Contact</h3>
            <p style={{ marginBottom: '10px', color: '#cbd5e1' }}>Kampala, Uganda</p>
            <a
              href="mailto:info@thrivingladies.org"
              style={{ ...footerLinkStyle, color: '#94a3b8' }}
              onMouseEnter={footerLinkHover}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              info@thrivingladies.org
            </a>
            <div style={{ marginTop: '10px' }}>+256 XXX XXX XXX</div>
          </div>

          {/* Legal */}
          <div>
            <h3 style={footerSectionTitle}>Legal</h3>
            {legalLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                style={footerLinkStyle}
                onMouseEnter={footerLinkHover}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div style={footerBottomStyle}>
          &copy; {new Date().getFullYear()} Thriving Ladies Foundation Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}