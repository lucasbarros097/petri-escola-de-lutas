import { MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3 className="footer__title">
            ESCOLA DE <span style={{ color: 'var(--color-neon)' }}>LUTAS</span>
          </h3>
          <p className="footer__link" style={{ cursor: 'default' }}>
            A verdadeira força nasce da disciplina. Venha treinar com os
            melhores profissionais.
          </p>
        </div>

        <div>
          <h4 className="footer__heading">Contato</h4>
          <a href="https://www.instagram.com/petri_escoladelutas/" target="_blank" rel="noopener noreferrer" className="footer__link">
            <span>@petri_escoladelutas</span>
          </a>
          <a href="https://wa.me/5519996748346" target="_blank" rel="noopener noreferrer" className="footer__link">
            <Phone size={18} />
            <span>(19) 99674-8346</span>
          </a>
        </div>

        <div>
          <h4 className="footer__heading">Localização</h4>
          <a href="https://www.google.com/maps/search/?api=1&query=R.+Volunt%C3%A1rios+de+Piracicaba%2C+253+-+Centro%2C+Piracicaba+-+SP%2C+13400-290" target="_blank" rel="noopener noreferrer" className="footer__link">
            <MapPin size={18} />
            <span>
              R. Voluntários de Piracicaba, 253
              <br />
              Centro, Piracicaba - SP
              <br />
              13400-290
            </span>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Petri Escola de Lutas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
