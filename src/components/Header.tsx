

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/images/logo.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleReload = () => {
    window.location.reload();
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <div
          className="header__logo"
          onClick={handleReload}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleReload()}
          title="Recarregar página"
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          <img
            src={logoImg}
            alt="Petri Lutas Logo"
            style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span>
            ESCOLA DE <span className="header__logo-accent">LUTAS</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <a href="#modalidades" className="header__nav-link">
            Modalidades
          </a>
          <a href="#galeria" className="header__nav-link">
            Galeria
          </a>
          <a href="#horarios" className="header__nav-link">
            Horários
          </a>
          <a href="#avaliacoes" className="header__nav-link">
            Avaliações
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="header__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="header__mobile-overlay" onClick={closeMobileMenu}>
          <nav className="header__mobile-drawer glass" onClick={(e) => e.stopPropagation()}>
            <a href="#modalidades" className="header__mobile-link" onClick={closeMobileMenu}>
              Modalidades
            </a>
            <a href="#galeria" className="header__mobile-link" onClick={closeMobileMenu}>
              Galeria
            </a>
            <a href="#horarios" className="header__mobile-link" onClick={closeMobileMenu}>
              Horários
            </a>
            <a href="#avaliacoes" className="header__mobile-link" onClick={closeMobileMenu}>
              Avaliações
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
