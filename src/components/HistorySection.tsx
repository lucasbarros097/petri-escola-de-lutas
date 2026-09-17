import { historyData } from '../data/history';
import logoJiu from '../assets/images/logo_jiu.jpg';
import logoThai from '../assets/images/logo_thai.jpg';
import logoBoxe from '../assets/images/logo_boxe.jpg';

const imageMap: Record<string, string> = {
  jiujitsu: logoJiu,
  muaythai: logoThai,
  boxe: logoBoxe,
};

const themeMap: Record<string, string> = {
  jiujitsu: 'modality-card--jiu',
  muaythai: 'modality-card--thai',
  boxe: 'modality-card--boxe',
};

const HistorySection = () => {
  return (
    <section id="modalidades" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Lutas</h2>
        </div>

        <div className="modalities-grid">
          {historyData.map((sport) => (
            <div
              key={sport.id}
              className={`glass modality-card ${themeMap[sport.id] || ''}`}
            >
              {imageMap[sport.id] && (
                <div className="modality-card__image" style={{ display: 'flex', justifyContent: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
                  <img src={imageMap[sport.id]} alt={sport.name} style={{ width: '85px', height: '85px', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
              )}

              <div className="modality-card__body">
                <h3 className="modality-card__title">{sport.name}</h3>
                <p className="modality-card__desc">{sport.description}</p>

                <div className="modality-card__tags">
                  {sport.benefits.map((benefit, idx) => (
                    <span key={idx} className="tag">{benefit}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
