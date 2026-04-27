import { Reveal } from '../Reveal';
import { MiniCalendar } from '../MiniCalendar';
import { WHATSAPP_URL } from '../../config';
import type { T } from '../../i18n';

export function Pricing({ t }: { t: T }) {
  return (
    <section className="bk" id="pricing">
      <div className="wrap">
        <div className="price-grid">
          <Reveal>
            <div className="section-kicker">{t.pricing_kicker}</div>
            <h2 className="section-title">{t.pricing_title}</h2>
            <div className="price-stack">
              <div className="price-card">
                <div className="price-label">{t.pricing_single_label}</div>
                <div className="price-amount">{t.pricing_amount}</div>
                <div className="price-unit">{t.pricing_unit}</div>
                <div className="price-bullets">
                  <span>{t.pricing_b1}</span>
                  <span>{t.pricing_b2}</span>
                  <span>{t.pricing_b3}</span>
                </div>
              </div>
              <div className="price-card price-card-featured">
                <div className="price-label">{t.pricing_sub_label}</div>
                <div className="price-amount">{t.pricing_sub_amount}</div>
                <div className="price-unit">{t.pricing_sub_unit}</div>
                <div className="price-bullets">
                  <span>{t.pricing_sub_b1}</span>
                  <span>{t.pricing_sub_b2}</span>
                  <span>{t.pricing_sub_b3}</span>
                </div>
              </div>
              <p className="price-whatsapp-note">
                {t.pricing_whatsapp_note}{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {t.pricing_whatsapp_cta} →
                </a>
              </p>
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
