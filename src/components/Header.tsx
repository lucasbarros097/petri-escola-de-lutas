

import logoImg from '../assets/images/logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__logo">
          <img src={logoImg} alt="Petri Lutas Logo" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
          <span>ESCOLA DE <span className="header__logo-accent">LUTAS</span></span>
        </div>
        <nav className="header__nav">
          <a href="#modalidades" className="header__nav-link">Modalidades</a>
          <a href="#galeria" className="header__nav-link">Galeria</a>
          <a href="#horarios" className="header__nav-link">Horários</a>
          <a href="#avaliacoes" className="header__nav-link">Avaliações</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
