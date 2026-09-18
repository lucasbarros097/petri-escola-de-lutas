import { MessageCircle, User, MapPin } from 'lucide-react';
import logoImg from '../assets/images/logo.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content glass" style={{ padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '580px', margin: '0 auto' }}>
        
        {/* Logo oficial circular idêntica à do cabeçalho */}
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '32px',
          boxShadow: '0 0 40px rgba(162, 243, 0, 0.3)',
          border: '2px solid var(--color-neon)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          background: '#000'
        }}>
          <img src={logoImg} alt="Petri Escola de Lutas" style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }} />
        </div>
        <p className="hero__text" style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px', maxWidth: '440px', fontWeight: '500' }}>
          A verdadeira força nasce da disciplina. Junte-se a nós e transforme
          corpo e mente com os melhores profissionais da região.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', width: '100%', maxWidth: '320px' }}>
          <a
            href="https://wa.me/5519996748346?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20agendar%20uma%20aula%20experimental."
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta hero__cta--primary"
          >
            <MessageCircle size={20} /> Agendar Aula Experimental
          </a>

          <a
            href="https://wa.me/5519996748346?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20hor%C3%A1rio%20para%20aula%20com%20personal."
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta hero__cta--secondary"
          >
            <User size={20} /> Agendar Personal
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=R.+Volunt%C3%A1rios+de+Piracicaba%2C+253+-+Centro%2C+Piracicaba+-+SP%2C+13400-290"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta hero__cta--outline"
          >
            <MapPin size={20} /> Como Chegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
