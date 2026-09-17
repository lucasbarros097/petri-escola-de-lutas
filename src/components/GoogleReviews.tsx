
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'João Silva',
    text: 'A Petri Escola de Lutas mudou minha vida! Professores excelentes e ambiente super acolhedor.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    text: 'Melhor lugar para treinar Muay Thai em Piracicaba. Estrutura de primeira.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Carlos Santos',
    text: 'Ótima metodologia de ensino. Meu filho de 8 anos faz Jiu-Jitsu e adora as aulas.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Fernanda Lima',
    text: 'Ambiente familiar e respeitoso. Recomendo para todas as mulheres que querem aprender defesa pessoal.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Rodrigo Silva',
    text: 'Jiu Jitsu de altíssima qualidade. O respeito no tatame e o companheirismo dos alunos fazem toda a diferença.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Amanda Oliveira',
    text: 'Espaço fantástico! Os professores são muito atenciosos e o treino de boxe me ajudou muito no condicionamento físico.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Lucas Souza',
    text: 'Comecei do zero e em poucos meses já sentia uma evolução absurda. Galera nota 10!',
    rating: 5,
  },
  {
    id: 8,
    name: 'Mariana Costa',
    text: 'Estrutura top, tatame sempre limpo. A metodologia de ensino do Muay Thai é perfeita pra iniciantes e avançados.',
    rating: 5,
  },
  {
    id: 9,
    name: 'Pedro Alves',
    text: 'Fiz uma aula experimental e não saí mais. Treinos duros, mas o clima da equipe compensa todo o suor.',
    rating: 5,
  },
  {
    id: 10,
    name: 'Juliana Mendes',
    text: 'Excelente custo benefício. Professores extremamente técnicos que corrigem cada detalhe do movimento. 100% recomendado.',
    rating: 5,
  }
];

// Grupo repetível de avaliações para criar a fita contínua
const ReviewGroup = () => (
  <div style={{ display: 'flex', gap: '24px', flexShrink: 0, paddingRight: '24px' }}>
    {reviews.map((review) => (
      <div 
        key={review.id} 
        className="glass" 
        style={{ 
          flex: '0 0 auto', 
          width: '270px', 
          padding: '18px 20px', 
          borderRadius: '18px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          transition: 'transform 0.4s',
          cursor: 'default'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} 
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--color-neon)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-bg)', fontWeight: 'bold', fontSize: '1rem' }}>
            {review.name.charAt(0)}
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '0.925rem', color: 'var(--color-text)' }}>{review.name}</h4>
            <div style={{ display: 'flex', color: '#fbbf24', marginTop: '2px' }}>
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', fontSize: '0.875rem', margin: 0, fontStyle: 'italic' }}>
          "{review.text}"
        </p>
      </div>
    ))}
  </div>
);

const GoogleReviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Drag to Scroll State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    containerRef.current.scrollLeft = scrollLeft - walk;
    
    // Loop de arraste
    if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
      setScrollLeft(scrollLeft - (containerRef.current.scrollWidth / 2));
      containerRef.current.scrollLeft -= containerRef.current.scrollWidth / 2;
    } else if (containerRef.current.scrollLeft <= 0) {
      setScrollLeft(scrollLeft + (containerRef.current.scrollWidth / 2));
      containerRef.current.scrollLeft += containerRef.current.scrollWidth / 2;
    }
  };

  const scrollManual = (amount: number) => {
    if (containerRef.current) {
      if (amount < 0 && containerRef.current.scrollLeft <= 50) {
        containerRef.current.scrollLeft += containerRef.current.scrollWidth / 2;
      }
      containerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="avaliacoes" className="section reviews" style={{ background: 'transparent' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="reviews__google-badge" style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div className="reviews__google-icon" style={{ background: '#fff', padding: '12px', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              style={{ width: '28px', height: '28px' }}
            />
          </div>
        </div>

        <div className="section-title">
          <h2>Avaliações</h2>
        </div>

        <div 
          style={{ position: 'relative', width: '100%', marginTop: '24px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Botão Voltar Manual */}
          <button 
            onClick={() => scrollManual(-350)} 
            style={{ position: 'absolute', top: '50%', left: '-15px', zIndex: 10, transform: 'translateY(-50%)', background: 'var(--color-bg-card)', color: 'var(--color-neon)', border: '1px solid var(--color-border)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', opacity: isHovered ? 1 : 0 }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-neon)'; e.currentTarget.style.color = 'var(--color-bg)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'var(--color-bg-card)'; e.currentTarget.style.color = 'var(--color-neon)'; }}
          >
            <ChevronLeft size={30} />
          </button>

          {/* Fita Arrastável (Drag to Scroll) */}
          <div 
            className="marquee-container"
            ref={containerRef}
            style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', padding: '10px 0', cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={startDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={onDrag}
          >
            <ReviewGroup />
            <ReviewGroup />
            <ReviewGroup />
          </div>

          {/* Botão Avançar Manual */}
          <button 
            onClick={() => scrollManual(350)} 
            style={{ position: 'absolute', top: '50%', right: '-15px', zIndex: 10, transform: 'translateY(-50%)', background: 'var(--color-bg-card)', color: 'var(--color-neon)', border: '1px solid var(--color-border)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', opacity: isHovered ? 1 : 0 }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-neon)'; e.currentTarget.style.color = 'var(--color-bg)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'var(--color-bg-card)'; e.currentTarget.style.color = 'var(--color-neon)'; }}
          >
            <ChevronRight size={30} />
          </button>
        </div> {/* Fecha a div do carrossel interativo */}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <a href="https://www.google.com/search?q=Petri+Escola+de+Lutas+Piracicaba#lrd=1" target="_blank" rel="noopener noreferrer" className="reviews__google-badge glass" style={{ cursor: 'pointer', padding: '12px 32px', borderRadius: '30px', transition: 'all 0.3s', textDecoration: 'none', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--color-border)' }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-neon)'; e.currentTarget.style.color = 'var(--color-bg)'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.color = 'var(--color-text)'; e.currentTarget.style.transform = 'scale(1)'; }}>
            <div style={{ background: '#fff', padding: '4px', borderRadius: '50%', display: 'flex' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.05em' }}>Ver todas as avaliações no Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
