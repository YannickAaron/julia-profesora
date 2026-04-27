import { Reveal } from '../Reveal';
import { MiniCalendar } from '../MiniCalendar';
import type { T } from '../../i18n';

export function Pricing({ t }: { t: T }) {
  return (
    <section className="bk" id="pricing">
      <div className="wrap">
        <div className="price-grid">
          <Reveal>
            <div className="section-kicker">{t.pricing_kicker}</div>
            <h2 className="section-title">{t.pricing_title}</h2>
            <div className="price-card" style={{ marginTop: 20 }}>
              <div className="price-amount">{t.pricing_amount}</div>
              <div className="price-unit">{t.pricing_unit}</div>
              <div className="price-bullets">
                <span>{t.pricing_b1}</span>
                <span>{t.pricing_b2}</span>
                <span>{t.pricing_b3}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="section-kicker">{t.book_kicker}</div>
            <h2 className="section-title">{t.book_title}</h2>
            <p className="section-intro">{t.book_sub}</p>
            <div className="book-cta-card">
              <MiniCalendar t={t} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
