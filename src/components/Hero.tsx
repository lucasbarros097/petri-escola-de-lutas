import { MessageCircle, User, MapPin } from 'lucide-react';
import logoImg from '../assets/images/logo.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content glass" style={{ padding: '40px 28px', borderRadius: '24px', background: 'rgba(10, 10, 10, 0.5)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '580px' }}>
        
        {/* Logo oficial circular idêntica à do cabeçalho */}
        <div style={{
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '18px',
          boxShadow: '0 0 24px rgba(162, 243, 0, 0.35)',
          border: '2px solid var(--color-neon)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <img src={logoImg} alt="Petri Escola de Lutas" style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }} />
        </div>

        <h2 className="hero__subtitle" style={{ fontStyle: 'italic', transform: 'skewX(-12deg)', marginTop: '0', letterSpacing: '0.15em', fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginBottom: '12px' }}>Escola de <span style={{ color: 'var(--color-neon)' }}>Lutas</span></h2>
        <p className="hero__text" style={{ fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '24px', maxWidth: '440px' }}>
          A verdadeira força nasce da disciplina. Junte-se a nós e transforme
          corpo e mente com os melhores profissionais da região.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center', width: '100%', maxWidth: '310px', marginTop: '16px' }}>
          <a
            href="https://wa.me/5519996748346?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20agendar%20uma%20aula%20experimental."
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta"
            style={{
              background: 'var(--color-neon)',
              color: 'var(--color-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '100%',
              padding: '12px 16px',
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              boxSizing: 'border-box',
              whiteSpace: 'nowrap',
            }}
          >
            <MessageCircle size={18} /> Agendar Aula Experimental
          </a>

          <a
            href="https://wa.me/5519996748346?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20hor%C3%A1rio%20para%20aula%20com%20personal."
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta"
            style={{
              background: 'rgba(10,10,10,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '100%',
              padding: '12px 16px',
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              boxSizing: 'border-box',
              whiteSpace: 'nowrap',
            }}
          >
            <User size={18} /> Agendar Personal
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=R.+Volunt%C3%A1rios+de+Piracicaba%2C+253+-+Centro%2C+Piracicaba+-+SP%2C+13400-290"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta"
            style={{
              background: 'transparent',
              borderColor: 'var(--color-text-muted)',
              color: 'var(--color-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '100%',
              padding: '12px 16px',
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              boxSizing: 'border-box',
              whiteSpace: 'nowrap',
            }}
          >
            <MapPin size={18} /> Como Chegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
