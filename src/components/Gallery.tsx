import { useRef, useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { categories, galleryImages, getAllImages, type CategoryId } from '../data/gallery';

// ==========================================
// Grupo de imagens (repetido 3x para loop)
// ==========================================
const GalleryGroup = ({ images }: { images: string[] }) => (
  <div style={{ display: 'flex', gap: '24px', flexShrink: 0, paddingRight: '24px' }}>
    {images.map((img, idx) => (
      <div key={idx} className="gallery-card">
        <img
          src={img}
          alt={`Galeria ${idx + 1}`}
          loading="lazy"
          className="gallery-card__img"
        />
        <div className="gallery-card__gradient" />
      </div>
    ))}
  </div>
);

// ==========================================
// Placeholder para categoria sem fotos
// ==========================================
const EmptyCategory = ({ label }: { label: string }) => (
  <div
    className="glass"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      padding: '64px 24px',
      borderRadius: '24px',
      color: 'var(--color-text-muted)',
      minHeight: '350px',
    }}
  >
    <ImageIcon size={64} strokeWidth={1} style={{ opacity: 0.3 }} />
    <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600 }}>
      Fotos de <strong style={{ color: 'var(--color-text)' }}>{label}</strong> em breve!
    </p>
    <p style={{ fontSize: 'var(--font-size-sm)' }}>
      Estamos preparando esse conteúdo especial.
    </p>
  </div>
);

// ==========================================
// GALERIA PRINCIPAL
// ==========================================
const Gallery = () => {
  const [activeTab, setActiveTab] = useState<CategoryId>('todas');
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Drag to Scroll State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Imagens filtradas pela tab ativa
  const filteredImages = useMemo(() => {
    if (activeTab === 'todas') return getAllImages();
    return galleryImages[activeTab] ?? [];
  }, [activeTab]);

  // Garante que cada grupo tenha fotos suficientes para preencher a largura de tela com folga,
  // permitindo rolagem infinita contínua em ambas as direções sem interrupção
  const displayImages = useMemo(() => {
    if (filteredImages.length === 0) return [];
    let list = [...filteredImages];
    while (list.length < 6) {
      list = [...list, ...filteredImages];
    }
    return list;
  }, [filteredImages]);

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  // Reposiciona no início do Grupo 2 (centro) sempre que a categoria for alterada
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const groupWidth = container.scrollWidth / 3;
    if (groupWidth > 0) {
      container.scrollLeft = groupWidth;
    }
  }, [activeTab, displayImages]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const groupWidth = container.scrollWidth / 3;
    if (groupWidth <= 0) return;

    // Se avançou além do Grupo 2 para o Grupo 3, reposiciona imperceptivelmente de volta para o Grupo 2
    if (container.scrollLeft >= groupWidth * 2) {
      container.scrollLeft -= groupWidth;
      if (isDragging) {
        setScrollLeft((prev) => prev - groupWidth);
      }
    }
    // Se recuou além do início do Grupo 2 para o Grupo 1, avança imperceptivelmente para o Grupo 2
    else if (container.scrollLeft <= 5) {
      container.scrollLeft += groupWidth;
      if (isDragging) {
        setScrollLeft((prev) => prev + groupWidth);
      }
    }
  };

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
    handleScroll();
  };

  const startTouch = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onTouch = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    containerRef.current.scrollLeft = scrollLeft - walk;
    handleScroll();
  };

  const scrollManual = (amount: number) => {
    const container = containerRef.current;
    if (!container) return;
    const groupWidth = container.scrollWidth / 3;
    if (groupWidth <= 0) return;

    // Se for rolar para direita e estiver muito próximo do limite do Grupo 2:
    if (amount > 0 && container.scrollLeft >= groupWidth * 1.8) {
      container.scrollLeft -= groupWidth;
    }
    // Se for rolar para esquerda e estiver muito próximo do início do Grupo 2:
    else if (amount < 0 && container.scrollLeft <= groupWidth * 0.2) {
      container.scrollLeft += groupWidth;
    }

    container.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const hasImages = displayImages.length > 0;

  return (
    <section id="galeria" className="section" style={{ background: 'transparent' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-title">
          <h2>Galeria</h2>
        </div>

        {/* ---- Tabs de Filtro ---- */}
        <div className="gallery-tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`gallery-tab ${activeTab === cat.id ? 'gallery-tab--active' : ''}`}
              style={{
                '--tab-color': cat.color,
                '--tab-glow': cat.glow,
              } as React.CSSProperties}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ---- Conteúdo: Carrossel ou Placeholder ---- */}
        {hasImages ? (
          <div
            style={{ position: 'relative', width: '100%', marginTop: '24px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Botão Voltar */}
            <button
              onClick={() => scrollManual(-400)}
              className="gallery-arrow gallery-arrow--left"
              style={{ opacity: isHovered ? 1 : 0 }}
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft size={30} />
            </button>

            {/* Fita Arrastável */}
            <div
              className="marquee-container"
              ref={containerRef}
              key={activeTab}
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                padding: '10px 0',
                cursor: isDragging ? 'grabbing' : 'grab',
              }}
              onMouseDown={startDragging}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
              onMouseMove={onDrag}
              onTouchStart={startTouch}
              onTouchMove={onTouch}
              onTouchEnd={stopDragging}
              onScroll={handleScroll}
            >
              <GalleryGroup images={displayImages} />
              <GalleryGroup images={displayImages} />
              <GalleryGroup images={displayImages} />
            </div>

            {/* Botão Avançar */}
            <button
              onClick={() => scrollManual(400)}
              className="gallery-arrow gallery-arrow--right"
              style={{ opacity: isHovered ? 1 : 0 }}
              aria-label="Rolar para direita"
            >
              <ChevronRight size={30} />
            </button>
          </div>
        ) : (
          <div style={{ marginTop: '24px' }}>
            <EmptyCategory label={activeCategory.label} />
          </div>
        )}

        {/* ---- Rodapé: Instagram ---- */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <a
            href="https://www.instagram.com/petri_escoladelutas/"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews__google-badge glass"
            style={{
              cursor: 'pointer',
              padding: '8px 24px',
              borderRadius: '30px',
              transition: 'transform 0.3s',
              textDecoration: 'none',
              color: 'inherit',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div
              className="reviews__google-icon"
              style={{
                background:
                  'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                padding: '6px',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
              @petri_escoladelutas
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;