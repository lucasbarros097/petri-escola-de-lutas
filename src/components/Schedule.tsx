import { schedulesData } from '../data/schedules';
import { Calendar } from 'lucide-react';

const themeMap: Record<string, string> = {
  muaythai: 'schedule-sport--thai',
  jiujitsu: 'schedule-sport--jiu',
  boxe: 'schedule-sport--boxe',
};

const Schedule = () => {
  return (
    <section id="horarios" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Horários</h2>
        </div>

        <div className="glass schedule-panel">
          {schedulesData.map((sport, index) => (
            <div key={sport.id} className={`schedule-sport ${themeMap[sport.id] || ''}`}>
              <div className="schedule-sport__header">
                <div className="schedule-sport__line" />
                <h3 className="schedule-sport__name">{sport.name}</h3>
                <div className="schedule-sport__line" />
              </div>

              <div className="schedule-list">
                {sport.schedules.map((item, idx) => (
                  <div key={idx} className="schedule-row">
                    <div className="schedule-row__day">
                      <Calendar size={16} />
                      <span>{item.days}</span>
                    </div>
                    <div className="schedule-row__time">{item.hours}</div>
                  </div>
                ))}
              </div>

              {index < schedulesData.length - 1 && <div className="schedule-separator" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
