import { MessageCircle, User, MapPin } from 'lucide-react';
import punhoImg from '../assets/punho.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content glass" style={{ padding: '40px 28px', borderRadius: '24px', background: 'rgba(10, 10, 10, 0.5)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '580px' }}>
        
        {/* Imagem do punho perfeitamente dimensionada e importada via asset */}
        <div style={{
          width: '160px',
          height: '115px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '16px',
          filter: 'drop-shadow(0 0 16px rgba(85, 255, 0, 0.4))'
        }}>
          <img src={punhoImg} alt="Petri Punho" style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain', 
            filter: 'brightness(0) invert(1)'
          }} />
        </div>

        <h2 className="hero__subtitle" style={{ fontStyle: 'italic', transform: 'skewX(-12deg)', marginTop: '0', letterSpacing: '0.15em', fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginBottom: '12px' }}>Escola de <span style={{ color: 'var(--color-neon)' }}>Lutas</span></h2>
        <p className="hero__text" style={{ fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '24px', maxWidth: '440px' }}>
          A verdadeira força nasce da disciplina. Junte-se a nós e transforme
          corpo e mente com os melhores profissionais da região.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', width: '100%', marginTop: '16px' }}>
          {/* Layout em Grid para padronizar a largura dos botões rigorosamente */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '16px', 
            width: '100%', 
            maxWidth: '650px',
            justifyContent: 'center'
          }}>
            <a href="https://wa.me/5519996748346?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20em%20sua%20academia." target="_blank" rel="noopener noreferrer" className="hero__cta" style={{ background: 'var(--color-neon)', color: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%' }}>
              <MessageCircle size={20} /> Sou aluno novo
            </a>

            <a href="https://wa.me/5519996748346?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20hor%C3%A1rio%20para%20aula%20com%20personal." target="_blank" rel="noopener noreferrer" className="hero__cta" style={{ background: 'rgba(10,10,10,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%' }}>
              <User size={20} /> Agendamento Personal
            </a>

            {/* O terceiro botão ocupa a linha inteira (centralizado) mas com tamanho máximo padronizado */}
            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center' }}>
              <a href="https://www.google.com/maps/search/?api=1&query=R.+Volunt%C3%A1rios+de+Piracicaba%2C+253+-+Centro%2C+Piracicaba+-+SP%2C+13400-290" target="_blank" rel="noopener noreferrer" className="hero__cta" style={{ background: 'transparent', borderColor: 'var(--color-text-muted)', color: 'var(--color-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%', maxWidth: '309px' }}>
                <MapPin size={20} /> Como chegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
